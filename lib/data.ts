export type BusinessModel = 'owner-operator' | 'semi-absentee' | 'manager-model' | 'passive'
export type BrandMaturity = 'emerging' | 'growth' | 'established'
export type InvestmentTier = '$100K-$249K' | '$250K-$499K' | '$500K-$999K' | '$1M+'
export type OwnerArchetype = 'corporate-exit' | 'investor' | 'operator' | 'second-career'
export type RevenuePattern = 'recurring' | 'repeat-transactional' | 'project-based' | 'mixed'

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
  brand_logo_emoji: string // placeholder until real logos
  tagline: string
  description_short: string
  market_intelligence_insight: string
  industry_primary: string
  industry_secondary?: string
  exec_investor_flag: boolean
  brand_maturity: BrandMaturity
  year_founded: number
  year_franchising_began: number
  unit_count_total: number
  unit_count_us: number
  unit_count_pipeline?: number
  unit_growth_rate_yoy: number // percentage

  // Investment & financial
  investment_min: number
  investment_max: number
  cash_required_min: number
  net_worth_required: number
  franchise_fee: number
  royalty_rate: number // percentage
  marketing_fee?: number // percentage
  investment_tier: InvestmentTier
  sba_eligible: boolean
  robs_eligible?: boolean
  financing_available: boolean
  veteran_discount: boolean
  item_19_available: boolean
  item_19_headline?: string
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
  fbr_top_200_year?: number
  entrepreneur_rank?: number
  entrepreneur_rank_year?: number
  awards: Award[]
  ifa_member: boolean
  fdd_available: boolean
  testimonials: Testimonial[]

  // Matching
  owner_profile_archetypes: OwnerArchetype[]
  matching_tags: string[]

  // Navigator Score (composite 0–100)
  navigator_score: number
}

export const franchises: Franchise[] = [
  {
    id: '1',
    brand_name: 'Mosquito Squad',
    brand_slug: 'mosquito-squad',
    brand_logo_emoji: '🦟',
    tagline: 'Recurring outdoor pest control — the home services model investors choose.',
    description_short: 'Mosquito Squad is a recurring-revenue outdoor pest control franchise serving residential and commercial clients. The semi-absentee model makes it a top choice for executives who want a proven system without day-to-day operations.',
    market_intelligence_insight: 'The U.S. outdoor pest control market is projected to reach $27.6 billion by 2028, growing at a CAGR of 5.1%, driven by increasing tick- and mosquito-borne disease awareness and suburban population growth. Mosquito Squad operates in the high-margin spray-treatment segment with weather-driven seasonal demand concentrated in Q2–Q3, smoothed by year-round tick protection plans. The residential services niche shows strong recession resistance — homeowners maintained pest control spending through both 2008 and 2020.',
    industry_primary: 'Home Services & Maintenance',
    exec_investor_flag: true,
    brand_maturity: 'established',
    year_founded: 2005,
    year_franchising_began: 2008,
    unit_count_total: 350,
    unit_count_us: 350,
    unit_count_pipeline: 40,
    unit_growth_rate_yoy: 8.2,
    investment_min: 95000,
    investment_max: 175000,
    cash_required_min: 60000,
    net_worth_required: 200000,
    franchise_fee: 35000,
    royalty_rate: 10,
    marketing_fee: 2,
    investment_tier: '$100K-$249K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: true,
    item_19_available: true,
    item_19_headline: 'Average Gross Revenue: $312,000',
    avg_unit_volume: 312000,
    cash_on_cash_return_range: '25–40%',
    breakeven_timeline: '18–24 months',
    macro_market_cagr: 5.1,
    business_model: 'semi-absentee',
    semi_absentee_verified: true,
    hours_per_week_typical: '10–15 hrs/week (owner)',
    employees_typical: '3–6 seasonal',
    physical_location_required: false,
    home_based: true,
    mobile_van_based: true,
    territory_type: 'exclusive',
    multi_unit_available: true,
    area_developer_available: true,
    target_customer: 'b2c',
    revenue_pattern: 'recurring',
    recession_resistant: true,
    growth_sector: true,
    lifestyle_fit_tags: ['flexible-hours', 'no-nights-weekends', 'recurring-revenue', 'remote-manageable'],
    initial_training_days: 10,
    training_location: 'Richmond, VA + field training',
    ongoing_support: 'Dedicated business consultant, field support, national call center, franchisee peer network',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 84,
    fbr_top_200: true,
    fbr_top_200_year: 2025,
    entrepreneur_rank: 112,
    entrepreneur_rank_year: 2025,
    awards: [
      { name: 'FBR Top 200 Franchises', year: 2025, issuer: 'Franchise Business Review' },
      { name: 'Entrepreneur Franchise 500', year: 2025, issuer: 'Entrepreneur Magazine' }
    ],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "I spent 20 years in corporate finance before buying two Mosquito Squad territories. My GM runs the crews — I review KPIs on Friday mornings. Best capital deployment decision I've made.",
        name: 'Michael Tran',
        location: 'Austin, TX',
        tenure: '3 years',
        background: 'Former CFO, technology sector'
      },
      {
        quote: "The recurring revenue model was the deciding factor for me. By year two, 70% of my revenue re-books itself. I didn't expect to love the business this much.",
        name: 'Sandra Okafor',
        location: 'Charlotte, NC',
        tenure: '4 years',
        background: 'Former VP Operations, retail'
      }
    ],
    owner_profile_archetypes: ['corporate-exit', 'investor'],
    matching_tags: ['semi-absentee', 'recurring-revenue', 'home-based', 'low-overhead', 'seasonal', 'b2c'],
    navigator_score: 87
  },
  {
    id: '2',
    brand_name: 'Intelligent Office',
    brand_slug: 'intelligent-office',
    brand_logo_emoji: '🏢',
    tagline: "B2B virtual office services — the executive's ideal semi-absentee enterprise.",
    description_short: 'Intelligent Office provides virtual office solutions, coworking spaces, and professional support services to SMBs and solo professionals. The B2B, recurring-revenue model is purpose-built for executive owners who want enterprise-grade management structure.',
    market_intelligence_insight: 'The global flexible workspace market is projected to reach $96.2 billion by 2030, growing at a CAGR of 15.4%, driven by the permanent shift to hybrid work and the rise of solopreneur professionals. Intelligent Office captures the premium segment of this market — SMBs that need a professional address, receptionist services, and meeting space without a full-time office commitment. B2B recurring contracts provide revenue predictability that consumer-facing service models cannot match, making this an institutional-quality cash flow asset.',
    industry_primary: 'Business & Professional Services',
    exec_investor_flag: true,
    brand_maturity: 'established',
    year_founded: 1999,
    year_franchising_began: 2007,
    unit_count_total: 42,
    unit_count_us: 42,
    unit_count_pipeline: 15,
    unit_growth_rate_yoy: 12.5,
    investment_min: 290000,
    investment_max: 490000,
    cash_required_min: 150000,
    net_worth_required: 400000,
    franchise_fee: 49500,
    royalty_rate: 6,
    marketing_fee: 1,
    investment_tier: '$250K-$499K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: false,
    item_19_available: true,
    item_19_headline: 'Median Gross Revenue: $1.1M',
    avg_unit_volume: 1100000,
    cash_on_cash_return_range: '20–35%',
    breakeven_timeline: '24–36 months',
    macro_market_cagr: 15.4,
    business_model: 'semi-absentee',
    semi_absentee_verified: true,
    hours_per_week_typical: '15–20 hrs/week (owner)',
    employees_typical: '4–8 FTE',
    physical_location_required: true,
    home_based: false,
    territory_type: 'exclusive',
    multi_unit_available: true,
    area_developer_available: false,
    target_customer: 'b2b',
    revenue_pattern: 'recurring',
    recession_resistant: false,
    growth_sector: true,
    lifestyle_fit_tags: ['recurring-revenue', 'remote-manageable', 'no-nights-weekends'],
    initial_training_days: 14,
    training_location: 'Denver, CO HQ',
    ongoing_support: 'On-site opening support, regional consultants, technology platform, peer franchise network',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 79,
    entrepreneur_rank: undefined,
    awards: [],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "I have a GM who runs the daily operations. I come in twice a week for financial review. The B2B client base means almost zero marketing cost after year one — referrals fill the pipeline.",
        name: 'James Whitfield',
        location: 'Denver, CO',
        tenure: '5 years',
        background: 'Former Managing Director, consulting firm'
      }
    ],
    owner_profile_archetypes: ['corporate-exit', 'investor'],
    matching_tags: ['b2b', 'recurring-revenue', 'semi-absentee', 'professional-services', 'coworking'],
    navigator_score: 82
  },
  {
    id: '3',
    brand_name: 'The Joint Chiropractic',
    brand_slug: 'the-joint-chiropractic',
    brand_logo_emoji: '🦴',
    tagline: 'Healthcare retail with a no-insurance, walk-in membership model.',
    description_short: 'The Joint Chiropractic offers affordable, accessible chiropractic care through a no-appointment, no-insurance, membership model. Franchisees function as executive managers — chiropractors are licensed employees, not the owner.',
    market_intelligence_insight: "The U.S. chiropractic market is valued at $19.5 billion and growing at 4.2% CAGR, supported by an aging population, chronic pain epidemic, and consumer preference for drug-free pain management. The Joint's membership model — averaging $69–$89/month per subscriber — creates predictable, deferred-cancellation revenue that outperforms traditional healthcare episodic billing. The no-insurance model eliminates billing complexity entirely, making this operationally simpler than a traditional healthcare franchise.",
    industry_primary: 'Health & Wellness',
    exec_investor_flag: true,
    brand_maturity: 'established',
    year_founded: 1999,
    year_franchising_began: 2003,
    unit_count_total: 950,
    unit_count_us: 950,
    unit_count_pipeline: 120,
    unit_growth_rate_yoy: 6.8,
    investment_min: 215000,
    investment_max: 475000,
    cash_required_min: 100000,
    net_worth_required: 300000,
    franchise_fee: 39900,
    royalty_rate: 7,
    marketing_fee: 2,
    investment_tier: '$250K-$499K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: true,
    item_19_available: true,
    item_19_headline: 'Average Gross Revenue: $587,000 (mature clinics)',
    avg_unit_volume: 587000,
    cash_on_cash_return_range: '18–30%',
    breakeven_timeline: '18–30 months',
    macro_market_cagr: 4.2,
    business_model: 'semi-absentee',
    semi_absentee_verified: true,
    hours_per_week_typical: '10–20 hrs/week (owner)',
    employees_typical: '4–6 (including 1–2 licensed DCs)',
    physical_location_required: true,
    home_based: false,
    territory_type: 'protected',
    multi_unit_available: true,
    area_developer_available: true,
    target_customer: 'b2c',
    revenue_pattern: 'recurring',
    recession_resistant: true,
    growth_sector: true,
    lifestyle_fit_tags: ['recurring-revenue', 'community-impact', 'no-nights-weekends'],
    initial_training_days: 12,
    training_location: 'Scottsdale, AZ + on-site',
    ongoing_support: 'Field business coaches, marketing support, proprietary scheduling system, 950-unit peer network',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 81,
    fbr_top_200: true,
    fbr_top_200_year: 2025,
    entrepreneur_rank: 67,
    entrepreneur_rank_year: 2025,
    awards: [
      { name: 'FBR Top 200 Franchises', year: 2025, issuer: 'Franchise Business Review' },
      { name: 'Entrepreneur Franchise 500 #67', year: 2025, issuer: 'Entrepreneur Magazine' }
    ],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "I own four locations and spend maybe 25 hours a week total across all of them reviewing numbers and meeting with my clinic directors. The recurring member revenue is the best part — members are sticky.",
        name: 'Denise Park',
        location: 'Phoenix, AZ',
        tenure: '6 years',
        background: 'Former VP Sales, medical device company'
      }
    ],
    owner_profile_archetypes: ['corporate-exit', 'investor'],
    matching_tags: ['semi-absentee', 'recurring-revenue', 'healthcare', 'membership-model', 'multi-unit'],
    navigator_score: 85
  },
  {
    id: '4',
    brand_name: 'Caring Senior Service',
    brand_slug: 'caring-senior-service',
    brand_logo_emoji: '🤝',
    tagline: 'Non-medical senior care — the most defensible franchise in home services.',
    description_short: 'Caring Senior Service provides non-medical in-home care to seniors, including companionship, personal assistance, and daily living support. The demographic tailwind behind this business is the strongest of any sector in franchising.',
    market_intelligence_insight: 'The U.S. home care market is projected to reach $225 billion by 2030, growing at 7.9% CAGR — the highest sustained growth rate among all franchise categories. By 2030, 1 in 5 Americans will be over 65. Non-medical home care is the preferred alternative to assisted living among seniors and their families, and it is significantly less regulated than medical home health care. Caring Senior Service operates with local B2B referral networks (hospitals, discharge planners, senior centers) that create durable client pipelines once established.',
    industry_primary: 'Senior Care & Home Health',
    exec_investor_flag: true,
    brand_maturity: 'growth',
    year_founded: 1991,
    year_franchising_began: 2002,
    unit_count_total: 78,
    unit_count_us: 78,
    unit_count_pipeline: 20,
    unit_growth_rate_yoy: 14.1,
    investment_min: 80000,
    investment_max: 140000,
    cash_required_min: 50000,
    net_worth_required: 150000,
    franchise_fee: 36000,
    royalty_rate: 5,
    marketing_fee: 1,
    investment_tier: '$100K-$249K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: true,
    item_19_available: true,
    item_19_headline: 'Median Gross Revenue: $748,000',
    avg_unit_volume: 748000,
    cash_on_cash_return_range: '22–38%',
    breakeven_timeline: '18–24 months',
    macro_market_cagr: 7.9,
    business_model: 'manager-model',
    semi_absentee_verified: true,
    hours_per_week_typical: '20–30 hrs/week (ramping to 10–15)',
    employees_typical: '15–30 caregivers + 1–2 office staff',
    physical_location_required: false,
    home_based: false,
    territory_type: 'exclusive',
    multi_unit_available: true,
    area_developer_available: false,
    target_customer: 'mixed',
    revenue_pattern: 'recurring',
    recession_resistant: true,
    growth_sector: true,
    lifestyle_fit_tags: ['recurring-revenue', 'community-impact', 'remote-manageable'],
    initial_training_days: 10,
    training_location: 'San Antonio, TX HQ',
    ongoing_support: 'Ongoing coaching, marketing support, proprietary care management software (TENDIO), peer network',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 88,
    fbr_top_200: true,
    fbr_top_200_year: 2025,
    awards: [
      { name: 'FBR Top 200 Franchises', year: 2025, issuer: 'Franchise Business Review' },
      { name: 'FBR Franchisee Satisfaction Award — Senior Care Category', year: 2025, issuer: 'Franchise Business Review' }
    ],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "The community impact is real — but so is the business model. I hired a strong director of care services in month four and stepped back from daily operations by month eight. The demographic tailwind is undeniable.",
        name: 'Robert Chen',
        location: 'Portland, OR',
        tenure: '4 years',
        background: 'Former Regional VP, healthcare company'
      }
    ],
    owner_profile_archetypes: ['corporate-exit', 'second-career', 'operator'],
    matching_tags: ['senior-care', 'recurring-revenue', 'community-impact', 'manager-model', 'demographic-tailwind'],
    navigator_score: 89
  },
  {
    id: '5',
    brand_name: 'Restoration 1',
    brand_slug: 'restoration-1',
    brand_logo_emoji: '🔧',
    tagline: 'Property damage restoration — B2B insurance-driven recurring referral revenue.',
    description_short: 'Restoration 1 provides water, fire, mold, and storm damage restoration services primarily through insurance claims and commercial property managers. The B2B insurance relationship model creates a referral-driven pipeline that is self-sustaining once established.',
    market_intelligence_insight: 'The U.S. property damage restoration market was valued at $51.9 billion in 2025 and is growing at 6.3% CAGR, driven by increasing extreme weather events, aging housing infrastructure, and rising commercial property claims. Unlike consumer-driven service businesses, Restoration 1 franchisees build B2B relationships with insurance adjusters, property managers, and real estate agents — relationships that generate repeat referral revenue independent of consumer marketing spend. Restoration work is non-deferrable (water damage worsens hourly), creating urgency-driven demand regardless of economic conditions.',
    industry_primary: 'Property Restoration & Remediation',
    exec_investor_flag: true,
    brand_maturity: 'growth',
    year_founded: 2008,
    year_franchising_began: 2009,
    unit_count_total: 220,
    unit_count_us: 220,
    unit_count_pipeline: 55,
    unit_growth_rate_yoy: 11.8,
    investment_min: 85000,
    investment_max: 200000,
    cash_required_min: 50000,
    net_worth_required: 200000,
    franchise_fee: 50000,
    royalty_rate: 6,
    marketing_fee: 2,
    investment_tier: '$100K-$249K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: true,
    item_19_available: false,
    avg_unit_volume: 720000,
    cash_on_cash_return_range: '25–45%',
    breakeven_timeline: '12–24 months',
    macro_market_cagr: 6.3,
    business_model: 'owner-operator',
    hours_per_week_typical: '40–50 hrs/week (year 1), 25–35 (year 3+)',
    employees_typical: '4–10 technicians',
    physical_location_required: false,
    home_based: false,
    territory_type: 'exclusive',
    multi_unit_available: true,
    area_developer_available: false,
    target_customer: 'mixed',
    revenue_pattern: 'project-based',
    recession_resistant: true,
    growth_sector: true,
    lifestyle_fit_tags: ['community-impact', 'recurring-revenue'],
    initial_training_days: 17,
    training_location: 'Dallas, TX + on-site certification',
    ongoing_support: 'Regional field support, insurance relationship training, proprietary estimating software, 24/7 call center',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 76,
    awards: [],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "The insurance relationship model is the key insight. My top adjuster refers 30–40 jobs a year. Once you build those relationships, the business runs on referrals.",
        name: 'Marcus Rivera',
        location: 'Houston, TX',
        tenure: '3 years',
        background: 'Former Director of Operations, construction'
      }
    ],
    owner_profile_archetypes: ['operator', 'corporate-exit'],
    matching_tags: ['b2b', 'insurance-driven', 'restoration', 'project-based', 'recession-resistant'],
    navigator_score: 78
  },
  {
    id: '6',
    brand_name: 'Junkluggers',
    brand_slug: 'junkluggers',
    brand_logo_emoji: '🚛',
    tagline: 'Eco-friendly junk removal — simple model, strong unit economics.',
    description_short: 'Junkluggers is a premium, eco-conscious junk removal franchise focused on donations and recycling over landfill. The simple operational model and low overhead make it one of the cleaner cash flow stories in home services.',
    market_intelligence_insight: 'The U.S. junk removal market is valued at $10.1 billion and growing at 8.7% CAGR, driven by decluttering culture, estate cleanouts from aging baby boomers, and commercial property turnover. Junkluggers differentiates on the growing consumer preference for sustainable disposal — 73% of customers cite eco-friendly practices as a buying factor in third-party research. The asset-light model (trucks + drivers, no physical storefront) generates high margin relative to investment, and the recurring commercial account segment (property managers, real estate agents, senior living facilities) provides predictable revenue.',
    industry_primary: 'Home Services & Maintenance',
    exec_investor_flag: false,
    brand_maturity: 'growth',
    year_founded: 2004,
    year_franchising_began: 2012,
    unit_count_total: 85,
    unit_count_us: 85,
    unit_count_pipeline: 30,
    unit_growth_rate_yoy: 15.2,
    investment_min: 115000,
    investment_max: 170000,
    cash_required_min: 75000,
    net_worth_required: 200000,
    franchise_fee: 50000,
    royalty_rate: 8,
    marketing_fee: 2,
    investment_tier: '$100K-$249K',
    sba_eligible: true,
    financing_available: true,
    veteran_discount: true,
    item_19_available: false,
    avg_unit_volume: 410000,
    cash_on_cash_return_range: '22–38%',
    breakeven_timeline: '12–18 months',
    macro_market_cagr: 8.7,
    business_model: 'owner-operator',
    hours_per_week_typical: '40–50 hrs/week initially',
    employees_typical: '3–6 (drivers + labor)',
    physical_location_required: false,
    home_based: true,
    mobile_van_based: true,
    territory_type: 'exclusive',
    multi_unit_available: true,
    target_customer: 'mixed',
    revenue_pattern: 'repeat-transactional',
    recession_resistant: false,
    growth_sector: true,
    lifestyle_fit_tags: ['community-impact', 'flexible-hours'],
    initial_training_days: 7,
    training_location: 'Remote + on-site',
    ongoing_support: 'Field coaching, marketing platform, booking technology, national accounts',
    field_support: false,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 80,
    awards: [
      { name: 'Entrepreneur Franchise 500', year: 2025, issuer: 'Entrepreneur Magazine' }
    ],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "The eco angle gets you in the door with commercial accounts — property managers love telling tenants their building uses an eco-friendly service. That's been 40% of my revenue in year two.",
        name: 'Aisha Williams',
        location: 'Atlanta, GA',
        tenure: '2 years',
        background: 'Former Brand Manager'
      }
    ],
    owner_profile_archetypes: ['operator', 'second-career'],
    matching_tags: ['home-based', 'mobile', 'eco-friendly', 'home-services', 'low-overhead'],
    navigator_score: 74
  },
  {
    id: '7',
    brand_name: 'Kumon',
    brand_slug: 'kumon',
    brand_logo_emoji: '📚',
    tagline: 'The world\'s largest supplemental education franchise — recession-proof demand.',
    description_short: 'Kumon is the #1 supplemental education franchise globally, serving K–12 students with self-paced math and reading programs. The subscription-based tuition model and low physical overhead combine to make this one of the most consistent cash-flow franchises in any portfolio.',
    market_intelligence_insight: 'The U.S. K–12 supplemental education market was valued at $14.3 billion in 2025 and is growing at 5.8% CAGR, accelerated by continued academic performance gaps and parental investment in educational outcomes post-COVID. Kumon charges monthly tuition per subject per student — currently $160–$200/month — creating a subscription model with 95%+ monthly renewal rates among enrolled students. Demand is explicitly counter-cyclical: in economic downturns, parents historically increase education spending as a long-term investment in their children\'s outcomes.',
    industry_primary: 'Education & Learning',
    exec_investor_flag: false,
    brand_maturity: 'established',
    year_founded: 1958,
    year_franchising_began: 1958,
    unit_count_total: 26000,
    unit_count_us: 1500,
    unit_count_pipeline: 100,
    unit_growth_rate_yoy: 1.5,
    investment_min: 67000,
    investment_max: 146000,
    cash_required_min: 70000,
    net_worth_required: 150000,
    franchise_fee: 1000,
    royalty_rate: 8.5,
    marketing_fee: 1,
    investment_tier: '$100K-$249K',
    sba_eligible: false,
    financing_available: false,
    veteran_discount: false,
    item_19_available: false,
    avg_unit_volume: 280000,
    cash_on_cash_return_range: '20–35%',
    breakeven_timeline: '24–36 months',
    macro_market_cagr: 5.8,
    business_model: 'owner-operator',
    hours_per_week_typical: '20–30 hrs/week',
    employees_typical: '2–4 part-time instructors',
    physical_location_required: true,
    home_based: false,
    territory_type: 'protected',
    multi_unit_available: true,
    target_customer: 'b2c',
    revenue_pattern: 'recurring',
    recession_resistant: true,
    growth_sector: false,
    lifestyle_fit_tags: ['community-impact', 'no-nights-weekends', 'recurring-revenue'],
    initial_training_days: 14,
    training_location: 'Regional training centers',
    ongoing_support: 'Regional manager support, curriculum managed centrally, marketing tools, 1,500-unit US peer network',
    field_support: true,
    marketing_support: true,
    technology_platform: false,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 72,
    fbr_top_200: false,
    entrepreneur_rank: 22,
    entrepreneur_rank_year: 2025,
    awards: [
      { name: 'Entrepreneur Franchise 500 #22', year: 2025, issuer: 'Entrepreneur Magazine' }
    ],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "I opened my center part-time for the first year while still employed. The recurring revenue model meant predictable monthly income. The curriculum sells itself — Kumon's reputation does the marketing.",
        name: 'Grace Kim',
        location: 'San Jose, CA',
        tenure: '7 years',
        background: 'Former Senior Engineer, tech industry'
      }
    ],
    owner_profile_archetypes: ['second-career', 'operator'],
    matching_tags: ['education', 'recurring-revenue', 'recession-resistant', 'community-impact', 'established-brand'],
    navigator_score: 76
  },
  {
    id: '8',
    brand_name: 'Celebree School',
    brand_slug: 'celebree-school',
    brand_logo_emoji: '🎓',
    tagline: 'Premium early childhood education — multi-unit scalable, investor-grade.',
    description_short: 'Celebree School is a premium early childhood education franchise focused on ages 6 weeks to 12 years. The center-based model with a director-run structure allows franchise owners to operate in an executive capacity, managing multiple locations.',
    market_intelligence_insight: 'The U.S. childcare market is valued at $54.3 billion and growing at 4.5% CAGR, driven by dual-income household normalization and federal childcare subsidy expansion. Premium childcare centers in the $1,500–$2,500/month tuition range have experienced the strongest demand growth, as families prioritize quality over cost in the post-COVID return-to-office environment. Celebree School differentiates with proprietary curriculum, director-model operations, and a waitlist-driven enrollment model in established markets.',
    industry_primary: 'Education & Learning',
    exec_investor_flag: true,
    brand_maturity: 'growth',
    year_founded: 1994,
    year_franchising_began: 2019,
    unit_count_total: 48,
    unit_count_us: 48,
    unit_count_pipeline: 35,
    unit_growth_rate_yoy: 22.4,
    investment_min: 550000,
    investment_max: 1100000,
    cash_required_min: 250000,
    net_worth_required: 750000,
    franchise_fee: 60000,
    royalty_rate: 7,
    marketing_fee: 2,
    investment_tier: '$500K-$999K',
    sba_eligible: true,
    robs_eligible: true,
    financing_available: true,
    veteran_discount: false,
    item_19_available: true,
    item_19_headline: 'Gross Revenue Range: $1.2M–$3.1M (mature centers)',
    avg_unit_volume: 1850000,
    cash_on_cash_return_range: '18–28%',
    breakeven_timeline: '30–48 months',
    macro_market_cagr: 4.5,
    business_model: 'semi-absentee',
    semi_absentee_verified: true,
    hours_per_week_typical: '10–20 hrs/week (director runs daily ops)',
    employees_typical: '12–25 teachers + director',
    physical_location_required: true,
    home_based: false,
    territory_type: 'exclusive',
    multi_unit_available: true,
    area_developer_available: true,
    target_customer: 'b2c',
    revenue_pattern: 'recurring',
    recession_resistant: false,
    growth_sector: true,
    lifestyle_fit_tags: ['recurring-revenue', 'community-impact', 'no-nights-weekends'],
    initial_training_days: 21,
    training_location: 'Baltimore, MD HQ + on-site',
    ongoing_support: 'Director training, curriculum support, marketing platform, real estate assistance, field coaches',
    field_support: true,
    marketing_support: true,
    technology_platform: true,
    franchisee_validation_available: true,
    fbr_satisfaction_score: 83,
    awards: [],
    ifa_member: true,
    fdd_available: true,
    testimonials: [
      {
        quote: "This is the kind of investment a PE firm would make — recurring revenue, real assets, strong unit economics. I have a director I trust completely. I review the P&L monthly and show up for enrollment events.",
        name: 'David Okonkwo',
        location: 'Columbia, MD',
        tenure: '3 years',
        background: 'Former Managing Partner, private equity'
      }
    ],
    owner_profile_archetypes: ['investor', 'corporate-exit'],
    matching_tags: ['semi-absentee', 'education', 'childcare', 'recurring-revenue', 'multi-unit', 'premium'],
    navigator_score: 84
  }
]

// Helper functions
export function getFranchiseBySlug(slug: string): Franchise | undefined {
  return franchises.find(f => f.brand_slug === slug)
}

export function filterFranchises(params: {
  investmentTier?: string
  businessModel?: string
  industry?: string
  sbaEligible?: boolean
  itemNineteenAvailable?: boolean
  multiUnit?: boolean
  minNavigatorScore?: number
}): Franchise[] {
  return franchises.filter(f => {
    if (params.investmentTier && f.investment_tier !== params.investmentTier) return false
    if (params.businessModel && f.business_model !== params.businessModel) return false
    if (params.industry && f.industry_primary !== params.industry) return false
    if (params.sbaEligible && !f.sba_eligible) return false
    if (params.itemNineteenAvailable && !f.item_19_available) return false
    if (params.multiUnit && !f.multi_unit_available) return false
    if (params.minNavigatorScore && f.navigator_score < params.minNavigatorScore) return false
    return true
  })
}

export function getCollectionFranchises(collection: string): Franchise[] {
  switch (collection) {
    case 'semi-absentee':
      return franchises.filter(f => f.business_model === 'semi-absentee' || f.business_model === 'manager-model')
    case 'most-profitable':
      return franchises.filter(f => f.avg_unit_volume && f.avg_unit_volume > 500000).sort((a, b) => (b.avg_unit_volume || 0) - (a.avg_unit_volume || 0))
    case 'recession-resistant':
      return franchises.filter(f => f.recession_resistant)
    case 'multi-unit':
      return franchises.filter(f => f.multi_unit_available && f.exec_investor_flag)
    case 'executive-transition':
      return franchises.filter(f => f.owner_profile_archetypes.includes('corporate-exit'))
    default:
      return franchises
  }
}

export function getIndustries(): string[] {
  return Array.from(new Set(franchises.map(f => f.industry_primary))).sort()
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`
  return `$${amount}`
}
