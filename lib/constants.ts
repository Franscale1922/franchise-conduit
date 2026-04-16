/**
 * lib/constants.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All user-facing strings for FranchiseConduit.com live here.
 * No hardcoded copy in TSX files — import from this module.
 *
 * Audience: "The Quietly Decided" — 40–60, professional career, has internally
 * decided to explore ownership. Internal moment. Private. Serious.
 * Voice: Warm · Encouraging · Clear · Credible · Respectful
 * Billboard test: every headline and subhead must communicate in ≤ 5 seconds.
 */

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE
// ─────────────────────────────────────────────────────────────────────────────

export const HOMEPAGE = {

  // ── Meta ──────────────────────────────────────────────────────────────────
  meta: {
    title: 'Franchise Conduit — Advisor-Matched Franchise Discovery for Serious Investors',
    description:
      'Research franchise opportunities built for experienced buyers. Independent rankings, verified franchisee data, and advisor-routed introductions. No pay-to-rank.',
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  // Billboard test: "What is this? Who is it for? What do I do next?"
  // H1 speaks to the candidate's current moment — not generic "find a franchise."
  hero: {
    eyebrow: 'Franchise Discovery for Serious Buyers',
    headline: "You've decided. Now find the right franchise.",
    subhead:
      'We work with experienced professionals making the move to business ownership. Independent research, advisor-backed introductions, and zero brand influence on our rankings.',
    ctaPrimary: 'Find My Match',
    ctaPrimaryHref: '/quiz',
    ctaSecondary: 'Browse Franchises',
    ctaSecondaryHref: '/franchises',
    // Proof bar — 3 quantified signals
    stats: [
      { value: 'dynamic', label: 'Franchise brands catalogued' }, // value set at runtime
      { value: '100%', label: 'Franchisee-data ranked' },
      { value: '$100K+', label: 'Starting investment' },
    ],
  },

  // ── Trust Bar ─────────────────────────────────────────────────────────────
  // 5 proof statements — locked copy from PLATFORM_BRIEF.md §4e
  trustBar: [
    { icon: '◈', text: 'Independent research on every brand' },
    { icon: '◉', text: 'Advisor-guided introductions only' },
    { icon: '◎', text: 'FDD data on every listing' },
    { icon: '◐', text: 'Opportunities from $100K across 12 industries' },
    { icon: '✦', text: 'Brand rankings are not influenced by listing fees' },
  ],

  // ── How It Works ──────────────────────────────────────────────────────────
  // 3 steps. Icon + label. Layer-1 only — single idea per step, no jargon.
  howItWorks: {
    sectionLabel: 'The Process',
    headline: 'How it works',
    steps: [
      {
        icon: '01',
        label: 'Explore',
        desc: 'Browse our catalog or take the 4-minute quiz. No commitment, no account needed.',
      },
      {
        icon: '02',
        label: 'Research',
        desc: 'Every brand page carries FDD-sourced financials, franchisee satisfaction data, and a market brief.',
      },
      {
        icon: '03',
        label: 'Connect',
        desc: "When you're ready, an advisor reviews your profile and makes the introduction — not a form blast.",
      },
    ],
    ctaText: 'Learn how the process works →',
    ctaHref: '/how-it-works',
  },

  // ── Featured Brands ───────────────────────────────────────────────────────
  // Pull from gold standard brands (Stage 3). 3 cards max on homepage.
  featuredBrands: {
    sectionLabel: 'A few brands worth knowing',
    headline: 'Curated from our catalog',
    ctaText: 'See all franchises →',
    ctaHref: '/franchises',
  },

  // ── Collection Pills ──────────────────────────────────────────────────────
  collections: [
    { href: '/collections/semi-absentee',      label: '🕐 Semi-Absentee',     desc: 'Manager-model ownership' },
    { href: '/collections/most-profitable',    label: '📈 Most Profitable',    desc: 'Highest AUV brands' },
    { href: '/collections/recession-resistant', label: '🛡️ Recession Resistant', desc: 'Proven through downturns' },
    { href: '/collections/multi-unit',         label: '🏗️ Multi-Unit Track',   desc: 'Scale to multiple locations' },
    { href: '/collections/executive-transition', label: '💼 Executive Transition', desc: 'Built for corporate exits' },
  ],

  // ── Investment Tier Selector ──────────────────────────────────────────────
  investmentTiers: {
    sectionLabel: 'Explore by investment range',
    prompt: 'How much capital can you invest?',
    tiers: [
      { value: '100k-250k', label: '$100K–$250K', sub: 'First unit range' },
      { value: '250k-500k', label: '$250K–$500K', sub: 'Most active tier', featured: true },
      { value: '500k-1m',   label: '$500K–$1M',   sub: 'Premium opportunities' },
      { value: '1m-plus',   label: '$1M+',         sub: 'Portfolio-level investing' },
    ],
    tierFeaturedBadge: 'Most Searched',
    ctaText: 'Get My Personalized Shortlist →',
    ctaHref: '/quiz',
    microcopy: 'No account required · No obligation · Takes 4 minutes',
  },

  // ── Semi-Absentee Spotlight ────────────────────────────────────────────────
  // Billboard test: "Don't just own a job. Own a business." — candidate sees
  // this and immediately knows it's about ownership structure, not career.
  semiAbsentee: {
    sectionLabel: 'For the Capital Deployer',
    headline: "Don't just own a job.",
    headlineAccent: 'Own a business.',
    desc: 'Semi-absentee and manager-model franchises let you deploy capital into a proven system without trading your time for a salary. Your GM runs the operation. You review the P&L.',
    bullets: [
      '10–20 hours/week average owner time commitment',
      'A director or GM handles day-to-day operations',
      'Recurring revenue models — predictable cash flow',
      'Multi-unit scalability built into the structure from day one',
    ],
    ctaText: 'Explore semi-absentee opportunities →',
    ctaHref: '/collections/semi-absentee',
  },

  // ── Why Franchise Conduit ─────────────────────────────────────────────────
  // Layer 1: 3 differentiators — 1 sentence each. Billboard test: read all 3
  // in 8 seconds. No jargon. No feature lists.
  whyFC: {
    sectionLabel: 'Why Franchise Conduit',
    headline: 'Built to a different standard than every other directory',
    differentiators: [
      {
        icon: '🛡️',
        title: 'We research so you don\'t start from scratch',
        desc: 'Every brand is ranked on verified franchisee satisfaction scores and disclosed AUV data — not on who paid us more.',
      },
      {
        icon: '📊',
        title: 'Market intelligence on every listing',
        desc: 'Every profile includes an industry Market Brief — size, CAGR, demand drivers, and competitive positioning.',
      },
      {
        icon: '🤝',
        title: 'Advisor-in-the-loop — you\'re never left to navigate alone',
        desc: 'An advisor reviews your profile, preps you for the conversation, and makes the introduction personally.',
      },
    ],
    // Testimonials — placeholder until real headshots from Kelsey
    testimonials: [
      {
        initials: 'MR',
        name: 'Marcus R.',
        role: 'Franchise Owner, ServiceMaster Clean',
        former: 'Former Regional VP, Fortune 500 Logistics',
        tenure: '3 years in',
        quote:
          'The intelligence briefs here are the reason I picked ServiceMaster over two other brands I was comparing. I had actual AUV and franchisee satisfaction data — not a sales deck.',
        outcome: '$1.1M AUV in Year 2',
      },
      {
        initials: 'SL',
        name: 'Sandra L.',
        role: 'Multi-Unit Owner, Club Pilates',
        former: 'Former CFO, Healthcare Group',
        tenure: '18 months in',
        quote:
          'I appreciated that no brand paid to be at the top of the list. We looked at 6 concepts and the ranking was clearly methodology-driven, not sales-driven.',
        outcome: '3 units open, 2 in development',
      },
    ],
  },

  // ── Bottom CTA ────────────────────────────────────────────────────────────
  // Single highest-intent CTA per page — copper/gold button.
  // Billboard test: candidate reads headline and knows exactly what to do.
  bottomCta: {
    sectionLabel: 'Ready to take the first step?',
    headline: 'Your shortlist is closer than you think.',
    subhead:
      'Our quiz takes 4 minutes and gives you a personalized list of franchises matched to your capital, lifestyle, and goals.',
    ctaPrimary: 'Take the Quiz →',
    ctaPrimaryHref: '/quiz',
    ctaSecondary: 'Browse Franchises',
    ctaSecondaryHref: '/franchises',
    microcopy: 'No obligation. No salespeople. Our advisors work on your behalf.',
  },

  // ── SEO Link Grid ────────────────────────────────────────────────────────
  seoGrid: {
    industriesLabel: 'Browse by industry',
    statesLabel: 'Browse by state',
    industries: [
      { slug: 'home-services',       label: 'Home Services Franchises' },
      { slug: 'health-wellness',     label: 'Health & Wellness Franchises' },
      { slug: 'senior-care',         label: 'Senior Care Franchises' },
      { slug: 'business-services',   label: 'Business Services Franchises' },
      { slug: 'education',           label: 'Education Franchises' },
      { slug: 'food-beverage',       label: 'Food & Beverage Franchises' },
      { slug: 'property-restoration', label: 'Property Restoration Franchises' },
      { slug: 'fitness',             label: 'Fitness Franchises' },
      { slug: 'retail',              label: 'Retail Franchises' },
      { slug: 'automotive',          label: 'Automotive Services Franchises' },
      { slug: 'cleaning-services',   label: 'Cleaning & Janitorial Franchises' },
      { slug: 'technology',          label: 'Technology & IT Franchises' },
    ],
    states: [
      { slug: 'texas',          label: 'Texas Franchises' },
      { slug: 'florida',        label: 'Florida Franchises' },
      { slug: 'california',     label: 'California Franchises' },
      { slug: 'georgia',        label: 'Georgia Franchises' },
      { slug: 'north-carolina', label: 'North Carolina Franchises' },
      { slug: 'arizona',        label: 'Arizona Franchises' },
      { slug: 'colorado',       label: 'Colorado Franchises' },
      { slug: 'ohio',           label: 'Ohio Franchises' },
      { slug: 'illinois',       label: 'Illinois Franchises' },
      { slug: 'pennsylvania',   label: 'Pennsylvania Franchises' },
      { slug: 'new-york',       label: 'New York Franchises' },
      { slug: 'tennessee',      label: 'Tennessee Franchises' },
      { slug: 'washington',     label: 'Washington Franchises' },
      { slug: 'virginia',       label: 'Virginia Franchises' },
      { slug: 'nevada',         label: 'Nevada Franchises' },
      { slug: 'utah',           label: 'Utah Franchises' },
      { slug: 'minnesota',      label: 'Minnesota Franchises' },
      { slug: 'michigan',       label: 'Michigan Franchises' },
      { slug: 'new-jersey',     label: 'New Jersey Franchises' },
      { slug: 'oregon',         label: 'Oregon Franchises' },
    ],
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS — /how-it-works
// ─────────────────────────────────────────────────────────────────────────────
// Layer 1: Every section readable in < 15 seconds.
// Jargon threshold: zero franchise industry insider terms on Layer 1.
// Warmth check: reads like a trusted friend who knows the path.

export const HOW_IT_WORKS = {

  meta: {
    title: 'How Franchise Conduit Works — No Pressure, No Lead Blast',
    description:
      'See exactly how we work with serious franchise buyers — from first browse to advisor introduction. No cold calls. No paywall. Real data on every brand.',
  },

  hero: {
    eyebrow: 'The Process',
    headline: "Here's how we work together",
    subhead:
      "No broker pressure. No email blast. A real conversation when you're ready.",
  },

  // 4-step illustrated journey — Layer 1 labels + Layer 2 detail beneath
  journey: {
    sectionLabel: 'Your path with us',
    headline: 'Four steps. At your pace.',
    steps: [
      {
        number: '01',
        label: 'Explore on your terms',
        desc: 'Browse brands, read research, take the quiz. You stay anonymous until you choose to connect. No account required.',
        icon: '🔍',
      },
      {
        number: '02',
        label: 'Find what fits',
        desc: 'Our quiz surfaces brands matched to your background, budget, and lifestyle goals — not just what pays us the highest commission.',
        icon: '🎯',
      },
      {
        number: '03',
        label: 'Go deeper on what interests you',
        desc: 'Every brand page has FDD data, unit economics, and market context. Real numbers from real filings — not a brochure.',
        icon: '📊',
      },
      {
        number: '04',
        label: 'We make the introduction',
        desc: "When you're ready, a Waypoint advisor prepares you for the conversation and connects you directly. One introduction — not a blast to eight brands.",
        icon: '🤝',
      },
    ],
  },

  // What you will NOT get — honest signals build trust faster than promises
  notGet: {
    headline: 'What you will not get',
    items: [
      'A cold call 10 minutes after you click a button',
      'A pushy broker trying to close you on the first call',
      'A paywall before you have seen anything worth paying for',
    ],
  },

  // What you WILL get
  willGet: {
    headline: 'What you will get',
    items: [
      'Real data from real FDDs on every brand — not marketing estimates',
      'An advisor who has guided dozens of buyers through this exact process',
      'Time and space to make the right decision without pressure',
    ],
  },

  // FAQ — Layer 2, accordion, 6 questions minimum
  faq: {
    headline: 'Frequently asked questions',
    questions: [
      {
        q: 'Do I have to pay anything?',
        a: 'No. Franchise Conduit is completely free for franchise buyers. We earn from franchisors when we make a successful, advisor-reviewed introduction — which means our incentive is quality matches, not volume.',
      },
      {
        q: 'Are these brands paying to be ranked higher?',
        a: 'No. Our Navigator Score is calculated from verified franchisee data, FDD disclosures, and unit economics. A brand cannot pay to improve their ranking. Brands appear in our catalog because they meet our inclusion criteria, not because they paid for the slot.',
      },
      {
        q: 'What happens after I request an introduction?',
        a: "A Waypoint advisor reviews your profile and the brand you're interested in. They'll reach out to prep you for the conversation, answer your questions, and make sure it's a good fit before the franchisor receives your information. You'll never be sent blind.",
      },
      {
        q: 'How long does the process typically take?',
        a: "Most buyers spend 2–6 weeks exploring brands before requesting an introduction. The advisor conversation typically happens within 3–5 business days of your request. From first contact to signing a franchise agreement, most serious buyers take 3–6 months — though that varies widely based on how many brands you evaluate and how quickly you want to move.",
      },
      {
        q: 'Can I look at multiple brands at once?',
        a: "Absolutely. Most buyers explore 3–5 brands before narrowing down. You can save brands, compare side-by-side, and take your time. When you're ready to connect with a specific brand, you'll make one introduction request at a time — we won't blast your information to multiple franchisors simultaneously.",
      },
      {
        q: 'Will I be pressured into anything?',
        a: "No. Our advisors work for you, not for franchisors. Their job is to make sure you're considering the right brands for your profile — not to close you as fast as possible. If a brand isn't right for you, a good advisor will tell you that.",
      },
      {
        q: 'Do I need franchise experience?',
        a: "No. Most of our buyers are making their first franchise investment — coming from corporate careers, skilled trades, or professional services. Our research, education resources, and advisor guidance are specifically designed for people who are serious but new to franchising.",
      },
    ],
  },

  cta: {
    ctaPrimary: 'Start by exploring brands →',
    ctaPrimaryHref: '/franchises',
    ctaSecondary: 'Take the 4-minute quiz',
    ctaSecondaryHref: '/quiz',
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// METHODOLOGY — /methodology
// ─────────────────────────────────────────────────────────────────────────────
// Purpose: Proof behind every Navigator Score on every brand card.
// Without this page, the score is decorative. With it, it's a trust signal.

export const METHODOLOGY = {

  meta: {
    title: 'Navigator Score Methodology — How We Research and Rank Every Franchise',
    description:
      "The Navigator Score is built on verified franchisee data and FDD disclosures — not advertising dollars. Here's exactly how we score every brand on our platform.",
  },

  hero: {
    eyebrow: 'Research Methodology',
    headline: 'How we research and score every brand',
    subhead:
      'The Navigator Score is built on data, not dollars. Here is exactly how.',
  },

  // What it is NOT — brief direct honesty (Layer 1)
  notWhat: {
    headline: 'What the Navigator Score is not',
    items: [
      'A ranking paid for by brand advertising spend',
      'A consumer review score based on unverified opinions',
      'A guarantee of any financial outcome for any investor',
    ],
  },

  // What it IS (Layer 1)
  whatIs: {
    headline: 'What it is',
    desc: 'A composite signal built from five dimensions of verified data. Designed to give you a fast read of a brand\'s research depth — not to make the decision for you.',
  },

  // 5 dimensions — Layer 2 detail per dimension
  dimensions: [
    {
      number: '1',
      name: 'Franchisee Satisfaction',
      weight: '30%',
      source: 'Franchise Business Review annual survey',
      detail: 'FBR score, testimonial sentiment across validated franchisee interviews, and confirmation that validation calls are available to prospective buyers.',
    },
    {
      number: '2',
      name: 'Financial Transparency',
      weight: '25%',
      source: 'FDD Item 19 filing, state regulators',
      detail: 'Item 19 availability, whether Average Unit Volume is disclosed, and the specificity of the investment range (vague ranges score lower).',
    },
    {
      number: '3',
      name: 'Brand Stability',
      weight: '20%',
      source: 'FDD Item 20 + brand-reported data',
      detail: 'Years in franchising, net unit count growth year-over-year, and closure rate versus industry benchmarks.',
    },
    {
      number: '4',
      name: 'Support System',
      weight: '15%',
      source: 'FBR training satisfaction data + advisor validation',
      detail: 'Training depth (initial + ongoing), field support ratio, and tech platform quality as rated by current franchisees.',
    },
    {
      number: '5',
      name: 'Market Position',
      weight: '10%',
      source: 'Industry research + IBIS World + FBR data',
      detail: 'Industry CAGR, competitive moat, and demonstrated recession resistance where data is available.',
    },
  ],

  // Score category bands
  categories: [
    { label: 'Exceptional', range: '85–100', desc: 'Top-tier across all five dimensions. Rare.' },
    { label: 'Strong',      range: '70–84',  desc: 'Above-average on most dimensions. A well-researched brand.' },
    { label: 'Solid',       range: '55–69',  desc: 'Good fundamentals with some data gaps.' },
    { label: 'Moderate',    range: '40–54',  desc: 'Early-stage or limited data availability.' },
    { label: 'Developing',  range: 'Below 40', desc: 'Insufficient data for a confident assessment.' },
  ],

  // Honest disclosure
  disclosure: {
    headline: "What we can't control",
    body: 'FDDs are self-reported documents filed with state regulators. Past performance does not guarantee future results. We flag data limitations and unverified claims directly on brand pages. When a brand has not filed an Item 19, we say so clearly.',
  },

  cta: {
    text: 'Browse brands with their Navigator Scores →',
    href: '/franchises',
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT — /about
// ─────────────────────────────────────────────────────────────────────────────
// Voice check: does this read like a trusted friend or a brochure?
// Must NOT over-claim or sound salesy. Warmth + honesty.

export const ABOUT = {

  meta: {
    title: 'About Franchise Conduit — Built by Franchise Advisors, for Serious Buyers',
    description:
      "Franchise Conduit was built by Waypoint Franchise Advisors — professionals who got tired of a broken industry model. Here's who we are and why we built this differently.",
  },

  hero: {
    eyebrow: 'About Us',
    headline: 'Built by franchise advisors who got tired of the old way',
    subhead:
      "Most franchise platforms optimize for lead volume. Waypoint Franchise Advisors built Franchise Conduit to optimize for something different: the right match, made once.",
  },

  // The problem we solved — honest narrative, Layer 1
  problem: {
    headline: 'The problem we solved for ourselves',
    body: [
      "The franchise brokerage industry has an incentive problem. Most brokers earn commissions from franchisors — which means their recommendations can follow the commission, not the candidate.",
      "We built Franchise Conduit to flip that. Brands don't pay to rank higher. Candidates don't pay to use the platform. We earn when we make a great match — which means our success is tied entirely to yours.",
    ],
  },

  // Who we are — team (placeholder until headshots arrive from Kelsey)
  team: {
    headline: 'Who we are',
    intro: 'Waypoint Franchise Advisors is a credentialed franchise consulting firm. Our advisors have guided hundreds of buyers through the franchise process — from first conversation to signed agreement.',
    members: [
      {
        initials: 'WA',
        name: 'Waypoint Advisors',
        role: 'Franchise Consulting Team',
        bio: 'Credentialed franchise advisors with collective experience across home services, healthcare, B2B, and executive-model brands. Headshots and individual profiles coming soon.',
      },
    ],
    headshots: 'Headshots and individual advisor bios coming soon. Contact us if you want to know who you will be working with before reaching out.',
  },

  // Our focus — who we serve (and who we don't)
  focus: {
    headline: 'Who we work with',
    body: "We work with serious buyers — professionals, executives, and skilled operators making a deliberate move to business ownership. Not impulse buyers. Not first-timers with no capital and a big dream. The candidates who work with us are the ones franchisors actually want to hear from.",
    bullets: [
      '$100K+ liquid capital available to invest',
      'Making a deliberate, researched decision — not an impulse',
      'Looking for a business, not just a job title',
      'Ready to move in the next 3–12 months',
    ],
  },

  // Platform signals
  signals: [
    { stat: '10+', label: 'Years operating FranchiseConduit.com', sub: 'Domain authority earned through content and trust' },
    { stat: '618', label: 'Referring domains', sub: 'Organically earned backlinks from franchise industry publishers' },
    { stat: '$100K+', label: 'Minimum investment floor', sub: 'We serve investors with real capital — not tire-kickers' },
    { stat: '0', label: 'Brands that paid to rank higher', sub: 'Our Navigator Score is data-only, full stop' },
  ],

  cta: {
    text: 'Talk to a Waypoint advisor →',
    href: '/contact',
    secondary: 'Browse the catalog first →',
    secondaryHref: '/franchises',
  },
} as const

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRY_HUBS — /franchises/industries/[category]
// ─────────────────────────────────────────────────────────────────────────────
// All hub page content lives here. Page files import from this constant.
// Every entry must have unique intro, FAQ, and meta — no copy-paste across hubs.

export interface IndustryHub {
  slug: string
  name: string
  headline: string
  subhead: string
  marketSize: string
  cagr: string
  marketIntelligence: string
  whyFranchise: string
  iconGlyph: string
  investorNote: string
  metaTitle: string
  metaDescription: string
  faq: { q: string; a: string }[]
}

export const INDUSTRY_HUBS: IndustryHub[] = [
  {
    slug: 'home-services',
    name: 'Home Services & Maintenance',
    headline: 'Home Services Franchises',
    subhead: 'Recurring-revenue, asset-light models with proven unit economics for the executive investor.',
    marketSize: '$657B',
    cagr: '6.1%',
    metaTitle: 'Home Services Franchises: Research & Compare',
    metaDescription: 'Explore curated home services franchise opportunities. Recurring revenue, low overhead, and recession-resistant demand. Navigator Score rankings for serious investors.',
    marketIntelligence: `The U.S. home services market reached $657 billion in 2025 and is projected to grow at 6.1% CAGR through 2030, driven by aging housing stock, dual-income household growth, and the sustained preference for outsourcing recurring home maintenance. Unlike discretionary service categories, established home services contracts — pest control, lawn care, HVAC maintenance — demonstrate strong recession resistance, as homeowners maintained subscription-based service spending through both the 2008 and 2020 downturns. For franchise investors, the sector's attraction is a proven recurring-revenue model: seasonal service businesses with subscription treatment plans generate predictable monthly revenue without the complexity of a retail or food location.`,
    whyFranchise: `Home services franchises offer one of the strongest risk-adjusted profiles in franchising: low physical overhead (most are home-based or van-based), established brand recognition that accelerates customer acquisition, and recurring revenue contracts that dramatically improve cash flow predictability. Multi-territory ownership is a well-worn path in the category.`,
    iconGlyph: '🏠',
    investorNote: 'Most home services franchises are eligible for SBA financing and ROBS rollovers, making them accessible at the $100K–$250K investment tier.',
    faq: [
      {
        q: 'Are home services franchises truly recession-resistant?',
        a: 'Yes — the data supports it. HVAC maintenance, pest control, and lawn care contracts continued growing through both 2008 and the 2020 pandemic. Homeowners treat recurring maintenance as non-deferrable, not discretionary.',
      },
      {
        q: 'What hours do home services franchise owners typically work?',
        a: 'Mature owner-operators typically work 20–40 hours per week. Many convert to a manager model within 18–24 months by hiring a crew supervisor or operations manager, reducing direct time to 10–15 hours per week.',
      },
      {
        q: 'Do I need a license or trades background to own a home services franchise?',
        a: 'Generally no. Most home services franchisors recruit investors, not technicians. You hire licensed technicians; your role is business management, customer relations, and growth. Specific licensing requirements vary by state and service category.',
      },
      {
        q: 'What is the typical investment range for home services franchises?',
        a: 'Most home services concepts fall in the $80K–$250K total investment range, making them among the most accessible categories for first-time franchise investors. SBA 7(a) loans are widely available in this tier.',
      },
    ],
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    headline: 'Health & Wellness Franchises',
    subhead: 'Membership-model health businesses with structural demographic tailwinds and semi-absentee potential.',
    marketSize: '$1.8T',
    cagr: '5.9%',
    metaTitle: 'Health & Wellness Franchises: Research & Compare',
    metaDescription: 'Explore health and wellness franchise opportunities with membership revenue models. FBR data, AUV, and Navigator Score rankings for investors deploying $150K–$750K.',
    marketIntelligence: `The global health and wellness market was valued at $1.8 trillion in 2025, with the U.S. segment growing at 5.9% CAGR. Consumer spending on proactive health management has proven remarkably durable across economic cycles — wellness spending increased through both the 2008 recession and COVID-era disruption, as preventive health became a higher consumer priority. Within franchising, health and wellness concepts with membership models — chiropractic care, assisted stretching, cryotherapy — generate subscription-style revenue with monthly cancellation friction, producing AUV predictability that episodic service models cannot match. The aging U.S. population (1 in 5 Americans will be over 65 by 2030) structurally strengthens demand for preventive and pain-management health services.`,
    whyFranchise: `Health franchise investors benefit from the category's core structural advantage: members are high-retention, high-lifetime-value customers. Chiropractic and wellness membership models see 85–95% monthly renewal rates in mature locations, creating the kind of predictable monthly revenue that institutional investors recognize as a quality cash flow asset.`,
    iconGlyph: '💪',
    investorNote: 'Many health and wellness franchises allow a licensed professional to serve as the clinical director, enabling executive-model ownership for investors without a healthcare background.',
    faq: [
      {
        q: 'Do I need a healthcare background to own a health and wellness franchise?',
        a: 'No. Most health franchise systems are structured for business investors who hire licensed practitioners. You manage the business; your staff delivers the clinical service. Chiropractic, assisted stretching, and cryotherapy franchises are all structured this way.',
      },
      {
        q: 'What makes health and wellness membership revenue different from other franchise models?',
        a: 'Monthly EFT membership drafts mean revenue is collected automatically, with clients typically on 6–12 month minimum commitments. This produces a stable, predictable cash flow profile that is rare in consumer-facing businesses.',
      },
      {
        q: 'How long does it take a health and wellness franchise to reach profitability?',
        a: 'Most membership-model wellness concepts reach cash flow positive within 12–18 months, with month-over-month member growth being the primary revenue driver. Franchisors with strong member onboarding systems can accelerate this timeline significantly.',
      },
    ],
  },
  {
    slug: 'senior-care',
    name: 'Senior Care & Home Health',
    headline: 'Senior Care Franchises',
    subhead: 'The highest-growth franchise category with the most defensible demographic tailwind in the market.',
    marketSize: '$225B',
    cagr: '7.9%',
    metaTitle: 'Senior Care Franchises: Research & Compare',
    metaDescription: 'Explore senior care and home health franchise opportunities. 7.9% CAGR, non-medical models accessible to any background. Navigator Score data for serious investors.',
    marketIntelligence: `The U.S. home care market is projected to reach $225 billion by 2030, growing at a 7.9% CAGR — the highest sustained growth rate among all major franchise categories. The primary driver is unavoidable: 73 million baby boomers are reaching the age of care need, and the family caregiving infrastructure that served prior generations does not exist at the same scale. Non-medical home care — companionship, daily living support, personal care — is the preferred alternative to assisted living facilities and represents a significantly lower regulatory burden than medical home health agencies. Franchisors in this category have refined operations over 20+ years, with referral networks through hospital discharge planners and social workers providing durable lead pipelines once established.`,
    whyFranchise: `Senior care franchises produce recurring revenue driven by care need rather than consumer discretion — a structural quality that makes the category explicitly recession-resistant. Investors who build strong director-of-care relationships in the first 12–18 months consistently report stepping back to executive oversight by month 18–24, transitioning to a true manager model.`,
    iconGlyph: '🤝',
    investorNote: 'Non-medical home care does not require a licensed healthcare professional to operate, making it accessible to executive investors from any background.',
    faq: [
      {
        q: 'What is the difference between medical and non-medical senior care franchises?',
        a: 'Non-medical home care provides companionship, personal care assistance, and daily living support — no licensed medical staff required. Medical home health involves skilled nursing and therapy, requiring licensed clinical staff and more regulatory oversight. Most franchise investors start with non-medical models.',
      },
      {
        q: 'How is revenue generated in a senior care franchise?',
        a: 'Revenue is typically billed by the hour of care delivered, with clients on weekly or monthly care plans. Average care plans run 20–40 hours per week. Well-run franchises with 30+ active clients generate $500K–$1.2M in annual revenue.',
      },
      {
        q: 'Is senior care recession-resistant?',
        a: 'Yes — it is one of the most explicitly recession-resistant categories in franchising. Care need is driven by health condition and age, not consumer sentiment. Families do not pull back on necessary elder care during economic downturns.',
      },
    ],
  },
  {
    slug: 'business-services',
    name: 'Business & Professional Services',
    headline: 'Business Services Franchises',
    subhead: 'B2B recurring-revenue models that compound client relationships over time.',
    marketSize: '$1.2T',
    cagr: '5.4%',
    metaTitle: 'Business Services Franchises: Research & Compare',
    metaDescription: 'Explore B2B business services franchise opportunities. Annual contract revenue, low churn, and compounding referral pipelines. Navigator Score data for serious investors.',
    marketIntelligence: `The U.S. business services market — encompassing virtual office solutions, staffing, consulting support, and professional services — was valued at $1.2 trillion in 2025 and growing at 5.4% CAGR, fueled by the permanent hybrid work transition and the growing solopreneur and SMB economy. Business-to-business franchises generate recurring contract revenue from clients who renew on annual or multi-year terms, producing revenue predictability that consumer-facing models rarely achieve. The client acquisition dynamic is fundamentally different from B2C: once a B2B franchise establishes referral relationships with real estate brokers, CPAs, and business advisors, client pipeline becomes largely self-sustaining.`,
    whyFranchise: `B2B franchise investors benefit from low customer churn (business clients cancel contracts far less frequently than consumers), network-effect referral pipelines, and predictable contract income that supports clean financial modeling. The category attracts multi-unit investors seeking portfolio income with professional-grade client relationships.`,
    iconGlyph: '🏢',
    investorNote: 'B2B franchises typically require larger initial investments ($250K–$500K) but produce higher AUV and stronger predictable income profiles than consumer-facing alternatives at similar investment levels.',
    faq: [
      {
        q: 'How is a B2B franchise different from a consumer-facing franchise?',
        a: 'B2B franchises sell services to businesses on annual contracts, not to individual consumers on individual transactions. This means higher average contract values, lower churn (businesses rarely switch vendors), and referral-driven pipelines that compound over time rather than requiring constant advertising spend.',
      },
      {
        q: 'What kind of background suits a B2B franchise owner?',
        a: 'B2B franchises are well-matched to executives with corporate sales, operations, or relationship management backgrounds. The ability to build and maintain professional referral relationships — with CPAs, attorneys, real estate brokers — is more valuable than any specific industry knowledge.',
      },
      {
        q: 'Can B2B franchises be run semi-absentee?',
        a: 'Yes — most mature B2B franchises transition to a business development manager model within 12–24 months, where the franchisee manages client relationships and growth while a team handles delivery. This makes the category a strong match for investors who want executive oversight rather than daily operations.',
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education & Learning',
    headline: 'Education Franchises',
    subhead: 'Recession-proof subscription revenue driven by parental investment in long-term outcomes.',
    marketSize: '$14.3B',
    cagr: '5.8%',
    metaTitle: 'Education Franchises: Research & Compare',
    metaDescription: 'Explore education and tutoring franchise opportunities. Monthly subscription revenue, high retention rates, and counter-cyclical demand. Navigator Score data for serious investors.',
    marketIntelligence: `The U.S. K–12 supplemental education and childcare market was valued at $14.3 billion in 2025 and is growing at 5.8% CAGR, boosted by sustained academic performance gaps post-COVID and increasing parental investment in educational outcomes. The sector is explicitly counter-cyclical in some segments: research consistently shows that parents increase education spending during economic downturns as a long-term investment in their children's outcomes. Subscription tuition models — monthly per-student fees at established tutoring and enrichment franchises — create renewal-based revenue with 90–95% monthly retention rates in well-run centers.`,
    whyFranchise: `Education franchise investors can access both owner-operator and executive-model ownership depending on the brand — some systems are structured for franchisees to hire center directors and manage from a business oversight role. The monthly subscription revenue structure and high customer retention make education franchises among the most financially predictable businesses in any portfolio.`,
    iconGlyph: '📚',
    investorNote: 'Premium childcare franchises ($500K–$1.1M investment) qualify for SBA 7(a) and USDA loans. Established tutoring brands are accessible at $70K–$150K with significantly lower overhead.',
    faq: [
      {
        q: 'Do I need a background in education to own an education franchise?',
        a: 'No. Education franchisors are looking for business operators, not educators. You hire certified teachers or tutors to deliver instruction — your role is managing the business, marketing to families, and building community relationships.',
      },
      {
        q: 'Why are education franchises considered counter-cyclical?',
        a: 'Research consistently shows that parents prioritize and often increase education spending during recessions — they see it as an investment in long-term outcomes that cannot be deferred. This makes education franchise revenue remarkably stable across economic cycles.',
      },
      {
        q: 'What is the typical revenue model for an education franchise?',
        a: 'Most tutoring and enrichment concepts charge monthly tuition on a per-student basis, ranging from $150–$600/month depending on service intensity. A center with 80–120 enrolled students generates $200K–$500K+ in annual revenue on a relatively modest overhead base.',
      },
    ],
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    headline: 'Food & Beverage Franchises',
    subhead: 'High-AUV fast-casual and QSR concepts with proven multi-unit scaling paths.',
    marketSize: '$997B',
    cagr: '4.2%',
    metaTitle: 'Food & Beverage Franchises: Research & Compare',
    metaDescription: 'Explore food and beverage franchise opportunities with verified Item 19 data. QSR and fast-casual AUV comparisons, Navigator Score rankings for serious investors.',
    marketIntelligence: `The U.S. food service market was valued at $997 billion in 2025 and is growing at 4.2% CAGR. Within franchising, the category is bifurcated: legacy QSR brands offer proven unit economics and multi-unit scale for institutional investors, while fast-casual and specialty beverage concepts deliver higher AUV potential alongside more operational complexity. For serious franchise investors, the relevant evaluation framework is not brand recognition but unit-level economics — Average Unit Volume, food cost percentages, labor modeling, and territory density. The most reliable F&B franchise investments are those with disclosed FDD Item 19 data, high franchisee satisfaction scores, and a multi-unit development infrastructure built for operators managing more than one location.`,
    whyFranchise: `Food and beverage franchises offer the highest absolute AUV potential in the sector. Investors who take a portfolio approach — acquiring 3–5 units under an area development agreement — can achieve economies of scale in management, purchasing, and marketing that single-unit operators cannot access.`,
    iconGlyph: '🍽️',
    investorNote: 'We curate F&B franchises with verified Item 19 disclosures only. Brands without published performance data are not featured in our Most Profitable collection.',
    faq: [
      {
        q: 'What should I evaluate before investing in a food and beverage franchise?',
        a: 'The three critical data points are: Item 19 AUV disclosure (does the brand publish average unit revenue?), franchisee satisfaction score (are current operators happy?), and net unit count growth (is the system growing or contracting?). Brands that cannot answer all three deserve more scrutiny before you proceed.',
      },
      {
        q: 'Is multi-unit ownership common in food and beverage franchising?',
        a: 'Yes — the majority of QSR and fast-casual franchise revenue is owned by multi-unit operators with 3–50+ locations. Area development agreements (which grant exclusive territory rights in exchange for a development schedule) are the standard growth path for serious F&B investors.',
      },
      {
        q: 'How operationally intensive is a food franchise?',
        a: 'Food franchises are among the most operationally intensive concepts — particularly in the first 12–24 months while you build your management team. Most successful multi-unit operators are not working the counter; they are managing general managers who run individual locations.',
      },
    ],
  },
  {
    slug: 'property-restoration',
    name: 'Property Restoration & Remediation',
    headline: 'Property Restoration Franchises',
    subhead: 'Non-deferrable B2B demand driven by insurance relationships, not consumer marketing.',
    marketSize: '$51.9B',
    cagr: '6.3%',
    metaTitle: 'Property Restoration Franchises: Research & Compare',
    metaDescription: 'Explore property restoration and remediation franchise opportunities. Insurance-driven, non-deferrable demand with B2B referral pipelines. Navigator Score data for serious investors.',
    marketIntelligence: `The U.S. property damage restoration market was valued at $51.9 billion in 2025 and is growing at 6.3% CAGR, driven by increasing extreme weather frequency, aging housing infrastructure, and rising commercial property claim volumes. The sector's defining structural advantage is non-deferrable demand: water damage worsens hourly, fire damage requires immediate remediation, and mold cannot wait — creating urgency-driven work that is independent of consumer sentiment or economic conditions. Restoration franchisees who establish strong insurance adjuster relationships in their first two years build a referral pipeline that generates 80–90% of ongoing revenue without consumer marketing investment.`,
    whyFranchise: `Property restoration franchises offer one of the most defensible revenue models in franchise investing: demand is structurally non-deferrable, the B2B referral pipeline compounds over time, and insurance claim work is paid reliably. Mature operators consistently report that B2B adjuster relationships — not advertising — are the primary business development asset.`,
    iconGlyph: '🔧',
    investorNote: 'Most restoration franchises are van-based, requiring no physical retail location. The primary investment is equipment, working capital, and the initial franchisee training period.',
    faq: [
      {
        q: 'Why is property restoration considered recession-resistant?',
        a: 'Property damage — water intrusion, fire, mold, storm damage — occurs independent of economic conditions. Insurance companies pay for remediation regardless of whether the stock market is up or down. The demand is driven by weather events and aging infrastructure, not consumer confidence.',
      },
      {
        q: 'How do restoration franchisees build their client pipeline?',
        a: 'The primary referral sources are insurance adjusters, property managers, and restoration contractors. Most successful franchisees focus intensively on B2B relationship development in the first 12–18 months — attending adjuster events, building trust with claim handlers — before the referral pipeline becomes largely self-generating.',
      },
      {
        q: 'What are the typical startup costs for a restoration franchise?',
        a: 'Most restoration franchises require $150K–$350K in total investment, with the majority allocated to specialized equipment (extraction units, drying equipment, HEPA filtration) and working capital. No physical retail location is required, keeping overhead low relative to potential revenue.',
      },
    ],
  },
  {
    slug: 'fitness',
    name: 'Fitness & Recreation',
    headline: 'Fitness Franchises',
    subhead: 'Membership-driven fitness concepts with strong brand retention and multi-unit scale.',
    marketSize: '$48.8B',
    cagr: '7.7%',
    metaTitle: 'Fitness Franchises: Research & Compare',
    metaDescription: 'Explore fitness franchise opportunities with membership revenue models. Boutique studio concepts, semi-absentee potential, and Navigator Score rankings for serious investors.',
    marketIntelligence: `The U.S. fitness industry was valued at $48.8 billion in 2025, growing at 7.7% CAGR — one of the strongest recovery trajectories in consumer services post-2020. The sector has bifurcated sharply: budget fitness commodities compete on price, while premium boutique concepts — personal training studios, specialized fitness modalities, recovery services — compete on experience and community, generating significantly higher member lifetime value and lower price sensitivity. For franchise investors, the boutique studio model offers a membership-revenue structure with monthly EFT drafts and 6–12 month minimum membership commitments, reducing churn and stabilizing cash flow.`,
    whyFranchise: `Fitness franchise investors benefit from the sector's strong word-of-mouth referral culture and the relatively low marketing costs of community-driven member acquisition. Established boutique concepts in saturated markets continue to outperform because members are buying community — not just access to equipment.`,
    iconGlyph: '🏋️',
    investorNote: 'Boutique fitness concepts typically require a physical location ($200K–$500K total investment) and are structured for executive ownership through a studio manager model.',
    faq: [
      {
        q: 'What makes boutique fitness franchises more attractive than budget gym concepts?',
        a: 'Boutique concepts charge 3–5x higher monthly membership fees than budget gyms and attract members who are buying a specific experience or community, not just equipment access. This produces higher member lifetime value and lower price-driven churn — the economics are fundamentally different.',
      },
      {
        q: 'Can a fitness franchise be run semi-absentee?',
        a: 'Yes — most boutique studio franchises are designed for an owner who hires a studio manager to run day-to-day operations. The franchisee handles member relations, marketing strategy, and financial oversight without working the floor full-time.',
      },
      {
        q: 'What is a typical payback period for a fitness franchise?',
        a: 'Most boutique fitness franchises at full membership capacity (typically 200–400 members) generate enough revenue to cover investment in 3–5 years. Franchisors with strong pre-sale membership programs can dramatically accelerate the timeline to profitability.',
      },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail & Consumer Goods',
    headline: 'Retail Franchises',
    subhead: 'Curated specialty retail concepts with defensible product niches and repeat purchase economics.',
    marketSize: '$6.2T',
    cagr: '3.8%',
    metaTitle: 'Retail Franchises: Research & Compare',
    metaDescription: 'Explore specialty retail franchise opportunities in defensible niches. Repeat purchase economics, e-commerce resistance, and Navigator Score data for serious investors.',
    marketIntelligence: `While the U.S. retail market is vast at $6.2 trillion, franchise investors should focus on specialty retail concepts with defensible product niches, high repeat purchase rates, and demonstrable e-commerce resistance. The retail concepts that have consistently outperformed in the franchise context are those with experiential or professional service components that online competitors cannot replicate — specialty pet services, custom products, expert-guided purchasing categories. Within franchising, the most investor-grade retail concepts operate in a manager-model structure with clear territory protection and multi-unit development rights, allowing portfolio scaling without proportional owner time investment.`,
    whyFranchise: `Specialty retail franchises in defensible niches offer brand-driven customer acquisition, established supplier relationships, and proven inventory management systems that independent retailers spend years developing. The franchise structure compresses the timeline to profitability significantly relative to independent retail.`,
    iconGlyph: '🛍️',
    investorNote: 'We focus exclusively on specialty retail concepts with repeat purchase economics and clear e-commerce resistance. We do not feature commodity retail or pure-play product resale franchises.',
    faq: [
      {
        q: 'What makes a retail franchise "e-commerce resistant"?',
        a: 'Retail franchises that require expertise, physical experience, or professional guidance to purchase — custom framing, specialty pet grooming, expert outdoor gear fitting — cannot be easily replicated by Amazon. The service component protects the business model in ways that pure product resale cannot.',
      },
      {
        q: 'Is retail a higher-risk category than services for franchise investors?',
        a: 'It depends on the concept. Specialty retail with high repeat purchase rates and defensible niches can perform very well. Commodity retail — products that can be bought online for less — carries significantly higher risk. We only feature the former.',
      },
      {
        q: 'What is typical territory protection like in retail franchises?',
        a: 'Most specialty retail franchisors offer protected geographic territories based on population radius or trade area. Multi-unit rights are commonly available, allowing investors to scale to 2–5 locations across a metropolitan market under a single development agreement.',
      },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive Services',
    headline: 'Automotive Services Franchises',
    subhead: 'Non-discretionary maintenance demand with strong brand loyalty and high ticket economics.',
    marketSize: '$116B',
    cagr: '4.5%',
    metaTitle: 'Automotive Services Franchises: Research & Compare',
    metaDescription: 'Explore automotive service franchise opportunities. Non-deferrable maintenance demand, 290M registered vehicles, and Navigator Score rankings for serious investors.',
    marketIntelligence: `The U.S. automotive services market was valued at $116 billion in 2025, growing at 4.5% CAGR, underpinned by one of the most durable demand drivers in consumer services: Americans own 290 million registered vehicles that require mandatory periodic maintenance regardless of economic conditions. Unlike discretionary automotive upgrades, preventive maintenance — oil changes, brake service, tire rotation — is structurally non-deferrable, making automotive service franchises among the most recession-resistant concepts in any investment tier. The category's franchise incumbents have built brand recognition over decades that generates customer walk-in volume independent of local marketing investment.`,
    whyFranchise: `Automotive service franchises benefit from high repeat visit frequency (most vehicles require 3–4 service visits per year), strong brand loyalty among established national chains, and operator economics that scale efficiently with experienced service technician management.`,
    iconGlyph: '🚗',
    investorNote: 'Quick-lube and express automotive service concepts are structured for manager-model ownership, with franchisees managing 1–5 locations from a general manager infrastructure.',
    faq: [
      {
        q: 'Do I need mechanical or automotive expertise to own an automotive franchise?',
        a: 'No. Express service concepts are specifically designed for business investors who hire ASE-certified technicians. Your role is managing the business — hiring staff, maintaining quality, driving marketing — not performing the service work.',
      },
      {
        q: 'How recession-resistant are automotive service franchises?',
        a: 'Very. Americans cannot defer oil changes and brake service indefinitely — deferred maintenance causes greater damage. Even during 2008 and 2020, express automotive service demand contracted less than 5% nationally, far below the broader economic contraction.',
      },
      {
        q: 'What is the revenue potential for a single automotive franchise location?',
        a: 'Express lube and quick service concepts in strong locations typically generate $400K–$900K in annual revenue per location, with EBITDA margins of 15–25% at maturity. Multi-unit operators with 3–5 locations can leverage shared management infrastructure to improve overall margins.',
      },
    ],
  },
  {
    slug: 'cleaning-services',
    name: 'Cleaning & Janitorial Services',
    headline: 'Cleaning & Janitorial Franchises',
    subhead: 'Recurring commercial contracts with the lowest startup cost and fastest path to positive cash flow.',
    marketSize: '$117B',
    cagr: '6.6%',
    metaTitle: 'Cleaning & Janitorial Franchises: Research & Compare',
    metaDescription: 'Explore commercial cleaning franchise opportunities. Recurring contract revenue, low startup cost under $150K, and Navigator Score rankings for serious investors.',
    marketIntelligence: `The U.S. commercial cleaning and janitorial market was valued at $117 billion in 2025, growing at 6.6% CAGR, driven by post-pandemic facility hygiene standards that have become permanent in commercial, medical, and institutional settings. Commercial cleaning franchises generate recurring monthly contract revenue — typically 12- to 36-month commercial agreements with property managers, medical offices, schools, and industrial facilities — that produces the most predictable cash flow profile of any franchise category. The sector's defining investor advantage is modest startup cost relative to revenue potential: many commercial cleaning franchises are operational for under $100K with positive cash flow achievable within the first 60–90 days of contract ramp.`,
    whyFranchise: `Cleaning franchise investors benefit from the fastest cash flow ramp in franchising: commercial contracts begin generating revenue within weeks of signing, with no customer acquisition lag. The manager-model transition is straightforward — experienced route managers and crew supervisors allow executive owners to step back within 6–12 months of launch.`,
    iconGlyph: '✨',
    investorNote: 'Commercial cleaning franchises are among the most accessible investment opportunities at $50K–$150K total investment while delivering AUV profiles comparable to concepts at 2–3x the entry cost.',
    faq: [
      {
        q: 'What types of clients do commercial cleaning franchises serve?',
        a: 'Commercial cleaning franchises primarily serve office buildings, medical facilities, schools, retail centers, and industrial facilities — not residential homes. Commercial contracts are longer-term (12–36 months), higher-value, and far more predictable than residential cleaning work.',
      },
      {
        q: 'How quickly can a cleaning franchise reach profitability?',
        a: 'Commercial cleaning has the fastest cash flow ramp in franchising. Once contracts are signed — typically within 60–90 days of launch — revenue begins immediately. Franchises with 15–20 commercial contracts in place ($25K–$40K monthly recurring) typically reach profitability within 6–9 months.',
      },
      {
        q: 'Do I need cleaning experience to own a commercial cleaning franchise?',
        a: 'No. You hire crew supervisors and route managers to handle service delivery. Your role is contract development, client relationships, and business operations. Many successful cleaning franchise owners come from corporate sales, operations, or management backgrounds.',
      },
    ],
  },
  {
    slug: 'technology',
    name: 'Technology & IT Services',
    headline: 'Technology & IT Services Franchises',
    subhead: 'B2B managed services with enterprise-grade recurring revenue and high retention contracts.',
    marketSize: '$428B',
    cagr: '8.2%',
    metaTitle: 'Technology & IT Services Franchises: Research & Compare',
    metaDescription: 'Explore technology and managed IT services franchise opportunities. MSP recurring revenue, 8.2% CAGR, and Navigator Score data for serious investors.',
    marketIntelligence: `The U.S. managed IT services market was valued at $428 billion in 2025 and is growing at 8.2% CAGR — one of the fastest growth rates among all franchise categories — driven by the acute SMB cybersecurity skills gap and the accelerating digital transformation of local businesses. IT services franchises in the MSP (Managed Service Provider) model generate monthly recurring revenue from multi-year IT support, cybersecurity monitoring, and cloud infrastructure contracts with SMB clients who cannot afford in-house IT staff. The churn dynamics are asymmetric: switching IT providers is expensive and disruptive, producing contract retention rates of 90%+ in mature MSP businesses.`,
    whyFranchise: `Technology franchise investors who build a strong local MSP client base in years 1–2 benefit from compounding contract value as clients expand their service engagement over time. The B2B model and high switching costs create a revenue moat that consumer-facing franchises rarely achieve.`,
    iconGlyph: '💻',
    investorNote: 'Technology franchises require a technical business development approach but do not require the franchisee to be a technician. Executive investors hire technical talent and manage the client relationship portfolio.',
    faq: [
      {
        q: 'Do I need a technical background to own a technology franchise?',
        a: 'No. Most IT services franchisors are looking for business development-oriented owners who can build relationships with SMB clients. You hire certified technicians and engineers to deliver the service. Your role is client acquisition, account management, and business growth.',
      },
      {
        q: 'What is an MSP and why is the model attractive for franchise investors?',
        a: 'A Managed Service Provider handles ongoing IT support, cybersecurity, and cloud infrastructure for SMB clients on a monthly retainer. The model produces recurring revenue, high contract retention (clients rarely switch IT providers), and compounding contract value as relationships mature.',
      },
      {
        q: 'What is the typical investment for a technology franchise?',
        a: 'Technology franchise investments typically range from $100K–$300K, depending on the brand and market. Unlike food or fitness concepts, there is no physical location required — the business is home-based or office-based, keeping overhead low relative to potential AUV.',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STATE_HUBS — /franchises/locations/[state]
// ─────────────────────────────────────────────────────────────────────────────
// All state hub page content lives here. Page files import from this constant.
// Every entry must have unique intro text and meta description.

export interface StateHub {
  slug: string
  name: string
  abbr: string
  businessClimate: string
  keyMarkets: string[]
  investorNote: string
  metaTitle: string
  metaDescription: string
  faq: { q: string; a: string }[]
}

export const STATE_HUBS: StateHub[] = [
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    metaTitle: 'Texas Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Texas. No registration requirement, 4 top-10 metro markets, and Navigator Score data for serious investors.',
    businessClimate: `Texas ranks #1 in the U.S. for business climate (Forbes 2025), with no state income tax, a $2.6 trillion GDP, and the fastest-growing major metropolitan markets in the country. Dallas-Fort Worth, Houston, Austin, and San Antonio are four of the ten fastest-growing U.S. metro areas by population, creating sustained demand for franchise services across every category. The state's business-first regulatory environment, low franchise licensing burden, and deep pool of executive talent make Texas the top target state for franchise expansion among sophisticated multi-unit investors.`,
    keyMarkets: ['Dallas-Fort Worth', 'Houston', 'Austin', 'San Antonio'],
    investorNote: 'Texas has no franchise registration requirement — operators can begin franchisee recruitment immediately after FDD issuance.',
    faq: [
      { q: 'Is Texas a franchise registration state?', a: 'No. Texas does not require FDD registration with a state regulator. Franchisors can offer franchises in Texas immediately after the FDD is issued, significantly reducing time-to-open timelines compared to registration states like California or New York.' },
      { q: 'Which Texas metro markets generate the strongest franchise unit economics?', a: 'Dallas-Fort Worth and Houston are the primary targets, each with 7M+ metro populations and strong household income demographics. Austin commands premium pricing driven by technology sector household incomes. San Antonio offers lower competition and entry costs with solid suburban growth.' },
      { q: 'What franchise categories perform best in Texas?', a: 'Home services, senior care, health and wellness, and B2B service franchises consistently outperform national AUV benchmarks in Texas, driven by the demographic profile of the corporate migrant population and the state\'s strong suburban growth pattern.' },
    ],
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    metaTitle: 'Florida Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Florida. No income tax, top domestic migration rankings, and Navigator Score data for serious investors.',
    businessClimate: `Florida's combination of no state income tax, a $1.7 trillion economy, and consistent top-3 domestic migration rankings makes it one of the most attractive franchise markets in the country. The Miami, Orlando, Tampa, and Jacksonville metros collectively represent over 15 million residents, with above-average household income growth in the $100K–$300K range that aligns directly with executive-model franchise ownership. The state's aging population drives outsized demand for senior care, health and wellness, and home services franchises specifically.`,
    keyMarkets: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    investorNote: 'Florida is not a franchise registration state. The state\'s franchise activity is among the highest in the country by unit count, demonstrating strong consumer and business demand across categories.',
    faq: [
      { q: 'Is Florida a franchise registration state?', a: 'No. Florida does not require FDD registration, making it one of the most franchise-friendly states operationally. Franchisors can offer and begin selling territories immediately after FDD issuance.' },
      { q: 'What makes Florida particularly strong for senior care franchises?', a: 'Florida has the second-highest proportion of residents over 65 of any state — nearly 21% — creating exceptional demand for non-medical home care, assisted living placement, and senior wellness services. This demographic advantage is a structural tailwind that will persist for decades.' },
      { q: 'How does Florida\'s tourism economy affect franchise performance?', a: 'Florida\'s tourism concentration means certain markets (particularly greater Orlando and coastal South Florida) experience seasonal demand fluctuations. Franchise categories with recurring contract revenue — cleaning, home services, B2B — are better insulated from this seasonality than consumer-dependent concepts.' },
    ],
  },
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    metaTitle: 'California Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in California. $3.9T economy, highest-AUV markets in the US, and Navigator Score data for serious investors.',
    businessClimate: `California is a franchise registration state with a formal FDD filing requirement — but its $3.9 trillion economy and 39 million residents represent the largest single-state franchise market in the U.S. Los Angeles, San Francisco, San Diego, and Sacramento are among the highest-AUV franchise markets in the country, reflecting the state's above-average household income and willingness to pay for premium services. Investors in California benefit from strong franchise consumer demand at premium price points.`,
    keyMarkets: ['Los Angeles', 'San Francisco Bay Area', 'San Diego', 'Sacramento'],
    investorNote: 'California requires FDD registration before franchisee offers. Budget 90–120 days for CA registration processing when planning your expansion timeline.',
    faq: [
      { q: 'What does California\'s franchise registration requirement mean for investors?', a: 'California requires franchisors to register their FDD with the California Department of Financial Protection and Innovation before offering franchises in the state. As a buyer, this means the franchisor has gone through a regulatory review — which provides an additional layer of investor protection. Registration takes 90–120 days, so factor this into your timeline expectations.' },
      { q: 'Do California franchise locations typically outperform national AUV averages?', a: 'Yes — significantly. California\'s above-average household income and consumer willingness to pay premium prices typically produce AUV figures 20–35% above national system averages in home services, health, wellness, and professional services categories.' },
      { q: 'What business climate factors should California franchise investors consider?', a: 'California has higher minimum wage requirements, mandatory paid leave policies, and stricter employment classification rules (AB5) than most states. These factors increase labor costs and operational complexity. Franchise systems with strong compliance infrastructure that already account for California requirements are better choices for CA investors.' },
    ],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    metaTitle: 'Georgia Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Georgia. Premier Southeast franchise market, no registration requirement, and Navigator Score data for serious investors.',
    businessClimate: `Georgia is the premier franchise market in the Southeast, anchored by Atlanta's status as the logistics, healthcare, and fintech hub of the region. Metro Atlanta alone has a population of 6.3 million with household income demographics that directly match the executive-model franchise buyer profile. Georgia has no franchise registration requirement, a flat 5.49% corporate income tax rate, and consistently ranks in the top five states for business climate in major annual surveys. The state's population growth consistently outpaces the national average.`,
    keyMarkets: ['Atlanta', 'Savannah', 'Augusta', 'Columbus'],
    investorNote: 'Atlanta is one of the top three franchise expansion targets in the Southeast for multi-unit operators, with strong unit economics documented across categories from home services to health and wellness.',
    faq: [
      { q: 'Is Georgia a franchise registration state?', a: 'No. Georgia does not require FDD registration, making it an operationally straightforward state for franchise expansion. Franchisors can offer franchises in Georgia immediately after FDD issuance.' },
      { q: 'What makes Atlanta a strong franchise market?', a: 'Atlanta combines Fortune 500 corporate headquarters density (Coca-Cola, Delta, Home Depot, UPS), consistent top-5 domestic migration rankings, and a growing executive population with capital deployment motivation. This creates ideal conditions for premium service franchise investment.' },
      { q: 'Are there good franchise markets in Georgia outside of Atlanta?', a: 'Yes. Savannah has experienced significant population growth driven by the port and corporate relocations. Augusta\'s healthcare and military economy supports steady demand for senior care, home services, and health concepts. Both markets offer lower competition than Atlanta with solid fundamentals.' },
    ],
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    metaTitle: 'North Carolina Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in North Carolina. Research Triangle growth, Charlotte banking hub, no registration requirement, and Navigator Score data.',
    businessClimate: `North Carolina has emerged as one of the most competitive franchise markets in the Southeast, driven by the Research Triangle's technology and pharmaceutical sector growth, Charlotte's position as the second-largest U.S. banking center, and consistent top-five rankings in CNBC's annual America's Top States for Business survey. The state's population growth — fueled by corporate relocations from higher-cost Northeast and West Coast markets — brings executive talent whose income and investment profiles align precisely with the serious franchise investor segment.`,
    keyMarkets: ['Charlotte', 'Raleigh-Durham', 'Greensboro', 'Wilmington'],
    investorNote: 'North Carolina is not a franchise registration state. The Charlotte and Raleigh-Durham markets both rank in the top 20 fastest-growing metros nationally by population migration.',
    faq: [
      { q: 'Is North Carolina a franchise registration state?', a: 'No. North Carolina does not require FDD registration, allowing franchisors to offer franchises immediately after FDD issuance. This makes it operationally efficient for multi-state expansion.' },
      { q: 'Which North Carolina markets are strongest for franchise investment?', a: 'Charlotte and Raleigh-Durham are the primary targets, both ranking in the top 20 fastest-growing U.S. metros. Charlotte\'s banking and financial services industry produces strong executive investor demographics. Raleigh-Durham\'s Research Triangle technology and pharmaceutical sectors create similar household income profiles.' },
      { q: 'What franchise categories are performing well in North Carolina?', a: 'Health and wellness, home services, and B2B professional services consistently track above national benchmarks in North Carolina, particularly in Charlotte and the Research Triangle suburbs where household incomes support premium service spending.' },
    ],
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    metaTitle: 'Arizona Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Arizona. Phoenix 5th-largest metro, no registration requirement, strong corporate migrant base, and Navigator Score data.',
    businessClimate: `Arizona's franchise market is anchored by the Phoenix metro — the fifth-largest U.S. metro by population and the fastest-growing major metro between 2020 and 2025. The state combines favorable tax policy (4.5% flat income tax), no franchise registration requirement, and an executive population that skews heavily toward corporate migrants from California and Illinois. Health and wellness, home services, and senior care franchises consistently outperform national AUV benchmarks in Phoenix, reflecting the demographic profile of the migrant population.`,
    keyMarkets: ['Phoenix', 'Scottsdale', 'Tucson', 'Mesa'],
    investorNote: 'Arizona is not a franchise registration state. The Phoenix metro\'s corporate migration inflow is one of the strongest franchise demand drivers in the Western U.S.',
    faq: [
      { q: 'Is Arizona a franchise registration state?', a: 'No. Arizona does not require FDD registration with a state agency. Franchisors can offer franchises in Arizona immediately after FDD issuance, making it one of the most franchise-friendly Western states operationally.' },
      { q: 'What is driving franchise demand in the Phoenix metro?', a: 'Phoenix absorbed more domestic net migration than any other major U.S. metro between 2020 and 2024. The incoming population skews heavily toward California and Illinois corporate migrants with above-average household incomes — exactly the demographic that supports premium franchise service spending.' },
      { q: 'Does Arizona\'s climate affect franchise performance in certain categories?', a: 'Yes. Home exterior services (painting, roofing, landscaping) see seasonal patterns driven by the intense summer heat. Home services that are indoor-focused — pest control, cleaning, HVAC — perform consistently year-round. Franchise investors should factor seasonal demand patterns into their cash flow projections.' },
    ],
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    metaTitle: 'Colorado Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Colorado. Highest educational attainment in the US, Denver tech economy, and Navigator Score data for serious investors.',
    businessClimate: `Colorado has the highest educational attainment rate in the U.S. and a robust technology and aerospace economy centered on Denver that consistently produces executive-level employment transitions — the ideal profile for semi-absentee franchise ownership. Denver's household income demographics, an average home value approaching $550K, and the state's strong outdoor recreation culture create above-average per-capita spending on health, wellness, and home services. Colorado is not a franchise registration state.`,
    keyMarkets: ['Denver', 'Boulder', 'Colorado Springs', 'Fort Collins'],
    investorNote: 'Denver consistently ranks in the top five U.S. markets for franchise unit economics in the health, wellness, and professional services categories, driven by above-average household income and consumer spending.',
    faq: [
      { q: 'Is Colorado a franchise registration state?', a: 'No. Colorado does not require FDD registration with a state agency, making it operationally straightforward for franchise expansion.' },
      { q: 'What industries perform best for franchise investment in Colorado?', a: 'Health and wellness, fitness, and outdoor-adjacent home services categories consistently outperform in Colorado, driven by the population\'s active lifestyle orientation and high disposable income. The technology sector workforce also creates strong demand for B2B IT services franchises.' },
      { q: 'How has the Denver market changed for franchise investors in recent years?', a: 'Denver experienced significant population growth from California and Midwest corporate relocations from 2019–2024, bringing a wave of executive talent with capital deployment capacity. This has strengthened household income demographics in both urban and suburban markets.' },
    ],
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    metaTitle: 'Ohio Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Ohio. Three major metro markets, strong area development potential, and Navigator Score data for serious investors.',
    businessClimate: `Ohio's strength as a franchise market lies in its scale and cost advantage: Columbus, Cleveland, and Cincinnati are three distinct major metro markets within one state, each with substantial population bases and household income profiles that support multi-unit franchise investment. Central Ohio has emerged as a logistics and technology hub, contributing to Columbus's consistent ranking as one of the top emerging franchise markets in the Midwest. Ohio is not a franchise registration state.`,
    keyMarkets: ['Columbus', 'Cincinnati', 'Cleveland', 'Dayton'],
    investorNote: 'Ohio\'s multi-metro geography makes it an attractive area development target — a single area developer agreement can cover Columbus, Cincinnati, and Cleveland, providing multi-unit scale within a single state.',
    faq: [
      { q: 'Is Ohio a franchise registration state?', a: 'No. Ohio does not require FDD registration with a state agency, making it operationally efficient for franchise expansion.' },
      { q: 'What makes Ohio a strong area development market?', a: 'Three major metro markets within one state means an area developer can build a multi-unit portfolio covering Columbus, Cincinnati, and Cleveland under a single development agreement. This geographic efficiency is rare and creates significant scale advantages for investors who want to build a multi-unit franchise business without crossing state lines.' },
      { q: 'Which Ohio metro markets offer the best entry opportunities?', a: 'Columbus has the strongest growth trajectory and demographics, driven by Ohio State University, government, and an emerging technology sector. Cincinnati and Cleveland offer more affordable entry points with strong incumbent residential and commercial demand for service franchises.' },
    ],
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    metaTitle: 'Illinois Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Illinois. Chicago top-5 franchise market, 9.5M metro population, and Navigator Score data for serious investors.',
    businessClimate: `Illinois is a franchise registration state with a formal FDD filing requirement, but the Chicago metropolitan area — population 9.5 million — is the largest single-market franchise opportunity in the Midwest and one of the top five franchise markets nationally. Chicago's density, executive workforce demographics, and concentration of corporate headquarters make it a premium target for investor-grade franchise concepts with strong brand recognition and semi-absentee operational models.`,
    keyMarkets: ['Chicago', 'Naperville', 'Schaumburg', 'Rockford'],
    investorNote: 'Illinois requires FDD registration. Allow 90 days for processing. The Chicago market\'s premium pricing and household income demographics typically produce AUV figures 15–25% above national franchise system averages.',
    faq: [
      { q: 'Is Illinois a franchise registration state?', a: 'Yes. Illinois requires FDD registration with the Illinois Attorney General\'s Office before offering franchises in the state. Budget 60–90 days for registration processing. As an investor, this provides an additional layer of regulatory review protection.' },
      { q: 'Does the Chicago market justify the added complexity of an Illinois registration state?', a: 'For the right franchise concept, absolutely. Chicago\'s population density, corporate headquarters concentration (Boeing, United Airlines, Caterpillar, and dozens more), and above-average household income produce AUV figures consistently 15–25% above national system averages — significantly improving investment returns.' },
      { q: 'Are there franchise opportunities outside Chicago worth considering in Illinois?', a: 'The Chicago suburbs — Naperville, Schaumburg, Downers Grove — offer executive demographics comparable to the city with lower operational complexity and real estate costs. Suburban Illinois markets are strong targets for home services, senior care, and health and wellness franchises.' },
    ],
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    metaTitle: 'Pennsylvania Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Pennsylvania. Philadelphia and Pittsburgh markets, 13M population, and Navigator Score data for serious investors.',
    businessClimate: `Pennsylvania is a franchise registration state, but its combination of Philadelphia, Pittsburgh, and the Pennsylvania Turnpike corridor provides access to a dense population of 13 million across three distinct market geographies. The Philadelphia market in particular — with its concentration of financial services, healthcare, and pharmaceutical employment — produces executive buyer demographics that align precisely with semi-absentee and manager-model franchise ownership. Pittsburgh's healthcare and education economy similarly supports strong franchise consumer demand.`,
    keyMarkets: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Harrisburg'],
    investorNote: 'Pennsylvania requires FDD registration. Philadelphia and its suburbs consistently rank among the top mid-Atlantic franchise markets for health, wellness, and professional services unit volume.',
    faq: [
      { q: 'Is Pennsylvania a franchise registration state?', a: 'Yes. Pennsylvania requires FDD registration with the Pennsylvania Bureau of Consumer Protection before offering franchises in the state. Factor 60–90 days for registration processing into your timeline.' },
      { q: 'What makes the Philadelphia market attractive for franchise investment?', a: 'The Philadelphia metro has a deep concentration of healthcare, pharmaceutical, and financial services employment — industries that produce exactly the executive investor demographic that performs well in semi-absentee and manager-model franchise ownership. Delaware County and Chester County suburbs have particularly strong household income profiles.' },
      { q: 'How has the Pittsburgh market evolved for franchise investment?', a: 'Pittsburgh has transitioned from a steel economy to a healthcare and university-anchored economy, with UPMC being one of the largest employers in Pennsylvania. This shift has produced a stable, professional workforce that creates strong demand for health, wellness, and professional services franchises.' },
    ],
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    metaTitle: 'New York Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in New York. Largest US consumer market, suburban opportunities, and Navigator Score data for serious investors.',
    businessClimate: `New York is a franchise registration state with detailed filing requirements, but the New York City metro — the largest consumer market in the U.S. — represents unmatched brand exposure and premium pricing power. Franchise concepts that can demonstrate unit economics in the New York market have proven product-market fit at the highest consumer expectation level in the country. Suburban New York markets — Westchester, Long Island, Connecticut border communities — offer executive demographics with lower operational complexity than Manhattan-based locations.`,
    keyMarkets: ['New York City', 'Long Island', 'Westchester', 'Buffalo'],
    investorNote: 'New York requires FDD registration with specific New York disclosure items. Budget 120+ days for registration and target suburban markets for semi-absentee models to avoid Manhattan operational complexity.',
    faq: [
      { q: 'Is New York a franchise registration state?', a: 'Yes. New York requires FDD registration with the New York Department of Law and includes specific New York disclosure requirements beyond the standard FDD. Registration typically takes 90–120+ days. As a buyer, this means New York franchise offerings have gone through extensive regulatory review.' },
      { q: 'Should franchise investors focus on New York City or suburban markets?', a: 'For semi-absentee and manager-model franchises, suburban markets — Long Island, Westchester, Northern NJ — typically offer better risk-adjusted returns. Manhattan has extraordinary premium pricing but also extraordinary real estate and operational costs. Suburban New York delivers comparable household income demographics with meaningfully lower complexity.' },
      { q: 'What franchise categories perform best in the New York market?', a: 'Health and wellness, fitness, and premium home services consistently command above-market pricing in New York suburbs, driven by one of the highest median household income concentrations in the country. Senior care has exceptional demand in the aging suburban communities of Long Island and Westchester.' },
    ],
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    metaTitle: 'Tennessee Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Tennessee. No state income tax, Nashville explosive growth, no registration requirement, and Navigator Score data.',
    businessClimate: `Tennessee is one of the most franchise-friendly states in the country — no state income tax, no franchise registration requirement, and a business climate ranked consistently in the top ten nationally. Nashville's explosive growth (averaging 80–100 net new residents per day through 2024–2025), combined with corporate relocations from higher-tax states, has created a strong executive population with capital deployment motivation. Memphis and Chattanooga offer additional markets with strong service business demand and lower competition for franchise units.`,
    keyMarkets: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    investorNote: 'Tennessee has no income tax on wages or salaries (Hall Tax fully repealed as of 2022). The absence of state income tax is a direct investor advantage for franchise income.',
    faq: [
      { q: 'Is Tennessee a franchise registration state?', a: 'No. Tennessee does not require FDD registration, making it one of the most operationally straightforward states for franchise expansion. Franchisors can offer franchises immediately after FDD issuance.' },
      { q: 'What is driving Nashville\'s franchise market growth?', a: 'Nashville has absorbed significant corporate relocation from California, Illinois, and the Northeast — bringing executive talent with capital, management experience, and the financial profile to invest in franchise ownership. The city\'s healthcare sector (HCA Healthcare is headquarters here) adds another layer of high-income professional employment to the market.' },
      { q: 'Does Tennessee\'s lack of income tax directly benefit franchise investors?', a: 'Yes. Tennessee\'s full repeal of the Hall Tax means franchise income is not subject to state-level income taxation, which improves after-tax returns compared to high-tax states. For investors comparing Tennessee to California or Illinois franchise opportunities, the tax advantage can represent a meaningful difference in net return.' },
    ],
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    metaTitle: 'Washington Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Washington. Seattle tech economy, highest per-capita franchise spend in the US, and Navigator Score data.',
    businessClimate: `Washington state's franchise market is dominated by the Seattle metro — one of the highest household income markets in the country, driven by the technology sector (Amazon, Microsoft, Boeing, and their contractor networks). Washington is not a franchise registration state. The Seattle market's technology executive demographics are an exceptionally strong match for semi-absentee investment models, and the state's absence of an income tax creates favorable conditions for franchise income retention.`,
    keyMarkets: ['Seattle', 'Bellevue', 'Tacoma', 'Spokane'],
    investorNote: 'The Seattle metro produces some of the highest per-capita franchise spend in the U.S. across health, wellness, and professional services — driven by above-average household income and strong consumer quality-orientation.',
    faq: [
      { q: 'Is Washington a franchise registration state?', a: 'No. Washington does not have a traditional franchise registration requirement, making it operationally efficient for franchise expansion to the Seattle market.' },
      { q: 'What makes the Seattle market unique for franchise investment?', a: 'Amazon, Microsoft, Boeing, and their contractor ecosystems have produced one of the highest concentrations of high-income professional employees in the country. Average household incomes in Bellevue, Redmond, and Kirkland exceed $150K — a demographic profile that supports premium pricing across virtually every franchise service category.' },
      { q: 'What franchise categories perform best in Washington?', a: 'Health and wellness, premium home services, and B2B technology services consistently outperform in Washington, driven by consumer quality orientation and high discretionary income. The technology sector workforce also creates exceptional demand for managed IT services franchises.' },
    ],
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    metaTitle: 'Virginia Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Virginia. Northern Virginia federal corridor, highest median household income concentration, and Navigator Score data.',
    businessClimate: `Virginia's Northern Virginia market — anchored by the federal government and defense contractor corridor — produces one of the highest median household income concentrations in the U.S. The state consistently ranks in the top five for business climate and has no franchise registration requirement. Richmond and Virginia Beach represent additional mid-size markets with strong consumer demographics. Northern Virginia's proximity to Washington D.C. and the density of federal and defense sector employment creates sustained executive franchise investor interest.`,
    keyMarkets: ['Northern Virginia', 'Richmond', 'Virginia Beach', 'Charlottesville'],
    investorNote: "Northern Virginia's federal contract economy is explicitly recession-resistant — franchise businesses serving this market benefit from the stable employment base regardless of broader economic cycles.",
    faq: [
      { q: 'Is Virginia a franchise registration state?', a: 'No. Virginia does not require FDD registration with a state agency, making it operationally efficient for franchise expansion.' },
      { q: 'What makes Northern Virginia an exceptional franchise market?', a: 'Northern Virginia (Fairfax, Arlington, Alexandria, Loudoun) has the highest median household income of any large metro area in the United States, driven by federal government and defense contractor employment. This income profile drives premium service spending across virtually every franchise category — and it is explicitly recession-resistant because federal employment doesn\'t contract in downturns.' },
      { q: 'Are there franchise markets in Virginia outside Northern Virginia worth considering?', a: 'Yes. Richmond is Virginia\'s second city and a strong mid-size market for health, home services, and senior care franchises. Virginia Beach and its Hampton Roads neighbors represent a substantial metro area with strong military compensation income and consistent franchise consumer demand.' },
    ],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    metaTitle: 'Nevada Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Nevada. No income tax, Las Vegas economic diversification, no registration requirement, and Navigator Score data.',
    businessClimate: `Nevada has no state income tax, no franchise registration requirement, and a Las Vegas metro that has undergone structural economic diversification beyond gaming and hospitality into logistics, technology, and healthcare. The state's population growth — particularly in the Henderson, Summerlin, and North Las Vegas residential corridors — drives sustained demand for home services, health and wellness, and senior care franchises. Las Vegas's unique demographic of retirees and hospitality-sector workers creates distinct demand patterns that reward franchises with recurring-revenue models.`,
    keyMarkets: ['Las Vegas', 'Henderson', 'Reno', 'Summerlin'],
    investorNote: 'Nevada\'s zero income tax environment and minimal franchise regulatory burden make it a preferred domicile for multi-state franchise holding entities.',
    faq: [
      { q: 'Is Nevada a franchise registration state?', a: 'No. Nevada does not require FDD registration, and its zero income tax and minimal regulatory environment make it one of the most franchise-friendly states operationally.' },
      { q: 'Has Las Vegas diversified enough to support non-gaming franchise investment?', a: 'Significantly. Las Vegas has added major logistics operations (Amazon, UPS), technology campuses, and healthcare facilities that have diversified its employment base beyond gaming and hospitality. The Henderson and Summerlin residential corridors have above-average household income profiles that support premium service franchise spending.' },
      { q: 'What franchise categories are strong in Nevada?', a: 'Senior care, home services, and health and wellness franchises perform well in Nevada, particularly in the retirement-concentrated communities of Henderson, Summerlin, and North Las Vegas. The aging population creates durable demand for non-medical care and home maintenance services.' },
    ],
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbr: 'UT',
    metaTitle: 'Utah Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Utah. #1 economic growth rate, Silicon Slopes tech corridor, no registration requirement, and Navigator Score data.',
    businessClimate: `Utah is consistently ranked #1 in economic growth rate among U.S. states, with the Salt Lake City metro — the "Silicon Slopes" technology corridor — producing above-average household income growth and one of the strongest young professional demographic profiles in the country. Utah's business-friendly regulatory environment, no franchise registration requirement, and significant entrepreneurial culture create an exceptionally receptive franchise market. The state's above-average birth rate produces strong demand for education and childcare franchises specifically.`,
    keyMarkets: ['Salt Lake City', 'Provo-Orem', 'St. George', 'Ogden'],
    investorNote: 'Utah\'s technology sector employment concentration creates a strong secondary executive population ready for franchise investment — many "Silicon Slopes" employees reach liquidity events and seek active capital deployment vehicles.',
    faq: [
      { q: 'Is Utah a franchise registration state?', a: 'No. Utah does not require FDD registration with a state agency, making it operationally straightforward for franchise expansion.' },
      { q: 'What is "Silicon Slopes" and why does it matter for franchise investment?', a: 'Silicon Slopes is the informal name for Utah\'s technology corridor running from Salt Lake City through Provo-Orem, home to companies like Domo, Qualtrics (now SAP), Adobe\'s engineering teams, and over 200 other technology companies. These companies produce a large population of high-income software engineers and executives with capital to invest in franchise ownership.' },
      { q: 'Are there unique franchise opportunities driven by Utah\'s demographics?', a: 'Yes. Utah\'s above-average birth rate is one of the highest in the country, which creates structural demand for education, childcare, and youth enrichment franchises that persistently outperform national benchmarks.' },
    ],
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbr: 'MN',
    metaTitle: 'Minnesota Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Minnesota. Highest Fortune 500 per-capita concentration in the US, Twin Cities market, and Navigator Score data.',
    businessClimate: `Minnesota is home to the highest concentration of Fortune 500 headquarters per capita in the U.S. (Target, UnitedHealth Group, 3M, General Mills, and others), producing a deep pool of executive talent with capital deployment capacity. The Twin Cities metro — Minneapolis-Saint Paul — is a sophisticated business market with above-average household income and strong consumer demand for professional-grade services. Minnesota is not a franchise registration state in the traditional sense, though it has specific FDD delivery timing requirements.`,
    keyMarkets: ['Minneapolis-Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
    investorNote: 'Minnesota\'s Fortune 500 concentration produces a buyer profile — senior executives with capital and management experience — that matches the semi-absentee franchise ownership model precisely.',
    faq: [
      { q: 'What are Minnesota\'s FDD delivery requirements?', a: 'Minnesota is not a traditional registration state but has specific advance disclosure requirements — franchisors must provide the FDD at least 10 business days before signing or accepting any payment. This provides buyer protection without the full registration burden.' },
      { q: 'What drives franchise demand in the Twin Cities?', a: 'The Minneapolis-Saint Paul metro has one of the highest concentrations of Fortune 500 corporate employment in the U.S., producing a large base of senior executives with above-average incomes and the financial capacity to invest in franchise ownership. Healthcare, technology, and financial services are the primary employment anchors.' },
      { q: 'Does Minnesota\'s climate affect franchise seasonality?', a: 'Yes — outdoor and home exterior service franchises experience marked seasonality. Interior home services, health and wellness, senior care, and cleaning franchises are significantly less affected and perform consistently year-round. Investors should evaluate seasonal cash flow patterns for any outdoor-dependent concept.' },
    ],
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    metaTitle: 'Michigan Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Michigan. Detroit economic diversification, Grand Rapids growth, and Navigator Score data for serious investors.',
    businessClimate: `Michigan's franchise market is anchored by the Detroit metro — which has undergone significant economic diversification from its automotive roots into technology, autonomous vehicle development, and financial services. Michigan is a franchise registration state, but the Grand Rapids and Traverse City markets offer additional opportunities outside Detroit with no franchise registration complexity at the franchise system level. Michigan's cost-of-living advantage relative to coastal markets allows investors to acquire franchise units at lower total investment with comparable unit economics.`,
    keyMarkets: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing'],
    investorNote: 'Michigan\'s automotive-adjacent economy creates strong demand for B2B service franchises from the dense commercial vehicle and manufacturing service sector.',
    faq: [
      { q: 'Is Michigan a franchise registration state?', a: 'Yes. Michigan requires FDD registration with the Michigan Department of Attorney General before offering franchises in the state. Budget 60–90 days for processing.' },
      { q: 'How has Detroit\'s economy evolved for franchise investment purposes?', a: 'Detroit has diversified significantly, adding technology companies, autonomous vehicle development (Waymo, Cruise), and financial services employment alongside its automotive manufacturing base. The Ann Arbor corridor in particular has attracted significant technology investment, adding a high-income professional workforce to the southeast Michigan market.' },
      { q: 'Why is Grand Rapids worth considering for franchise investment?', a: 'Grand Rapids is one of the fastest-growing mid-size markets in the Midwest, with a diversified economy (furniture manufacturing, healthcare, financial services), lower real estate costs than Detroit, and consistently strong consumer spending fundamentals. It offers a strong risk/return profile for home services, health, and education franchises.' },
    ],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    metaTitle: 'New Jersey Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in New Jersey. Highest median household income of any US state, proximity to NYC and Philadelphia, and Navigator Score data.',
    businessClimate: `New Jersey has the highest median household income of any U.S. state and is a franchise registration state. Its proximity to New York City and Philadelphia makes it one of the densest executive investor markets in the country, with a concentration of financial services, pharmaceutical, and technology professionals who represent the core semi-absentee franchise ownership demographic. Both North Jersey (suburban NY market) and South Jersey (suburban Philadelphia market) offer premium pricing power comparable to core urban markets without Manhattan or Center City operational complexity.`,
    keyMarkets: ['Newark / Northern NJ', 'Princeton Corridor', 'Cherry Hill / South NJ', 'Jersey Shore'],
    investorNote: 'New Jersey\'s highest-in-nation median household income translates directly to premium pricing power for franchise services — unit economics in NJ markets consistently exceed national system averages.',
    faq: [
      { q: 'Is New Jersey a franchise registration state?', a: 'Yes. New Jersey requires FDD registration with the New Jersey Bureau of Securities. Registration requires specific NJ disclosure items and takes 60–90 days to process. This provides investors with regulatory review protection.' },
      { q: 'What makes New Jersey a premium franchise market despite its registration requirements?', a: 'New Jersey\'s highest-in-nation median household income ($99K+) translates directly to premium pricing power — franchise services in NJ markets routinely command prices 20–30% above national benchmarks. The added registration complexity is well worth it for the right concept given the income demographics.' },
      { q: 'How does proximity to NYC and Philadelphia affect franchise performance in NJ?', a: 'New Jersey benefits from overflow demand from both NYC and Philadelphia without the operational complexity of urban centers. Northern NJ serves NYC professionals seeking home and lifestyle services in the suburbs. Southern NJ serves Philadelphia professionals similarly. Both segments have strong disposable income and willingness to pay for quality.' },
    ],
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    metaTitle: 'Oregon Franchise Opportunities: Research & Compare',
    metaDescription: 'Explore franchise investment opportunities available in Oregon. Portland Pacific Northwest tech hub, eco-market alignment, no registration requirement, and Navigator Score data.',
    businessClimate: `Oregon is not a franchise registration state, and the Portland metro has emerged as a significant Pacific Northwest technology and creative economy hub with above-average household income demographics. The state's population growth — sustained by migration from California and continued technology sector employment — creates strong consumer demand for premium services across health, wellness, and professional categories. Oregon's cultural orientation toward sustainability and conscious consumption makes eco-friendly franchise concepts particularly well-positioned.`,
    keyMarkets: ['Portland', 'Salem', 'Eugene', 'Bend'],
    investorNote: 'Oregon\'s consumer orientation toward sustainability and quality-over-price makes it a strong market for premium franchise concepts with clear brand differentiation.',
    faq: [
      { q: 'Is Oregon a franchise registration state?', a: 'No. Oregon does not require FDD registration with a state agency, making it operationally efficient for franchise expansion.' },
      { q: 'What makes the Portland franchise market distinctive?', a: 'Portland\'s consumer base has an unusually strong orientation toward quality, sustainability, and local brand character. Franchise concepts that demonstrate clear brand differentiation, ethical sourcing, or community values consistently outperform in this market. Generic, commodity-positioned concepts face more headwinds in Portland than in most major cities.' },
      { q: 'Are Bend and Eugene worth considering for franchise investment?', a: 'Yes. Bend has experienced exceptional population growth driven by remote work migration and outdoor recreation culture, and household income growth has followed. Eugene\'s university economy creates a stable consumer base. Both markets offer lower entry competition than Portland with solid demographic fundamentals for home services, health, and education franchises.' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// RESOURCES — /resources hub + /resources/[slug] articles
// ─────────────────────────────────────────────────────────────────────────────
// All resource article content lives here. Page files import from this module.
// No hardcoded copy in TSX files.
//
// Voice reminder: Warm, Clear, Credible, Respectful.
// Audience: 40-60 professional. Has already decided to explore. Treat as an MBA.
// No em dashes anywhere. No thin content. Specific numbers where available.

export interface ResourceArticle {
  slug: string
  title: string
  category: string
  categorySlug: string
  description: string
  readTime: string
  datePublished: string
  dateModified: string
  metaTitle: string
  metaDescription: string
  targetKeyword: string
}

export const RESOURCES = {

  // ── Hub page meta ──────────────────────────────────────────────────────────
  meta: {
    title: 'Franchise Resources: Guides for Serious Buyers',
    description:
      'Practical franchise guides for professionals making the move to business ownership. How to buy a franchise, reading an FDD, franchise ROI, semi-absentee models, and why franchises fail.',
  },

  hub: {
    eyebrow: 'Resource Center',
    headline: 'Everything you need to make a great decision.',
    subhead: 'No fluff. No rah-rah. Just what smart buyers actually need to know.',
  },

  categories: [
    'The Buying Process',
    'Financial Essentials',
    'FDD Explained',
    'Industries and Markets',
    'Risk and Due Diligence',
  ],

  // ── Article index ──────────────────────────────────────────────────────────
  articles: [
    {
      slug: 'how-to-buy-a-franchise',
      title: 'How to Buy a Franchise: A Step-by-Step Guide',
      category: 'The Buying Process',
      categorySlug: 'the-buying-process',
      description: 'The actual process, from understanding your FDD to signing and funding. No inspirational fluff.',
      readTime: '10 min',
      datePublished: '2023-05-12',
      dateModified: '2026-04-12',
      metaTitle: 'How to Buy a Franchise: A Step-by-Step Guide',
      metaDescription: 'The actual steps to buying a franchise: FDD basics, defining your criteria, franchisee validation, legal review, and signing. A practical guide for serious buyers.',
      targetKeyword: 'how to buy a franchise',
    },
    {
      slug: 'reading-an-fdd',
      title: 'Reading a Franchise Disclosure Document: A Plain-English Guide',
      category: 'FDD Explained',
      categorySlug: 'fdd-explained',
      description: 'What an FDD is, which of the 23 Items actually matter, what red flags look like, and what our research team looks for.',
      readTime: '12 min',
      datePublished: '2023-08-03',
      dateModified: '2026-04-12',
      metaTitle: 'Reading a Franchise Disclosure Document: Plain-English Guide',
      metaDescription: 'A practical guide to the FDD: what it is, which of the 23 Items matter most (Items 5, 6, 7, 19, 20, 21), red flags to watch for, and what a clean FDD looks like.',
      targetKeyword: 'franchise disclosure document explained',
    },
    {
      slug: 'franchise-roi',
      title: 'Franchise ROI: How to Calculate What a Franchise Actually Returns',
      category: 'Financial Essentials',
      categorySlug: 'financial-essentials',
      description: 'AUV, owner benefit, cash-on-cash return, and how to use Item 19 when one exists. The financial framework serious buyers actually use.',
      readTime: '9 min',
      datePublished: '2023-10-17',
      dateModified: '2026-04-12',
      metaTitle: 'Franchise ROI: How to Calculate What a Franchise Actually Returns',
      metaDescription: 'How to model franchise ROI using AUV, owner benefit, and cash-on-cash return. How to use Item 19, and what counts as a good return in this asset class.',
      targetKeyword: 'franchise ROI',
    },
    {
      slug: 'semi-absentee-franchises',
      title: 'Semi-Absentee Franchises: What the Model Actually Means',
      category: 'The Buying Process',
      categorySlug: 'the-buying-process',
      description: 'What semi-absentee ownership actually means, who it works for, which industries support it, and the questions to ask before you commit.',
      readTime: '8 min',
      datePublished: '2023-12-05',
      dateModified: '2026-04-12',
      metaTitle: 'Semi-Absentee Franchises: What the Model Actually Means',
      metaDescription: 'Semi-absentee franchise ownership explained: the manager model, who it works for (and who it does not), industries where it is viable, and what to ask before you sign.',
      targetKeyword: 'semi-absentee franchise',
    },
    {
      slug: 'why-franchises-fail',
      title: 'Why Franchises Fail: The Real Reasons, and What to Screen For',
      category: 'Risk and Due Diligence',
      categorySlug: 'risk-and-due-diligence',
      description: 'Undercapitalization, fit mismatch, territory problems. The real causes of franchise failure and the FDD signals that surface them before you sign.',
      readTime: '9 min',
      datePublished: '2024-02-14',
      dateModified: '2026-04-12',
      metaTitle: 'Why Franchises Fail: The Real Reasons and What to Screen For',
      metaDescription: 'The real reasons franchise investments underperform: undercapitalization, fit mismatch, territory problems. What the FDD tells you about failure risk before you sign.',
      targetKeyword: 'why franchises fail',
    },
  ] as ResourceArticle[],

  // ── Article 1: how-to-buy-a-franchise ─────────────────────────────────────
  howToBuyAFranchise: {
    intro: {
      headline: 'How to Buy a Franchise: A Step-by-Step Guide',
      lede: `If you are reading this, you have probably already made the internal decision to explore franchise ownership. What you need now is not motivation. You need a clear map of the process.`,
      p1: `Buying a franchise is not complicated, but it is specific. There is a defined sequence: research, disclosure, validation, legal review, sign, fund. Miss a step or do them out of order and you end up either closing too fast on the wrong brand, or stalling indefinitely because you never knew what "ready" looked like.`,
      p2: `This guide covers the process as it actually works for serious buyers, not the idealized version franchise salespeople prefer to show you. Six steps, in order. No shortcuts.`,
    },
    step1: {
      number: '01',
      title: 'Understand FDD basics before you talk to a franchisor',
      body: [
        `Every U.S. franchise offering is governed by a Franchise Disclosure Document, or FDD. Federal law (the FTC Franchise Rule) requires franchisors to give you this document at least 14 business days before you sign anything or pay any money. That 14-day window is not a bureaucratic formality. It is your primary research period.`,
        `The FDD has 23 standardized sections called "Items." Not all of them matter equally. The ones most buyers spend the most time on: Item 5 (initial fees), Item 6 (ongoing royalties and fees), Item 7 (total estimated investment range), Item 19 (financial performance representations), Item 20 (unit count history, including closures), and Item 21 (audited financial statements of the franchisor).`,
        `Before you are deep into any brand evaluation, you should understand what these Items tell you and what they do not. Item 19, for example, is voluntary, not mandatory. Franchisors who do not publish one are not hiding anything illegal, but the absence of Item 19 data does limit your ability to model returns. We cover FDD reading in detail separately.`,
      ],
    },
    step2: {
      number: '02',
      title: 'Define your investment criteria before you fall in love with a brand',
      body: [
        `The most expensive mistake in franchise buying is evaluating brands before you have defined your own parameters. Buyers who skip this step end up anchored to the first brand that feels exciting, and they spend months rationalizing an investment that does not actually fit their capital, lifestyle, or operational reality.`,
        `Define these four things before you look at your first brand:`,
        `Investment range: What is your liquid capital available to invest? Total investment in a franchise includes the franchise fee (typically $35K to $75K for most mid-market brands), real estate (if applicable), equipment, working capital, and the FDD-stated grand opening marketing fund. The working capital buffer matters most, because most franchises take 12 to 18 months to reach full revenue. Under-fund the launch and the whole model fails regardless of brand quality.`,
        `Operator role: Do you want to be owner-operator (working in the business daily) or owner-manager (hiring a GM and overseeing from above)? This is not a desire question, it is a skills and lifestyle question. Some brands require the former; some work only in the latter model. Know which before you start looking.`,
        `Industry preference: Has anything in your background given you credibility or genuine interest in a particular category? Senior care, home services, B2B services, fitness, food? Your background is not a requirement, but it is a signal worth listening to.`,
        `Geography and territory: Where will you operate? Some categories are territory-dependent in ways that matter to the investment case. A senior care franchise in a county with below-average over-65 population growth is a structurally weaker investment than the same brand in a high-growth retirement corridor, regardless of brand quality.`,
      ],
    },
    step3: {
      number: '03',
      title: 'Research brands that actually fit your criteria',
      body: [
        `With your parameters defined, you can evaluate brands that fit rather than brands that sound good. The research phase has a structure: start with the macro (industry position, growth trajectory, Item 19 AUV data if available), move to the micro (specific territory performance, franchisee satisfaction data from Franchise Business Review, unit count trends from Item 20).`,
        `The Franchise Business Review publishes franchisee satisfaction surveys covering roughly 1,200 brands annually. High satisfaction scores are a meaningful signal. They do not guarantee your experience, but they are a data point that broad brand recognition or slick marketing materials cannot replicate.`,
        `When comparing brands, resist the impulse to compare total investment ranges directly. A $250K investment in a brand with a disclosed $900K AUV looks different than a $250K investment in a brand with no Item 19 and no idea what franchisees actually make. Normalize to return on investment, not cost.`,
      ],
    },
    step4: {
      number: '04',
      title: 'Make validation calls, and make them count',
      body: [
        `Item 20 of the FDD contains a list of current franchisees with their contact information. You have the legal right to contact every one of them. Most franchisors will also give you a guided list of franchisees who are willing to speak with candidates.`,
        `That guided list is useful, but it is the franchisees who are not on the guided list who will tell you the most. Call five to ten franchisees from the full Item 20 list, not just the ones the franchisor suggested. Specifically, seek out franchisees who are in markets similar to yours (comparable metro size, demographics, and territory type) and those who have been in the system for three to five years, past the honeymoon phase.`,
        `Questions worth asking: What does your weekly time commitment actually look like? How responsive is the corporate support team when something goes wrong? If you knew then what you know now, would you choose this brand? What is the biggest gap between what you were promised and what happened?`,
        `This is where an experienced advisor earns their value. A good advisor has often already spoken to franchisees in the system, knows which markets are performing versus struggling, and can frame your validation conversations around the specific concerns relevant to your situation.`,
      ],
    },
    step5: {
      number: '05',
      title: 'Retain a franchise attorney for legal review',
      body: [
        `The franchise agreement is a binding legal contract, typically 10 to 20 years in duration. It governs every aspect of your relationship with the franchisor: territory rights, renewal terms, transfer rights if you decide to sell, default conditions, dispute resolution, and what happens if the franchisor is acquired. This is not a document to read yourself and decide is "pretty standard."`,
        `Retain a franchise attorney, not a general business attorney. Franchise law is specific. A general attorney reviewing a franchise agreement is analogous to a general practitioner performing orthopedic surgery. The skill sets are adjacent but not interchangeable. The American Association of Franchisees and Dealers maintains a referral list of attorneys who specialize in franchising.`,
        `A competent franchise attorney will not negotiate every clause (most franchise systems have relatively limited negotiation room), but they will identify the clauses that are meaningful for your specific deal, explain what you are agreeing to on renewal and transfer, and flag any unusual provisions that deviate from industry norms.`,
        `Budget $2,500 to $5,000 for legal review. This is not a cost to minimize.`,
      ],
    },
    step6: {
      number: '06',
      title: 'Sign and fund, in that order',
      body: [
        `Discovery Day is a formal event, usually held at the franchisor's headquarters, where serious candidates spend a day with the corporate team. It is partly informational, partly selection, and partly mutual in nature. Franchisors are evaluating you as much as you are evaluating them. Most franchisors require a signed franchise agreement within a defined window following Discovery Day.`,
        `Funding typically follows the signed agreement. Common funding mechanisms for franchise buyers: SBA 7(a) loans (the most common path for $150K to $750K total investments, requiring approximately 20% down), ROBS (Rollovers as Business Startups, which allow 401k funds to be used penalty-free as franchise equity), home equity lines, and self-funding. Most buyers use a combination.`,
        `Working capital is the item most first-time buyers underfund. The FDD Item 7 investment table includes a working capital estimate, but that estimate reflects the franchisor's 50th-percentile experience. Your actual ramp time depends on your territory, your prior management experience, and the support quality of your local market's field consultant. Budget the high end of the Item 7 working capital range, not the low end.`,
      ],
    },
    conclusion: {
      headline: 'The honest summary',
      body: [
        `The process from serious inquiry to signed franchise agreement runs three to six months for most buyers who are moving with intent. Buyers who stretch to nine to twelve months are usually stuck in validation, legal review, or funding, not because the process is hard, but because they did not have a map.`,
        `You have one now. The most important variable that determines outcome is not the brand you choose. It is whether the brand actually fits your capital, your market, your operational style, and your realistic time commitment. Getting that fit right is the decision.`,
      ],
      cta: `This is exactly where an experienced advisor saves you six months of wrong turns. A good advisor has already screened hundreds of brands, knows which ones are producing strong results in markets like yours, and can match you to a shortlist in days rather than months. When you are ready to move from research to shortlist, we can help.`,
    },
  },

  // ── Article 2: reading-an-fdd ──────────────────────────────────────────────
  readingAnFdd: {
    intro: {
      headline: 'Reading a Franchise Disclosure Document: A Plain-English Guide',
      lede: `The Franchise Disclosure Document is the single most important piece of paper in any franchise transaction. It is also the most misunderstood.`,
      p1: `Most franchise candidates either skip it entirely (relying on the franchisor's summary), or they read it cover to cover and get lost in 200 pages of legal boilerplate that obscures the 20 pages that actually matter.`,
      p2: `This guide tells you which Items to spend your time on, what the important numbers mean, what red flags look like, and what we look for in our own research process when we evaluate a brand.`,
    },
    whatIsIt: {
      headline: 'What an FDD is, and why it exists',
      body: [
        `The Federal Trade Commission's Franchise Rule requires any franchisor selling franchises in the United States to provide prospective buyers with an FDD at least 14 calendar days before they sign any document or pay any money. This mandatory disclosure period exists because franchising, historically, was plagued with information asymmetry, meaning franchisors knew far more about the performance of their systems than buyers did.`,
        `The FDD is a standardized document with 23 required sections (Items). Every FDD, from a small regional brand to McDonald's, follows the same structure. That standardization is useful, because once you know the structure, you can navigate any FDD quickly. The document is self-reported by the franchisor and filed with state regulators in the 14 franchise registration states. Item 23 contains an acknowledgment receipt, which you sign to confirm you received the document within the required window.`,
        `What the FDD is not: independently audited performance data in most cases. The financial statements in Item 21 are audited by a CPA, but the financial performance representations in Item 19 are self-reported by the franchisor. This matters for how you interpret what you read.`,
      ],
    },
    the23Items: {
      headline: 'The 23 Items: which ones actually matter',
      body: [
        `All 23 Items are required, but not all are equally informative for investment analysis. Here is how to allocate your attention:`,
      ],
      criticalItems: [
        {
          item: 'Item 5: Fees',
          detail: `Lists all initial fees: franchise fee, training fee, grand opening fee, and any other initial payments. The franchise fee for most mid-market brands runs $35K to $75K. Item 5 also discloses whether any fees are refundable, and under what conditions. A non-refundable franchise fee is nearly universal, but a non-refundable training fee before territory approval is a flag worth questioning.`,
        },
        {
          item: 'Item 6: Ongoing Fees',
          detail: `Royalties, marketing fund contributions, technology fees, and any other recurring obligations. Royalties typically run 4% to 8% of gross revenue. Marketing fund contributions add another 1% to 3%. Understand the aggregate royalty burden from day one, not just the headline royalty rate. A 6% royalty plus 3% marketing plus 1.5% technology fee equals 10.5% of gross revenue off the top, which has a significant effect on owner benefit.`,
        },
        {
          item: 'Item 7: Estimated Initial Investment',
          detail: `The total investment range, broken into categories: franchise fee, real estate, leasehold improvements, equipment, inventory, training-related travel, working capital, and additional funds. Item 7 is a range, not a guarantee. The low end tends to reflect optimal conditions (favorable lease terms, no buildout surprises). Budget toward the high end. The working capital line is particularly important: most franchisors' working capital estimates assume a 3-month ramp. Most businesses take longer.`,
        },
        {
          item: 'Item 19: Financial Performance Representations',
          detail: `This is voluntary. Franchisors are not required to publish Item 19 data, and roughly 40% of FDDs do not contain one. When Item 19 exists, it may show Average Unit Volume (AUV), median gross sales, or a range of sales figures by quartile. The most useful Item 19s break performance down by market type, unit age, and owner type (owner-operator versus absentee). When Item 19 is absent or thin, you are operating with materially less information, and franchisee validation calls become proportionally more important.`,
        },
        {
          item: 'Item 20: Outlets and Franchisee Information',
          detail: `The operational history of the system: how many units have opened, closed, been transferred, or been terminated in each of the last three years. Item 20 also includes a list of current franchisees with contact information. The closure rate and the transfer rate (franchisees selling) are the most important signals. A brand with a 15% annual closure rate is telling you something real, regardless of how well the Discovery Day went.`,
        },
        {
          item: 'Item 21: Financial Statements',
          detail: `Audited financial statements for the franchisor entity, covering the last three fiscal years. You are looking for franchisor stability: is the business growing? Is it profitable? Is there debt that could affect the system's ability to support franchisees? A franchisor that is poorly capitalized or losing money on its own operations is a material risk to the entire system.`,
        },
      ],
      lessImportantItems: `Items 1 through 4 cover the franchisor's background, business history, recent litigation, and any prior bankruptcy filings. Read them, because undisclosed litigation or bankruptcy in Item 3 or 4 is a red flag. Items 8 through 18 cover operational provisions: approved suppliers, restrictions, franchisee obligations, franchisor obligations, training programs, territory rights, and transfer conditions. These matter for your day-to-day experience but are not the primary financial analysis tools that Items 5, 6, 7, 19, 20, and 21 provide.`,
    },
    redFlags: {
      headline: 'What red flags look like in an FDD',
      items: [
        `Item 20 shows unit closures or non-renewals significantly above the category average. Home services franchises with closure rates above 10% annually warrant explanation. Above 15% is serious.`,
        `Item 3 shows active litigation involving franchisees suing the franchisor, particularly class-action or coordinated suits. Some litigation is normal; franchisee-plaintiff patterns are not.`,
        `Item 5 or 6 contains fees that are unusually broad or vague in their triggers. "Such other fees as determined by franchisor from time to time" without caps or conditions is a negotiating flag.`,
        `Item 7 investment ranges are unusually wide (for example, $120K to $800K), which usually signals either poor data collection by the franchisor or meaningful variance in buildout requirements that will affect your actual investment significantly.`,
        `Item 19 is absent entirely, and validation calls with franchisees produce inconsistent revenue reports. The combination of no public data and inconsistent private data means you are genuinely buying blind.`,
        `Item 21 shows the franchisor is not profitable or is relying on franchise fee income (new unit sales) to cover operations. A franchisor whose survival depends on selling new franchises has misaligned incentives.`,
      ],
    },
    cleanFdd: {
      headline: 'What a clean FDD looks like',
      body: [
        `A well-run, transparent franchise system produces an FDD with: a detailed Item 19 that shows performance by quartile, unit age, and geography; an Item 20 with closure rates below the category benchmark; audited financial statements showing the franchisor is profitable and growing; and a litigation section that is either blank or contains only isolated, resolved disputes.`,
        `It also produces franchisees who speak openly and positively during validation calls, not defensively or off-script. That qualitative signal matters as much as what you read in the document.`,
      ],
    },
    whatWeLookFor: {
      headline: 'What our research team looks for',
      body: [
        `When we evaluate a brand for the Franchise Conduit catalog, the FDD is our primary data source. Our Navigator Score's Financial Transparency component (25% of the total score) pulls directly from Item 19 availability and specificity. We check Item 20 closure rates against category benchmarks from our proprietary database. We review Item 21 for franchisor financial stability.`,
        `Brands without an Item 19 are not automatically excluded, but their Navigator Score reflects the data limitation, and we flag it explicitly on the brand page. We believe candidates deserve to know what they know and what they do not, before they get on a call with a franchisor who has every incentive to fill that uncertainty with optimism.`,
      ],
      cta: `If you are at the stage of reviewing actual FDDs, having an advisor in your corner can change the quality of your analysis significantly. An experienced advisor has reviewed hundreds of FDDs across dozens of systems and can tell you in 15 minutes what the important provisions mean for your specific deal. That is not something you learn from reading articles, including this one.`,
    },
  },

  // ── Article 3: franchise-roi ───────────────────────────────────────────────
  franchiseRoi: {
    intro: {
      headline: 'Franchise ROI: How to Calculate What a Franchise Actually Returns',
      lede: `The most common question serious franchise buyers ask is: how much money does a franchise make? It is a reasonable question, but it is the wrong first question.`,
      p1: `The right question is: what does this franchise return on the capital and time I invest in it? Those are different calculations, and conflating them produces bad investment decisions.`,
      p2: `This guide covers the financial metrics that matter, how to build the analysis using available data, and how to think about franchise investing as an asset class.`,
    },
    wrongQuestion: {
      headline: 'Why "how much does a franchise make" is the wrong starting point',
      body: [
        `Gross revenue, or Average Unit Volume (AUV), is widely cited because it is the most commonly disclosed metric in franchise systems. But revenue is a vanity number for an investor. A franchise generating $1.2M in AUV with 8% royalties, 3% marketing fund, 35% cost of goods, 30% labor, and 12% rent is generating roughly $144K in operating income before debt service and the owner's salary, if they are working in the business. That is a very different investment outcome than the $1.2M headline implies.`,
        `The investors who get hurt in franchising are almost always buyers who anchored on AUV and applied optimistic margins without running the unit economics. The investors who do well are almost always those who modeled owner benefit and compared it to the total capital deployed.`,
      ],
    },
    metrics: {
      headline: 'The metrics that actually matter',
      items: [
        {
          name: 'Average Unit Volume (AUV)',
          detail: `AUV is gross revenue per unit, typically expressed as an annual figure. It is the starting point for financial modeling, not the ending point. When comparing brands, AUV only makes sense in the context of the cost structure. A $500K AUV business with 60% gross margin may outperform a $900K AUV food business with 30% gross margin after royalties, rent, and labor.`,
        },
        {
          name: 'Owner Benefit',
          detail: `Owner benefit is the actual cash drawn from the business by the owner, including salary if the owner is working in it, plus net profit after all expenses. For executive-model (semi-absentee) investors, owner benefit is the net profit after the general manager's salary, all royalties and fees, rent, labor, and operating costs. This number, not AUV, is what you are actually buying. Most franchisors will not volunteer this number. You derive it from Item 19 data (if available) and franchisee validation conversations.`,
        },
        {
          name: 'Cash-on-Cash Return',
          detail: `Cash-on-cash return is owner benefit divided by total capital invested. A franchise requiring $400K total investment that generates $80K in owner benefit in year two produces a 20% cash-on-cash return. As a reference benchmark: institutional real estate investors target 8% to 12% cash-on-cash. Private equity targets 20% to 30%+ on leveraged deals. The right benchmark for franchise investing depends on your liquidity needs, risk tolerance, and time horizon. Most serious franchise investors target 15% to 25% cash-on-cash at maturity (typically year two or three), with the understanding that year one is typically breakeven or loss.`,
        },
        {
          name: 'Payback Period',
          detail: `Payback period is how many years of owner benefit are required to recover your initial total investment. A $400K investment producing $100K annually in owner benefit has a 4-year payback. The franchise industry median payback period across all categories runs 4 to 6 years. Brands with strong Item 19 performance in the top quartile can produce payback periods of 3 years or less, which is excellent for a private business investment at this capital level.`,
        },
      ],
    },
    item19: {
      headline: 'How to use Item 19, and what to do when there is not one',
      body: [
        `Item 19 is the franchisor's voluntary disclosure of financial performance data. When it exists and is detailed, it gives you the starting point for owner benefit modeling. The best Item 19s include: average gross revenue by unit age, median gross revenue (not just the average, which can be inflated by top performers), operating cost breakdowns or margins, and performance broken out by geography or market type.`,
        `When Item 19 is absent, or thin, your primary data source shifts to franchisee validation calls. Ask franchisees directly: what is your gross revenue for the past 12 months? What are your royalty payments monthly? What does your operating cost structure look like? Most franchisees who are doing well will answer these questions honestly, particularly if you approach with genuine curiosity rather than pressure.`,
        `Do not accept a franchisor's verbal earnings claims that are not backed by Item 19 disclosure. Verbal representations about earnings during the sales process that are not part of the FDD are both a red flag for compliance and not binding on the franchisor. If they cannot put it in writing in Item 19, you cannot rely on it.`,
      ],
    },
    investmentEfficiency: {
      headline: 'Investment efficiency: what a good return looks like in this asset class',
      body: [
        `Franchising occupies an interesting position in the spectrum of private business investments. Unlike starting a business from scratch, you are buying a proven system with documented performance, brand recognition, training, and operational support. Unlike passive investments, you are typically deploying capital into an actively managed business with an owner-operator or manager-model structure.`,
        `The risk-adjusted return expectation should reflect that positioning. A franchise investment with total capital of $300K, producing $75K in annual owner benefit by year two, generates a 25% cash-on-cash return. That is competitive with most private equity outcomes at this capital level, without the leverage or the 7-year lockup. The tradeoff is active involvement and the operational reality of running a business.`,
        `The clearest pattern in franchise investment outcomes: buyers who did thorough due diligence (FDD analysis, franchisee validation, realistic financial modeling, and attorney review) before signing consistently outperform buyers who moved fast. The franchise industry's failure rate is real, but it clusters in the population of buyers who were undercapitalized, chose the wrong brand for their profile, or skipped due diligence steps.`,
      ],
      cta: `Our team builds the financial analysis section on every brand page from FDD Item 19 data, franchisee validation, and our own market research. When you are modeling a specific brand in a specific market, our advisors can help you build the unit economics from the actual data, not from the franchisor's sales deck.`,
    },
  },

  // ── Article 4: semi-absentee-franchises ───────────────────────────────────
  semiAbsentee: {
    intro: {
      headline: 'Semi-Absentee Franchises: What the Model Actually Means',
      lede: `"Semi-absentee" is one of the most misused terms in franchising. Franchise sales teams use it as shorthand for passive income. That is not what it means.`,
      p1: `Understanding what the model actually requires, who it works well for, and where the risks are, is the difference between a sound investment and a painful lesson in what "owner" actually means in practice.`,
    },
    actualMeaning: {
      headline: 'What semi-absentee actually means',
      body: [
        `In franchise terminology, semi-absentee does not mean passive. It means the owner is not the primary operator. The most accurate description: you hire a general manager or director of operations who runs the day-to-day business while you oversee from a business management role.`,
        `In practice, semi-absentee owners typically spend 10 to 20 hours per week on business oversight, with a heavier time commitment of 40 to 60 hours per week in the first 6 to 12 months of launch while the GM is being trained and systems are being established. The model then transitions to a lighter ongoing management structure, which may look like: weekly P&L review, regular one-on-one with the GM, key hiring decisions, and handling escalated customer or operations issues.`,
        `Owner-operator franchises, by contrast, require the owner to perform or directly supervise the core service delivery function daily. Some brands explicitly require the franchisee to hold a particular license (certain home health or staffing brands). Others simply perform better when the owner is onsite. These are not semi-absentee opportunities regardless of how they are marketed.`,
      ],
    },
    managerModel: {
      headline: 'The manager model explained: your hire, not your shift',
      body: [
        `The central structural element of semi-absentee ownership is the general manager. This person is your most important hire. They run operations, manage staff, handle customer relationships, and maintain quality standards. Your role is hiring well, training thoroughly, providing clear performance expectations, and creating accountability structures.`,
        `The manager model only works when: the GM role is well-compensated (typically $45K to $70K for most service franchises, plus bonuses tied to performance), the franchisor's support system is strong enough that the GM is never flying blind operationally, and the owner is genuinely accessible for decisions that require ownership authority (lease decisions, capital expenditures, hiring above a certain level, and so on).`,
        `Where the model breaks down: owners who hire GMs then fully disengage. In a franchise system, semi-absentee ownership is leadership from a distance, not ownership on autopilot. A GM who cannot reach you for decisions that require your authority will find other ways to make decisions, or they will leave.`,
      ],
    },
    whoItWorksFor: {
      headline: 'Who it works for, and who it does not',
      body: [
        `Semi-absentee ownership works well for candidates who: have strong management and leadership instincts (can hire, develop, and hold people accountable), have sufficient liquidity to weather a longer ramp period (the breakeven timeline is typically 6 to 18 months longer in semi-absentee models than in owner-operator ones, because a GM is drawing a salary from the beginning), and have a current primary income source they are preserving while building the franchise business.`,
        `It is typically not the right model for first-time business owners without any management experience. Managing managers is a specific skill. If you have never hired, trained, and held a team accountable, learning that while simultaneously learning franchise operations and building a new business is a significant risk to take on at once.`,
        `It also does not work for buyers who are undercapitalized. The additional fixed cost of a qualified GM is real, and brands where the GM is the business (certain senior care or B2B services models) require a strong GM from day one, not a gradual transition.`,
      ],
    },
    industries: {
      headline: 'Industries where semi-absentee is genuinely viable',
      body: [
        `Not all franchise categories support semi-absentee models equally. The strongest categories for executive-model ownership are those where: (1) the business can hire non-licensed staff to deliver the core service, (2) the systemized training and franchisor support infrastructure is robust enough to support a GM who is learning the system without the owner being there daily, and (3) the revenue model produces cash flow early enough to sustain GM compensation before the business is fully ramped.`,
        `Categories with strong semi-absentee track records: senior care (non-medical home care), commercial cleaning (B2B contract cleaning), property restoration, B2B staffing, and many home services concepts. These categories share common traits: recurring revenue or contract-based income, manager-model operational structures built into the franchise system, and franchise support teams with structured onboarding programs.`,
        `Categories that are harder to run semi-absentee: food and beverage concepts requiring active quality control, fitness concepts where the owner's presence and community involvement drives member retention, and specialty retail where the owner's expertise is part of the service product.`,
      ],
    },
    checklist: {
      headline: 'What to ask the franchisor before you commit',
      questions: [
        `What percentage of your current franchisees are operating in a semi-absentee model? (The answer should be specific and verifiable through Item 20 validation calls, not a vague "many of our franchisees" response.)`,
        `What is the average time to hire a qualified GM in my target market, and what does the franchisor's hiring support look like during that process?`,
        `What is the typical owner time commitment in months 1 through 6, and what does it transition to at month 18?`,
        `What is the typical GM compensation in my target market, and is GM compensation included in the Item 7 working capital estimate?`,
        `Can you provide the contact information for three to five franchisees who are currently operating semi-absentee, so I can speak with them directly? (If they cannot provide this, that is a data point.)`,
      ],
      cta: `The semi-absentee question is one of the most important fit questions in franchise evaluation, and it is also one of the areas where the gap between what is marketed and what is real is widest. An experienced advisor can tell you which brands in your investment range actually produce consistent semi-absentee outcomes, not just which ones claim to.`,
    },
  },

  // ── Article 5: why-franchises-fail ────────────────────────────────────────
  whyFranchisesFail: {
    intro: {
      headline: 'Why Franchises Fail: The Real Reasons, and What to Screen For',
      lede: `Franchising has a reputation for safety that is partially deserved and frequently overstated. The truth is more useful: franchises do fail, and they fail for specific, identifiable reasons that are largely screenable before you sign.`,
      p1: `Understanding those reasons, and knowing how to look for them in the data available before you commit, is the most valuable risk management work you can do as a franchise buyer.`,
    },
    context: {
      headline: 'What the data actually says about franchise failure',
      body: [
        `The commonly cited "franchises have a 90% success rate" figure is not from any peer-reviewed study and should be treated skeptically. The FTC and academic researchers have consistently found that franchise failure rates are difficult to measure because the definition of "failure" is contested (closed units include voluntary exits, transfers, and non-renewals, not just closures due to financial failure) and franchisor disclosure requirements do not require disclosure of why units close.`,
        `What we can measure: Item 20 of every FDD discloses unit count changes over the prior three years, including terminations, non-renewals, reacquisitions by the franchisor, and total closures. A brand with 150 units that closed or terminated 30 over three years has a 20% three-year attrition rate. That is a real number.`,
        `The more honest and useful framing for buyers: franchise investing has a well-documented set of failure modes. Each of them is either screenable before you sign or manageable with the right preparation. The buyers who fail are disproportionately those who either did not screen for these risks or knew about them and minimized them.`,
      ],
    },
    reasons: {
      headline: 'The real reasons franchises fail',
      items: [
        {
          title: 'Undercapitalization',
          detail: `This is the most common cause of franchise failure, and it is almost entirely preventable. Undercapitalization means entering the business without enough liquidity to survive the ramp period before the business is generating sufficient cash flow. Most franchise businesses take 12 to 18 months to reach full revenue capacity. The owner who launches with exactly enough capital to cover the Item 7 investment table (using the low-end estimates) is one bad month away from a cash crisis in month 10.`,
          whatToCheck: `Check the Item 7 working capital estimate and treat it as a minimum floor, not a guide. Budget 20% to 30% above the stated working capital. Ask franchisees in validation calls how long their personal cash reserve lasted before the business was self-sustaining. Any franchisee who says they were tight on cash in months 12 to 18 is giving you real data.`,
        },
        {
          title: 'Fit mismatch: buying the wrong brand for the wrong person',
          detail: `The second-most common cause is a fundamental mismatch between the buyer's skills, lifestyle, and capital, and the operational requirements of the franchise they chose. This happens when buyers fall in love with a brand (or an industry, or a lifestyle vision) before doing the structural fit analysis. A C-suite executive who is a strong relationship builder buying a brand that requires 50-hour operational weeks as an owner-operator is a fit mismatch. So is an executive with no B2B sales experience buying a commercial cleaning franchise where the first 18 months require intensive cold outreach to win contracts.`,
          whatToCheck: `Before you evaluate any brand, write down your honest answers to: What hours will you actually work? What management and operational functions are you genuinely good at? What does your specific market need in terms of local knowledge and relationships? Then check brands against your answers, not against what sounds appealing.`,
        },
        {
          title: 'Site selection and territory problems',
          detail: `For location-dependent franchises (food, fitness, retail, and many services), site selection is one of the highest-leverage decisions in the entire process, and it is one that buyers often under-resource. A franchise location in a trade area with insufficient demographics, strong competing alternatives, or poor visibility and access can be a well-run business that never reaches system-average AUV. For territory-based service franchises, an undersized or demographically mismatched territory is a structural ceiling on revenue.`,
          whatToCheck: `Ask the franchisor for the territory definition and the demographic parameters they use to size territories. Ask who is responsible for site selection support and what that process looks like in detail. For location-based concepts, compare AUV data for the territory type you are considering (suburban, urban, rural) against the system average. Significant below-average performance in comparable markets is a signal.`,
        },
        {
          title: 'Franchisor system deterioration',
          detail: `A franchise is only as strong as the system supporting it. Franchisors who are poorly capitalized, losing franchisees faster than they are adding them, or who have materially reduced their support infrastructure are actively degrading the value of every franchisee's investment in the system. Item 21's audited financial statements and Item 20's unit count history are the primary screens for this risk.`,
          whatToCheck: `Review Item 21 for three consecutive years. Is the franchisor profitable? Is revenue growing from franchise operations (royalties) or from new unit sales (franchise fees)? A franchisor whose primary revenue source is selling new franchises, rather than collecting royalties from a growing system, has misaligned incentives. Also look at net unit count: a system that is shrinking is telling you something that no Discovery Day presentation will address.`,
        },
        {
          title: 'Too slow to hire or too quick to disengage',
          detail: `For executive-model (semi-absentee) buyers, one of the most consistent patterns in failed investments is the owner who either delays hiring a qualified GM (to save salary costs during the ramp) or who hires a GM and fully disengages before the business is stable enough to operate without ownership engagement. The manager model is not a passive income structure. It requires active leadership at a distance.`,
          whatToCheck: `Ask semi-absentee franchisees in validation calls: when did you hire your GM, what were the first 90 days like, and what does your current weekly engagement with the business look like? The answers will tell you both the real time commitment and whether the franchisor's "semi-absentee" marketing reflects actual franchisee experience.`,
        },
      ],
    },
    whatWeCheck: {
      headline: 'What we check before listing a brand',
      body: [
        `When we evaluate a franchise for the Franchise Conduit catalog, we run a version of this analysis as part of the brand review. Our Navigator Score's Brand Stability component (20% of the total score) is built from Item 20 data: unit count trajectory, closure rate versus category benchmark, and net growth over three years.`,
        `We do not list brands with closure rates that are materially above category benchmarks without explicitly flagging the data. We do not suppress negative information to make our catalog look cleaner. If a brand has a high closure rate and a declining unit count, that appears on the brand page, and it is discussed in the financial section.`,
        `This is a place where the information asymmetry in franchising can either hurt you or help you. Buyers who know what to look for and where to find it can screen out the highest-risk opportunities before they get emotionally invested. Buyers who do not know what to look for are relying on the franchisor's sales team to tell them what is in their own disclosure document.`,
      ],
      cta: `If you are evaluating a specific brand and want a second read on its Item 20 closure data, Item 19 performance, or franchisor financial stability, our advisors do this analysis regularly. It is one of the clearest ways an experienced advisor earns their value in the research phase.`,
    },
  },

} as const
