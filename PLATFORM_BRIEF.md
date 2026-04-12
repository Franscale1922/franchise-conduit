# FranchiseConduit.com — Platform Brief
**Version:** 2.0 | **Revised:** April 2026 | **Status:** Active

> **How to use this document:**
> Read it at the start of every build session. It is the authoritative record of all locked decisions.
> Decisions are logged in Section 7. Do not reverse or contradict locked decisions without a new log entry.
> For routing and redirect decisions — always read Section 9 first.

---

## 1. Platform Purpose & Strategy

FranchiseConduit.com is an **education-first franchise discovery platform** that exists to generate qualified consulting leads for Waypoint Franchise Advisors (and select partner franchise sales teams).

**It is not a franchise marketplace charging brands for listings.** Brands are listed free of charge. The brand catalog is the draw that brings candidates to the platform. The platform's job is to convert franchise-curious candidates into introductions with a Waypoint advisor.

### The Business Model
```
Candidate discovers FC → Explores brands + education content
→ Takes action (quiz, contact, brand inquiry)
→ Waypoint advisor relationship begins
→ Franchise introduction made
→ Consulting revenue earned
```

### The Candidate — "The Quietly Decided"
The FC candidate is:
- **Age:** 40–60
- **Background:** Corporate career or upper blue-collar (manager, director, VP, skilled tradesperson who has built up)
- **Gender:** ~70% male
- **Financial:** Liquid capital available for investment. Not a first-time saver.
- **Mindset:** Has already made the internal decision to explore business ownership. Has not yet taken external action or told anyone. This is a significant, private moment.
- **Triggers:** Burnout, ceiling hit, voluntary exit, layoff, semi-retirement, or desire to build generational wealth

**Anti-audience:** First-time entrepreneurs with no capital, "want to be my own boss" motivation without financial depth, impulse browsers.

### The Headline Orientation
It's not *"Should you own a franchise?"* — it's **"You've decided. Here's what's next."**
The platform affirms the decision. It does not try to make it.

---

## 2. The Two-Layer UX Philosophy

Every page, section, and piece of content operates on two layers:

### Layer 1 — The Surface (most users stop here)
- Minimal text. One clear idea per section.
- Headline + 2-line subhead maximum.
- One CTA per section.
- Billboard test: can a candidate understand the single idea in 5 seconds?
- Communicates: *"We know the path. You're in the right place."*
- Does NOT require the user to know anything about franchising.

### Layer 2 — The Depth (seekers click in)
- Rich detail available behind CTAs, accordions, subpages, or modals.
- FDD data, financial analysis, industry breakdowns, process guides.
- Respects the user's intelligence without demanding it upfront.
- Communicates: *"We have done the homework so you don't have to start from scratch."*

**Rule:** Never put Layer 2 content in a Layer 1 position. Every section must pass the billboard test before rich content is added beneath it.

---

## 3. Brand Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Warm** | Like a trusted friend who has done this before and wants to help you succeed |
| **Encouraging** | Affirms the candidate's instinct. Never hedges or adds doubt. |
| **Clear** | No jargon. No franchise-industry insider language on Layer 1. |
| **Credible** | Substantive. Behind the warmth is deep knowledge. |
| **Respectful** | Treats the candidate as an intelligent adult who has a lot on the line |

**The voice is NOT:**
- Corporate or formal
- Pushy or sales-driven
- Overwhelming or data-heavy at first contact
- Edgy, trendy, or trying to sound like a startup

---

## 4. Design System

> ⚠️ **OPEN DECISION — Design Palette Direction**
> The palette direction has not yet been finalized. Three options are under consideration:
> - **Option A:** Keep dark background (#080C18) — no design rebuild required
> - **Option B:** Hybrid — dark hero for authority, light body for warmth (recommended)
> - **Option C:** Full light mode redesign
>
> **This decision is required before Stage 2 begins. Do not change globals.css until Kelsey approves a direction.**
> Update this section when the decision is made and log it in Section 7.

### 4a. Color Palette (Pending palette direction — tokens below are current / may update)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#080C18` | Page background (current — may change) |
| `--color-surface` | `#0F1525` | Cards, panels |
| `--color-surface-2` | `#161D33` | Nested surfaces |
| `--color-primary` | `#0F6674` | Primary CTAs |
| `--color-primary-light` | `#168899` | Hover states |
| `--color-gold` | `#C8A96E` | Premium CTAs, accent moments |
| `--color-teal` | `#0D9488` | Data trust accent |
| `--color-emerald` | `#10B981` | Positive indicators |

### 4b. Typography (Confirmed ✅)

| Element | Typeface | Weight | Size |
|---------|----------|--------|------|
| Hero h1, major headers | DM Serif Display | 400 | `clamp(2.25rem, 5vw, 3.5rem)` |
| Section h2 | DM Serif Display | 400 | `clamp(1.75rem, 3vw, 2.5rem)` |
| All other UI | Inter | 300–700 | Context-dependent |
| Nav links | Inter | 500 | `0.9rem` |
| Buttons/CTAs | Inter | 600 | `0.9375rem` |
| Labels/badges | Inter | 500–600 | `0.75rem` uppercase |

**Rule:** Serif (DM Serif Display) NEVER appears in badges, nav, data tables, forms, or card metadata.

### 4c. Navigator Score System

- **Ring:** Monochrome slate `#7B95A8` — single color, no traffic lights
- **Category label:** `Exceptional` / `Strong` / `Solid` / `Moderate` / `Developing`
- **Hover:** Links to `/methodology`
- **Function:** Credibility signal. Demoted from primary experience driver to supporting element.
- **Critical:** Navigator Score means nothing without `/methodology` content. That page is P0.

### 4d. Franchise Cards

**At rest:** Brand name · Industry badge · 3 key stats · Navigator ring · Business model badge · "View profile →"
**On hover:** Market intelligence brief overlay · Card lifts · Teal border glow

**Layer 1 principle:** Cards show enough to intrigue, not enough to overwhelm. Detailed financials available on the brand detail page.

### 4e. Trust Copy System

All affirmation framing. Never defensive:
- `◈ Independent research on every brand`
- `◉ Advisor-guided introductions only — no cold connects`
- `◎ FDD data and unit economics available on every listing`
- `◐ Opportunities from $100K across 12 industries`
- `✦ Brand rankings are not influenced by listing fees`

---

## 5. Content Architecture

### Brand Catalog
- **Target volume:** ~350 brands eventually
- **Starting build:** 2–3 fully built brand pages to establish the "complete brand page" standard
- **Brand data source:** FDD pipeline (see Section 6)
- **Brand listing cost:** Free. This is intentional. Brands are bait.

### Page Hierarchy

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage — candidate orientation + trust | ✅ Scaffolded, needs revision |
| `/franchises` | Browse + filter | ✅ Scaffolded |
| `/franchises/[slug]` | Brand detail (FDD-powered) | ✅ Scaffolded |
| `/franchises/industries/[category]` | Industry hubs — SEO P0 | 🔴 Route exists, content TBC |
| `/franchises/locations/[state]` | State hubs — SEO P0 | 🔴 Route exists, content TBC |
| `/collections/[slug]` | Curated groupings | ✅ Scaffolded |
| `/quiz` | Intake / matching | ✅ Scaffolded |
| `/how-it-works` | Candidate journey education | 🔴 Needs build |
| `/methodology` | Navigator Score explainer | ⚠️ Route exists, P0 content |
| `/about` | Waypoint context + team | 🔴 Must build (pre-cutover) |
| `/contact` | Lead capture + advisor intro | 🔴 Must build (pre-cutover) |
| `/resources` | Education hub | 🔴 Must build (pre-cutover) |
| `/resources/fdd` | FDD explainer | ✅ Built |
| `/privacy-policy` | Legal | 🔴 Must build (pre-cutover) |

---

## 6. The FDD Pipeline

> This is the most operationally critical infrastructure to build before scaling brands.

### Purpose
Enable a brand to be added to FC by providing:
1. FDD (PDF)
2. Brand website URL
3. Any supplemental collateral (brochures, Item 19, press)

And output: a fully structured brand JSON file that auto-generates a complete brand detail page.

### Pipeline
```
INPUT: FDD PDF + website URL + collateral
    ↓
EXTRACTION (data/scripts/parse_fdd.py → LLM-assisted)
    → Structured data → brand JSON (lib/types.ts Franchise interface)
    → Market intelligence brief copy
    → QA checklist review
    ↓
GENERATION
    → /franchises/[slug] auto-generated from JSON
    → Sitemap entry added
    → Collection membership assigned by tags
```

### Brand Completeness States
Brand pages must gracefully handle incomplete data:
- **Complete** — all Franchise interface fields populated
- **Partial** — key financials available, some fields pending
- **Stub** — brand listed, data collection in progress (not publicly visible)

---

## 7. Decisions Log

> All locked decisions are recorded here. Future sessions must not reverse or contradict these.

| Date | Decision | Rationale |
|------|----------|-----------|
| April 2026 | Business model: free brand listings, revenue from consulting leads | Brands are the draw; consulting introductions are the product |
| April 2026 | Primary audience: 40–60, corporate-to-ownership, "Quietly Decided" archetype | Target where intent is high, not where curiosity is broad |
| April 2026 | Anti-audience explicitly defined: <$100K, first-time entrepreneurs with no capital | Quality over quantity for lead generation |
| April 2026 | Two-layer UX: billboard front, rich depth behind | Surface must pass billboard test; detail must be available for seekers |
| April 2026 | Brand voice: warm, welcoming, encouraging, educational — NOT corporate/premium/exclusive | Revised from prior PLATFORM_BRIEF which over-indexed on "dark premium" |
| April 2026 | FDD pipeline is a first-class building block, not an afterthought | 350 brands requires automation; manual build is not viable |
| April 2026 | Stage document system adopted from BizConnect Caribbean playbook | Clear definition of "done" prevents drift across sessions |
| April 2026 | Palette direction: OPEN — awaiting Kelsey's decision (Options A/B/C) | Palette affects all frontend work; decision required before Stage 2 |
| April 2026 | DM Serif Display for hero/h2, Inter for all other UI | Typography system carries forward from v1 — confirmed correct |
| April 2026 | Navigator Score demoted from primary mechanic to supporting credibility signal | Candidate archetype responds better to warmth + clarity than to scoring systems |
| April 2026 | Redirect map in next.config.js is locked — never modify without reading Section 9 | DA 27 / 618 root domains; a single unplanned 404 destroys 10+ years of equity |

---

## 8. How to Resume Work

**Start every session with:**
> "Read PLATFORM_BRIEF.md in the Franchise Conduit site root, then [instruction]."

**For stage-based build sessions:**
> "Read PROGRESS.md, then read docs/stages/stage-0N-[name].md and execute the agent kick-off prompt inside it."

**For design questions:**
> "Check Section 4 of PLATFORM_BRIEF.md. The palette direction decision must be resolved before making visual changes."

**For new routes or redirects:**
> "Read Section 9 of PLATFORM_BRIEF.md before adding, renaming, or removing any route."

**For brand page work:**
> "Read Section 6 of PLATFORM_BRIEF.md. All brand pages are generated from JSON. Edit the JSON, not the template."

---

## 9. Migration Architecture (WordPress → Next.js)

> **Load this section before any work involving routes, redirects, new pages, or DNS.**
> FranchiseConduit.com has DA 27 / 618 referring domains built over 10+ years. A single unplanned 404 on a high-equity page can permanently destroy link authority.

### 9a. Domain Authority Baseline (April 2026)

| Metric | Value | Source |
|--------|-------|--------|
| Moz Domain Authority | **27** | Moz, April 2026 |
| Linking Root Domains | **618** | Moz |
| Ranking Keywords | **285** | Moz |
| Spam Score | **2%** | Moz (healthy) |

### 9b. The Golden Rule
**Never let a URL with a backlink return a 404.** Every URL on the live WordPress site must resolve to a 2xx or 301 permanent redirect on Day 1 of DNS cutover.

Redirect infrastructure lives in: **`next.config.js`** — The complete 301 redirect map (fully populated as of April 2, 2026)

### 9c. URL Pattern Mapping

| WordPress URL Pattern | Next.js Route | Status |
|-----------------------|---------------|--------|
| `/explore/` | `/franchises` | ✅ In next.config.js |
| `/franchise/:slug/` | `/franchises/:slug` | ✅ In next.config.js |
| `/category/:name/` | `/franchises/industries/:name` or `/franchises` | ✅ All 55 categories mapped |
| `/[blog-slug]/` (root level) | `/resources/[slug]` | ✅ Top posts individually mapped |
| `/franchise-blog/` | `/resources` | ✅ In next.config.js |
| `/about-us/` | `/about` | ✅ In next.config.js |
| `/contact/` | `/contact` | ✅ In next.config.js |
| `/testimonials/` | `/about` | ✅ In next.config.js |

### 9d. Pages That Must Exist Before DNS Cutover

| Required Page | Route | Status |
|---|---|---|
| Franchise listings index | `/franchises` | ✅ Built |
| Brand detail pages | `/franchises/[slug]` | ✅ Built |
| Industry hubs | `/franchises/industries/[category]` | ✅ Route — content TBC |
| State hubs | `/franchises/locations/[state]` | ✅ Route — content TBC |
| Quiz | `/quiz` | ✅ Built |
| FDD Resource | `/resources/fdd` | ✅ Built |
| Methodology | `/methodology` | ⚠️ Content P0 |
| **About page** | `/about` | 🔴 Must build |
| **Contact page** | `/contact` | 🔴 Must build |
| **Resources hub** | `/resources` | 🔴 Must build |
| **Privacy Policy** | `/privacy-policy` | 🔴 Must build |
| How to Buy a Franchise | `/resources/how-to-buy-a-franchise` | 🔴 Top backlink target |

### 9e. Locked Routes — Never Rename Post-Launch
- `/franchises/[brand-slug]`
- `/franchises/industries/[category]`
- `/franchises/locations/[state]`
- `/resources/[slug]`
- `/methodology`

### 9f. GSC Transition Protocol
1. **Pre-migration:** Export GSC performance data (last 16 months)
2. **Pre-migration:** Export Rank Math meta titles + descriptions from WordPress
3. **Day 1 post-cutover:** Submit `/sitemap.xml` to GSC immediately
4. **Day 1 post-cutover:** Run GSC Change of Address tool
5. **Week 1:** Monitor GSC Coverage report daily — watch for 404 spikes
6. **Month 1–3:** Screaming Frog crawl weekly; resolve redirect chains > 2 hops

### 9g. Metadata Preservation Rule
When building `/resources` pages that replace WordPress content:
1. Match or improve original `<title>` tag (never remove target keywords)
2. Use Rank Math meta description as starting point
3. Add `Article` JSON-LD structured data to every resource page
4. `datePublished` = original WordPress publish date; `dateModified` = rewrite date
5. Keep all original keyword targets — add educational framing on top

---

## 10. Key Conventions (All Stages, All Sessions)

- **No hardcoded copy** — all user-facing strings in `/lib/constants.ts`
- **TypeScript strict** — no `any` types, no implicit returns
- **Mobile-first** — 375px base, 768px and 1280px breakpoints
- **No console errors** — zero errors in dev tools on any page before a stage is marked done
- **Every API route catches errors** — no raw error messages exposed to client
- **Rollback rule** — if a step breaks `npm run build`, stop. Do NOT commit broken state. Revert with `git checkout -- .` and log the blocker in PROGRESS.md.
- **git commit discipline** — commit after every completed step within a stage. Message format: `stage-N: step M — description`
