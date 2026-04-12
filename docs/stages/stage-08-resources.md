# Stage 8 — Resources & Content Foundation

**Stage:** 8 of 10
**Phase:** Content & SEO
**Depends on:** Stage 5 (education pages — resources hub builds on the same tone)
**Feeds into:** Stage 9 (QA/SEO audit assigns priority to resources content)

---

## 1. Goal

Build the `/resources` hub and populate it with the first 3–5 foundational articles that will drive organic search traffic and establish FC's authority.

This stage is not about writing a blog. It's about building the **content infrastructure** that can scale and establishing the editorial standard that all future content will follow.

**Definition of "good":** A franchise-curious professional lands on an FC resource article via Google, learns something real and genuinely useful in their specific situation, and encounters at least one natural moment where talking to an advisor is the obvious next step.

---

## 2. The Resources Hub — /resources

### Layer 1
```
H1: "Everything you need to make a great decision"
Subhead: "No fluff. No rah-rah. Just what smart buyers actually need to know."

Content categories (filterable):
  The Buying Process | Financial Essentials | FDD Explained | Industries & Markets | Franchisee Stories
```

### Card Grid
Each article card:
- Title
- Category badge
- 1-sentence description
- Read time
- Date (set to original WordPress publish date for redirect equity if migrated content)

---

## 3. Editorial Standard — The Two Tests

Every resource article must pass two tests before publishing:

### Test 1: The Intelligent Adult Test
Would a 50-year-old director of operations with an MBA feel respected after reading this?
If the article explains concepts too simply or assumes no prior business knowledge — revise.
If the article uses franchise industry jargon without explanation — revise.

### Test 2: The Practical Value Test
After reading, can the candidate do something, decide something, or understand something they couldn't before?
If the answer is "maybe" — the article needs a tighter argument or a sharper conclusion.

---

## 4. The First 5 Articles (Foundation Content)

These are selected for:
- High search volume + intent
- Backlink preservation (if migrating high-equity WordPress posts)
- Relevance to the FC candidate archetype

### Article 1 — /resources/how-to-buy-a-franchise
**Target keyword:** "how to buy a franchise"
**Purpose:** Top backlink target from existing WordPress site. Must exist before DNS cutover.
**Tone:** Practical, step-by-step. Not inspirational fluff.
**Structure:**
- Introduction: The decision is made. Here's the process.
- Step 1: Understand FDD basics
- Step 2: Define your criteria (investment, industry, model)
- Step 3: Research brands that fit
- Step 4: Franchisee validation calls
- Step 5: Legal review (attorney, not DIY)
- Step 6: Sign and fund
- Natural CTA at end: "This is where an advisor saves you 6 months of wrong turns."
**Length:** 1,200–1,800 words. No word padding.

### Article 2 — /resources/reading-an-fdd
**Target keyword:** "franchise disclosure document explained"
**Purpose:** Highest-value educational content for serious buyers. Reduces friction.
**Structure:**
- What an FDD is and why it exists
- The 23 Items — plain-English summary of the most important ones (Items 5, 6, 7, 19, 20, 21)
- What red flags look like in an FDD
- What a clean FDD looks like
- "What we look for in our research" (ties to Navigator Score / FC's methodology)
**Length:** 1,500–2,000 words

### Article 3 — /resources/franchise-roi
**Target keyword:** "franchise ROI" / "how much money do franchises make"
**Purpose:** Serves high-intent financial research query
**Structure:**
- Why "how much does a franchise make" is the wrong first question
- The right metrics: AUV, owner benefit, cash-on-cash return
- How to use Item 19 (and what to do when there isn't one)
- Investment efficiency: what's a good return in this asset class
- "Our analysis" — how FC builds the financial section on every brand page
**Length:** 1,000–1,500 words

### Article 4 — /resources/semi-absentee-franchises
**Target keyword:** "semi-absentee franchise"
**Purpose:** Highest-intent buyer segment for FC's audience (C-suite wanting to keep day job)
**Structure:**
- What semi-absentee actually means (not "passive income")
- The manager model explained: your hire, not your shift
- Who it works for (and who it doesn't)
- Industries where semi-absentee is viable
- "What to ask the franchisor" checklist
**Length:** 1,000–1,400 words

### Article 5 — /resources/why-franchises-fail
**Target keyword:** "why franchises fail"
**Purpose:** Trust-building — FC is honest about risk, not just upside
**Structure:**
- The real reasons franchises fail (not "market conditions")
- Undercapitalization: the #1 cause
- Fit mismatch: buying the wrong brand for the wrong person
- Site selection / territory problems
- What the FDD tells you about a brand's failure rate
- "What we check before listing a brand" — ties to FC's research process
**Length:** 1,000–1,400 words

---

## 5. Content Architecture

All resource articles live at `/resources/[slug]`.

```typescript
// Suggested constants.ts structure for resource content
RESOURCES: {
  articles: [
    {
      slug: 'how-to-buy-a-franchise',
      title: 'How to Buy a Franchise: A Step-by-Step Guide',
      category: 'the-buying-process',
      description: 'The actual process — from FDD to funded.',
      readTime: '8 min',
      datePublished: '2023-05-12', // original WP publish date if migrating
      dateModified: '2026-04-12',
    },
    // ...
  ]
}
```

Each article is a static TSX page (not a CMS). Content is in the page file. This is correct for a small, stable content set. CMS (Sanity, etc.) is a Phase 2 consideration if content volume grows to 50+ articles.

---

## 6. Step-by-Step Build

### Step 8.1 — Build /resources hub page
Card grid. Category filters. Article cards.

```
git commit -m "stage-8: step 8.1 — /resources hub complete"
```

### Step 8.2 — Build article template
`app/resources/[slug]/page.tsx` — article layout with: progress indicator, share buttons, CTA at end, related articles.

```
git commit -m "stage-8: step 8.2 — article template complete"
```

### Step 8.3 — Write and publish Article 1 (how-to-buy-a-franchise)
Content written to page file. SEO metadata set. `datePublished` matches original WordPress post if migrating.

```
git commit -m "stage-8: step 8.3 — /resources/how-to-buy-a-franchise published"
```

### Step 8.4 — Write and publish Article 2 (reading-an-fdd)

```
git commit -m "stage-8: step 8.4 — /resources/reading-an-fdd published"
```

### Step 8.5 — Write and publish Articles 3–5

```
git commit -m "stage-8: step 8.5 — articles 3, 4, 5 published"
```

### Step 8.6 — Verify sitemap, metadata, and internal links
All 5 articles in sitemap. nav + footer link to /resources. Article footers link to related articles. CTA in each article links to /contact or /quiz.

```
git commit -m "stage-8: complete — resources hub and 5 foundation articles live"
```

---

## 7. Quality Standards

### Content Quality
- [ ] Every article passes the Intelligent Adult Test
- [ ] Every article passes the Practical Value Test
- [ ] At least one natural CTA per article (not forced — editorial flow leads there)
- [ ] No article under 800 words or over 2,500 words

### SEO Quality
- [ ] Each article has a unique, keyword-targeting `<title>` tag
- [ ] Each article has a 155-character meta description with target keyword
- [ ] `Article` JSON-LD structured data on every article page
- [ ] `datePublished` set to original WP date if article migrates from WordPress

### Technical
- [ ] All 5 articles in `app/sitemap.ts`
- [ ] `npm run build` passes with 0 errors
- [ ] /resources hub links correctly to all article slugs

---

## 8. Definition of Done

- [ ] /resources hub built with card grid and category filter
- [ ] Article template built and consistent across all articles
- [ ] 5 foundation articles published
- [ ] All 5 pass content quality standards (both tests)
- [ ] All 5 appear in sitemap.ts with correct metadata
- [ ] `npm run build` passes with 0 errors
- [ ] PROGRESS.md — Stage 8 marked `Complete`

---

## 9. Forward Dependencies

### Stage 9 (QA/SEO) needs:
- All /resources articles have correct JSON-LD structured data
- datePublished matches original WordPress dates for migrated content

---

## 10. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 8 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 8 of 10 — Resources & Content Foundation

FIRST: Read PROGRESS.md. Confirm Stage 5 is Complete. If not — STOP.

READ: PLATFORM_BRIEF.md — Sections 1, 2, 3 (archetype and voice)
READ: docs/stages/stage-08-resources.md in full

Content quality is the output of this stage, not just code.
Apply the Intelligent Adult Test and Practical Value Test to every article before committing.
Do not publish thin content or content that sounds like it was AI-generated from a template.
Add real insight, specific numbers (from the FDD pipeline research), and honest analysis.

Execute steps 8.1 through 8.6 in order.
git commit after every step.

Report completion against Section 8 (Definition of Done).
When done: update PROGRESS.md → Stage 8 Complete.
```
