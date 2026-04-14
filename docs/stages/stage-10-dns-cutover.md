# Stage 10 — DNS Cutover & Migration

**Stage:** 10 of 10
**Phase:** Launch
**Depends on:** Stage 9 fully passed and approved by Kelsey
**Feeds into:** 30-day post-launch monitoring

---

## 1. Goal

Safely migrate `franchiseconduit.com` from WordPress to the Next.js platform without losing a single point of domain authority.

This is not a build stage. It is an operations stage. The platform is already built. This stage is about moving traffic from the old site to the new site in a controlled, verified way.

**Definition of "good":** 30 days post-cutover, GSC shows no 404 spikes. DA is maintained or growing. Organic traffic is stable or increasing on the migrated routes.

---

## 2. Pre-Cutover Requirements (must be true before touching DNS)

- [ ] Stage 9 fully complete and approved
- [ ] Next.js app deployed to Vercel production environment
- [ ] Vercel preview URL tested and passing (full Stage 9 checklist re-run on the production Vercel URL)
- [ ] All "must exist before cutover" pages are live (PLATFORM_BRIEF.md Section 9d)
- [ ] Redirect map in `next.config.js` verified clean (Stage 9 redirect audit)
- [ ] GSC new property set up for franchiseconduit.com (verify ownership via TXT record before cutover)
- [ ] WordPress site backed up (database + files)
- [ ] Vercel domain settings configured: `franchiseconduit.com` and `www.franchiseconduit.com` added to project
- [ ] SSL certificate provisioned on Vercel

---

## 3. Cutover Day Sequence

Execute steps in order. Do not skip.

### Step 10.1 — Final verification on Vercel production URL
Visit every page via the Vercel preview URL. Confirm they render. Confirm no console errors.
This is the last check before traffic hits the site.

### Step 10.2 — Schedule the cutover
Cut DNS during low-traffic hours (weekday evening, 9–11pm local time).
Inform Kelsey of the planned cutover window — someone with DNS access must be available.

### Step 10.3 — DNS update
At the registrar (where franchiseconduit.com DNS is managed):
- Update A record to point to Vercel's IP: `76.76.21.21`
- Update CNAME for `www` to: `cname.vercel-dns.com`
- Set TTL to 300 (5 minutes) before cutover so changes propagate fast

### Step 10.4 — Monitor propagation
Use `dig franchiseconduit.com +short` to verify propagation.
DNS typically propagates within 5–30 minutes with a 5-min TTL.

### Step 10.5 — First post-cutover verification
Visit `https://franchiseconduit.com` and verify:
- [ ] Site loads (no WordPress)
- [ ] SSL is active (padlock in browser)
- [ ] Homepage renders correctly
- [ ] Visit 5 redirected WordPress URLs — confirm they 301 to the correct Next.js route
- [ ] Submit a test lead via the quiz — confirm advisor receives notification

### Step 10.6 — Submit sitemap to GSC
Log into Google Search Console → the franchiseconduit.com property.
Submit: `https://franchiseconduit.com/sitemap.xml`

### Step 10.7 — GSC Change of Address (if applicable)
If using the same GSC property as the WordPress site:
GSC → Settings → Change of Address — not applicable here since domain doesn't change.
If new GSC property is being used: verify ownership and submit sitemap.

### Step 10.8 — Set TTL back to 3600 (1 hour)
Once DNS is confirmed propagated and site is verified live, restore TTL to 3600.

---

## 4. 30-Day Post-Launch Monitoring

| Week | Action |
|------|--------|
| Day 1 | Verify GSC is indexing new URLs. Check Coverage report. Log any errors. |
| Week 1 | Monitor GSC daily — watch for 404 spikes. Fix any discovered immediately. |
| Week 1 | Run Screaming Frog crawl on live domain. Verify zero 404s. |
| Week 2 | Check GSC for crawl coverage improvements. Note which pages are indexed. |
| Month 1 | Pull DA report from Moz. Compare to pre-cutover baseline. |
| Month 1 | Run Screaming Frog again. Resolve any redirect chains > 2 hops discovered post-launch. |
| Month 3 | Full organic traffic comparison: GSC clicks 30 days post-launch vs. baseline period. |

---

## 5. Rollback Plan

If something critical breaks during or after cutover:

**Rollback option A (DNS):** Revert DNS A record to point back to the WordPress hosting IP.
- TTL must be low (300) during cutover window for fast rollback
- WordPress backup must be intact and the WP server must still be running during the cutover window

**Rollback trigger:** Use rollback if:
- The Next.js app is returning 500 errors site-wide
- Lead capture is completely broken
- More than 5% of tested redirect destinations are 404ing

**Rollback timeline:** Within 30 minutes of discovering a critical issue, DNS should be reverted.

---

## 6. Definition of Done

- [ ] `franchiseconduit.com` points to Vercel and loads the Next.js app
- [ ] SSL active (HTTPS with padlock)
- [ ] Site loads under 3 seconds on desktop (Lighthouse or GTmetrix)
- [ ] 5 tested WordPress redirect URLs correctly 301 to their Next.js destinations
- [ ] Quiz lead submitted and received by advisor
- [ ] Sitemap submitted to GSC
- [ ] Day-1 GSC Coverage report shows no unexpected errors
- [ ] PROGRESS.md — Stage 10 marked `Complete`, cutover date and time logged
- [ ] WordPress backup confirmed intact (do not decommission WP server for 30 days)

---

## 7. Post-Launch Handover Notes

When Stage 10 is complete:
- WordPress server should remain live (not decommissioned) for 30 days as failsafe
- All environment variables on Vercel should be documented in PROGRESS.md
- Kelsey should be provided the Vercel project URL and dashboard access
- GitHub repo (`Franscale1922/franchise-conduit`) is the source of truth going forward
- Future brand additions: add brand JSON to `data/brands/` → push → Vercel auto-deploys

---

## 8. Agent Kick-Off Prompt

```
FRANCHISE CONDUIT — STAGE 10 — DNS CUTOVER
==========================================
Project: FranchiseConduit.com rebuild (Next.js 14)
Repo: /Users/kelseystuart/Projects/Franchise Conduit/site
Stage: 10 of 10 — DNS Cutover & Migration

PRE-FLIGHT CHECKS (do ALL of these before touching DNS — no exceptions):
1. Read PROGRESS.md in full — confirm Stage 9 is marked Complete AND Kelsey's approval is recorded.
   If Stage 9 is not complete, or Kelsey's approval is not recorded — STOP. Do not proceed.
2. Read the KNOWN ISSUES section of PROGRESS.md — resolve any open issues before cutover.
3. Read the ENVIRONMENT VARIABLES LOG — confirm all Vercel production env vars are set.
4. Run: git status — confirm working tree is clean with no uncommitted changes.
5. Confirm Kelsey (or someone with DNS registrar access) is physically available during the cutover window.
6. Confirm WordPress backup is complete and the WP server is still running and reachable.
7. Verify every item in Section 2 (Pre-Cutover Requirements) is true before Step 10.1.

READ: PLATFORM_BRIEF.md Section 9 — Migration Architecture (read entirely)
READ: docs/stages/stage-10-dns-cutover.md — Section 2 (pre-cutover requirements) first, then full doc

Execute Section 3 (Cutover Day Sequence) — steps 10.1 through 10.8 — in strict order.
Do not skip or reorder any step.

After cutover, run the 30-day monitoring schedule in Section 4.
Log weekly check-ins in PROGRESS.md under KNOWN ISSUES.

When done: update PROGRESS.md → Stage 10 Complete, cutover timestamp logged.
```
