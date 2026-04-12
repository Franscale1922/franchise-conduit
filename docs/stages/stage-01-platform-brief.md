# Stage 1 — Platform Brief & Stage Document Library

**Stage:** 1 of 10
**Phase:** Foundation
**Depends on:** Nothing (documentation only — no palette decision required)
**Feeds into:** All subsequent stages

---

## 1. Goal

This stage produces the authoritative planning layer for the entire FC build:

1. `PLATFORM_BRIEF.md` — rewritten to reflect the April 2026 strategy (✅ complete as of this document's creation)
2. `docs/stages/` — all 10 stage documents written, defining "good" for each stage
3. `PROGRESS.md` — initialized as the living tracker for all build sessions

This stage is documentation and planning, not code. No frontend files are changed.

**Definition of "good" for this stage:** Every downstream build session can start by reading PLATFORM_BRIEF.md + the relevant stage document and have everything needed to execute without ambiguity.

---

## 2. What This Stage Produces

| Output | Status |
|--------|--------|
| `PLATFORM_BRIEF.md` v2.0 | ✅ Written April 2026 |
| `PROGRESS.md` | ✅ Written April 2026 |
| `docs/stages/stage-00-design-direction.md` | ✅ Written April 2026 |
| `docs/stages/stage-01-platform-brief.md` (this file) | ✅ Written April 2026 |
| `docs/stages/stage-02-scaffold-audit.md` | ✅ Written April 2026 |
| `docs/stages/stage-03-fdd-pipeline.md` | ✅ Written April 2026 |
| `docs/stages/stage-04-homepage.md` | ✅ Written April 2026 |
| `docs/stages/stage-05-education-pages.md` | ✅ Written April 2026 |
| `docs/stages/stage-06-browse-and-search.md` | ✅ Written April 2026 |
| `docs/stages/stage-07-lead-capture.md` | ✅ Written April 2026 |
| `docs/stages/stage-08-resources.md` | ✅ Written April 2026 |
| `docs/stages/stage-09-qa-seo-audit.md` | ✅ Written April 2026 |
| `docs/stages/stage-10-dns-cutover.md` | ✅ Written April 2026 |

---

## 3. Quality Standards for Stage Documents

Every stage document must include:

- [ ] **Goal** — what it delivers and why it matters to the candidate experience
- [ ] **Depends on** — what must be complete before this stage starts
- [ ] **Feeds into** — what future stages need from this stage's outputs (most critical)
- [ ] **Step-by-step build instructions** — precise, ordered, no ambiguity
- [ ] **Quality standards** — visual, code, and performance checklists
- [ ] **Definition of Done** — every item must be verified before the stage closes
- [ ] **Agent kick-off prompt** — paste-ready, self-contained session starter

---

## 4. Definition of Done

- [ ] PLATFORM_BRIEF.md is written and reflects the April 2026 strategy
- [ ] PROGRESS.md is initialized
- [ ] All 10 stage documents exist in `docs/stages/`
- [ ] Each stage document meets the quality standards in Section 3
- [ ] `git push` completed with commit message `stage-1: complete — platform brief + stage docs`
- [ ] PROGRESS.md updated — Stage 1 marked `Complete`
