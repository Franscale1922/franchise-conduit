/**
 * Franchise Conduit — Core Type Definitions
 * ─────────────────────────────────────────
 * This file is the single source of truth for all franchise data types.
 * The Franchise interface is used to validate brand JSON files at build time.
 *
 * When adding a new field to all brands:
 *   1. Add it here with the appropriate type
 *   2. Add it to BRAND_TEMPLATE.json
 *   3. Add it to any existing brand JSON files that need it (optional fields ok)
 */

export type BusinessModel = 'owner-operator' | 'semi-absentee' | 'manager-model' | 'passive'
export type BrandMaturity = 'emerging' | 'growth' | 'established'
export type InvestmentTier = '$100K-$249K' | '$250K-$499K' | '$500K-$999K' | '$1M+'
export type OwnerArchetype = 'corporate-exit' | 'investor' | 'operator' | 'second-career'
export type RevenuePattern = 'recurring' | 'repeat-transactional' | 'project-based' | 'mixed'

/**
 * Tracks how complete a brand's data is.
 * - 'complete'  — all required fields populated, page is fully public
 * - 'partial'   — key financials available, some fields null; page shows graceful gaps
 * - 'stub'      — brand listed in data layer but NOT publicly visible (excluded from sitemap + browse)
 */
export type CompletenessState = 'complete' | 'partial' | 'stub'

export interface Testimonial {
  quote: string
  name: string
  location: string
  tenure: string
  background?: string
}

export interface Award {
  name: string
  year: number
  issuer: string
}

export interface Franchise {
  // Core identity
  id: string
  brand_name: string
  brand_slug: string
  brand_logo_emoji: string
  tagline: string
  description_short: string
  market_intelligence_insight: string
  industry_primary: string
  industry_secondary?: string | null
  exec_investor_flag: boolean
  brand_maturity: BrandMaturity
  year_founded: number
  year_franchising_began: number
  unit_count_total: number
  unit_count_us: number
  unit_count_pipeline?: number
  unit_growth_rate_yoy: number

  // Investment & financial
  investment_min: number
  investment_max: number
  cash_required_min: number
  net_worth_required: number
  franchise_fee: number
  royalty_rate: number
  marketing_fee?: number
  investment_tier: InvestmentTier
  sba_eligible: boolean
  robs_eligible?: boolean
  financing_available: boolean
  veteran_discount: boolean
  item_19_available: boolean
  item_19_headline?: string | null
  avg_unit_volume?: number
  cash_on_cash_return_range?: string
  breakeven_timeline?: string
  macro_market_cagr?: number

  // Operational
  business_model: BusinessModel
  semi_absentee_verified?: boolean
  hours_per_week_typical?: string
  employees_typical?: string
  physical_location_required: boolean
  home_based: boolean
  mobile_van_based?: boolean
  territory_type: 'exclusive' | 'protected' | 'open'
  multi_unit_available: boolean
  area_developer_available?: boolean
  target_customer: 'b2b' | 'b2c' | 'mixed'
  revenue_pattern: RevenuePattern
  recession_resistant?: boolean
  growth_sector?: boolean
  lifestyle_fit_tags: string[]

  // Support & training
  initial_training_days: number
  training_location?: string
  ongoing_support: string
  field_support?: boolean
  marketing_support: boolean
  technology_platform?: boolean
  franchisee_validation_available: boolean

  // Authority & trust
  fbr_satisfaction_score?: number
  fbr_top_200?: boolean
  fbr_top_200_year?: number | null
  entrepreneur_rank?: number | null
  entrepreneur_rank_year?: number | null
  awards: Award[]
  ifa_member: boolean
  fdd_available: boolean
  testimonials: Testimonial[]

  // Matching
  owner_profile_archetypes: OwnerArchetype[]
  matching_tags: string[]

  // Navigator Score (composite 0–100)
  navigator_score: number

  // Geographic availability (use lowercase hyphenated state slugs)
  // Use ['all'] to indicate nationwide availability
  available_states: string[]

  // Pipeline control
  // stub = not visible publicly; partial = visible with graceful data gaps; complete = fully built
  completeness_state: CompletenessState
}
