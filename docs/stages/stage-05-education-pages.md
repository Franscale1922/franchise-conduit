# Stage 5 — Core Education Pages

**Stage:** 5 of 10
**Phase:** Candidate Experience
**Depends on:** Stage 4 (homepage complete, nav links established)
**Feeds into:** Stage 7 (lead capture — education pages build trust that converts)

---

## 1. Goal

Build the three trust-building pages that serve the candidate who wants to understand the path before committing to anything.

These pages answer the questions a "Quietly Decided" candidate is asking privately:
- *"How does this actually work?"*
- *"How do I know I can trust this site and the brands on it?"*
- *"Who is behind this? Are they going to hard-sell me?"*

**The candidate does not want to be taught everything about franchising. They want to know that the guide knows the path.**

These pages are secondary Layer 1 content (clear, confident, calm) with Layer 2 depth available for those who want it.

---

## 2. Pages in This Stage

### Page 1 — /how-it-works

**Purpose:** Walk the candidate through the FC journey without using franchise industry jargon.

**Section architecture:**
```
HERO
  H1: "Here's how we work together"
  Subhead: "No broker pressure. No email blast. A real conversation when you're ready."

THE JOURNEY (4 steps, illustrated)
  Step 1: "Explore on your terms"
    Browse brands, read research, take the quiz. Anonymous until you choose to connect.
  Step 2: "Find what fits"
    Our quiz surfaces brands matched to your background, budget, and lifestyle goals.
  Step 3: "Go deeper on what interests you"
    Every brand page has FDD data, unit economics, and market context — not a brochure.
  Step 4: "We make the introduction"
    When you're ready, a Waypoint advisor prepares you for the conversation and connects you.

WHAT YOU WILL NOT GET
  [Layer 1 — 3 short bullets]
  ✗ A cold call 10 minutes after you click a button
  ✗ A pushy broker trying to close you on the first call
  ✗ A paywall before you've seen anything

WHAT YOU WILL GET
  [Layer 1 — 3 short bullets]
  ✓ Real data from real FDDs on every brand
  ✓ An advisor who has been through this dozens of times
  ✓ Time to make the right decision

FAQ (Layer 2)
  Common candidate questions — accordion, 6-8 questions
  Examples:
    "Do I have to pay anything?" — No. FC is free for franchise buyers.
    "Are these brands paying to be listed?" — No. Our rankings aren't for sale.
    "What happens after I request an introduction?" — [describe the advisor flow]
    "How long does the process typically take?" — [typical timeline]
    "Can I look at multiple brands at once?" — Yes. Many buyers explore 3-5 before deciding.

CTA
  "Start by exploring brands" → /franchises
  Or: "Take the 4-minute quiz" → /quiz
```

---

### Page 2 — /methodology

**Purpose:** Explain the Navigator Score and establish FC's research credibility.

**This page is the proof behind every Navigator Score on every brand card.** Without this page, the score is decorative. With it, the score becomes a trust signal.

**Section architecture:**
```
HERO
  H1: "How we research and score every brand"
  Subhead: "The Navigator Score is built on data, not dollars. Here's exactly how."

WHAT THE NAVIGATOR SCORE IS NOT
  [Layer 1 — brief, direct]
  It is not a ranking paid for by brand advertising.
  It is not a consumer review score.
  It is not a guarantee of any financial outcome.

WHAT IT IS
  [Layer 1]
  A composite signal built from 5 dimensions of verified data.
  Designed to give you a fast read of a brand's research depth — not to make the decision for you.

THE 5 DIMENSIONS (Layer 2 — expand/show detail per dimension)
  1. Franchisee Satisfaction (30%) — FBR score, testimonial sentiment, validation call availability
  2. Financial Transparency (25%) — Item 19 availability, AUV disclosed, investment range specificity
  3. Brand Stability (20%) — Years franchising, unit count growth, closure rate
  4. Support System (15%) — Training depth, field support, tech platform
  5. Market Position (10%) — Industry CAGR, competitive moat, recession resistance

SCORE CATEGORIES
  Exceptional (85-100) / Strong (70-84) / Solid (55-69) / Moderate (40-54) / Developing (<40)

OUR RESEARCH PROCESS
  [Layer 2]
  - FDD review (we read the whole thing — not just Item 19)
  - Franchisee validation call data (actual franchisee satisfaction)
  - Item 7 investment range vs. market norms
  - Brand-disclosed performance data vs. FBR Top 200 data where available

WHAT WE CAN'T CONTROL
  [Brief, honest disclosure]
  FDDs are self-reported. Past performance does not guarantee future results.
  We flag when data is limited or unverified.

CTA
  "Browse brands with their Navigator Scores →" → /franchises
```

---

### Page 3 — /about

**Purpose:** Establish who Waypoint Franchise Advisors are and why FC exists.

**Section architecture:**
```
HERO
  H1: "Built by franchise advisors who got tired of the old way"
  Subhead: 2 lines — who Waypoint is and what they do differently

THE PROBLEM WE SOLVED FOR OURSELVES
  [Brief narrative — Layer 1]
  The franchise brokerage industry has an incentive problem.
  Most brokers earn commissions — so recommendations can follow the commission, not the candidate.
  We built FC to flip that. Brands don't pay to rank higher. Candidates don't pay to use the platform.
  We earn when we make a great match and the candidate succeeds.

WHO WE ARE
  [Waypoint advisor team — name, role, brief bio]
  [Include headshots when available — placeholder initials until photos are supplied]

OUR FOCUS
  [Layer 1]
  We work with serious buyers — professionals, executives, and skilled operators making a deliberate
  move to business ownership. Not impulse buyers. Not first-timers with no capital and a big dream.
  The candidates who work with us are the ones franchisors actually want to hear from.

CTA
  "Talk to a Waypoint advisor" → /contact
```

---

## 3. Copy Standards for Education Pages

- **Jargon threshold:** If the word would not appear in a business newspaper headline, it needs a plain-English follow-up in parentheses or a tooltip. On Layer 1: avoid jargon entirely.
- **Length:** Each Layer 1 section should be readable in under 15 seconds.
- **Honesty signals:** Be explicit about what FC is not ("no cold call", "brands don't pay to rank"). Honesty = trust.
- **Warmth check:** The candidate is sharing a private desire. Every paragraph should feel like a conversation, not a brochure.

---

## 4. Step-by-Step Build

### Step 5.1 — Write /how-it-works copy to constants.ts

```
git commit -m "stage-5: step 5.1 — how-it-works copy drafted"
```

### Step 5.2 — Build /how-it-works page

```
git commit -m "stage-5: step 5.2 — /how-it-works page complete"
```

### Step 5.3 — Write /methodology copy to constants.ts

```
git commit -m "stage-5: step 5.3 — methodology copy drafted"
```

### Step 5.4 — Build /methodology page

```
git commit -m "stage-5: step 5.4 — /methodology page complete"
```

### Step 5.5 — Write /about copy to constants.ts

```
git commit -m "stage-5: step 5.5 — about page copy drafted"
```

### Step 5.6 — Build /about page

```
git commit -m "stage-5: step 5.6 — /about page complete"
```

### Step 5.7 — Verify all three pages at all breakpoints + link from nav/footer

```
git commit -m "stage-5: complete — all three education pages live and linked"
```

---

## 5. Quality Standards

### Candidate Experience
- [ ] Every Layer 1 section readable in under 15 seconds
- [ ] /how-it-works FAQ accordion has at least 6 real questions
- [ ] /methodology clearly explains all 5 Navigator Score dimensions
- [ ] /about does not over-claim or sound like a sales pitch

### Technical
- [ ] All copy in `lib/constants.ts` under `HOW_IT_WORKS`, `METHODOLOGY`, `ABOUT` namespaces
- [ ] All three pages linked from nav and footer
- [ ] `app/sitemap.ts` includes all three pages

---

## 6. Definition of Done

- [ ] /how-it-works built and passes warmth check
- [ ] /methodology fully explains Navigator Score — the score ring is now credible
- [ ] /about establishes Waypoint context without sounding salesy
- [ ] All three pages render at 375px, 768px, 1280px
- [ ] All three linked from nav and footer
- [ ] `npm run build` passes with 0 errors
- [ ] PROGRESS.md updated — Stage 5 marked `Complete`

---

## 7. Forward Dependencies

### Stage 7 (Lead Capture) needs:
- /how-it-works explains the advisor introduction concept (Step 4)
- /about establishes who the advisor is

### Stage 9 (QA/SEO) needs:
- All three pages have proper `<title>` and meta description exports

---

## 8. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 5 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 5 of 10 — Core Education Pages

PRE-FLIGHT CHECKS (do all of these before writing a single line of code):
1. Read PROGRESS.md in full — confirm Stage 4 is marked Complete. If not — STOP.
2. Read the KNOWN ISSUES section of PROGRESS.md — there may be Stage 5 specific notes.
3. Run: git status — confirm working tree is clean before starting.
4. Check if any of these routes already exist: app/how-it-works/, app/methodology/, app/about/
   Read any existing files fully before modifying or replacing them.

READ: PLATFORM_BRIEF.md — Sections 1, 2, 3 (candidate archetype, two-layer UX, voice)
READ: docs/stages/stage-05-education-pages.md — full page architecture for all three pages

Write all copy to lib/constants.ts BEFORE writing TSX.
Apply the jargon threshold rule: Layer 1 must have zero franchise industry jargon.
Apply the warmth check: does this read like a trusted friend or a brochure?

Execute steps 5.1 through 5.7 in order.
git commit after every step with message format: "stage-5: step 5.X — description"

Report completion against Section 6 (Definition of Done).
When done: update PROGRESS.md → Stage 5 Complete.
```
