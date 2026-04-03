#!/usr/bin/env python3
"""
FDD Parser → Google Sheets Pipeline
=====================================
Reads FDD PDFs from ./data/fdds/, extracts key financial fields,
and writes results directly to the brand catalog Google Sheet.

SETUP (one-time):
  1. Place FDD PDFs in: data/fdds/
     Name them anything — fuzzy matching handles case/punctuation
     e.g. "1-800 Packouts.pdf", "1-800-PACKOUTS.pdf", "packouts fdd.pdf" all work

  2. Credentials file must exist: data/scripts/google_credentials.json
     (Google Service Account with Editor access to the sheet)

  3. Optional — set OpenAI key for AI extraction mode:
     export OPENAI_API_KEY="sk-..."

  4. Run:
     data/scripts/.venv/bin/python data/scripts/parse_fdd.py

WHAT IT EXTRACTS (Items 1, 5, 7, 19, 20):
  - Investment Min / Max          (Cover page + Item 7)
  - Cash Required Min             (Item 7)
  - Franchise Fee                 (Item 5)
  - Royalty Rate                  (Item 5 — handles tiered tables)
  - Year Founded / Franchising    (Item 1)
  - Item 19 Available flag        (Item 19)
  - Average Unit Volume           (Item 19)
  - Total Unit Count              (Item 20)
"""

import os, re, json
import pdfplumber
import gspread
from collections import Counter
from difflib import SequenceMatcher
from google.oauth2.service_account import Credentials

# ─── CONFIG ───────────────────────────────────────────────────────────────────
SHEET_ID         = "1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU"
FDD_FOLDER       = "data/fdds"
CREDENTIALS_FILE = "data/scripts/google_credentials.json"
BRANDS_DATA_PATH = "data/brands"   # Existing brand JSON files — used to pre-populate sheet
FUZZY_THRESHOLD  = 0.72            # 0–1: lower = more permissive filename matching
USE_AI           = False           # Set True to use OpenAI for harder extractions
OPENAI_MODEL     = "gpt-4o-mini"

# Column mapping — must match Google Sheet column headers exactly
COL_MAP = {
    "brand_name":             "A",
    "investment_min":         "B",
    "investment_max":         "C",
    "cash_required_min":      "D",
    "franchise_fee":          "E",
    "royalty_rate":           "F",
    "unit_count_total":       "G",
    "year_founded":           "H",
    "year_franchising_began": "I",
    "industry_primary":       "J",
    "business_model":         "K",
    "avg_unit_volume":        "L",
    "item_19_available":      "M",
    "available_states":       "N",
    "fbr_satisfaction_score": "O",
    "entrepreneur_rank":      "P",
}


# ─── FUZZY BRAND MATCHING ─────────────────────────────────────────────────────

def normalize_for_matching(s: str) -> str:
    """Strip everything except alphanumeric for comparison.
    '1-800-Packouts FDD 2024.pdf' → '1800packoutsfdd2024'
    '1-800-Packouts'              → '1800packouts'
    """
    return re.sub(r'[^a-z0-9]', '', s.lower())


def fuzzy_match_brand(pdf_slug: str, brand_row_map: dict, threshold: float = FUZZY_THRESHOLD):
    """Match a PDF filename slug to the closest brand name in the sheet.

    Returns (matched_name, row_num, score) or (None, None, best_score).

    Priority:
    1. Exact normalized match  — '1-800-packouts' == '1-800 Packouts'
    2. Prefix match            — handles extra words like 'FDD', '2024', 'UFDD'
    3. difflib sequence ratio  — fuzzy similarity >= threshold
    """
    # Strip common FDD noise words from filename before matching
    noise = re.compile(r'\b(fdd|ufdd|disclosure|document|franchise|20\d{2}|copy)\b', re.IGNORECASE)
    clean_slug = noise.sub('', pdf_slug)
    slug_norm = normalize_for_matching(clean_slug)

    best_name, best_row, best_score = None, None, 0.0

    for brand_name, row_num in brand_row_map.items():
        name_norm = normalize_for_matching(brand_name)

        # 1. Exact normalized match
        if slug_norm == name_norm:
            return brand_name, row_num, 1.0

        # 2. Prefix/substring match (handles truncated filenames or extra tokens)
        if slug_norm.startswith(name_norm) or name_norm.startswith(slug_norm):
            score = 0.95
        elif name_norm in slug_norm:
            score = 0.90
        else:
            # 3. Fuzzy ratio
            score = SequenceMatcher(None, slug_norm, name_norm).ratio()

        if score > best_score:
            best_score = score
            best_name = brand_name
            best_row = row_num

    if best_score >= threshold:
        return best_name, best_row, best_score
    return None, None, best_score


# ─── JSON PRE-POPULATION ──────────────────────────────────────────────────────

def load_existing_brand_json(brand_name: str) -> dict:
    """Load pre-existing brand JSON from data/brands/ if one exists for this brand.
    This pre-populates the sheet before FDD extraction, so human-written fields
    (industry, business model, tags, etc.) are not lost.
    FDD-extracted fields will overwrite only the fields they successfully parse.
    """
    if not os.path.exists(BRANDS_DATA_PATH):
        return {}

    brand_norm = normalize_for_matching(brand_name)

    for fname in os.listdir(BRANDS_DATA_PATH):
        if not fname.endswith('.json') or fname.startswith('BRAND_TEMPLATE'):
            continue
        fpath = os.path.join(BRANDS_DATA_PATH, fname)
        try:
            with open(fpath) as f:
                data = json.load(f)
            stored_brand = normalize_for_matching(data.get('brand_name', ''))
            file_slug = normalize_for_matching(fname.replace('.json', ''))
            if stored_brand == brand_norm or file_slug == brand_norm:
                print(f"     📂 Pre-loading from {fname}")
                return data
        except (json.JSONDecodeError, KeyError, OSError):
            continue
    return {}


# ─── PDF TEXT EXTRACTION ──────────────────────────────────────────────────────

def extract_text_from_pdf(pdf_path: str) -> dict:
    """Extract full text per page from an FDD PDF. Returns {page_num: text}."""
    pages = {}
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            pages[i + 1] = page.extract_text() or ""
    return pages


def get_toc_map(pages: dict) -> dict:
    """Parse the TOC for Item page number estimates (scan start hints).
    FDDs list 'ITEM N .......... page' in their table of contents."""
    toc_text = " ".join(list(pages.values())[:10])
    matches = re.findall(r'ITEM\s+(\d+)[^\.]{0,80}\.{2,}\s*(\d+)', toc_text, re.IGNORECASE)
    return {int(n): int(p) for n, p in matches}


def find_item_pages(pages: dict, item_num: int, toc_map: dict = None, window: int = 8) -> str:
    """Locate an FDD Item's actual content pages.

    Uses strict start-of-page detection: ITEM N must appear as one of the first
    non-blank lines on the page, and NOT be a TOC entry (which has trailing dots
    or hyphenated page refs like '5-1'). This prevents false matches on TOC pages
    where every Item number appears in a list.

    Falls back to looser matching if strict detection finds nothing.
    """
    all_pages = sorted(pages.keys())
    next_pat  = re.compile(rf'(?:^|\n)ITEM\s+{item_num + 1}[:\s\.]', re.IGNORECASE)

    # ── Pass 1: strict (non-TOC header) ──────────────────────────────────────
    toc_hint  = toc_map.get(item_num, 1) if toc_map else 1
    scan_from = max(1, toc_hint - 3)
    scan_to   = min(toc_hint + 35, max(all_pages))

    start_page = None
    for p in all_pages:
        if p < scan_from:
            continue
        if p > scan_to:
            break
        lines = [l.strip() for l in pages[p].split('\n') if l.strip()][:7]
        for line in lines:
            # Must start with ITEM N, and must NOT be a TOC line
            if (re.match(rf'^ITEM\s+{item_num}\b', line, re.IGNORECASE) and
                    not re.search(r'\.{3,}|\d+-\d+', line)):
                start_page = p
                break
        if start_page:
            break

    # ── Pass 2: full-document strict scan (catches offset FDDs) ──────────────
    if start_page is None:
        for p in all_pages:
            lines = [l.strip() for l in pages[p].split('\n') if l.strip()][:7]
            for line in lines:
                if (re.match(rf'^ITEM\s+{item_num}\b', line, re.IGNORECASE) and
                        not re.search(r'\.{3,}|\d+-\d+', line)):
                    start_page = p
                    break
            if start_page:
                break

    # ── Pass 3: loose fallback (original behaviour) ───────────────────────────
    if start_page is None:
        item_pat = re.compile(rf'(?:^|\n)ITEM\s+{item_num}[:\s\.]', re.IGNORECASE)
        for p in all_pages:
            if item_pat.search(pages[p]):
                start_page = p
                break

    if start_page is None:
        return ""

    collected = []
    for p in range(start_page, min(start_page + window + 1, max(all_pages) + 1)):
        text = pages.get(p, "")
        collected.append(text)
        if len(collected) > 2 and next_pat.search(text):
            break

    return "\n".join(collected)




# ─── CONTENT EXTRACTORS ───────────────────────────────────────────────────────

def extract_from_cover(pages: dict) -> dict:
    """Cover page always states total investment range (FTC requirement).
    Also captures the 'includes $X paid to us' clause as a franchise fee proxy."""
    result = {}
    cover = pages.get(1, "") + pages.get(2, "")

    m = re.search(
        r'total investment.*?ranges?\s+from\s+\$([\d,]+)\s+to\s+\$([\d,]+)',
        cover, re.IGNORECASE | re.DOTALL
    )
    if m:
        result['investment_min'] = int(m.group(1).replace(',', ''))
        result['investment_max'] = int(m.group(2).replace(',', ''))

    # Franchisor-paid portion — proxy for franchise fee floor
    m2 = re.search(
        r'[Ii]ncludes?\s+\$([\d,]+)\s+to\s+\$([\d,]+)\s+that must be paid to us',
        cover
    )
    if m2:
        result['_franchisor_fee_min'] = int(m2.group(1).replace(',', ''))
        result['_franchisor_fee_max'] = int(m2.group(2).replace(',', ''))

    return result


def extract_item1(text: str) -> dict:
    """Item 1: Year founded and year franchising began."""
    result = {}
    m = re.search(r'(?:incorporated|formed|organized|founded)[^\d]*((?:19|20)\d{2})', text, re.IGNORECASE)
    if m:
        result['year_founded'] = int(m.group(1))
    m = re.search(r'(?:began|started|first)\s+(?:offering\s+)?franchis[^\d]*((?:19|20)\d{2})', text, re.IGNORECASE)
    if m:
        result['year_franchising_began'] = int(m.group(1))
    return result


def extract_royalty(text: str) -> float | None:
    """Extract the base royalty rate from FDD text.

    Handles all observed formats:
    - Table row:  'Royalty Fee  7% of Gross Sales ...'              → 7.0
    - Tiered:     '10% of Gross Sales ... 9% ... 8% ...'           → 10.0
    - Spelled out: 'Seven percent (7.0%) of your monthly Gross'    → 7.0
    - Greater of: 'The greater of (i) Seven percent (7.0%) ...'    → 7.0

    Actively avoids: Brand Fund, Marketing Fund, Advertising fees (always 2–3%)
    and late fees, transfer fees, etc. (always >15%).
    """
    # Terms that indicate we're NOT on a royalty row
    NON_ROYALTY = re.compile(
        r'[Bb]rand\s+[Ff]und|[Mm]arketing\s+[Ff]ee|[Aa]dvertis|[Tt]ransfer|[Ll]ate\s+[Ff]ee|'
        r'[Cc]o-op|[Cc]onvention|[Tt]raining\s+[Ff]ee|[Aa]udit|[Nn]SF|[Rr]enew',
        re.IGNORECASE
    )

    # Priority 1: dedicated 'Royalty Fee' row — grab first % on that line
    for line in text.split('\n'):
        stripped = line.strip()
        if re.search(r'^[Rr]oyalty\s+[Ff]ee\b', stripped):
            if NON_ROYALTY.search(stripped):
                continue
            # Numeric percent
            m = re.search(r'(\d+(?:\.\d+)?)\s*%', stripped)
            if m:
                val = float(m.group(1))
                if 4 <= val <= 30:
                    return val
            # Parenthetical spelled-out: 'Seven percent (7.0%)'
            m = re.search(r'\((\d+(?:\.\d+)?)\s*%\)', stripped)
            if m:
                val = float(m.group(1))
                if 4 <= val <= 30:
                    return val

    # Priority 2: 'greater of ... (X%)' — minimum royalty structures
    # e.g. 'The greater of (i) Seven percent (7.0%) of your monthly Gross'
    m = re.search(
        r'[Gg]reater\s+of[^\n]{0,120}\((\d+(?:\.\d+)?)\s*%\)',
        text
    )
    if m:
        val = float(m.group(1))
        if 4 <= val <= 30:
            return val

    # Priority 3: spelled-out royalty near 'Royalty Fee' label (multi-line tables)
    m = re.search(
        r'[Rr]oyalty\s+[Ff]ee[^\n]{0,200}\((\d+(?:\.\d+)?)\s*%\)',
        text, re.DOTALL
    )
    if m:
        val = float(m.group(1))
        if 4 <= val <= 30:
            return val

    # Priority 4: first '% of Gross Sales/Revenue' > 4% (skips 2-3% marketing fees)
    matches = re.findall(
        r'(\d+(?:\.\d+)?)\s*%\s*of\s*(?:Gross\s+)?(?:Sales|Revenue)',
        text, re.IGNORECASE
    )
    candidates = [float(x) for x in matches if 4 <= float(x) <= 30]
    if candidates:
        return candidates[0]

    # Priority 5: plain 'royalty of X%' — only if isolated from non-royalty terms
    for m in re.finditer(r'[Rr]oyalt(?:y|ies)[^\d%\n]{0,60}(\d+(?:\.\d+)?)\s*%', text):
        context = text[max(0, m.start()-50):m.end()+50]
        if not NON_ROYALTY.search(context):
            val = float(m.group(1))
            if 4 <= val <= 30:
                return val

    return None


def extract_item5(text: str, item6_text: str = "", cover_data: dict = None) -> dict:
    """Item 5 + Item 6: Franchise fee and royalty rate.
    Royalty is often in Item 6 (Other Fees) rather than Item 5."""
    result = {}

    # Franchise fee — Item 5 always has this
    for pat in [
        r'[Ii]nitial\s+[Ff]ranchise\s+[Ff]ee[^$\n]{0,120}\$([\d,]+)',
        r'(?:fee|fees)\s+of[^$\n]{0,30}\$([\d,]+)',
        r'pay\s+(?:a\s+)?(?:lump\s+sum\s+)?(?:initial\s+)?franchise\s+fee\s+of[^$\n]{0,30}\$([\d,]+)',
    ]:
        m = re.search(pat, text, re.IGNORECASE | re.DOTALL)
        if m:
            val = int(m.group(1).replace(',', ''))
            if 5000 <= val <= 200000:
                result['franchise_fee'] = val
                break

    if 'franchise_fee' not in result and cover_data and '_franchisor_fee_min' in cover_data:
        result['franchise_fee'] = cover_data['_franchisor_fee_min']

    # Royalty — search Item 6 first (it's the dedicated fees table), then Item 5
    royalty = extract_royalty(item6_text) or extract_royalty(text)
    if royalty is not None:
        result['royalty_rate'] = royalty

    return result




def extract_item7(text: str) -> dict:
    """Item 7: Total investment range + cash required."""
    result = {}

    for pat in [
        r'[Tt][Oo][Tt][Aa][Ll][^$\n]{0,60}\$([\d,]+)[^$\n]{0,40}\$([\d,]+)',
        r'[Tt]otal\s+[Ee]stimated[^$\n]{0,60}\$([\d,]+)[^$\n]{0,40}\$([\d,]+)',
    ]:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            a, b = int(m.group(1).replace(',', '')), int(m.group(2).replace(',', ''))
            result.setdefault('investment_min', min(a, b))
            result.setdefault('investment_max', max(a, b))
            break

    for pat in [
        r'[Ll]iquid\s+(?:[Cc]apital|[Aa]ssets)[^$\n]{0,60}\$([\d,]+)',
        r'[Mm]inimum\s+[Cc]ash[^$\n]{0,60}\$([\d,]+)',
        r'[Cc]ash\s+[Rr]equired[^$\n]{0,60}\$([\d,]+)',
    ]:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            result['cash_required_min'] = int(m.group(1).replace(',', ''))
            break

    return result


def extract_item19(text: str) -> dict:
    """Item 19: Financial performance — availability flag and AUV."""
    result = {}

    if not text.strip():
        result['item_19_available'] = "FALSE"
        return result

    for sig in [
        r'do not make any financial performance representations',
        r'do not provide.*?financial performance',
        r'this item.*?is left blank',
        r'no financial performance representations',
    ]:
        if re.search(sig, text, re.IGNORECASE):
            result['item_19_available'] = "FALSE"
            return result

    result['item_19_available'] = "TRUE"

    for pat in [
        r'[Aa]verage\s+(?:[Gg]ross\s+)?(?:[Ss]ales|[Rr]evenue)[^$\n]{0,60}\$([\d,]+)',
        r'[Mm]edian\s+(?:[Gg]ross\s+)?(?:[Ss]ales|[Rr]evenue)[^$\n]{0,60}\$([\d,]+)',
        r'[Aa]verage\s+[Aa]nnual\s+(?:[Gg]ross\s+)?[Rr]evenue[^$\n]{0,60}\$([\d,]+)',
    ]:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            result['avg_unit_volume'] = int(m.group(1).replace(',', ''))
            break

    return result


def extract_item20(text: str) -> dict:
    """Item 20: Total franchised unit count.
    Handles sentence format ('As of X, there were N franchised outlets')
    and table format (3-year columns — takes most recent/last year).
    """
    result = {}

    # Sentence-style summary
    m = re.search(
        r'[Aa]s of[^,\n]{0,40},?\s+there\s+were\s+([\d,]+)\s+(?:franchised|open)',
        text, re.IGNORECASE
    )
    if m:
        val = int(m.group(1).replace(',', ''))
        if 1 < val < 50000:
            result['unit_count_total'] = val
            return result

    # Table row: 3 years of data — grab the last/most recent column
    m = re.search(
        r'(?:[Ff]ranchised|[Ff]ranchisee)[^\n]{0,60}\n[^\n]{0,30}(\d+)\s+(\d+)\s+(\d+)',
        text
    )
    if m:
        val = int(m.group(3))
        if 1 < val < 50000:
            result['unit_count_total'] = val
            return result

    # Total outlet count rows
    for pat in [
        r'[Tt]otal\s+[Oo]utlets[^\d\n]{0,20}(\d+)\s+(\d+)\s+(\d+)',
        r'[Tt]otal[^\d\n]{0,30}([\d,]+)\s+(?:franchised|outlets)',
    ]:
        m = re.search(pat, text, re.IGNORECASE)
        if m:
            try:
                val = int(m.group(3))
            except IndexError:
                val = int(m.group(1).replace(',', ''))
            if 1 < val < 50000:
                result['unit_count_total'] = val
                return result

    return result


# ─── AI EXTRACTION (optional) ─────────────────────────────────────────────────

def extract_with_ai(item_text: str, item_num: int, brand_name: str) -> dict:
    """Use OpenAI to extract structured data from a specific FDD item.
    More accurate for non-standard formats, scanned PDFs, or complex tables."""
    from openai import OpenAI
    client = OpenAI()

    field_descriptions = {
        1:  "year_founded (integer), year_franchising_began (integer)",
        5:  "franchise_fee (integer, dollars), royalty_rate (float, percent — use the base/lowest tier)",
        7:  "investment_min (integer, dollars), investment_max (integer, dollars), cash_required_min (integer, dollars)",
        19: "item_19_available (true/false string), avg_unit_volume (integer, dollars or null)",
        20: "unit_count_total (integer — most recent year only)",
    }

    prompt = f"""Extract these exact fields from FDD Item {item_num} for {brand_name}.
Fields: {field_descriptions.get(item_num, 'all relevant financial data')}

Return ONLY valid JSON with those exact field names. Use null for fields not found.
No markdown, no explanation, just the JSON object.

Text:
{item_text[:6000]}"""

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
    )
    try:
        return json.loads(response.choices[0].message.content.strip())
    except json.JSONDecodeError:
        return {}


# ─── GOOGLE SHEETS ────────────────────────────────────────────────────────────

def get_sheet():
    """Authenticate and return the first worksheet."""
    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ]
    creds = Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=scopes)
    gc = gspread.authorize(creds)
    return gc.open_by_key(SHEET_ID).sheet1


def get_brand_row_map(ws) -> dict:
    """Return {brand_name_lower: row_number} for all brands in column A."""
    return {name.lower().strip(): i + 1 for i, name in enumerate(ws.col_values(1))}


def write_brand_data(ws, row: int, data: dict):
    """Batch-write extracted fields to the sheet (1 API call per brand)."""
    updates = []
    for field, col_letter in COL_MAP.items():
        if field in data and data[field] not in (None, "", [], {}):
            updates.append({'range': f"{col_letter}{row}", 'values': [[data[field]]]})
    if updates:
        ws.batch_update(updates)


# ─── CORE PIPELINE ────────────────────────────────────────────────────────────

def process_fdd(pdf_path: str, brand_name: str) -> dict:
    """Parse a single FDD PDF and return a dict of extracted fields."""
    print(f"  📄 Parsing {os.path.basename(pdf_path)}...")
    pages = extract_text_from_pdf(pdf_path)
    print(f"     {len(pages)} pages")
    extracted = {"brand_name": brand_name}

    toc_map = get_toc_map(pages)
    print(f"     TOC: Items {sorted(toc_map.keys())}")

    # Cover page — most reliable source for investment range
    cover_data = extract_from_cover(pages)
    extracted.update({k: v for k, v in cover_data.items() if not k.startswith('_')})

    # Wider windows for items with large content sections
    item_windows = {1: 10, 19: 10, 20: 14}

    items_to_extract = {
        1: extract_item1,
        5: extract_item5,
        7: extract_item7,
        19: extract_item19,
        20: extract_item20,
    }

    # Pre-fetch Item 6 (Other Fees) — royalty is often in this table, not Item 5
    item6_text = find_item_pages(pages, 6, toc_map, window=8)

    for item_num, extractor_fn in items_to_extract.items():
        window = item_windows.get(item_num, 8)
        item_text = find_item_pages(pages, item_num, toc_map, window=window)

        if USE_AI and item_text.strip():
            data = extract_with_ai(item_text, item_num, brand_name)
        elif item_num == 5:
            data = extractor_fn(item_text, item6_text, cover_data)
        else:
            data = extractor_fn(item_text)

        extracted.update(data)

    # Royalty fallback: if item scanning failed (no TOC / non-standard FDD),
    # search the full document for a royalty rate
    if 'royalty_rate' not in extracted:
        full_text = "\n".join(pages.values())
        royalty = extract_royalty(full_text)
        if royalty is not None:
            extracted['royalty_rate'] = royalty
            print(f"     ↳ royalty_rate {royalty}% (full-doc fallback)")

    # Remove internal proxy fields
    return {k: v for k, v in extracted.items() if not k.startswith('_')}


# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    if not os.path.exists(CREDENTIALS_FILE):
        print(f"❌  Credentials not found: {CREDENTIALS_FILE}")
        return

    os.makedirs(FDD_FOLDER, exist_ok=True)
    pdf_files = [f for f in os.listdir(FDD_FOLDER) if f.lower().endswith('.pdf')]

    if not pdf_files:
        print(f"⚠️  No PDFs in {FDD_FOLDER}/ — drop FDD PDFs there and rerun")
        return

    print(f"\n🔗 Connecting to Google Sheet...")
    ws = get_sheet()
    brand_row_map = get_brand_row_map(ws)
    print(f"   ✓ {len(brand_row_map)} brands in sheet")
    print(f"   ✓ {len(pdf_files)} PDF(s) to process\n")

    processed, skipped = 0, 0

    for pdf_file in sorted(pdf_files):
        pdf_path = os.path.join(FDD_FOLDER, pdf_file)
        brand_slug = os.path.splitext(pdf_file)[0]

        # Fuzzy match filename to sheet brand name
        matched_name, matched_row, score = fuzzy_match_brand(brand_slug, brand_row_map)

        if not matched_row:
            print(f"  ⚠️  No match for '{pdf_file}' (best score: {score:.0%})")
            print(f"     → Lower FUZZY_THRESHOLD ({FUZZY_THRESHOLD}) or rename the file")
            skipped += 1
            continue

        label = "exact" if score == 1.0 else f"fuzzy {score:.0%}"
        print(f"  🔍 '{pdf_file}' → '{matched_name}' ({label}, row {matched_row})")

        # 1. Pre-populate from existing brand JSON (industry, tags, model, etc.)
        prefill = load_existing_brand_json(matched_name)
        prefill_fields = {
            k: v for k, v in prefill.items()
            if k in COL_MAP and v not in (None, "", [], {})
        }
        if prefill_fields:
            print(f"     ↳ Pre-filling {len(prefill_fields)} fields from brand JSON")
            write_brand_data(ws, matched_row, prefill_fields)

        # 2. Parse FDD and write extracted fields (overwrites prefill for those fields)
        data = process_fdd(pdf_path, matched_name)
        write_brand_data(ws, matched_row, data)

        # Print summary
        fdd_fields = {k: v for k, v in data.items() if k != 'brand_name'}
        hits = [f for f in fdd_fields if fdd_fields[f] not in (None, "")]
        misses = [f for f in fdd_fields if fdd_fields[f] in (None, "")]
        print(f"  ✅ Done — {len(hits)} fields extracted, {len(misses)} not found")
        for field, val in fdd_fields.items():
            status = "✓" if val not in (None, "") else "·"
            print(f"     {status} {field}: {val}")
        print()
        processed += 1

    print(f"✅ Complete: {processed} processed, {skipped} skipped")


if __name__ == "__main__":
    main()
