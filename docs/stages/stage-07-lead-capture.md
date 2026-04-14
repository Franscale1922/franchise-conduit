# Stage 7 — Lead Capture & CRM Integration

**Stage:** 7 of 10
**Phase:** Conversion
**Depends on:** Stages 4 and 5 (homepage and education pages live — trust established before asking)
**Feeds into:** Stage 9 (QA verifies end-to-end lead flow before launch)

---

## 1. Goal

Build every lead capture surface on the platform and connect them to Waypoint's workflow.

A lead capture surface is any point where a candidate exchanges their contact information. There are four distinct surfaces:

1. **The Quiz** (/quiz) — highest-intent, longest form, best leads
2. **The Contact Form** (/contact) — direct advisor conversation request
3. **Brand Introduction Request** — from brand detail pages
4. **FDD Request** — gated content on brand detail pages

**Definition of "good":** A candidate submits a form. A Waypoint advisor receives an email (or CRM entry) within 60 seconds with enough context to have an intelligent first conversation. The candidate receives a confirmation that feels warm and personal — not like a form autoresponder.

---

## 2. The Quiz — /quiz

The quiz is the highest-conversion entry point. It's a 5–7 question intake that:
1. Qualifies the candidate (budget, background, goals)
2. Surfaces 3–5 matched brand recommendations
3. Invites the candidate to book an advisor call

**Layer 1 framing:** "4 minutes. A shortlist built for you."
**Layer 2:** The actual questions are substantive — they generate real matching data.

### Quiz Questions (proposed — adjust based on Waypoint's actual intake criteria)
1. "What's your liquid capital available to invest?" (Range selector)
2. "Which best describes your work background?" (Corporate / Blue-collar trades / Healthcare / Education / Military / Other)
3. "How involved do you want to be day-to-day?" (Fully involved / Hybrid / Minimal — manager model)
4. "Which industries interest you most?" (Multi-select from 12 categories)
5. "What state are you looking to operate in?" (Dropdown)
6. "What's your primary goal?" (Income replacement / Wealth building / Legacy / Portfolio expansion)
7. "Optional: What's your timeline to make a decision?" (3 months / 6 months / 1 year / Just exploring)

### Quiz Results Page
After submission:
- Show 3–5 brand recommendations based on answers (matched from available brands + filters)
- Each recommendation shows: brand card + simple "why this matches you" sentence
- Primary CTA: "Talk to an advisor about these options" (opens/links to contact form with quiz results pre-populated)
- Secondary: Continue browsing

### Quiz → Lead Routing
Quiz submission must:
1. Send an email to the Waypoint advisor inbox with: candidate name, email, all quiz answers, matched brands
2. (Optional Phase 2): Write to a CRM (HubSpot, Salesforce, or equivalent) via API
3. Display the warm confirmation message: "We've reviewed your profile and will be in touch within 1 business day."

---

## 3. Contact Form — /contact

### Layer 1
```
H1: "Let's talk about what's next"
Subhead: "No pitch. No pressure. Just a real conversation with someone who knows this path."
```

### Form Fields
- Full Name
- Email Address
- Phone (optional)
- "What would you like to talk about?" (Free text / optional dropdown: Start exploring / Specific brand / Quiz results / Other)
- "How did you hear about us?" (optional)

### Confirmation
Warm, personal-feeling auto-response email:
"Thanks [Name] — I'll be in touch within 1 business day. If you have anything else you want me to know before we talk, just reply to this email. — [Advisor name]"

---

## 4. Brand Introduction Request

On every brand detail page, the sidebar/bottom CTA:

**"Interested in [Brand Name]?"**
- Primary button: "Talk to an advisor about this brand" → opens contact form with brand name pre-filled
- Secondary link: "Request the FDD" → opens FDD request modal

### FDD Request Gate
When a candidate requests an FDD:
- Simple modal: Name + Email + "Which state are you in?" (for territory check)
- On submit: Send them the FDD (if hosted) or log the request for an advisor to follow up
- Log in same system as contact form submissions

---

## 5. Technical Implementation

### Email Delivery
Use **Resend** (same as BizConnect Caribbean pattern).
- `RESEND_API_KEY` environment variable
- `EMAIL_FROM`: `noreply@franchiseconduit.com` (domain must be verified in Resend)
- `ADVISOR_EMAIL`: Waypoint advisor inbox (environment variable — not hardcoded)

### Form Handling
API route: `app/api/contact/route.ts`
API route: `app/api/quiz/route.ts`
API route: `app/api/fdd-request/route.ts`

All routes must:
- Validate required fields (return 400 with specific error if missing)
- Send advisor notification email
- Send candidate confirmation email
- Return 500 with generic "Something went wrong" if Resend fails (never expose raw errors)

### Spam Protection
Add honeypot field to all forms (hidden input that real users don't fill — bots do).
Optionally add rate limiting (1 submission per email per 24 hours).

---

## 6. Step-by-Step Build

### Step 7.1 — Provision Resend and set up environment variables
Configure `RESEND_API_KEY`, `EMAIL_FROM`, `ADVISOR_EMAIL` in Vercel environment.
Verify domain in Resend dashboard.

```
git commit -m "stage-7: step 7.1 — Resend configured, domain verified"
```

### Step 7.2 — Build /contact page + API route
Contact form → sends advisor notification + candidate confirmation.

```
git commit -m "stage-7: step 7.2 — /contact page and API route complete"
```

### Step 7.3 — Build /quiz flow
Multi-step quiz, results page, quiz submission API route.

```
git commit -m "stage-7: step 7.3 — /quiz flow complete"
```

### Step 7.4 — Build brand introduction request CTA
Sidebar CTA on brand detail pages pre-populating contact form with brand name.

```
git commit -m "stage-7: step 7.4 — brand introduction CTA complete"
```

### Step 7.5 — Build FDD request modal
Simple 3-field modal → logs request to advisor inbox.

```
git commit -m "stage-7: step 7.5 — FDD request modal complete"
```

### Step 7.6 — End-to-end validation
Submit a test lead through each of the 4 surfaces.
Verify advisor receives notification for each within 60 seconds.
Verify candidate receives confirmation for each.

```
git commit -m "stage-7: complete — all 4 lead capture surfaces validated end-to-end"
```

---

## 7. Quality Standards

### Lead Quality
- [ ] Quiz submission email to advisor includes all 7 question answers
- [ ] Contact form email to advisor includes all form fields
- [ ] Brand introduction request includes the brand name and candidate info
- [ ] FDD request includes brand name, candidate email, state

### Candidate Experience
- [ ] Confirmation message is warm and personal — not generic autoresponder language
- [ ] Quiz results show 3–5 real matched brands (not random or placeholder)
- [ ] Contact form success state is clear (not just "form submitted")

### Technical
- [ ] All API routes return 400 on validation failure with a human-readable error
- [ ] All API routes return 500 on Resend failure with generic message
- [ ] Honeypot field on all forms
- [ ] Environment variables documented in PROGRESS.md
- [ ] `npm run build` passes with 0 errors

---

## 8. Definition of Done

- [ ] All 4 lead capture surfaces built and functional
- [ ] End-to-end test: Waypoint advisor receives notification for each surface
- [ ] End-to-end test: Candidate receives confirmation for each surface
- [ ] A test lead submitted via the quiz produces a matched brand shortlist
- [ ] Resend domain verified, no deliverability issues
- [ ] `npm run build` passes with 0 errors
- [ ] PROGRESS.md updated with all new environment variables
- [ ] PROGRESS.md — Stage 7 marked `Complete`

---

## 9. Forward Dependencies

### Stage 9 (QA) needs:
- All 4 lead capture surfaces functional before final audit
- Advisor notification email content reviewed pre-launch

---

## 10. Client Requirements (Blocking)

| Item | Who Provides | Notes |
|------|-------------|-------|
| Advisor email address for notifications | Kelsey / Waypoint | Cannot build email routes without this |
| `franchiseconduit.com` DNS access | Kelsey | Required to verify domain in Resend |
| Quiz question review + approval | Kelsey | Questions drive matching — must be accurate |
| CRM details (if Phase 1 includes CRM) | Kelsey | HubSpot/Salesforce/Pipedrive — optional at launch |

---

## 11. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 7 BUILD SESSION
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 7 of 10 — Lead Capture & CRM Integration

PRE-FLIGHT CHECKS (do all of these before writing a single line of code):
1. Read PROGRESS.md in full — confirm Stages 4 and 5 are marked Complete. If not — STOP.
2. Read the KNOWN ISSUES section of PROGRESS.md — there may be Stage 7 specific notes.
3. Read the OPEN DECISIONS section — confirm ADVISOR_EMAIL is provided.
   If advisor email is not provided — build forms and UI but stub email delivery. Do not halt.
4. Read the ENVIRONMENT VARIABLES LOG — confirm which env vars are already set.
5. Run: git status — confirm working tree is clean before starting.
6. Check if any routes already exist: app/quiz/, app/contact/, app/api/contact/, app/api/quiz/
   Read any existing files fully before modifying or replacing them.

READ: PLATFORM_BRIEF.md — Sections 1 and 3 (candidate voice guides form copy)
READ: docs/stages/stage-07-lead-capture.md in full — especially Section 10 (Client Requirements)

The quiz is the primary lead capture surface — build it first.
Candidate confirmation emails must feel personal and warm — not generic.

Execute steps 7.1 through 7.6 in order.
git commit after every step with message format: "stage-7: step 7.X — description"
Do a real end-to-end test submission for each surface before marking done.

Log any new environment variables to PROGRESS.md before committing.
When done: update PROGRESS.md → Stage 7 Complete.
```
