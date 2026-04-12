# Stage 3 — FDD Pipeline: Extraction & Brand Page System

**Stage:** 3 of 10
**Phase:** Core Infrastructure
**Depends on:** Stage 2 (scaffold aligned, `lib/types.ts` stable, build passing)
**Feeds into:** Stages 4–6 — brand pages must exist before homepage can link to them meaningfully

---

## 1. Goal

Build the system that converts raw franchise data (FDD PDF + website + collateral) into a structured brand JSON file and a complete, published brand detail page — ready to scale to 350 brands.

This stage also establishes the **"complete brand page" quality standard** by building 2–3 fully populated brand pages by hand. These become the gold standard every future brand page is compared against.

**Definition of "good":** An operator (Kelsey or a team member) can hand this system an FDD, a website URL, and any available collateral, and within a defined workflow, a brand page is live that meets the quality standard.

---

## 2. The Two Parts of This Stage

### Part A — The Pipeline System
How raw inputs become a brand JSON file. This is a workflow + tooling problem.

### Part B — The Brand Page Experience
How the brand JSON renders into a page that serves the FC candidate at Layer 1 and Layer 2.

---

## 3. Part A — The Pipeline System

### 3a. Input Types

| Input | Required | Notes |
|-------|----------|-------|
| FDD PDF | Required | Primary source for financial data, Item 19, fees, territory |
| Brand website URL | Required | Brand story, imagery, positioning |
| Item 19 (if separate) | Preferred | Financial performance representations |
| Brand brochure PDF | Optional | Supplemental copy, photos |
| Additional collateral | Optional | Press releases, awards, franchisee testimonials |

### 3b. Extraction Workflow

**Step 1 — Ingest FDD**
Run the existing `data/scripts/parse_fdd.py` against the FDD PDF.
The script extracts: investment ranges, fees, unit counts, training details, territory type.

Review the script's output against the `lib/types.ts` Franchise interface.
Flag fields that are not being extracted and document them in the brand JSON as `null` with a `// TODO: manual` comment.

**Step 2 — Supplement with Website + Collateral**
Manually (or with LLM assistance) review the brand website and collateral for:
- Brand story, tagline, description
- Owner archetype messaging (who they're looking for)
- Awards, FBR rankings, IFA membership status
- Testimonials from franchisees
- Brand photography / logo files

**Step 3 — LLM-Assisted Market Intelligence Brief**
Every brand page includes a `market_intelligence_insight` — a 2–4 sentence industry brief that answers: *"Why does this business exist in 2025? What market trend supports it?"*

Use an LLM prompt to draft this from:
- Brand website industry positioning
- Any CAGR / market size data in FDD Item 1
- Comparable industry research

**Step 4 — QA Review**
Before a brand JSON is committed, verify:
- [ ] All required fields populated (or marked `null` with completeness_state set to `'partial'`)
- [ ] Financial figures match FDD Item 5 (fees) and Item 7 (investment)
- [ ] Unit count matches FDD Item 20
- [ ] Navigator Score assigned (see scoring rubric in Section 5)
- [ ] Brand slug matches exactly what will appear in the URL (lowercase, hyphenated)
- [ ] `available_states` populated from FDD Item 12

### 3c. Brand JSON QA Checklist (to run before every brand publish)

```
□ brand_slug is lowercase hyphenated, matches /franchises/[slug] route
□ investment_min / investment_max match FDD Item 7
□ franchise_fee matches FDD Item 5
□ royalty_rate matches FDD Item 6
□ unit_count_total matches FDD Item 20
□ available_states populated (or 'all' noted)
□ item_19_available is accurate (true only if FDD Item 19 is populated)
□ navigator_score assigned per scoring rubric
□ completeness_state set: 'complete' | 'partial' | 'stub'
□ testimonials: at least 1 real franchisee quote (or array is empty — no fabricated quotes)
□ market_intelligence_insight is 2–4 sentences, accurate, not generic
□ brand_logo_emoji is a reasonable placeholder if no logo asset yet
```

---

## 4. Part B — The Brand Page Experience

### 4a. Page Structure (Two-Layer)

```
LAYER 1 — BRAND HERO (billboard)
  Logo / Brand name / Industry badge
  Tagline (1 line)
  Investment tier + Business model (2 data points)
  2 CTAs: "Talk to an advisor about this brand" | "Explore the details ↓"

LAYER 2 — TABBED DETAIL (seekers scroll or click)
  Tab 1: Overview — description, year founded, unit count, brand story
  Tab 2: Investment — full financial breakdown, Item 19 summary, SBA eligibility
  Tab 3: Operations — training, support, typical hours, target customer
  Tab 4: Market Intelligence — industry brief, CAGR, competitive positioning
  Tab 5: Franchisee Voices — testimonials, validation contact availability
```

### 4b. Lead Capture on Brand Pages

Every brand detail page has a persistent sidebar or bottom CTA:

**"Interested in [Brand Name]?"**
→ Primary CTA: `Talk to an advisor` (opens contact flow)
→ Secondary CTA: `Request FDD` (gated — requires name + email)

This is the Layer 1 → conversion moment. The advisor introduction is the goal, not the brand details.

### 4c. Completeness Handling

| State | Display Behavior |
|-------|-----------------|
| `complete` | All tabs visible, all data fields shown |
| `partial` | Tab shows: "Full [Investment/etc.] details available — request from an advisor" |
| `stub` | Page is not publicly visible (excluded from sitemap) |

---

## 5. Navigator Score Rubric

The Navigator Score (0–100) is a composite signal, not a ranking buyers use to pick franchises. It's a credibility signal that communicates: *"We have done research on this brand."*

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| Franchisee Satisfaction | 30% | FBR score, testimonial sentiment, validation calls |
| Financial Transparency | 25% | Item 19 availability, AUV disclosed, investment range specificity |
| Brand Stability | 20% | Years franchising, unit count growth YoY, failure/closure rate |
| Support System | 15% | Training days, field support, marketing support, tech platform |
| Market Position | 10% | Industry CAGR, competitive moat, recession resistance |

Score categories:
- 85–100: `Exceptional`
- 70–84: `Strong`
- 55–69: `Solid`
- 40–54: `Moderate`
- <40: `Developing`

---

## 6. The 2–3 Gold Standard Brand Pages

This stage must produce 2–3 fully built brand pages that serve as the quality baseline.

**Recommended starting brands (already in repo):**
1. One semi-absentee model (e.g., Mosquito Squad, Junkluggers)
2. One owner-operator model (e.g., Kumon, Restoration 1)
3. One home-services model (for SEO alignment with highest-traffic category)

For each gold standard brand:
- [ ] Run FDD pipeline (parse_fdd.py + manual supplement)
- [ ] Complete all QA checklist items
- [ ] Brand detail page renders correctly on mobile and desktop
- [ ] All tabs function
- [ ] Lead capture CTA is functional (even if form destination is placeholder for now)
- [ ] Navigator Score assigned and methodology link works

---

## 7. Step-by-Step Build

### Step 3.1 — Audit and Update parse_fdd.py
Review the existing `data/scripts/parse_fdd.py` against the current `lib/types.ts` Franchise interface.
Document which fields it extracts and which require manual entry.
Add LLM-compatible output format (structured JSON).

```
git commit -m "stage-3: step 3.1 — parse_fdd.py audited, extraction map documented"
```

### Step 3.2 — Build Gold Standard Brand 1
Run full pipeline on Brand 1. Complete the QA checklist. Publish JSON. Verify brand detail page.

```
git commit -m "stage-3: step 3.2 — [brand-slug] gold standard page complete"
```

### Step 3.3 — Build Gold Standard Brand 2
Repeat for Brand 2.

```
git commit -m "stage-3: step 3.3 — [brand-slug] gold standard page complete"
```

### Step 3.4 — (Optional) Build Gold Standard Brand 3
Repeat for Brand 3.

```
git commit -m "stage-3: step 3.4 — [brand-slug] gold standard page complete"
```

### Step 3.5 — Document the Pipeline
Write `data/scripts/README.md` with the complete FDD-to-publish workflow, QA checklist, and timing estimates.

```
git commit -m "stage-3: complete — FDD pipeline documented, 2-3 gold standard brand pages live"
```

---

## 8. Quality Standards

### Brand Page Quality
- [ ] Passes billboard test on hero section (5-second read of headline + 2 data points)
- [ ] Lead capture CTA visible above the fold on desktop AND within 2 scrolls on mobile
- [ ] All tabs render without errors
- [ ] No financial data displayed that contradicts the FDD
- [ ] Navigator Score has working hover link to /methodology
- [ ] Page renders correctly at 375px, 768px, and 1280px

### Pipeline Quality
- [ ] QA checklist completed for every published brand
- [ ] `completeness_state` accurately reflects what data is present
- [ ] No fabricated testimonials — empty array is correct, invented quotes are not

### Code Quality
- [ ] `npm run build` passes with 0 errors after all brand JSONs added
- [ ] Brand slugs follow lowercase-hyphenated convention
- [ ] `app/sitemap.ts` auto-includes new brand slugs

---

## 9. Definition of Done

- [ ] `data/scripts/parse_fdd.py` audited and updated
- [ ] 2 brand pages built to gold standard (3 recommended)
- [ ] All brand QA checklists completed and documented
- [ ] `data/scripts/README.md` written with full pipeline workflow
- [ ] `npm run build` passes with 0 errors
- [ ] All gold standard brand pages render at all three breakpoints
- [ ] PROGRESS.md updated — Stage 3 marked `Complete`

---

## 10. Forward Dependencies

### Stage 4 (Homepage) needs:
- At least 2 brand pages live (homepage links to real brands, not placeholders)
- FranchiseCard component working correctly with real brand data

### Stage 6 (Browse & Search) needs:
- Brand JSON files populated for all brands in the catalog
- `completeness_state` system working (stubs excluded from browse)

---

## 11. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 3 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 3 of 10 — FDD Pipeline & Brand Page System

FIRST: Read PROGRESS.md.
       Confirm Stage 2 is marked Complete.
       If Stage 2 is not complete — STOP.

READ: PLATFORM_BRIEF.md (full)
READ: docs/stages/stage-03-fdd-pipeline.md (full)
READ: lib/types.ts — understand the Franchise interface
READ: data/scripts/parse_fdd.py — understand existing extraction capability
CHECK: /Users/kelseystuart/Projects/Franchise Conduit/FDDs/ for available FDD files

EXECUTE each step in Section 7 in order.
git commit after every step.

The gold standard brand pages are the primary deliverable of this stage.
Do not mark stage complete unless every item in Section 9 is verified.

When done: update PROGRESS.md → Stage 3 Complete.
```
