# Stage 9 — Pre-Launch QA & SEO Audit

**Stage:** 9 of 10
**Phase:** Launch Readiness
**Depends on:** Stages 2–8 all complete
**Feeds into:** Stage 10 (DNS cutover — nothing migrates until this stage passes)

---

## 1. Goal

Run a complete quality and SEO audit of the platform before DNS cutover. Identify and fix every issue that could damage the candidate experience, destroy domain authority, or create technical debt post-launch.

This stage produces no new features. It fixes things that are broken and verifies things that must work before the live site is replaced.

**Definition of "good":** Every item in the Definition of Done is checked and passing. Zero known broken links. Zero 404s on any URL that has a backlink. Zero console errors. Build is clean. A Screaming Frog crawl returns no errors.

---

## 2. The Four Audit Areas

### Audit A — Redirect Integrity (most critical)
Verify every redirect in `next.config.js` resolves correctly.
Use Screaming Frog or `curl` to test each redirect destination.

| Check | Tool |
|-------|------|
| All 55+ WordPress category redirects | Screaming Frog or curl loop |
| All top WordPress blog post redirects | Manual + Screaming Frog |
| Redirect chain depth ≤ 2 hops | Screaming Frog |
| No redirect → 404 | Screaming Frog |

If any redirect points to a Next.js route that doesn't exist — build that route before proceeding.

### Audit B — SEO Integrity

Per-page checklist (run on all pages):
- [ ] `<title>` tag is present, unique, and descriptive (includes target keyword)
- [ ] Meta description is present, unique, and under 155 characters
- [ ] One `<h1>` per page — never zero, never two
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)
- [ ] Canonical tag set on all pages
- [ ] All images have `alt` text
- [ ] JSON-LD structured data verified:
  - `Organization` on homepage
  - `Article` on all /resources articles
  - `ItemList` or `BreadcrumbList` on hub pages
- [ ] `app/sitemap.ts` includes all public routes (verify count)
- [ ] `app/robots.ts` blocks dynamic filter params (existing, verify not broken)

### Audit C — Candidate Experience

- [ ] Every form submission delivers advisor notification within 60 seconds (Stage 7 validation)
- [ ] Quiz matched recommendations are relevant (not random or empty)
- [ ] Every CTA in the site resolves to the correct destination (no broken links)
- [ ] All email confirmation messages are correct and warm in tone
- [ ] Mobile experience verified at 375px for every page built in Stages 4–8
- [ ] No horizontal scroll on any page at 375px
- [ ] Navigation links all resolve correctly

### Audit D — Technical

- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes with 0 type errors
- [ ] Zero console errors in Chrome DevTools on every page
- [ ] Lighthouse performance score ≥ 80 on homepage (mobile)
- [ ] Lighthouse accessibility score ≥ 90 on homepage
- [ ] No images over 500KB uncompressed
- [ ] Web fonts loaded via `next/font/google` (not external `<link>` tags)

---

## 3. Pre-Launch DA Preservation Checklist

> Run this against PLATFORM_BRIEF.md Section 9 before any cutover conversation.

- [ ] Export GSC performance data (last 16 months) — save as CSV
- [ ] Export Rank Math meta titles + descriptions from WordPress admin
- [ ] Record DA baseline: DA and linking root domains from current Moz report
- [ ] Confirm all routes in "Pages That Must Exist" table (Section 9d) are built and return 200
- [ ] Submit `/sitemap.xml` to Google Search Console in the new property (if not done already)

---

## 4. Step-by-Step Build

### Step 9.1 — Run `npm run build` and fix all errors

```
git commit -m "stage-9: step 9.1 — build errors resolved, clean build"
```

### Step 9.2 — Run Screaming Frog redirect audit
Export redirect map from `next.config.js`. Test all destinations. Document any broken redirects. Fix them.

```
git commit -m "stage-9: step 9.2 — redirect audit complete, all redirects verified"
```

### Step 9.3 — Run per-page SEO checklist
Go through every route. Log any missing titles, descriptions, or JSON-LD. Fix them.

```
git commit -m "stage-9: step 9.3 — SEO metadata complete on all pages"
```

### Step 9.4 — Run candidate experience audit
Submit test leads through all 4 surfaces. Verify mobile at 375px on every page.

```
git commit -m "stage-9: step 9.4 — candidate experience audit complete"
```

### Step 9.5 — Run Lighthouse on homepage (mobile)
Fix any issues driving scores below 80 (performance) or 90 (accessibility).

```
git commit -m "stage-9: step 9.5 — Lighthouse scores verified"
```

### Step 9.6 — Complete pre-launch DA preservation checklist
Export GSC data. Record DA baseline. Confirm sitemap submitted.

```
git commit -m "stage-9: complete — pre-launch QA audit passed, ready for Stage 10"
```

---

## 5. Definition of Done

- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes with 0 type errors
- [ ] All redirects verified — no 404s, no chains > 2 hops
- [ ] Every page has unique title tag, meta description, and one H1
- [ ] JSON-LD structured data present on homepage, all /resources, all hub pages
- [ ] All 4 lead capture surfaces submit and deliver correctly
- [ ] Mobile experience verified (375px) on all pages built in Stages 4–8
- [ ] Zero console errors in browser on any page
- [ ] Lighthouse mobile: Performance ≥ 80, Accessibility ≥ 90
- [ ] GSC data exported. DA baseline recorded. Sitemap submitted to new GSC property.
- [ ] PROGRESS.md — Stage 9 marked `Complete`, pre-launch checklist documented

---

## 6. Forward Dependencies

### Stage 10 (DNS Cutover) needs:
- This stage fully complete — no exceptions
- GSC new property set up with the same domain
- Redirect map verified clean

---

## 7. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 9 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 9 of 10 — Pre-Launch QA & SEO Audit

PRE-FLIGHT CHECKS (do all of these before starting audit work):
1. Read PROGRESS.md in full — confirm ALL stages 2–8 are marked Complete. If any are not — STOP.
2. Read the KNOWN ISSUES section of PROGRESS.md — document any open issues before starting.
3. Run: git status — confirm working tree is clean before starting.
4. Run: npm run build — if this fails, fix build errors before running any other audit.
5. Run: npx tsc --noEmit — fix all type errors before proceeding.

READ: PLATFORM_BRIEF.md — Section 9 (Migration Architecture) — read it entirely
READ: docs/stages/stage-09-qa-seo-audit.md in full

THIS STAGE PRODUCES NO NEW FEATURES. Fix only. Verify only.
Every item in Section 5 (Definition of Done) must be explicitly checked and confirmed passing.

Priority order:
1. Redirect audit (most critical — a 404 on a backlinked URL destroys DA)
2. Build errors
3. SEO metadata
4. Candidate experience
5. Performance

git commit after every step with message format: "stage-9: step 9.X — description"
Document any issues discovered in PROGRESS.md → KNOWN ISSUES before fixing them.

When done: update PROGRESS.md → Stage 9 Complete.
DO NOT proceed to Stage 10 until Kelsey has reviewed and approved the QA report.
```
