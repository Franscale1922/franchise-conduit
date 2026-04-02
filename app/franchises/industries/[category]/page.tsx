import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFranchisesByIndustry, formatCurrency } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

// ─── Industry config ────────────────────────────────────────────────────────

interface IndustryConfig {
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
}

const industries: IndustryConfig[] = [
  {
    slug: 'home-services',
    name: 'Home Services & Maintenance',
    headline: 'Home Services Franchises',
    subhead: 'Recurring-revenue, asset-light models with proven unit economics for the executive investor.',
    marketSize: '$657B',
    cagr: '6.1%',
    marketIntelligence: `The U.S. home services market reached $657 billion in 2025 and is projected to grow at 6.1% CAGR through 2030, driven by aging housing stock, dual-income household growth, and the sustained preference for outsourcing recurring home maintenance. Unlike discretionary service categories, established home services contracts — pest control, lawn care, HVAC maintenance — demonstrate strong recession resistance, as homeowners maintained subscription-based service spending through both the 2008 and 2020 downturns. For franchise investors, the sector's attraction is a proven recurring-revenue model: seasonal service businesses with subscription treatment plans generate predictable monthly revenue without the complexity of a retail or food location.`,
    whyFranchise: `Home services franchises offer one of the strongest risk-adjusted profiles in franchising: low physical overhead (most are home-based or van-based), established brand recognition that accelerates customer acquisition, and recurring revenue contracts that dramatically improve cash flow predictability. Multi-territory ownership is a well-worn path in the category.`,
    iconGlyph: '🏠',
    investorNote: 'Most home services franchises are eligible for SBA financing and ROBS rollovers, making them accessible at the $100K–$250K investment tier.',
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    headline: 'Health & Wellness Franchises',
    subhead: 'Membership-model health businesses with structural demographic tailwinds and semi-absentee potential.',
    marketSize: '$1.8T',
    cagr: '5.9%',
    marketIntelligence: `The global health and wellness market was valued at $1.8 trillion in 2025, with the U.S. segment growing at 5.9% CAGR. Consumer spending on proactive health management has proven remarkably durable across economic cycles — wellness spending increased through both the 2008 recession and COVID-era disruption, as preventive health became a higher consumer priority. Within franchising, health and wellness concepts with membership models — chiropractic care, assisted stretching, cryotherapy — generate subscription-style revenue with monthly cancellation friction, producing AUV predictability that episodic service models cannot match. The aging U.S. population (1 in 5 Americans will be over 65 by 2030) structurally strengthens demand for preventive and pain-management health services.`,
    whyFranchise: `Health franchise investors benefit from the category's core structural advantage: members are high-retention, high-lifetime-value customers. Chiropractic and wellness membership models see 85–95% monthly renewal rates in mature locations, creating the kind of predictable monthly revenue that institutional investors recognize as a quality cash flow asset.`,
    iconGlyph: '💪',
    investorNote: 'Many health and wellness franchises allow a licensed professional to serve as the clinical director, enabling executive-model ownership for investors without a healthcare background.',
  },
  {
    slug: 'senior-care',
    name: 'Senior Care & Home Health',
    headline: 'Senior Care Franchises',
    subhead: 'The highest-growth franchise category with the most defensible demographic tailwind in the market.',
    marketSize: '$225B',
    cagr: '7.9%',
    marketIntelligence: `The U.S. home care market is projected to reach $225 billion by 2030, growing at a 7.9% CAGR — the highest sustained growth rate among all major franchise categories. The primary driver is unavoidable: 73 million baby boomers are reaching the age of care need, and the family caregiving infrastructure that served prior generations does not exist at the same scale. Non-medical home care — companionship, daily living support, personal care — is the preferred alternative to assisted living facilities and represents a significantly lower regulatory burden than medical home health agencies. Franchisors in this category have refined operations over 20+ years, with referral networks through hospital discharge planners and social workers providing durable lead pipelines once established.`,
    whyFranchise: `Senior care franchises produce recurring revenue driven by care need rather than consumer discretion — a structural quality that makes the category explicitly recession-resistant. Investors who build strong director-of-care relationships in the first 12–18 months consistently report stepping back to executive oversight by month 18–24, transitioning to a true manager model.`,
    iconGlyph: '🤝',
    investorNote: 'Non-medical home care does not require a licensed healthcare professional to operate, making it accessible to executive investors from any background.',
  },
  {
    slug: 'business-services',
    name: 'Business & Professional Services',
    headline: 'Business Services Franchises',
    subhead: 'B2B recurring-revenue models that compound client relationships over time.',
    marketSize: '$1.2T',
    cagr: '5.4%',
    marketIntelligence: `The U.S. business services market — encompassing virtual office solutions, staffing, consulting support, and professional services — was valued at $1.2 trillion in 2025 and growing at 5.4% CAGR, fueled by the permanent hybrid work transition and the growing solopreneur and SMB economy. Business-to-business franchises in this category generate recurring contract revenue from clients who renew on annual or multi-year terms, producing revenue predictability that consumer-facing models rarely achieve. The client acquisition dynamic is fundamentally different from B2C: once a B2B franchise establishes referral relationships with real estate brokers, CPAs, and business advisors, client pipeline becomes largely self-sustaining.`,
    whyFranchise: `B2B franchise investors benefit from low customer churn (business clients cancel contracts far less frequently than consumers), network-effect referral pipelines, and predictable contract income that supports clean financial modeling. The category attracts multi-unit investors seeking portfolio income with professional-grade client relationships.`,
    iconGlyph: '🏢',
    investorNote: 'B2B franchises typically require larger initial investments ($250K–$500K) but produce higher AUV and stronger predictable income profiles than consumer-facing alternatives at similar investment levels.',
  },
  {
    slug: 'education',
    name: 'Education & Learning',
    headline: 'Education Franchises',
    subhead: 'Recession-proof subscription revenue driven by parental investment in long-term outcomes.',
    marketSize: '$14.3B',
    cagr: '5.8%',
    marketIntelligence: `The U.S. K–12 supplemental education and childcare market was valued at $14.3 billion in 2025 and is growing at 5.8% CAGR, boosted by sustained academic performance gaps post-COVID and increasing parental investment in educational outcomes. The sector is explicitly counter-cyclical in some segments: research consistently shows that parents increase education spending during economic downturns as a long-term investment in their children's outcomes. Subscription tuition models — monthly per-student fees at established tutoring and enrichment franchises — create renewal-based revenue with 90–95% monthly retention rates in well-run centers. Premium early childhood education has emerged as the highest-growth sub-segment, driven by dual-income household normalization and the return-to-office environment.`,
    whyFranchise: `Education franchise investors can access both owner-operator and executive-model ownership depending on the brand — some systems are structured for franchisees to hire center directors and manage from a business oversight role. The monthly subscription revenue structure and high customer retention make education franchises among the most financially predictable businesses in any portfolio.`,
    iconGlyph: '📚',
    investorNote: 'Premium childcare franchises ($500K–$1.1M investment) qualify for SBA 7(a) and USDA loans. Established tutoring brands are accessible at $70K–$150K with significantly lower overhead.',
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    headline: 'Food & Beverage Franchises',
    subhead: 'High-AUV fast-casual and QSR concepts with proven multi-unit scaling paths.',
    marketSize: '$997B',
    cagr: '4.2%',
    marketIntelligence: `The U.S. food service market was valued at $997 billion in 2025 and is growing at 4.2% CAGR. Within franchising, the category is bifurcated: legacy QSR brands offer proven unit economics and multi-unit scale for institutional investors, while fast-casual and specialty beverage concepts deliver higher AUV potential alongside more operational complexity. For serious franchise investors, the relevant evaluation framework is not brand recognition but unit-level economics — Average Unit Volume, food cost percentages, labor modeling, and territory density. The most reliable F&B franchise investments are those with disclosed FDD Item 19 data, high franchisee satisfaction scores, and a multi-unit development infrastructure built for operators managing more than one location.`,
    whyFranchise: `Food and beverage franchises offer the highest absolute AUV potential in the sector. Investors who take a portfolio approach — acquiring 3–5 units under an area development agreement — can achieve economies of scale in management, purchasing, and marketing that single-unit operators cannot access.`,
    iconGlyph: '🍽️',
    investorNote: 'We curate F&B franchises with verified Item 19 disclosures only. Brands without published performance data are not featured in our Most Profitable collection.',
  },
  {
    slug: 'property-restoration',
    name: 'Property Restoration & Remediation',
    headline: 'Property Restoration Franchises',
    subhead: 'Non-deferrable B2B demand driven by insurance relationships, not consumer marketing.',
    marketSize: '$51.9B',
    cagr: '6.3%',
    marketIntelligence: `The U.S. property damage restoration market was valued at $51.9 billion in 2025 and is growing at 6.3% CAGR, driven by increasing extreme weather frequency, aging housing infrastructure, and rising commercial property claim volumes. The sector's defining structural advantage is non-deferrable demand: water damage worsens hourly, fire damage requires immediate remediation, and mold cannot wait — creating urgency-driven work that is independent of consumer sentiment or economic conditions. Restoration franchisees who establish strong insurance adjuster relationships in their first two years build a referral pipeline that generates 80–90% of ongoing revenue without consumer marketing investment, fundamentally changing the unit economics compared to marketing-dependent service businesses.`,
    whyFranchise: `Property restoration franchises offer one of the most defensible revenue models in franchise investing: demand is structurally non-deferrable, the B2B referral pipeline compounds over time, and insurance claim work is paid reliably. Mature operators consistently report that B2B adjuster relationships — not advertising — are the primary business development asset.`,
    iconGlyph: '🔧',
    investorNote: 'Most restoration franchises are van-based, requiring no physical retail location. The primary investment is equipment, working capital, and the initial franchisee training period.',
  },
  {
    slug: 'fitness',
    name: 'Fitness & Recreation',
    headline: 'Fitness Franchises',
    subhead: 'Membership-driven fitness concepts with strong brand retention and multi-unit scale.',
    marketSize: '$48.8B',
    cagr: '7.7%',
    marketIntelligence: `The U.S. fitness industry was valued at $48.8 billion in 2025, growing at 7.7% CAGR — one of the strongest recovery trajectories in consumer services post-2020. The sector has bifurcated sharply: budget fitness commodities compete on price, while premium boutique concepts — personal training studios, specialized fitness modalities, recovery services — compete on experience and community, generating significantly higher member lifetime value and lower price sensitivity. For franchise investors, the boutique studio model offers a membership-revenue structure with monthly EFT drafts and 6–12 month minimum membership commitments, reducing churn and stabilizing cash flow. Multi-unit ownership in fitness is a well-established model, with many top operators managing 5–15 locations across a metropolitan market.`,
    whyFranchise: `Fitness franchise investors benefit from the sector's strong word-of-mouth referral culture and the relatively low marketing costs of community-driven member acquisition. Established boutique concepts in saturated markets continue to outperform because members are buying community — not just access to equipment.`,
    iconGlyph: '🏋️',
    investorNote: 'Boutique fitness concepts typically require a physical location ($200K–$500K total investment) and are structured for executive ownership through a studio manager model.',
  },
  {
    slug: 'retail',
    name: 'Retail & Consumer Goods',
    headline: 'Retail Franchises',
    subhead: 'Curated specialty retail concepts with defensible product niches and repeat purchase economics.',
    marketSize: '$6.2T',
    cagr: '3.8%',
    marketIntelligence: `While the U.S. retail market is vast at $6.2 trillion, franchise investors should focus on specialty retail concepts with defensible product niches, high repeat purchase rates, and demonstrable e-commerce resistance. The retail concepts that have consistently outperformed in the franchise context are those with experiential or professional service components that online competitors cannot replicate — specialty pet services, custom products, expert-guided purchasing categories. Within franchising, the most investor-grade retail concepts are those operated in a manager-model structure with clear Territory protection and multi-unit development rights, allowing portfolio scaling without proportional owner time investment.`,
    whyFranchise: `Specialty retail franchises in defensible niches offer brand-driven customer acquisition, established supplier relationships, and proven inventory management systems that independent retailers spend years developing. The franchise structure compresses the timeline to profitability significantly relative to independent retail.`,
    iconGlyph: '🛍️',
    investorNote: 'We focus exclusively on specialty retail concepts with repeat purchase economics and clear e-commerce resistance. We do not feature commodity retail or pure-play product resale franchises.',
  },
  {
    slug: 'automotive',
    name: 'Automotive Services',
    headline: 'Automotive Services Franchises',
    subhead: 'Non-discretionary maintenance demand with strong brand loyalty and high ticket economics.',
    marketSize: '$116B',
    cagr: '4.5%',
    marketIntelligence: `The U.S. automotive services market was valued at $116 billion in 2025, growing at 4.5% CAGR, underpinned by one of the most durable demand drivers in consumer services: Americans own 290 million registered vehicles that require mandatory periodic maintenance regardless of economic conditions. Unlike discretionary automotive upgrades, preventive maintenance — oil changes, brake service, tire rotation — is structurally non-deferrable, making automotive service franchises among the most recession-resistant concepts in any investment tier. The category's franchise incumbents have built brand recognition over decades that generates customer walk-in volume independent of local marketing investment — a meaningful unit economics advantage for investors who want a business that works before digital marketing ROI is fully optimized.`,
    whyFranchise: `Automotive service franchises benefit from high repeat visit frequency (most vehicles require 3–4 service visits per year), strong brand loyalty among established national chains, and operator economics that scale efficiently with experienced service technician management.`,
    iconGlyph: '🚗',
    investorNote: 'Quick-lube and express automotive service concepts are structured for manager-model ownership, with franchisees managing 1–5 locations from a general manager infrastructure.',
  },
  {
    slug: 'cleaning-services',
    name: 'Cleaning & Janitorial Services',
    headline: 'Cleaning & Janitorial Franchises',
    subhead: 'Recurring commercial contracts with the lowest startup cost and fastest path to positive cash flow.',
    marketSize: '$117B',
    cagr: '6.6%',
    marketIntelligence: `The U.S. commercial cleaning and janitorial market was valued at $117 billion in 2025, growing at 6.6% CAGR, driven by post-pandemic facility hygiene standards that have become permanent in commercial, medical, and institutional settings. Commercial cleaning franchises generate recurring monthly contract revenue — typically 12- to 36-month commercial agreements with property managers, medical offices, schools, and industrial facilities — that produces the most predictable cash flow profile of any franchise category. The sector's defining investor advantage is modest startup cost relative to revenue potential: many commercial cleaning franchises are operational for under $100K with positive cash flow achievable within the first 60–90 days of contract ramp.`,
    whyFranchise: `Cleaning franchise investors benefit from the fastest cash flow ramp in franchising: commercial contracts begin generating revenue within weeks of signing, with no customer acquisition lag. The manager-model transition is straightforward — experienced route managers and crew supervisors allow executive owners to step back within 6–12 months of launch.`,
    iconGlyph: '✨',
    investorNote: 'Commercial cleaning franchises are among the most accessible investment opportunities at $50K–$150K total investment while delivering AUV profiles comparable to concepts at 2–3x the entry cost.',
  },
  {
    slug: 'technology',
    name: 'Technology & IT Services',
    headline: 'Technology & IT Services Franchises',
    subhead: 'B2B managed services with enterprise-grade recurring revenue and high retention contracts.',
    marketSize: '$428B',
    cagr: '8.2%',
    marketIntelligence: `The U.S. managed IT services market was valued at $428 billion in 2025 and is growing at 8.2% CAGR — one of the fastest growth rates among all franchise categories — driven by the acute SMB cybersecurity skills gap and the accelerating digital transformation of local businesses. IT services franchises in the MSP (Managed Service Provider) model generate monthly recurring revenue from multi-year IT support, cybersecurity monitoring, and cloud infrastructure contracts with SMB clients who cannot afford in-house IT staff. The churn dynamics are asymmetric: switching IT providers is expensive and disruptive, producing contract retention rates of 90%+ in mature MSP businesses. This makes IT services one of the most defensible recurring-revenue franchise models for investors who prioritize compounding contract value over time.`,
    whyFranchise: `Technology franchise investors who build a strong local MSP client base in years 1–2 benefit from compounding contract value as clients expand their service engagement over time. The B2B model and high switching costs create a revenue moat that consumer-facing franchises rarely achieve.`,
    iconGlyph: '💻',
    investorNote: 'Technology franchises require a technical business development approach but do not require the franchisee to be a technician. Executive investors hire technical talent and manage the client relationship portfolio.',
  },
]

const industryMap = new Map(industries.map(i => [i.slug, i]))

// ─── Static params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  return industries.map(i => ({ category: i.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const industry = industryMap.get(params.category)
  if (!industry) return {}

  return {
    title: `${industry.name} Franchises for Serious Investors — Franchise Conduit`,
    description: `Explore curated ${industry.name.toLowerCase()} franchise opportunities ranked by Navigator Score. Investment-grade data, FDD analysis, and advisor-matched introductions for investors deploying $100K–$2M+.`,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function IndustryPage({ params }: { params: { category: string } }) {
  const industry = industryMap.get(params.category)
  if (!industry) notFound()

  const matchingFranchises = getFranchisesByIndustry(params.category)
  const allFranchisesInCategory = matchingFranchises.length
  const hasFranchises = allFranchisesInCategory > 0

  // Related industries for internal linking
  const relatedIndustries = industries
    .filter(i => i.slug !== params.category)
    .slice(0, 6)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.5rem' }}>{industry.iconGlyph}</span>
              <span className="badge badge-teal">Industry Hub</span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {allFranchisesInCategory} brand{allFranchisesInCategory !== 1 ? 's' : ''} curated
              </span>
            </div>

            <h1 className="text-headline" style={{ marginBottom: 'var(--space-5)' }}>
              {industry.headline} for Serious Investors
            </h1>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.0625rem',
              lineHeight: '1.75',
              marginBottom: 'var(--space-8)',
              maxWidth: '640px',
            }}>
              {industry.subhead}
            </p>

            {/* Market stats */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-8)',
              padding: 'var(--space-6) 0',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: 'var(--space-10)',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary-light)', letterSpacing: '-0.02em' }}>
                  {industry.marketSize}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Market size (2025)</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-teal)', letterSpacing: '-0.02em' }}>
                  {industry.cagr}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Projected CAGR</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '-0.02em' }}>
                  $100K+
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Min. investment featured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise Cards ── */}
      <section className="section">
        <div className="container">
          {hasFranchises ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0 }}>
                  Curated {industry.name} Franchises
                </h2>
                <Link href="/franchises" style={{ fontSize: '0.875rem', color: 'var(--color-primary-light)', textDecoration: 'none' }}>
                  View all brands →
                </Link>
              </div>
              <div className="grid-3" style={{ marginBottom: 'var(--space-12)' }}>
                {matchingFranchises.map(franchise => (
                  <FranchiseCard key={franchise.id} franchise={franchise} />
                ))}
              </div>
            </>
          ) : (
            <div className="insight-block" style={{ marginBottom: 'var(--space-12)', maxWidth: '560px' }}>
              <div className="insight-label"><span>◎</span> Coming Soon</div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
                We are actively reviewing and vetting {industry.name.toLowerCase()} franchise brands for inclusion in our curated catalog. Our process requires verified FDD data and franchisee validation — we don&apos;t rush curation.
              </p>
              <Link href="/quiz" className="btn btn-outline" style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}>
                Tell us what you&apos;re looking for →
              </Link>
            </div>
          )}

          {/* Market Intelligence */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginBottom: 'var(--space-12)', alignItems: 'start' }}>
            <div>
              <div className="badge badge-indigo" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>Market Intelligence</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-5)', lineHeight: '1.4' }}>
                Why {industry.name} Franchising
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.9375rem' }}>
                {industry.marketIntelligence}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="insight-block">
                <div className="insight-label"><span>◉</span> Investor Perspective</div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>
                  {industry.whyFranchise}
                </p>
              </div>
              <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
                  Advisor Note
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.875rem', margin: 0 }}>
                  {industry.investorNote}
                </p>
              </div>
            </div>
          </div>

          {/* Investment Tier Links */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Browse by investment tier
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {[
                { label: 'Under $250K', tier: '$100K-$249K' },
                { label: '$250K – $500K', tier: '$250K-$499K' },
                { label: '$500K – $1M', tier: '$500K-$999K' },
                { label: '$1M+', tier: '$1M+' },
              ].map(t => (
                <Link
                  key={t.tier}
                  href={`/franchises?investmentTier=${encodeURIComponent(t.tier)}`}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                  }}
                  className="tier-link"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Industries */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Related industries
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {relatedIndustries.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/franchises/industries/${ind.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-2) var(--space-4)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                  }}
                  className="industry-link"
                >
                  <span>{ind.iconGlyph}</span>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12) var(--space-8)',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
          }}>
            <span className="badge badge-gold" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
              Advisor-Matched
            </span>
            <h2 className="text-subheadline" style={{ marginBottom: 'var(--space-4)' }}>
              Find the right {industry.name.toLowerCase()} franchise for your capital and timeline.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-7)', maxWidth: '480px', margin: '0 auto var(--space-7)' }}>
              Our advisor team reviews every inquiry before making an introduction. No mass form submissions. No cold calls from franchisors.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" className="btn btn-gold">
                Start your investor profile →
              </Link>
              <Link href="/methodology" className="btn btn-outline">
                How we rank brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
