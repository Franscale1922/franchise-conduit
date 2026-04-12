# FranchiseConduit — Claude FDD Extraction Skill
## Version 1.0 | April 2026

---

## INSTRUCTIONS FOR USE

1. Start a new Claude conversation (claude.ai)
2. Paste this entire prompt
3. Attach the FDD PDF file
4. Claude will return a tab-separated row ready to paste into the Google Sheet
5. Paste into the next empty row in the sheet
6. Review highlighted cells (Claude will flag uncertainty)
7. Run: `node data/scripts/sync_from_sheet.js --brand "Brand Name"`

---

## PROMPT TO PASTE INTO CLAUDE

---

You are a franchise disclosure document (FDD) analyst for FranchiseConduit.com. I am attaching an FDD PDF. Extract specific data fields and return them as a **single tab-separated row** to paste into a Google Sheet.

---

### OUTPUT RULES (read before extracting anything)

1. Return ONLY the tab-separated data row. No headers. No explanation. No markdown.
2. One value per field, separated by tab characters.
3. Use empty string `""` — or just leave the tab gap — for any field you cannot find.
4. Add `?` to the end of any value you are uncertain about (e.g. `245000?`).
5. **Numbers:** integers or decimals only — no `$`, no `%`, no commas. Example: `245000` not `$245,000`.
6. **Booleans:** use exactly `true` or `false` — never Yes/No, never 1/0.
7. **Lists:** comma-separated values, no brackets, no quotes. Example: `TX,FL,CA` not `["TX","FL","CA"]`.
8. **Enums:** use ONLY the exact values listed below — no variations, no capitalization differences.

---

### CONTROLLED VOCABULARIES — USE EXACT VALUES ONLY

**business_model** — pick exactly one:
- `owner-operator` — requires owner to work in the business daily
- `semi-absentee` — owner manages a manager, works 10-20 hrs/week or less
- `manager-model` — owner is fully executive, a hired manager runs operations daily
- `passive` — investment model, minimal owner involvement

**investment_tier** — pick exactly one based on investment_min:
- `$100K-$249K` — if investment_min is under $250,000
- `$250K-$499K` — if investment_min is $250,000–$499,999
- `$500K-$999K` — if investment_min is $500,000–$999,999
- `$1M+` — if investment_min is $1,000,000 or more

**territory_type** — pick exactly one:
- `exclusive` — franchisee has an exclusive territory, no other units can open within it
- `protected` — some protection but not fully exclusive
- `open` — no territory protection

**brand_maturity** — pick exactly one based on year_franchising_began:
- `emerging` — began franchising less than 5 years ago
- `growth` — began franchising 5–10 years ago
- `established` — began franchising more than 10 years ago

**target_customer** — pick exactly one:
- `b2b` — sells primarily to businesses
- `b2c` — sells primarily to consumers
- `mixed` — significant revenue from both

**revenue_pattern** — pick exactly one:
- `recurring` — subscription, membership, scheduled repeat service (mowing, cleaning, etc.)
- `repeat-transactional` — repeat customers but no subscription (e.g. restaurants, retail)
- `project-based` — one-time or irregular projects (restoration, painting, etc.)
- `mixed` — meaningful mix of recurring and project-based

**completeness_state** — pick exactly one:
- `complete` — you filled in all required fields with high confidence
- `partial` — some required fields are blank or uncertain (marked with ?)

**industry_primary** — pick exactly one:
- `Home Services`
- `Senior Care & Home Health`
- `Health & Wellness`
- `Business Services`
- `Food & Beverage`
- `Education & Learning`
- `Fitness & Sports`
- `Beauty & Personal Care`
- `Pets`
- `Restoration & Remediation`
- `Property Services`
- `Retail`
- `Staffing & Recruiting`
- `Technology`
- `Travel & Hospitality`

**owner_profile_archetypes** — pick one or more, comma-separated:
- `corporate-exit` — leaving a corporate career, first business
- `investor` — deploying capital, wants ROI with low involvement
- `operator` — wants to run the business hands-on
- `second-career` — retirement-age pivot, lifestyle focus

**lifestyle_fit_tags** — pick all that genuinely apply, comma-separated:
- `flexible-hours`
- `home-based`
- `low-overhead`
- `community-focused`
- `mission-driven`
- `repeat-customers`
- `scalable`
- `passive-income`
- `high-touch-sales`
- `service-business`
- `b2b-relationships`
- `executive-friendly`

**available_states** — comma-separated uppercase 2-letter state codes, or:
- `all` — if the franchise is available nationwide without restrictions

---

### FIELDS TO EXTRACT (52 fields, in this exact order)

| # | Field | Where to find it | Notes |
|---|-------|-----------------|-------|
| 1 | brand_name | Cover page | Exact legal franchise name |
| 2 | investment_min | Item 7 | Minimum total initial investment — number only, no $ or commas |
| 3 | investment_max | Item 7 | Maximum total initial investment — number only |
| 4 | cash_required_min | Item 7 or Item 5 | Minimum liquid capital/cash required — number only |
| 5 | franchise_fee | Item 5 | Initial franchise fee — number only, use standard fee if range |
| 6 | royalty_rate | Item 6 | Ongoing royalty % — number only (e.g., 6 for 6%, not 0.06) |
| 7 | unit_count_total | Item 20 | Total outlets as of most recent fiscal year end |
| 8 | year_founded | Item 1 | Year company was founded |
| 9 | year_franchising_began | Item 1 | Year franchising began |
| 10 | industry_primary | Item 1 / cover | Best-fit from: Home Services, Senior Care & Home Health, Health & Wellness, Business Services, Food & Beverage, Education & Learning, Fitness & Sports, Beauty & Personal Care, Pets, Restoration & Remediation, Property Services, Retail |
| 11 | business_model | Item 12 / general | One of: owner-operator, semi-absentee, manager-model, passive |
| 12 | avg_unit_volume | Item 19 | Average annual gross revenue per unit — number only. Leave blank if Item 19 not available |
| 13 | item_19_available | Item 19 | true or false |
| 14 | available_states | Item 13 | Comma-separated state abbreviations where franchise is available. Use "all" if available nationwide |
| 15 | fbr_satisfaction_score | Item 20 or not in FDD | Leave blank — will be populated separately |
| 16 | entrepreneur_rank | Not in FDD | Leave blank — will be populated separately |
| 17 | tagline | Item 1, website, or generate | ONE sentence: the investor-facing hook. What makes this brand interesting to a buyer. NOT a marketing slogan. Example: "Recurring residential lawn care — semi-absentee model with strong territory exclusivity." |
| 18 | description_short | Item 1, Item 11 | 2-3 sentences. Ownership model + investment thesis. No marketing fluff. For a 45-year-old corporate executive evaluating this as a business. |
| 19 | market_intelligence_insight | Item 1 + your knowledge | 2-3 sentences. Market size, growth rate, tailwind. Cite specific numbers where possible. Why this sector is compelling RIGHT NOW. |
| 20 | net_worth_required | Item 5 | Minimum net worth required — number only |
| 21 | marketing_fee | Item 6 | Marketing/advertising fund % — number only. Leave blank if none. |
| 22 | investment_tier | Derived | One of: $100K-$249K, $250K-$499K, $500K-$999K, $1M+ (based on investment_min) |
| 23 | sba_eligible | Item 10 or general | true or false. true if SBA loans are mentioned as available. |
| 24 | veteran_discount | Item 5 | true or false |
| 25 | territory_type | Item 12 | One of: exclusive, protected, open |
| 26 | home_based | Item 12 | true or false |
| 27 | navigator_score | Leave blank | Will be calculated automatically |
| 28 | item_19_headline | Item 19 | If Item 19 exists: one sentence summarizing the key financial metric. E.g., "Median gross revenue of $892K across 214 reporting units." Leave blank if no Item 19. |
| 29 | breakeven_timeline | Item 7 or general | E.g., "12-18 months" — from FDD if stated, otherwise industry norm estimate |
| 30 | cash_on_cash_return_range | Item 19 | E.g., "18-28%" if calculable from Item 19. Leave blank if not calculable. |
| 31 | unit_growth_rate_yoy | Item 20 | Year-over-year unit growth rate % — calculate from outlet tables if possible |
| 32 | brand_maturity | Item 1 | One of: emerging (< 5 yrs franchising), growth (5-10 yrs), established (10+ yrs) |
| 33 | exec_investor_flag | Item 12 / general | true if the brand is appropriate for a semi-absentee or investor operator (not requires owner presence daily) |
| 34 | semi_absentee_verified | Item 12 / general | true only if the FDD or franchisor explicitly states semi-absentee operation is possible |
| 35 | initial_training_days | Item 11 | Total days of initial training (combine classroom + on-site if split) |
| 36 | ongoing_support | Item 11 | Brief summary: "Field visits, phone support, annual convention, intranet" — comma-separated phrases |
| 37 | marketing_support | Item 11 | true if franchisor provides marketing templates, national advertising, or digital support |
| 38 | franchisee_validation_available | Item 20 | true if the FDD includes a franchisee contact list (almost always true) |
| 39 | target_customer | Item 1 / general | One of: b2b, b2c, mixed |
| 40 | revenue_pattern | General | One of: recurring, repeat-transactional, project-based, mixed |
| 41 | recession_resistant | General | true if the service is essential or historically stable during recessions |
| 42 | lifestyle_fit_tags | General | Comma-separated from: flexible-hours, home-based, low-overhead, community-focused, mission-driven, repeat-customers, scalable, passive-income, high-touch-sales, service-business |
| 43 | owner_profile_archetypes | General | Comma-separated from: corporate-exit, investor, operator, second-career |
| 44 | matching_tags | General | Comma-separated keywords a candidate might search: e.g., "painting, home improvement, recurring revenue, semi-absentee" |
| 45 | brand_logo_emoji | General | Pick one emoji that represents this brand's primary service |
| 46 | industry_secondary | General | Secondary industry tag if applicable. Leave blank if not needed. |
| 47 | completeness_state | Your assessment | complete if you filled all required fields. partial if some fields are blank. |
| 48 | unit_count_us | Item 20 | US-only unit count if different from total |
| 49 | physical_location_required | Item 12 | true if a retail/commercial location is required |
| 50 | financing_available | Item 10 | true if franchisor or affiliated lender offers financing |
| 51 | multi_unit_available | Item 12 | true if multi-unit development agreements are available |
| 52 | fbr_top_200 | Leave blank | Will be populated separately |

---

**Important rules:**
- Numbers only for financial fields — no commas, no dollar signs, no percent signs
- true/false only for boolean fields
- Comma-separated lists for array fields (no brackets, no quotes)
- Leave blank rather than guessing on financial figures you cannot verify
- Add `?` to any value you are uncertain about
- The tagline, description_short, and market_intelligence_insight should be written for a 45-55 year old corporate executive who is educated, financially sophisticated, and self-directed — NOT a first-time entrepreneur reading a brochure

Now extract the data from the attached FDD:

---

## AFTER CLAUDE RESPONDS

1. Copy the tab-separated row
2. Click the next empty row in the Google Sheet
3. Paste (the tabs will auto-fill separate columns)
4. Review columns Q-T (tagline, description_short, market_intelligence_insight) — these are the most important copy fields and may need light editing
5. Review any cells with `?` and correct or research
6. Run: `node data/scripts/sync_from_sheet.js --brand "Brand Name Here"`

---

## COLUMN REFERENCE (for sheet setup)

Columns A–P should already exist in the sheet.
Columns Q–AZ need to be added in order:

| Col | Field |
|-----|-------|
| Q | tagline |
| R | description_short |
| S | market_intelligence_insight |
| T | net_worth_required |
| U | marketing_fee |
| V | investment_tier |
| W | sba_eligible |
| X | veteran_discount |
| Y | territory_type |
| Z | home_based |
| AA | navigator_score |
| AB | item_19_headline |
| AC | breakeven_timeline |
| AD | cash_on_cash_return_range |
| AE | unit_growth_rate_yoy |
| AF | brand_maturity |
| AG | exec_investor_flag |
| AH | semi_absentee_verified |
| AI | initial_training_days |
| AJ | ongoing_support |
| AK | marketing_support |
| AL | franchisee_validation_available |
| AM | target_customer |
| AN | revenue_pattern |
| AO | recession_resistant |
| AP | lifestyle_fit_tags |
| AQ | owner_profile_archetypes |
| AR | matching_tags |
| AS | brand_logo_emoji |
| AT | industry_secondary |
| AU | completeness_state |
| AV | unit_count_us |
| AW | physical_location_required |
| AX | financing_available |
| AY | multi_unit_available |
| AZ | fbr_top_200 |
