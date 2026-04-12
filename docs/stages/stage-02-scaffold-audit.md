# Stage 2 — Scaffold Audit & Structural Alignment

**Stage:** 2 of 10
**Phase:** Foundation
**Depends on:** Stage 0 (Design Direction locked), Stage 1 (docs complete)
**Feeds into:** Stages 3–10 — all future stages build on top of this scaffold

---

## 1. Goal

Audit the existing Next.js codebase against the revised platform strategy and align it before any new feature work begins.

The existing repo has a solid Sprint 1/2 scaffold built to a prior design brief. This stage:
1. Reviews every existing file against the new platform strategy
2. Updates the design token system in `globals.css` if the palette direction requires changes
3. Ensures `lib/types.ts`, `lib/data.ts`, and `lib/constants.ts` are structured correctly for what's being built
4. Ensures `npm run build` passes with 0 errors before new work begins

**This stage does NOT add new pages.** It aligns the existing foundation.

**Definition of "good":** An agent reading the codebase after this stage is complete can immediately build new features without encountering structural inconsistencies or outdated patterns.

---

## 2. Audit Checklist

### 2a. Design System (globals.css)

Palette direction must be confirmed (Stage 0) before touching globals.css.

- [ ] **Option A (Stay Dark):** Review existing tokens. No changes to color variables. Add `--color-warm-text` tokens for improved body readability if needed.
- [ ] **Option B (Hybrid):** Add light-section surface tokens (`--color-bg-light`, `--color-surface-light`, `--color-text-on-light`). Keep dark tokens for hero sections.
- [ ] **Option C (Light Mode):** Full token replacement — replace all dark surface tokens with warm light equivalents. Update all component files that reference dark surface tokens.

Regardless of palette direction:
- [ ] Verify DM Serif Display and Inter are loading correctly via `next/font/google` in `layout.tsx`
- [ ] Verify all spacing, grid, and animation tokens are present
- [ ] Ensure no hardcoded hex values exist in component files — all must use CSS custom properties

### 2b. Type System (lib/types.ts)

- [ ] Review `Franchise` interface — confirm all fields map to what the FDD pipeline (Stage 3) will produce
- [ ] Add `completeness_state: 'complete' | 'partial' | 'stub'` field to the Franchise interface
- [ ] Confirm `BusinessModel`, `InvestmentTier`, `OwnerArchetype`, `RevenuePattern` union types are appropriate
- [ ] No `any` types anywhere in the codebase

### 2c. Data Layer (lib/data.ts)

- [ ] Review all data helpers — confirm they match the revised Franchise interface
- [ ] Ensure collection helpers work correctly
- [ ] Verify formatters (currency, percentage, etc.) are present

### 2d. Constants (lib/constants.ts)

- [ ] All user-facing strings should live here — audit for any hardcoded copy in component files
- [ ] Add two-layer UX copy constants: Layer 1 billboard text for each homepage section
- [ ] Confirm nav link structure matches current page architecture

### 2e. Existing Pages — Tone Audit

Review each built page for alignment to the new brand voice. Flag copy that sounds too "investment platform" for the revised "warm, welcoming" tone.

| Page | Tone Alignment | Action Required |
|------|---------------|-----------------|
| `app/page.tsx` | Prior brief — premium/exclusive | Revise in Stage 4 |
| `app/franchises/page.tsx` | Mostly structural | Review copy |
| `app/franchises/[slug]/page.tsx` | Data-heavy — Layer 2 by nature | Keep, review Layer 1 intro section |
| `app/quiz/page.tsx` | Review for warmth | Revise if needed |
| `app/methodology/page.tsx` | Currently thin | Stage 5 |

### 2f. Build Verification

- [ ] `npm install` completes without errors
- [ ] `npm run build` completes with 0 errors
- [ ] `npx tsc --noEmit` completes with 0 type errors
- [ ] `npm run dev` starts on port 3000
- [ ] All existing routes render without 404s or crashes

### 2g. Redirect Map

- [ ] Review `next.config.js` redirect map — confirm all 55+ WordPress category redirects are present
- [ ] Do NOT change any existing redirect entries
- [ ] Document any gaps in PROGRESS.md

---

## 3. Step-by-Step Build

### Step 2.1 — Install and Verify Baseline Build
```bash
cd /Users/kelseystuart/Projects/Franchise\ Conduit/site
npm install
npm run build
npx tsc --noEmit
```
If build fails: log the error in PROGRESS.md under KNOWN ISSUES. Do not proceed until the build is clean.

```
git add .
git commit -m "stage-2: step 2.1 — baseline build verified"
git push
```

### Step 2.2 — Update Design Tokens (palette direction specific)
Based on the Stage 0 decision, update `app/globals.css` with the required token changes. See Section 2a above for what changes by option.

```
git add .
git commit -m "stage-2: step 2.2 — design token alignment [Option A/B/C]"
git push
```

### Step 2.3 — Update lib/types.ts
Add `completeness_state` to the Franchise interface. Review all union types.

```
git add .
git commit -m "stage-2: step 2.3 — types.ts aligned (completeness_state added)"
git push
```

### Step 2.4 — Audit and Update lib/constants.ts
Move any hardcoded copy from component files into constants. Add Layer 1 billboard copy keys.

```
git add .
git commit -m "stage-2: step 2.4 — constants.ts updated, hardcoded copy removed"
git push
```

### Step 2.5 — Final Build Verification
```bash
npm run build
npx tsc --noEmit
```
Both must pass with 0 errors.

```
git add .
git commit -m "stage-2: complete — scaffold aligned, build passing"
git push
```

---

## 4. Quality Standards

### Code Standards
- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes with 0 errors
- [ ] No `any` types in codebase
- [ ] No hardcoded hex values in component files
- [ ] No hardcoded user-facing strings in component files

### Architecture Standards
- [ ] `lib/types.ts` has `completeness_state` field
- [ ] All data helpers in `lib/data.ts` match the revised Franchise interface
- [ ] `next.config.js` redirect map is unmodified and complete

---

## 5. Definition of Done

- [ ] `npm install` runs without errors
- [ ] `npm run build` passes with 0 errors
- [ ] `npx tsc --noEmit` passes with 0 errors
- [ ] Design tokens updated per Stage 0 direction
- [ ] `lib/types.ts` includes `completeness_state`
- [ ] No hardcoded copy in component files
- [ ] All existing routes render without 404s on `npm run dev`
- [ ] PROGRESS.md updated — Stage 2 marked `Complete`

---

## 6. Forward Dependencies

### Stage 3 (FDD Pipeline) needs:
- `lib/types.ts` Franchise interface final and stable
- `lib/data.ts` helpers working
- `npm run build` passing

### All future stages need:
- Design tokens stable in `globals.css` — do not change token names after Stage 2
- TypeScript path alias `@/*` configured correctly
- `lib/constants.ts` pattern — add keys, never rename or delete existing ones

---

## 7. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 2 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 2 of 10 — Scaffold Audit & Structural Alignment

FIRST: Read PROGRESS.md at the repo root.
       Confirm Stage 0 (Design Direction) is marked Complete.
       If Stage 0 is not complete — STOP. Do not proceed.

THEN: Read PLATFORM_BRIEF.md in full.
      Read docs/stages/stage-02-scaffold-audit.md in full.

EXECUTE each step in Section 3 in order.
After every step: git add . → git commit → git push → update PROGRESS.md.

Do not add new pages. Do not change the redirect map in next.config.js.
Only align existing code to the new strategy.

Report completion against every item in Section 5 (Definition of Done).
When done: update PROGRESS.md → Stage 2 Complete.
```
