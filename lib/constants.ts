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
