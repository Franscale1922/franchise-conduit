# Stage 0 — Design Direction

**Stage:** 0 of 10
**Phase:** Pre-Build Decision Gate
**Depends on:** Nothing — this is the first gate
**Feeds into:** Stage 2 (Scaffold Audit) — all visual work is blocked until this stage is complete

---

## 1. Goal

Lock the visual palette and tone direction for the platform before any code changes are made to `globals.css`, component files, or page layout.

The existing codebase uses a dark-mode-only palette (`#080C18` background) that was designed to position FC as a "dark premium investment platform" — similar to Yieldstreet, Cadre, or Brex. The revised strategy calls for "warm, welcoming, educational." These are not necessarily incompatible, but the tension must be resolved deliberately before a single frontend line is changed.

**This stage produces one output:** A locked palette direction decision, documented in PLATFORM_BRIEF.md Section 4 and Section 7.

---

## 2. The Three Options

### Option A — Stay Dark
Keep `#080C18` background and the existing dark design system. Adjust warmth exclusively through copy, imagery, and softened section spacing. No design system rebuild required.

**Pros:** Fast. Existing code is usable as-is for visual structure.
**Cons:** Dark mode reads "exclusive" and "premium" at first glance — this may create a tone mismatch with "warm, welcoming, educational." The FC candidate (40–60, first-time business owner) may not self-identify with a Yieldstreet-style interface.

### Option B — Hybrid (Recommended)
Dark header/hero section for authority and first impression. Light background (`#F8F7F4` or similar warm white) for all content sections. The candidate's eye enters on strength and stays in warmth.

This pattern is used by Stripe, Linear, Notion, and dozens of high-trust modern platforms. It reconciles "authoritative" with "approachable" without picking one.

**Pros:** Best of both. Leverages existing dark tokens for hero. Warm body sections require new surface tokens.
**Cons:** Requires globals.css additions (new surface tokens for light sections) and conditional section backgrounds throughout pages.

### Option C — Full Light Mode
Complete redesign to a light, warm palette. Probably a warm off-white base (`#FAF9F6`), accessible contrast, and teal primary. Most aligned to "warm, welcoming" intent.

**Pros:** Strongest alignment to the new brand voice. Clearest differentiator from FC's old positioning.
**Cons:** Largest upfront design work. The existing dark-surface CSS tokens would need replacement or parallel light tokens throughout the codebase.

---

## 3. Recommendation

**Option B — Hybrid.** The FC candidate respects credibility. A dark hero communicates "this is serious, this is professional, you are in the right place." A warm light body communicates "and we're going to walk you through this without pressure." The transition from dark hero to light body is a common and proven structural pattern.

When this decision is made, update:
1. PLATFORM_BRIEF.md Section 4 — replace the ⚠️ OPEN DECISION block with the confirmed palette
2. PLATFORM_BRIEF.md Section 7 — add decision log entry
3. `docs/stages/stage-02-scaffold-audit.md` — note which CSS token changes are required

---

## 4. Definition of Done

- [ ] Kelsey has selected Option A, B, or C
- [ ] PLATFORM_BRIEF.md Section 4 reflects the decision (⚠️ block replaced with confirmed tokens)
- [ ] PLATFORM_BRIEF.md Section 7 has a new decision log entry
- [ ] Stage 2 scaffold audit doc updated with palette change scope
- [ ] PROGRESS.md updated — Stage 0 marked `Complete`

---

## 5. Forward Dependencies

### Stage 2 (Scaffold Audit) needs:
- Confirmed palette direction to scope the globals.css changes

### ALL visual stages need:
- Palette locked before any frontend build work begins
- This stage has no code outputs — only a decision

---

## 6. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 0 DECISION SESSION
=============================================
This is NOT a build session. This is a decision gate.

Read PLATFORM_BRIEF.md, Section 4 (Design System).
Read docs/stages/stage-00-design-direction.md in full.

Present the three palette options (A, B, C) to Kelsey clearly.
Wait for a direction decision.

When Kelsey selects an option:
1. Update PLATFORM_BRIEF.md Section 4 — replace the ⚠️ OPEN DECISION block with the confirmed palette tokens
2. Add a new row to PLATFORM_BRIEF.md Section 7 (Decisions Log) documenting the choice and rationale
3. Update PROGRESS.md — Stage 0: Complete, [date]
4. git add . → git commit -m "stage-0: design direction locked — Option [A/B/C]" → git push

Do not make any other changes.
```
