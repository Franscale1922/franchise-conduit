# Stage 6 — Franchise Browsing & Search

**Stage:** 6 of 10
**Phase:** Candidate Experience
**Depends on:** Stage 3 (brand JSONs populated), Stage 5 (education pages set the context)
**Feeds into:** Stage 9 (SEO audit — industry/state hubs are primary SEO targets)

---

## 1. Goal

Build the complete franchise browsing experience: the main listing index, filtering/search, industry hub pages, and state hub pages.

This stage is dual-purpose:
1. **Candidate experience:** A buyer should be able to browse, filter, and find brands that match their criteria without needing to know what they're looking for yet.
2. **SEO architecture:** Industry hubs (`/franchises/industries/[category]`) and state hubs (`/franchises/locations/[state]`) are the highest-value SEO pages on the platform. They capture long-tail search traffic and pass equity to brand detail pages.

**Definition of "good":** A candidate who types "home services franchise Texas" into Google finds FC's Texas page or Home Services page in the results — and when they land there, the experience is clean, relevant, and leads them toward either the quiz or an advisor conversation.

---

## 2. Listing Index — /franchises

### Layer 1 (what the candidate sees first)
```
Page header: "Browse [X] Researched Franchises"
Filter bar: Industry | Investment Range | Business Model | State | Reset
Card grid: FranchiseCards (3 columns desktop, 2 tablet, 1 mobile)
Sidebar or inline: "Not sure where to start? Take the quiz →"
```

### Filter Implementation
| Filter | Values |
|--------|--------|
| Industry | 12 categories (from existing industry list) |
| Investment Range | Under $150K / $150K-$350K / $350K-$750K / $750K+ |
| Business Model | Owner-Operator / Semi-Absentee / Manager Model |
| State | Dropdown list of available_states |

Filter behavior:
- Instant client-side filter (no page reload)
- URL params update (`?industry=home-services&min=150000`) for shareability and SEO
- "X results" count updates live

### Layer 2 (behind filter or card click)
- Each card → full brand detail page (/franchises/[slug])
- "Request introduction to this brand" CTA on card hover (mobile: below card)

---

## 3. Industry Hub Pages — /franchises/industries/[category]

### Purpose
These are SEO-first pages. They capture search traffic for "home services franchises", "cleaning franchise", "fitness franchise for sale", etc. and route it into the FC experience.

### Page Structure
```
H1: "[Industry] Franchises — Research, Compare, Connect" (SEO optimized)
Meta description: 155 characters targeting the category keyword

INTRO SECTION [Layer 1]
  2–3 sentences about the industry — market context, why it's a strong franchise category.
  Written at Layer 1 warmth: informative but not academic.
  Example: "Home services franchises serve one of the largest, most recession-resistant markets in
  the country. People always need their homes maintained — and they're increasingly outsourcing that work."

FILTER-INHERITED GRID
  Same FranchiseCard grid pre-filtered to this industry.

INDUSTRY FAQ [Layer 2]
  3–5 questions specific to this industry category.
  Example for Home Services: "Is home services recession-proof?" / "What hours do owners typically work?"

CTA
  "Talk to an advisor about [industry] franchises →" → /contact

INTERNAL LINKS
  Related industries link grid (no nav needed — just contextual links)
```

### The 12 Industry Hubs to Build
1. home-services
2. health-wellness
3. senior-care
4. business-services
5. education
6. food-beverage
7. property-restoration
8. fitness
9. retail
10. automotive
11. cleaning-services
12. technology

### SEO Content Requirements per Hub
- [ ] Unique H1 (not just the category name — verb-forward)
- [ ] Unique 2–3 sentence intro (not copy-pasted across hubs)
- [ ] Unique meta description targeting the category keyword
- [ ] Unique FAQ: at least 3 questions specific to the industry
- [ ] `Article` JSON-LD or `ItemList` structured data

---

## 4. State Hub Pages — /franchises/locations/[state]

### Purpose
Capture location-based franchise search traffic. "Franchise for sale in Texas" / "best franchises in Florida" — high intent, specific audience.

### Page Structure
```
H1: "Franchise Opportunities in [State]" (SEO optimized)
Meta description: 155 characters targeting "[state] franchise" keyword

INTRO [Layer 1]
  2-3 sentences about franchising in this state.
  Business climate, population density, any notable franchise market characteristics.
  Concise. Not a Wikipedia article.

FILTER-INHERITED GRID
  FranchiseCard grid pre-filtered to brands available in that state.
  Pull from available_states field in brand JSON.

STATE-SPECIFIC FAQ [Layer 2 — optional on first build]
  2–3 questions relevant to buying a franchise in this state.

CTA
  "Talk to an advisor about franchises in [State] →" → /contact
```

### The 20 State Hubs to Build
Already in the existing SEO link grid: Texas, Florida, California, Georgia, North Carolina, Arizona, Colorado, Ohio, Illinois, Pennsylvania, New York, Tennessee, Washington, Virginia, Nevada, Utah, Minnesota, Michigan, New Jersey, Oregon.

### SEO Content Requirements per Hub
- [ ] Unique H1
- [ ] Unique 2–sentence intro about franchising in that state
- [ ] Unique meta description
- [ ] `available_states` filtering works correctly (brands without this state excluded)

---

## 5. Step-by-Step Build

### Step 6.1 — Audit and Align /franchises Index Page
Review existing `app/franchises/page.tsx` against new tone and filter requirements.
Update filter UI to match design system.

```
git commit -m "stage-6: step 6.1 — /franchises index aligned"
```

### Step 6.2 — Build Client-Side Filter System
URL param-based filtering. Live count updates. Mobile-friendly filter drawer.

```
git commit -m "stage-6: step 6.2 — filter system complete"
```

### Step 6.3 — Build Industry Hub Template
Build the `app/franchises/industries/[category]/page.tsx` template.
Wire up dynamic intro text, brand grid, FAQ accordion, and metadata from a `INDUSTRY_HUBS` constants object.

```
git commit -m "stage-6: step 6.3 — industry hub template built"
```

### Step 6.4 — Write Industry Hub Content (all 12)
Write the unique intro (2-3 sentences) and FAQ (3 questions) for all 12 industry hubs.
Store in `lib/constants.ts` under `INDUSTRY_HUBS` keyed by slug.

```
git commit -m "stage-6: step 6.4 — industry hub content written (12 hubs)"
```

### Step 6.5 — Build State Hub Template
Build `app/franchises/locations/[state]/page.tsx` template.
Wire up state-specific intro, filtered brand grid, and metadata.

```
git commit -m "stage-6: step 6.5 — state hub template built"
```

### Step 6.6 — Write State Hub Content (all 20)
Write unique intro (2 sentences) and meta description for all 20 state hubs.
Store in `lib/constants.ts` under `STATE_HUBS` keyed by slug.

```
git commit -m "stage-6: step 6.6 — state hub content written (20 states)"
```

### Step 6.7 — Verify Sitemap + Internal Linking
Confirm `app/sitemap.ts` auto-generates entries for all industry and state hubs.
Confirm SEO link grid on homepage links to all hubs correctly.

```
git commit -m "stage-6: complete — browsing, industry hubs, state hubs verified"
```

---

## 6. Quality Standards

### SEO Quality
- [ ] Every industry hub has a unique H1, unique intro, unique meta description
- [ ] Every state hub has a unique H1, unique 2-sentence intro, unique meta description
- [ ] All hubs appear in `app/sitemap.ts`
- [ ] No duplicate content across hubs

### Candidate Experience
- [ ] Filter system works on mobile (drawer not sidebar)
- [ ] "X results" count is accurate after filtering
- [ ] Empty state handled gracefully if no brands match filter
- [ ] "Not sure where to start? Take the quiz" is visible on /franchises

### Code Quality
- [ ] All hub intro content in `lib/constants.ts` (not hardcoded in page files)
- [ ] `npm run build` passes with 0 errors and no "missing static params" warnings
- [ ] URL params update correctly on filter change

---

## 7. Definition of Done

- [ ] /franchises index with working filters
- [ ] All 12 industry hub pages live with unique content
- [ ] All 20 state hub pages live with unique content
- [ ] All 32 hubs in sitemap.ts
- [ ] Filters work on mobile at 375px
- [ ] `npm run build` passes with 0 errors
- [ ] PROGRESS.md updated — Stage 6 marked `Complete`

---

## 8. Forward Dependencies

### Stage 9 (QA/SEO) needs:
- All 32 hub pages live before GSC submission
- Structured data on hub pages reviewed

---

## 9. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 6 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 6 of 10 — Franchise Browsing & Search

FIRST: Read PROGRESS.md. Confirm Stage 3 and Stage 5 are Complete. If not — STOP.

READ: PLATFORM_BRIEF.md — Sections 1, 2, and 5 (content architecture)
READ: docs/stages/stage-06-browse-and-search.md in full

This stage has two equal goals: candidate experience AND SEO architecture.
Every industry and state hub must have unique content — no copy-pasting across hubs.
All hub intro content must go into lib/constants.ts, not hardcoded in page files.

Execute steps 6.1 through 6.7 in order.
git commit after every step.

Report completion against Section 7 (Definition of Done).
When done: update PROGRESS.md → Stage 6 Complete.
```
