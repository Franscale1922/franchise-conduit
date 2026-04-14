# FDD Data Pipeline

Extracts key financial metrics from Franchise Disclosure Document (FDD) PDFs
and writes them directly to the [Brand Catalog Google Sheet](https://docs.google.com/spreadsheets/d/1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU/edit).

## What It Extracts

| Column | Source | FDD Item |
|--------|--------|----------|
| Investment Min/Max | Cover page (FTC required) | Cover |
| Franchise Fee | Initial fee amount | Item 5 |
| Royalty Rate | Base/highest tier | Item 5 + Item 6 |
| Cash Required Min | Liquid capital requirement | Item 7 |
| Year Founded / Franchising | Incorporation date | Item 1 |
| Item 19 Available | FPR disclosure flag | Item 19 |
| Avg Unit Volume | Average gross sales | Item 19 |
| Industry / Business Model | Pre-populated from `data/brands/` JSON | N/A |

## Setup (one-time)

### 1. Create Python virtual environment
```bash
cd data/scripts
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

### 2. Add Google Service Account credentials
Save your Google Service Account JSON key as:
```
data/scripts/google_credentials.json
```
> ⚠️ This file is gitignored — never commit it.

Make sure the service account email has **Editor** access to the Google Sheet.

### 3. Drop FDD PDFs into the folder
```
data/fdds/brand-name.pdf
```
Filenames are **fuzzy-matched** to sheet brand names — `1-800-Packouts FDD 2024.pdf`
will automatically match `1-800-Packouts` in Column A. Case and punctuation don't matter.

## Running the Pipeline

```bash
data/scripts/.venv/bin/python data/scripts/parse_fdd.py
```

Processes every `.pdf` in `data/fdds/` and writes results to the sheet.
Existing brand JSON files in `data/brands/` are pre-loaded first, then FDD data
is layered on top — so no manually-entered fields get overwritten.

## How Matching Works

| Priority | Method | Example |
|----------|--------|---------|
| 1 | Exact normalized | `molly-maid.pdf` → `Molly Maid` |
| 2 | Prefix/substring | `1800packouts.pdf` → `1-800-Packouts` |
| 3 | Fuzzy (difflib) | `packouts coverage.pdf` → `1-800-Packouts` |

Adjust `FUZZY_THRESHOLD` in `parse_fdd.py` (default: `0.72`) to tune permissiveness.

## Key Design Decisions

- **TOC-based item location**: Uses strict header detection (not keyword search)
  to avoid false matches on the Table of Contents page
- **Item 6 royalty fallback**: Royalty is often in "Other Fees" (Item 6), not Item 5
- **Full-doc royalty fallback**: For FDDs with no structured TOC, scans the entire
  document but filters out Brand Fund / Marketing / late fee percentages
- **Cover page investment**: Always extracted from page 1 (FTC mandated)
- **Batch sheet writes**: Uses `batch_update` — one API call per brand

## Files

| File | Purpose |
|------|---------|
| `parse_fdd.py` | Main pipeline script |
| `requirements.txt` | Python dependencies |
| `google_credentials.json` | Service account key (**gitignored**) |
| `.venv/` | Python virtual environment (**gitignored**) |

## Columns Not in FDDs

These fields require external research and must be entered manually or via the
Franchise Library repo:

| Column | Source |
|--------|--------|
| Cash Required Min (D) | Franchise Library documents |
| FBR Score (O) | [FranchiseBusinessReview.com](https://franchisebusinessreview.com) |
| Entrepreneur Rank (P) | [Entrepreneur Franchise 500](https://www.entrepreneur.com/franchise/franchise-500) |
| Available States (N) | FDD Item 20 state-by-state table |

---

## Sync Workflow — Sheet → Site

The primary production workflow syncs the Google Sheet master database into the Next.js site.

### Step 1 — Update the Sheet
Add or edit brand data in the [Google Sheet](https://docs.google.com/spreadsheets/d/1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU/edit).

### Step 2 — Run the Sync
```bash
cd site
node data/scripts/sync_from_sheet.js
```

Requires `site/.env.local` with:
```
GOOGLE_SHEET_ID=1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=site/credentials/fddapi-service-account.json
```

### Step 3 — Build Check
```bash
npm run build
```

### Step 4 — Commit & Push
```bash
git add data/brands/
git commit -m "brands: sync from sheet — [date]"
git push origin main
```

---

## Brand QA Checklist

Run before setting `completeness_state: 'complete'` in the sheet:

```
□ brand_slug is lowercase hyphenated, matches /franchises/[slug] route
□ investment_min / investment_max match FDD Item 7
□ franchise_fee matches FDD Item 5
□ royalty_rate matches FDD Item 6
□ unit_count_total matches FDD Item 20
□ available_states populated (or 'all' noted)
□ item_19_available is accurate (true only if FDD Item 19 is populated)
□ navigator_score assigned per scoring rubric below
□ completeness_state set: 'complete' | 'partial' | 'stub'
□ testimonials: at least 1 real franchisee quote (or empty array — no fabricated quotes)
□ market_intelligence_insight is 2–4 sentences, accurate, not generic
□ brand_logo_emoji is a reasonable placeholder if no logo asset yet
```

---

## Navigator Score Rubric

The Navigator Score (0–100) is a composite credibility signal:

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| Franchisee Satisfaction | 30% | FBR score, testimonial sentiment, validation call availability |
| Financial Transparency | 25% | Item 19 availability, AUV disclosed, investment range specificity |
| Brand Stability | 20% | Years franchising, unit count YoY growth, low failure rate |
| Support System | 15% | Training days, field support, marketing support, tech platform |
| Market Position | 10% | Industry CAGR, competitive moat, recession resistance |

Score categories: `Exceptional` (85+) · `Strong` (70–84) · `Solid` (55–69) · `Moderate` (40–54) · `Developing` (<40)

---

## Gold Standard Brand Pages (Stage 3 Baseline)

| Brand | Navigator Score | Model | URL |
|-------|----------------|-------|-----|
| Fish Window Cleaning | 85 | Semi-Absentee | `/franchises/fish-window-cleaning` |
| Express Employment Professionals | 82 | Owner-Operator | `/franchises/express-employment-professionals` |
| FirstLight Home Care | 77 | Owner-Operator | `/franchises/firstlight-home-care` |

These pages define the target output for all brands in the catalog.

---

*Last updated: April 2026 — Stage 3 complete, 224 brands synced from Google Sheet.*

