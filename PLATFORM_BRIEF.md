# FranchiseConduit.com — Platform True North Brief
> **Version:** 1.0 · **Last updated:** April 1, 2026
> **Purpose:** Load this file at the start of any chat session to resume work instantly. All decisions are final unless marked 🔄 OPEN.
> **Codebase:** `/Users/kelseystuart/Projects/Franchise Conduit` · Next.js App Router · TypeScript

---

## 1. Platform Mission & Positioning

### The One-Line Brief
> **Franchise Conduit is the executive-grade franchise investment platform for serious investors. We start the conversation at $100K and serve every tier up to $2M+. We are the Pitchbook of franchising — not the Zillow.**

### The Problem We Solve
The existing franchise discovery market is split between:
- **Lead farms** (FranConnect, Entrepreneur.com) — paid-to-rank directories that blast form submissions to franchisors
- **Brokers** (FranServe, FranChoice) — advisor-driven but opaque and commission-motivated
- **Consumer aggregators** (Franzy, Franchise Gator) — AI matching for "anyone," no investment floor, light data

**The gap**: No platform currently serves the $250K+ executive investor with the rigor that Pitchbook serves the VC investor. That gap is Franchise Conduit's market.

### Target Audience (Precise)
| Segment | Description |
|---------|-------------|
| **Primary** | Corporate executive or senior professional, 40–58, $250K–$2M liquid to deploy, looking for manager-model or semi-absentee ownership |
| **Secondary** | Multi-unit investor expanding portfolio; already owns one franchise, evaluating a second category |
| **Anti-audience** | First-time entrepreneur with <$100K, "want to be my own boss" motivated, not capital-deployment motivated |

### Competitive Positioning vs. Franzy (Primary Competitor)
Franzy raised $2.2M seed (July 2025) and calls itself the "Zillow of franchising." Their UX says "anyone can start in 15 seconds." Our UX says "your inquiry is reviewed by an advisor before introduction."

| Dimension | Franzy | Franchise Conduit |
|-----------|--------|-------------------|
| Audience | Mass consumer, any budget | Executive investor, $250K+ floor |
| Discovery | AI matching, volume-based | Curated, advisor-backed |
| Data | Gated behind email in 15 sec | Visible upfront, investor-grade |
| Rankings | "Spotlight" = paid placement | Franchisee-data ranked, no pay-to-rank |
| Design | Light SaaS consumer | Dark premium investment platform |
| Score system | "Franzy Fit Score" (matching) | Navigator Score (independent quality rating) |
| Introductions | Direct contact tool | Advisor-reviewed before introduction |

---

## 2. Design System — LOCKED ✅

### 2a. Color Palette (5-Source Research Confirmed)

| Token | Value | Usage | Decision Basis |
|-------|-------|-------|----------------|
| `--color-bg` | `#080C18` | Page background | 4/5 sources: dark premium |
| `--color-surface` | `#0F1525` | Cards, panels | — |
| `--color-surface-2` | `#161D33` | Nested surfaces | — |
| `--color-surface-3` | `#1E2640` | Deep nested | — |
| **`--color-primary`** | **`#0F6674`** | **All primary CTAs, btn-primary** | **4/5 sources: institutional teal (Ramp/Carta direction)** |
| `--color-primary-light` | `#168899` | Hover/glow | — |
| `--color-indigo` | `#4B5D9A` | Charts, secondary accents ONLY | All 5 sources: demoted from primary |
| `--color-gold` | `#C8A96E` | Champagne-bronze — premium CTAs, gold badge | Desaturated from #F59E0B to avoid "broker" read |
| `--color-teal` | `#0D9488` | Data trust accent, score rings | Second trust/data color token |
| `--color-emerald` | `#10B981` | Positive indicators, checkmarks | — |

> **Critical**: Franzy is 100% light mode. Our dark mode is the clearest visual differentiator. Do NOT introduce light mode.

### 2b. Typography (Confirmed ✅ / one item 🔄 OPEN)

| Element | Typeface | Weight | Size |
|---------|----------|--------|------|
| h1, hero statements | **DM Serif Display** | 400 | `clamp(2.25rem, 5vw, 3.5rem)` — letter-spacing: -0.015em |
| h2 section heads | DM Serif Display | 400 | `clamp(1.75rem, 3vw, 2.5rem)` |
| Pull quotes | DM Serif Display | 400 | `1.125rem` (italic variant) |
| All other UI | **Inter** | 300–700 | Context-dependent |
| Nav links | Inter | 500 | `0.9rem` |
| Buttons/CTAs | Inter | 600 | `0.9375rem` |
| Labels/badges | Inter | 500–600 | `0.75rem` uppercase |

**Rule**: Serif NEVER appears in badges, nav, data tables, forms, or card metadata.

**🔄 OPEN — Typography Upgrade**: Canela/Editorial New recommended by ChatGPT + Claude (stronger editorial authority). Requires font licensing. Deferred to Sprint 3. DM Serif Display is the correct current implementation.

### 2c. Homepage Layout (Confirmed ✅)

Full-width centered editorial (4/5 research sources: Cadre/AngelList/Yieldstreet pattern):

```
[NAV — sticky, blur backdrop, 68px]
[HERO — centered max-width 780px]
  Eyebrow badge → H1 (DM Serif) → Subhead → Gold CTA + Outline CTA → 3-stat proof bar
[TRUST BAR — scrolling ticker, teal icons]
[INVESTMENT TIER SELECTOR — below fold, not in hero]
[COLLECTIONS GRID — grid-3 FranchiseCards]
[SEMI-ABSENTEE SPOTLIGHT — grid-2 editorial + 3 inline brand cards]
[HOW IT WORKS — grid-4 step cards]
[AUTHORITY SECTION — grid-2: trust pillars + testimonial cards]
[BOTTOM CTA — centered]
[SEO LINK GRID — below CTA, above footer] ← TO BE ADDED Sprint 2
[FOOTER]
```

### 2d. Navigator Score System (Confirmed ✅)

- **Ring**: Monochrome slate `#7B95A8` — single color, no traffic lights
- **Category label primary** (shown always): `Exceptional` / `Strong` / `Solid` / `Moderate` / `Developing`
- **Numeric score secondary** (same muted slate color)
- **Hover**: Methodology link appears → `/methodology`
- **Tooltip text**: "Navigator Score — view scoring criteria →"
- **Source**: 4/5 sources category-first; Claude + Gemini + Morningstar reference for monochrome

> Without `/methodology` content, the score ring is decorative. This is Sprint 2 P0.

### 2e. Franchise Cards (Confirmed ✅)

**At rest**: Logo · Brand name + industry badge · 3-stat bar (Cash/AUV/Hours) · Navigator ring + Category · Business model badge · Text-link "View full profile →"

**On hover**: Market Intelligence overlay fades in · Methodology link appears · Card lifts -3px, teal border glow

### 2f. Trust Copy System (Confirmed ✅)

All affirmative framing (Consumer Reports / Morningstar pattern):
- `◈ Independent rankings powered by verified franchisee data`
- `◉ Advisor-routed introductions only`
- `◎ FDD and unit economics on every listing`
- `◐ $250K+ investment floor`
- `✦ Brand spending cannot influence ranking`

### 2g. Testimonial Cards (CSS Ready ✅ / Content 🔄 OPEN)

Format: `[Outcome badge] → [Pull quote] → [Name / Role / Tenure / Former company]`
CSS classes exist: `.testimonial-outcome` `.testimonial-quote` `.testimonial-name` `.testimonial-role` `.testimonial-former`
🔄 OPEN: Real headshots needed. Add `.testimonial-company` sub-element.

---

## 3. Implementation Status

### ✅ Built
| File | Notes |
|------|-------|
| `app/globals.css` | 1,287 lines. Full design token system. All Q1–Q8 decisions implemented. |
| `app/page.tsx` | Complete homepage with all sections. 402 lines. |
| `app/layout.tsx` | Nav, footer, Google Fonts (Inter + DM Serif Display). |
| `components/FranchiseCard.tsx` | Score ring, hover insight overlay, text-link CTA. |
| `lib/data.ts` | Franchise data, 34KB. Schema + collection helpers + formatters. |
| `app/franchises/page.tsx` | Listings with filter sidebar. |
| `app/franchises/[slug]/` | Brand detail page route. |
| `app/collections/[slug]/` | Collection pages. |
| `app/quiz/` | Intake quiz route. |
| `app/methodology/` | Route exists — content completeness unconfirmed. |
| `app/resources/fdd` | FDD resource page. |
| `app/sitemap.ts` | Static pages + brand slugs. |
| `app/robots.ts` | Blocks dynamic filter params. |

### 🔄 Incomplete / Missing
| Item | Priority |
|------|----------|
| `/methodology` page content | 🔴 P0 — Makes the Navigator Score credible |
| Industry hub pages `/franchises/industries/[category]` | 🔴 P0 — Biggest SEO gap vs. Franzy |
| State hub pages `/franchises/locations/[state]` | 🔴 P0 — Biggest SEO gap vs. Franzy |
| Homepage SEO link grid (bottom section) | �� P0 — Feeds crawl budget to hub pages |
| Testimonial real headshots + company field | 🟡 P2 |
| Franchise comparison tool | 🟡 P2 |
| Financing integration on detail pages | 🟡 P2 |
| Canela/Editorial New font | 🟢 P3 — Deferred, requires licensing |
| Blog content strategy | 🟡 P2 — Investor-grade, not Franchising 101 |
| Beehiiv newsletter | 🟡 P2 |

---

## 4. SEO Architecture

### Current Sitemap Pages
- Priority 1.0: `/`
- Priority 0.9: `/franchises`, `/quiz`, all brand slugs
- Priority 0.85: `/collections/semi-absentee`, `/collections/most-profitable`
- Priority 0.8: `/methodology`, `/resources/fdd`, remaining collections

### Critical SEO Gap — Franzy Has 67 Hub Pages We Don't

Franzy has programmatic hub pages at priority 0.9:
- 17 industry pages: `/franchises/industries/[category]`
- 50 state pages: `/franchises/locations/[state]`
- 4 feature pages: `/franchises/features/[feature]`

These capture keyword searches like "fitness franchises for sale Texas" which we currently miss entirely.

### Sprint 2 SEO Build Plan
1. `app/franchises/industries/[category]/page.tsx` — 12 industry categories
2. `app/franchises/locations/[state]/page.tsx` — top 20 states by franchise activity
3. Bottom-of-homepage SEO link grid in `app/page.tsx`
4. Update `sitemap.ts` to include all hub pages at priority 0.9

### Title Tag Patterns
| Page | Format |
|------|--------|
| Homepage | `Franchise Conduit — Executive Franchise Matching for $250K+ Investors` |
| Brand detail | `[Brand] Franchise: Investment Analysis, AUV & FDD Data — Franchise Conduit` |
| Industry hub | `[Industry] Franchises for Investors — Franchise Conduit` |
| State hub | `[State] Franchise Opportunities for $250K+ Investors — Franchise Conduit` |
| Methodology | `Navigator Score Methodology — How We Rank Franchises — Franchise Conduit` |

### robots.txt Pattern (Current — Correct)
Block all dynamic filter query params. Allow all static routes. Same pattern as Franzy.

---

## 5. Full Build Roadmap

### ✅ Sprint 1 — Design System (COMPLETE)
Q1–Q8 all implemented. 156 insertions / 81 deletions. globals.css + page.tsx + FranchiseCard.tsx.

### 🔴 Sprint 2 — SEO Infrastructure (NEXT)
| Task | File | Status |
|------|------|--------|
| Industry hub pages (12 categories) | `app/franchises/industries/[category]/page.tsx` | 🔴 TODO |
| State hub pages (top 20 states) | `app/franchises/locations/[state]/page.tsx` | 🔴 TODO |
| Homepage SEO link grid | `app/page.tsx` — new section above footer | 🔴 TODO |
| Add state field to data schema | `lib/data.ts` — add `available_states: string[]` | 🔴 TODO |
| Update sitemap | `app/sitemap.ts` | 🔴 TODO |
| Methodology page content | `app/methodology/page.tsx` | 🔴 TODO |
| Navigator methodology tooltip text | `components/FranchiseCard.tsx` | 🔴 TODO |

### 🟡 Sprint 3 — Conversion & UX Depth
- Franchise comparison tool (side-by-side, 2 brands, 8+ fields)
- Financing integration on brand detail pages
- Brand detail page tab structure (Overview / Financial Analysis / Territory / FDD Items)
- Testimonial headshots + company field
- Authority section headline evaluation

### 🟢 Sprint 4 — Owned Media & Moat
- Investor-grade blog (EBITDA analysis, FBR summaries, unit economics — NOT Franchising 101)
- Beehiiv newsletter (weekly investor digest)
- Podcast (executive franchisee interviews, P&L at 18 months)
- LinkedIn entity strategy for AEO
- Franchise resale marketplace (advisory-curated only — monitor Franzy's $2.2M play)

---

## 6. Data Schema Quick Reference

```typescript
// lib/data.ts — franchise object shape
{
  id: string
  brand_name: string
  brand_slug: string
  brand_logo_emoji: string
  industry: string                  // used by industry hub pages
  business_model: 'semi-absentee' | 'owner-operator' | 'manager-model' | 'passive'
  navigator_score: number           // 1–100, drives the ring
  cash_required_min: number
  cash_required_max: number
  total_investment_min: number
  total_investment_max: number
  franchise_fee: number
  royalty_fee_pct: number
  avg_unit_volume: number           // AUV
  hours_per_week_typical: string
  franchisee_count: number
  years_franchising: number
  market_intelligence: string       // long-form market brief
  collections: string[]             // collection slugs
  // TO ADD for Sprint 2:
  // available_states: string[]
}
```

---

## 7. Non-Negotiable Decisions Log

| Decision | Rationale |
|----------|-----------|
| Dark mode only (`#080C18`) | Franzy is 100% light. Dark = primary visual differentiator. Yieldstreet/Cadre/Brex validate dark for investment platforms. |
| Institutional teal `#0F6674` as primary | 4/5 sources. Franzy uses indigo. Teal differentiates while remaining in trust-signal family. |
| Indigo demoted to charts/secondary | All 5 sources agreed: indigo-as-primary is SaaS-generic. |
| Champagne-bronze `#C8A96E` not gold `#F59E0B` | Saturated gold = real estate agent. C8A96E = private club. |
| DM Serif Display for hero headlines | Franzy uses zero serif. Editorial serif = authority tier above Franzy (The Economist / FT pattern). |
| Navigator Score: monochrome ring, category-first | 4/5 sources. Traffic-light = manufactured. Monochrome + category = Morningstar pattern. |
| "Brand spending cannot influence ranking" | 5/5 sources: affirmative framing beats defensive. Franzy's "Spotlight" paid badges undermine their "unbiased" claim — this is our attack vector. |
| Advisor-reviewed introductions | Core UX differentiation from Franzy's "Connect Tool." The gate is a quality filter, not a lead blast. |
| $100K+ starting investment | Option B tiered messaging — platform serves $100K+ investors; featured collections naturally tier upward. Single-unit buyers at $100K produce relevant revenue and long-term multi-unit value. Locking out this tier was leaving money on the table. Decision: April 1, 2026. |

---

## 8. How to Resume Work

**Start any session with:**
> "Read the PLATFORM_BRIEF.md in the Franchise Conduit project root, then [instruction]."

**For specific sprints:**
> "Read Section 5 of PLATFORM_BRIEF.md. Implement Sprint 2: start with the industry hub pages."

**For design questions:**
> "Check Section 2 of PLATFORM_BRIEF.md before making any color or typography changes."

**For SEO work:**
> "Read Section 4 of PLATFORM_BRIEF.md and extend the sitemap accordingly."
