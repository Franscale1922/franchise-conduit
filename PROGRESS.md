# FranchiseConduit.com — Build Progress

> **How agents use this file:**
> - Read it at the start of every session
> - Update stage status as work progresses
> - Log every git commit in the commit log
> - Log any blockers or known issues immediately
> - Commit this file together with every stage step

---

## CURRENT STATE

| Field | Value |
|-------|-------|
| **Active stage** | Stage 3 — FDD Pipeline & Brand Pages |
| **Stage status** | Ready to begin — FDD inventory confirmed |
| **Last commit** | stage-2: complete — palette, types, nav, fonts, brand JSONs updated |
| **Last updated** | April 2026 |
| **Deployed to** | Not yet deployed to Vercel |
| **Live domain** | franchiseconduit.com (currently WordPress — do not cut over until Stage 10) |

---

## STAGE COMPLETION STATUS

### Foundation Phase

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 0 | Design Direction | `Complete` | April 2026 |
| 1 | Platform Brief & Stage Docs | `Complete` | April 2026 |
| 2 | Scaffold Audit & Alignment | `Complete` | April 2026 |

### Core Infrastructure

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 3 | FDD Pipeline & Brand Pages | `In progress` | — |

### Candidate Experience

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 4 | Homepage | `Not started` (blocked on Stage 3) | — |
| 5 | Education Pages | `Not started` (blocked on Stage 4) | — |
| 6 | Browsing & Search | `Not started` (blocked on Stage 3) | — |

### Conversion

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 7 | Lead Capture & CRM | `Not started` (blocked on Stages 4 + 5) | — |

### Content & SEO

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 8 | Resources & Content | `Not started` (blocked on Stage 5) | — |

### Launch

| Stage | Name | Status | Completed |
|-------|------|--------|-----------|
| 9 | QA & SEO Audit | `Not started` (blocked on Stages 2–8) | — |
| 10 | DNS Cutover | `Not started` (blocked on Stage 9 + Kelsey approval) | — |

> **Status values:** `Not started` · `In progress` · `Complete` · `Blocked — [reason]`

---

## PHASE GATES

```
FOUNDATION PHASE
  ├── Stage 0: Design Direction
  │     GATE: Kelsey selects Option A / B / C → PROGRESS.md updated
  ├── Stage 1: Platform Brief + Stage Docs  ← COMPLETE
  └── Stage 2: Scaffold Audit
        GATE: npm run build passes with 0 errors

CORE INFRASTRUCTURE
  └── Stage 3: FDD Pipeline & Brand Pages
        GATE: 2 gold standard brand pages pass QA checklist

CANDIDATE EXPERIENCE (Stages 4–6 can run in parallel after Stage 3)
  ├── Stage 4: Homepage
  ├── Stage 5: Education Pages
  └── Stage 6: Browsing & Search
        GATE: Billboard test passes on homepage
        GATE: All 32 industry/state hubs live

CONVERSION
  └── Stage 7: Lead Capture
        GATE: End-to-end lead test passes all 4 surfaces

CONTENT & SEO
  └── Stage 8: Resources
        GATE: 5 foundation articles pass Intelligent Adult Test

LAUNCH
  ├── Stage 9: QA & SEO Audit
  │     GATE: Zero redirect 404s. Zero build errors. Kelsey approves.
  └── Stage 10: DNS Cutover
        GATE: Kelsey is present. WP backup confirmed. Vercel production verified.
```

---

## OPEN DECISIONS (must resolve before proceeding)

| # | Decision | Blocking | Status |
|---|----------|----------|--------|
| 1 | **Design palette direction: Option A (dark) / B (hybrid) / C (light)** | Stage 2 | ✅ Locked — Grounded Modern light mode |
| 2 | Advisor email address for lead notifications | Stage 7 | ⚠️ Not provided |
| 3 | CRM integration at launch? (HubSpot / Salesforce / email-only) | Stage 7 | ⚠️ Not confirmed |
| 4 | DNS access for domain verification (Resend + Vercel) | Stage 7 | ⚠️ Not provided |
| 5 | Which 2–3 brands to build as gold standard pages (Stage 3) | Stage 3 | ✅ Updated — Fish Window Cleaning, Express Employment Professionals, FirstLight Home Care (all have complete data synced from sheet) |

---

## ENVIRONMENT VARIABLES LOG

Track all environment variables as they are added.

| Variable | Added in Stage | Value | Notes |
|----------|---------------|-------|-------|
| `GOOGLE_SHEET_ID` | Stage 3 | `1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU` | Master FDD brand data spreadsheet |
| `GOOGLE_SERVICE_ACCOUNT_KEY_PATH` | Stage 3 | `credentials/fddapi-service-account.json` | Service account: `franchiseconduit@franchiseconduitfddapi.iam.gserviceaccount.com` |
| `RESEND_API_KEY` | Stage 7 | — | From resend.com dashboard |
| `EMAIL_FROM` | Stage 7 | — | e.g. noreply@franchiseconduit.com — domain must be verified in Resend |
| `ADVISOR_EMAIL` | Stage 7 | — | Waypoint advisor notification inbox |

---

## GIT COMMIT LOG

| Date | Stage | Step | Commit Message |
|------|-------|------|----------------|
| April 2026 | Stage 1 | Complete | `stage-1: complete — platform brief + stage docs written` |
| April 2026 | Stage 0 | Complete | `stage-0: complete — palette locked (grounded modern, warm stone + deep teal)` |
| April 2026 | Stage 2 | Complete | `stage-2: complete — palette tokens, types, nav, fonts, brand JSONs updated, build passing (59/59)` |

---

## KNOWN ISSUES / BLOCKERS

| Date | Issue | Status | Stage |
|------|-------|--------|-------|
| April 2026 | Advisor email not provided — Stage 7 email routes cannot be finalized | ⚠️ Open | Stage 7 |
| April 2026 | **FDD renewal cycle** — 2026 FDDs valid now but will be superseded in ~30 days as brands refile. Use 2026 data to build now. Kelsey will manually trigger brand page rebuilds when 2027 versions of these brands appear. Do not auto-replace 2026 with 2027 without Kelsey's instruction. | ⚠️ Monitor | Stage 3 ongoing |
| April 2026 | **FDD source** — 2027 folder has ~65 current filings. 2026 folder has ~115 pre-renewal filings. Gold standard pages built from 2027 first. Scale to 2026 brands after. | ℹ️ Context | Stage 3 |

---

## CLIENT INPUTS RECEIVED

| Item | Status | Notes |
|------|--------|-------|
| Strategic brief (audience, model, voice) | ✅ Complete | April 2026 |
| GitHub repo access (token provided) | ✅ Active | `Franscale1922/franchise-conduit` |
| Palette direction | ✅ Locked | Grounded Modern light mode |
| FDD catalog | ✅ Confirmed | 2027 folder (~65 brands, current filings) + 2026 folder (~115 brands, pre-renewal). Path: /Users/kelseystuart/Projects/Franchise\ Conduit/FDDs/ |
| Gold standard brand selection | ✅ Updated | Fish Window Cleaning, Express Employment Professionals, FirstLight Home Care — all have complete data from sheet sync |
| FDD renewal protocol | ✅ Understood | 2026 FDDs valid, will be replaced manually by Kelsey when 2027 versions appear |
| Advisor email for lead routing | ❌ Pending | Blocking Stage 7 |
| Waypoint team headshots | ❌ Pending | Needed for /about — initials used as placeholder |
| CRM integration decision | ❌ Pending | Stage 7 email-only vs. CRM |
| DNS access (registrar + Vercel domain setup) | ❌ Pending | Stage 10 |

---

## HOW AGENTS UPDATE THIS FILE

At the end of every committed step in a stage:

1. Update `CURRENT STATE` — active stage, status, last commit, last updated
2. Add a row to `GIT COMMIT LOG`
3. Update `STAGE COMPLETION STATUS` — change status to `In progress` or `Complete`
4. Update `ENVIRONMENT VARIABLES LOG` if new vars were added
5. Update `KNOWN ISSUES` if anything was discovered
6. Move resolved items from `OPEN DECISIONS` to `DECISIONS LOG` in PLATFORM_BRIEF.md
7. Commit this file together with the stage work:
   ```bash
   git add .
   git commit -m "stage-N: step M — description"
   git push origin main
   ```
