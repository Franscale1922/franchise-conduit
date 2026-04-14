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
