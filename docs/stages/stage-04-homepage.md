# Stage 4 — Homepage

**Stage:** 4 of 10
**Phase:** Candidate Experience
**Depends on:** Stage 2 (scaffold aligned), Stage 3 (at least 2 brand pages live)
**Feeds into:** Stage 5 (education pages built off homepage's "how it works" CTA)

---

## 1. Goal

Build the homepage that serves "The Quietly Decided" candidate from the first second they arrive.

The homepage has one job: **confirm that the candidate is in the right place and make the next step obvious.**

It does not need to explain everything. It does not need to list every brand. It does not need to data-dump. It needs to say: *"You've made a decision. We know this path. Let's walk it together."*

**Definition of "good":** Every section of the homepage passes the billboard test. A candidate who arrived from Google or a referral can understand — in 5 seconds per section — exactly what FC is, why it's for them, and what they should do next.

---

## 2. Homepage Section Architecture

```
NAV (sticky, blur backdrop)
  Logo | Browse Franchises | How It Works | Resources | [Talk to an Advisor — CTA button]

HERO
  [Layer 1]
  Eyebrow: "Franchise Discovery for Serious Buyers"
  H1: "You've decided. Now find the right franchise."
  Subhead: 2 lines max — "We work with experienced professionals making the move to business ownership. We clear the path."
  CTA Primary: "Find My Match" → /quiz
  CTA Secondary: "Browse Franchises" → /franchises
  Hero visual: warm lifestyle photo or illustrated mockup (NOT a dark data dashboard)

TRUST BAR
  [Layer 1]
  5 short proof statements — rotating or static ticker
  "◈ Independent research on every brand"
  "◉ Advisor-guided introductions only"
  "◎ FDD data on every listing"
  "◐ Opportunities from $100K across 12 industries"
  "✦ Brand rankings are not influenced by listing fees"

HOW IT WORKS
  [Layer 1]
  3 steps — minimal. Icon + single-line label each.
  Step 1: Explore — Browse or take our quiz. No commitment.
  Step 2: Research — Every brand page has the data you need.
  Step 3: Connect — When you're ready, we make the introduction.
  [Layer 2 CTA]: "Learn how the process works →" → /how-it-works

FEATURED BRANDS
  [Layer 1]
  Section label: "A few brands worth knowing"
  3–4 FranchiseCards (gold standard brands from Stage 3)
  Card = brand name, industry badge, 1-2 key stats, Navigator ring, business model
  CTA: "See all franchises →" → /franchises

SEMI-ABSENTEE SPOTLIGHT
  [Layer 1]
  H2: "Don't just own a job. Own a business."
  2-3 sentences explaining semi-absentee model — simple, no jargon
  2 brand cards from semi-absentee collection
  [Layer 2 CTA]: "Explore semi-absentee opportunities →" → /franchises?filter=semi-absentee

WHY FRANCHISE CONDUIT
  [Layer 1]
  3 differentiators — icon + title + 1-sentence explanation
  "We research so you don't start from scratch"
  "Advisor-in-the-loop — you're never left to navigate alone"
  "No fees to brands — our rankings aren't for sale"
  [Layer 2 — right column]: 2 testimonial cards (real franchisees — placeholder initials until real headshots)

BOTTOM CTA
  [Layer 1]
  H2: "Ready to take the first step?"
  Subhead: "Our quiz takes 4 minutes and gives you a shortlist of brands matched to your profile."
  CTA: "Take the quiz" → /quiz  (Gold button)

SEO LINK GRID
  [No Layer 1 attribution needed — functional, below the fold]
  Browse by Industry + Browse by State (existing structure from page.tsx)

FOOTER
  Logo | Browse | How It Works | Resources | Privacy
  Copyright | Built by Waypoint Franchise Advisors
```

---

## 3. Billboard Test Criteria

Before this stage is marked complete, print each section headline and subhead on a paper. Read them out of context, in order, to someone unfamiliar with FC. They should be able to answer after reading:
- What is this site?
- Who is it for?
- What do I do next?

If the answer to any of those is unclear — the section fails.

---

## 4. Copy Standards for This Stage

- **Hero H1:** Must speak to the candidate's current moment — not generic "find a franchise" language
- **Subhead:** Maximum 2 lines. Describes who FC is for without listing requirements
- **Step labels:** 3 words or fewer per step. No jargon.
- **Why FC bullets:** 1 sentence each. The candidate reads them in 8 seconds total.
- **CTAs:** Action verbs. "Find My Match" > "Get Started". "Take the Quiz" > "Learn More".

---

## 5. Step-by-Step Build

### Step 4.1 — Write All Copy First
Before writing any TSX, write every section's headline, subhead, and CTA copy. Document in `lib/constants.ts` under a `HOMEPAGE` namespace. Get copy approved before building.

**This is the most important step.** Code serves copy — not the other way around.

```
git commit -m "stage-4: step 4.1 — homepage copy written to constants.ts"
```

### Step 4.2 — Build Nav (if not already aligned)
Ensure nav reflects: Browse Franchises | How It Works | Resources | Talk to an Advisor CTA.

```
git commit -m "stage-4: step 4.2 — nav aligned"
```

### Step 4.3 — Build Hero Section
Warm lifestyle visual (sourced or generated). Two CTAs. Mobile verified.

```
git commit -m "stage-4: step 4.3 — hero section complete"
```

### Step 4.4 — Build Trust Bar
5 proof statements. Ticker or static grid.

```
git commit -m "stage-4: step 4.4 — trust bar complete"
```

### Step 4.5 — Build How It Works
3 steps. Icon + label. Layer 2 CTA to /how-it-works.

```
git commit -m "stage-4: step 4.5 — how it works section complete"
```

### Step 4.6 — Build Featured Brands
Pull from gold standard brand pages (Stage 3). FranchiseCard components.

```
git commit -m "stage-4: step 4.6 — featured brands section complete"
```

### Step 4.7 — Build Semi-Absentee Spotlight + Why FC + Bottom CTA
Three sections. Testimonial cards (placeholder until real headshots).

```
git commit -m "stage-4: step 4.7 — spotlight, why FC, bottom CTA complete"
```

### Step 4.8 — Verify SEO Link Grid + Footer
Existing structure should carry forward. Verify all links resolve.

```
git commit -m "stage-4: step 4.8 — SEO link grid + footer verified"
```

### Step 4.9 — Full Billboard Test
Read every section headline. Test at 375px, 768px, 1280px.

```
git commit -m "stage-4: complete — homepage passes billboard test"
```

---

## 6. Quality Standards

### Candidate Experience
- [ ] Hero H1 speaks to "The Quietly Decided" directly
- [ ] Every section passes the billboard test (5-second legibility)
- [ ] No section requires franchise industry knowledge to understand
- [ ] At least one lead capture CTA visible without scrolling on desktop

### Visual
- [ ] No horizontal scroll at 375px
- [ ] Lifestyle/warm imagery in hero — not a dark data dashboard
- [ ] Animations use Framer Motion, `viewport={{ once: true }}`
- [ ] Gold CTA button used for primary bottom-of-page close

### Code
- [ ] All copy in `lib/constants.ts` under `HOMEPAGE` namespace
- [ ] No hardcoded strings in `app/page.tsx`
- [ ] `npm run build` passes with 0 errors

---

## 7. Definition of Done

- [ ] All 9 steps committed and pushed
- [ ] Every homepage section passes billboard test
- [ ] Page renders correctly at 375px, 768px, 1280px
- [ ] Zero console errors in browser
- [ ] Lead capture CTA (quiz or contact) is functional
- [ ] `npm run build` passes with 0 errors
- [ ] PROGRESS.md updated — Stage 4 marked `Complete`

---

## 8. Forward Dependencies

### Stage 5 (Education Pages) needs:
- "How it works" CTA in homepage nav and How It Works section links to `/how-it-works`
- `/about` and `/contact` linked from footer

### Stage 7 (Lead Capture) needs:
- Quiz CTA in hero links to `/quiz`
- "Talk to an Advisor" nav CTA links to `/contact`

---

## 9. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 4 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 4 of 10 — Homepage

FIRST: Read PROGRESS.md.
Confirm Stages 2 and 3 are marked Complete. If not — STOP.

READ: PLATFORM_BRIEF.md — especially Sections 1, 2, 3, and 4
READ: docs/stages/stage-04-homepage.md — the full section architecture and copy standards

MOST IMPORTANT: Write all copy to lib/constants.ts before writing any TSX.
The homepage communicates to "The Quietly Decided." Every word must affirm the decision.
Run the billboard test on every section before committing.

Execute steps 4.1 through 4.9 in order.
git commit after every step with message format: "stage-4: step 4.X — description"

Report completion against every item in Section 7 (Definition of Done).
When done: update PROGRESS.md → Stage 4 Complete.
```
