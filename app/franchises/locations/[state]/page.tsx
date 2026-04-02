import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFranchisesByState } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

// ─── State config ────────────────────────────────────────────────────────────

interface StateConfig {
  slug: string
  name: string
  abbr: string
  businessClimate: string
  keyMarkets: string[]
  investorNote: string
}

const states: StateConfig[] = [
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    businessClimate: `Texas ranks #1 in the U.S. for business climate (Forbes 2025), with no state income tax, a $2.6 trillion GDP, and the fastest-growing major metropolitan markets in the country. Dallas-Fort Worth, Houston, Austin, and San Antonio are four of the ten fastest-growing U.S. metro areas by population, creating sustained demand for franchise services across every category. The state's business-first regulatory environment, low franchise licensing burden, and deep pool of executive talent make Texas the top target state for franchise expansion among sophisticated multi-unit investors.`,
    keyMarkets: ['Dallas-Fort Worth', 'Houston', 'Austin', 'San Antonio'],
    investorNote: 'Texas has no franchise registration requirement — operators can begin franchisee recruitment immediately after FDD issuance.',
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    businessClimate: `Florida's combination of no state income tax, a $1.7 trillion economy, and consistent top-3 domestic migration rankings makes it one of the most attractive franchise markets in the country. The Miami, Orlando, Tampa, and Jacksonville metros collectively represent over 15 million residents, with above-average household income growth in the $100K–$300K range that aligns directly with executive-model franchise ownership. The state's aging population drives outsized demand for senior care, health and wellness, and home services franchises specifically.`,
    keyMarkets: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    investorNote: 'Florida is not a franchise registration state. The state\'s franchise activity is among the highest in the country by unit count, demonstrating strong consumer and business demand across categories.',
  },
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    businessClimate: `California is a franchise registration state with a formal FDD filing requirement — but its $3.9 trillion economy and 39 million residents represent the largest single-state franchise market in the U.S. Los Angeles, San Francisco, San Diego, and Sacramento are among the highest-AUV franchise markets in the country, reflecting the state's above-average household income and willingness to pay for premium services. Investors in California benefit from strong franchise consumer demand at premium price points.`,
    keyMarkets: ['Los Angeles', 'San Francisco Bay Area', 'San Diego', 'Sacramento'],
    investorNote: 'California requires FDD registration before franchisee offers. Budget 90–120 days for CA registration processing when planning your expansion timeline.',
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    businessClimate: `Georgia is the premier franchise market in the Southeast, anchored by Atlanta's status as the logistics, healthcare, and fintech hub of the region. Metro Atlanta alone has a population of 6.3 million with household income demographics that directly match the executive-model franchise buyer profile. Georgia has no franchise registration requirement, a flat 5.49% corporate income tax rate, and consistently ranks in the top five states for business climate in major annual surveys. The state's population growth consistently outpaces the national average.`,
    keyMarkets: ['Atlanta', 'Savannah', 'Augusta', 'Columbus'],
    investorNote: 'Atlanta is one of the top three franchise expansion targets in the Southeast for multi-unit operators, with strong unit economics documented across categories from home services to health and wellness.',
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbr: 'NC',
    businessClimate: `North Carolina has emerged as one of the most competitive franchise markets in the Southeast, driven by the Research Triangle's technology and pharmaceutical sector growth, Charlotte's position as the second-largest U.S. banking center, and consistent top-five rankings in CNBC's annual America's Top States for Business survey. The state's population growth — fueled by corporate relocations from higher-cost Northeast and West Coast markets — brings executive talent whose income and investment profiles align precisely with the serious franchise investor segment.`,
    keyMarkets: ['Charlotte', 'Raleigh-Durham', 'Greensboro', 'Wilmington'],
    investorNote: 'North Carolina is not a franchise registration state. The Charlotte and Raleigh-Durham markets both rank in the top 20 fastest-growing metros nationally by population migration.',
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    businessClimate: `Arizona's franchise market is anchored by the Phoenix metro — the fifth-largest U.S. metro by population and the fastest-growing major metro between 2020 and 2025. The state combines favorable tax policy (4.5% flat income tax), no franchise registration requirement, and an executive population that skews heavily toward corporate migrants from California and Illinois. Health and wellness, home services, and senior care franchises consistently outperform national AUV benchmarks in Phoenix, reflecting the demographic profile of the migrant population.`,
    keyMarkets: ['Phoenix', 'Scottsdale', 'Tucson', 'Mesa'],
    investorNote: 'Arizona is not a franchise registration state. The Phoenix metro\'s corporate migration inflow is one of the strongest franchise demand drivers in the Western U.S.',
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    businessClimate: `Colorado has the highest educational attainment rate in the U.S. and a robust technology and aerospace economy centered on Denver that consistently produces executive-level employment transitions — the ideal profile for semi-absentee franchise ownership. Denver's household income demographics, an average home value approaching $550K, and the state's strong outdoor recreation culture create above-average per-capita spending on health, wellness, and home services. Colorado is not a franchise registration state.`,
    keyMarkets: ['Denver', 'Boulder', 'Colorado Springs', 'Fort Collins'],
    investorNote: 'Denver consistently ranks in the top five U.S. markets for franchise unit economics in the health, wellness, and professional services categories, driven by above-average household income and consumer spending.',
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    businessClimate: `Ohio's strength as a franchise market lies in its scale and cost advantage: Columbus, Cleveland, and Cincinnati are three distinct major metro markets within one state, each with substantial population bases and household income profiles that support multi-unit franchise investment. Central Ohio has emerged as a logistics and technology hub, contributing to Columbus's consistent ranking as one of the top emerging franchise markets in the Midwest. Ohio is not a franchise registration state.`,
    keyMarkets: ['Columbus', 'Cincinnati', 'Cleveland', 'Dayton'],
    investorNote: 'Ohio\'s multi-metro geography makes it an attractive area development target — a single area developer agreement can cover Columbus, Cincinnati, and Cleveland, providing multi-unit scale within a single state.',
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    businessClimate: `Illinois is a franchise registration state with a formal FDD filing requirement, but the Chicago metropolitan area — population 9.5 million — is the largest single-market franchise opportunity in the Midwest and one of the top five franchise markets nationally. Chicago's density, executive workforce demographics, and concentration of corporate headquarters make it a premium target for investor-grade franchise concepts with strong brand recognition and semi-absentee operational models.`,
    keyMarkets: ['Chicago', 'Naperville', 'Schaumburg', 'Rockford'],
    investorNote: 'Illinois requires FDD registration. Allow 90 days for processing. The Chicago market\'s premium pricing and household income demographics typically produce AUV figures 15–25% above national franchise system averages.',
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    abbr: 'PA',
    businessClimate: `Pennsylvania is a franchise registration state, but its combination of Philadelphia, Pittsburgh, and the Pennsylvania Turnpike corridor provides access to a dense population of 13 million across three distinct market geographies. The Philadelphia market in particular — with its concentration of financial services, healthcare, and pharmaceutical employment — produces the executive buyer demographics that align with semi-absentee and manager-model franchise ownership. Pittsburgh's healthcare and education economy similarly supports strong franchise consumer demand.`,
    keyMarkets: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Harrisburg'],
    investorNote: 'Pennsylvania requires FDD registration. Philadelphia and its suburbs consistently rank among the top mid-Atlantic franchise markets for health, wellness, and professional services unit volume.',
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    businessClimate: `New York is a franchise registration state with detailed filing requirements, but the New York City metro — the largest consumer market in the U.S. — represents unmatched brand exposure and premium pricing power. Franchise concepts that can demonstrate unit economics in the New York market have proven product-market fit at the highest consumer expectation level in the country. Suburban New York markets — Westchester, Long Island, Connecticut border communities — offer executive demographics with lower operational complexity than Manhattan-based locations.`,
    keyMarkets: ['New York City', 'Long Island', 'Westchester', 'Buffalo'],
    investorNote: 'New York requires FDD registration with specific New York disclosure items. Budget 120+ days for registration and target suburban markets for semi-absentee models to avoid Manhattan operational complexity.',
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    businessClimate: `Tennessee is one of the most franchise-friendly states in the country — no state income tax, no franchise registration requirement, and a business climate ranked consistently in the top ten nationally. Nashville's explosive growth (averaging 80–100 net new residents per day through 2024–2025), combined with corporate relocations from higher-tax states, has created a strong executive population with capital deployment motivation. Memphis and Chattanooga offer additional markets with strong service business demand and lower competition for franchise units.`,
    keyMarkets: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    investorNote: 'Tennessee has no income tax on wages or salaries (Hall Tax fully repealed as of 2022). The absence of state income tax is a direct investor advantage for franchise income.',
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    businessClimate: `Washington state's franchise market is dominated by the Seattle metro — one of the highest household income markets in the country, driven by the technology sector (Amazon, Microsoft, Boeing, and their contractor networks). Washington is not a franchise registration state. The Seattle market's technology executive demographics are an exceptionally strong match for semi-absentee investment models, and the state's absence of an income tax (the Washington capital gains tax applies narrowly) creates favorable conditions for franchise income retention.`,
    keyMarkets: ['Seattle', 'Bellevue', 'Tacoma', 'Spokane'],
    investorNote: 'The Seattle metro produces some of the highest per-capita franchise spend in the U.S. across health, wellness, and professional services — driven by above-average household income and strong consumer quality-orientation.',
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    businessClimate: `Virginia's Northern Virginia market — anchored by the federal government and defense contractor corridor — produces one of the highest median household income concentrations in the U.S. The state consistently ranks in the top five for business climate and has no franchise registration requirement. Richmond and Virginia Beach represent additional mid-size markets with strong consumer demographics. Northern Virginia's proximity to Washington D.C. and the density of federal and defense sector employment creates sustained executive franchise investor interest.`,
    keyMarkets: ['Northern Virginia', 'Richmond', 'Virginia Beach', 'Charlottesville'],
    investorNote: "Northern Virginia's federal contract economy is explicitly recession-resistant — franchise businesses serving this market benefit from the stable employment base regardless of broader economic cycles.",
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    abbr: 'NV',
    businessClimate: `Nevada has no state income tax, no franchise registration requirement, and a Las Vegas metro that has undergone structural economic diversification beyond gaming and hospitality into logistics, technology, and healthcare. The state's population growth — particularly in the Henderson, Summerlin, and North Las Vegas residential corridors — drives sustained demand for home services, health and wellness, and senior care franchises. Las Vegas's unique demographic of retirees and hospitality-sector workers creates distinct demand patterns that reward franchises with recurring-revenue models.`,
    keyMarkets: ['Las Vegas', 'Henderson', 'Reno', 'Summerlin'],
    investorNote: 'Nevada\'s zero income tax environment and minimal franchise regulatory burden make it a preferred domicile for multi-state franchise holding entities.',
  },
  {
    slug: 'utah',
    name: 'Utah',
    abbr: 'UT',
    businessClimate: `Utah is consistently ranked #1 in economic growth rate among U.S. states, with the Salt Lake City metro — the "Silicon Slopes" technology corridor — producing above-average household income growth and one of the strongest young professional demographic profiles in the country. Utah's business-friendly regulatory environment, no franchise registration requirement, and Mormon cultural affinity for entrepreneurship and business ownership create an exceptionally receptive franchise market. The state's above-average birth rate produces strong demand for education and childcare franchises specifically.`,
    keyMarkets: ['Salt Lake City', 'Provo-Orem', 'St. George', 'Ogden'],
    investorNote: 'Utah\'s technology sector employment concentration creates a strong secondary executive population ready for franchise investment — many "Silicon Slopes" employees reach liquidity events and seek active capital deployment vehicles.',
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    abbr: 'MN',
    businessClimate: `Minnesota is home to the highest concentration of Fortune 500 headquarters per capita in the U.S. (Target, UnitedHealth Group, 3M, General Mills, and others), producing a deep pool of executive talent with capital deployment capacity. The Twin Cities metro — Minneapolis-Saint Paul — is a sophisticated business market with above-average household income and strong consumer demand for professional-grade services. Minnesota is not a franchise registration state in the traditional sense, though it has specific FDD delivery timing requirements.`,
    keyMarkets: ['Minneapolis-Saint Paul', 'Rochester', 'Duluth', 'Bloomington'],
    investorNote: 'Minnesota\'s Fortune 500 concentration produces a buyer profile — senior executives with capital and management experience — that matches the semi-absentee franchise ownership model precisely.',
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    businessClimate: `Michigan's franchise market is anchored by the Detroit metro — which has undergone significant economic diversification from its automotive roots into technology, autonomous vehicle development, and financial services. Michigan is a franchise registration state, but the Grand Rapids and Traverse City markets offer additional opportunities outside Detroit with no franchise registration complexity at the franchise system level. Michigan's cost-of-living advantage relative to coastal markets allows investors to acquire franchise units at lower total investment with comparable unit economics.`,
    keyMarkets: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing'],
    investorNote: 'Michigan\'s automotive-adjacent economy creates strong demand for B2B service franchises from the dense commercial vehicle and manufacturing service sector.',
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    businessClimate: `New Jersey has the highest median household income of any U.S. state and is a franchise registration state. Its proximity to New York City and Philadelphia makes it one of the densest executive investor markets in the country, with a concentration of financial services, pharmaceutical, and technology professionals who represent the core semi-absentee franchise ownership demographic. The suburban New York and Philadelphia markets in North and South Jersey respectively offer premium pricing power comparable to core urban markets without Manhattan operational complexity.`,
    keyMarkets: ['Newark / Northern NJ', 'Princeton Corridor', 'Cherry Hill / South NJ', 'Jersey Shore'],
    investorNote: 'New Jersey\'s highest-in-nation median household income translates directly to premium pricing power for franchise services — unit economics in NJ markets consistently exceed national system averages.',
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    businessClimate: `Oregon is not a franchise registration state, and the Portland metro has emerged as a significant Pacific Northwest technology and creative economy hub with above-average household income demographics. The state's population growth — sustained by migration from California and continued technology sector employment — creates strong consumer demand for premium services across health, wellness, and professional categories. Oregon's cultural orientation toward sustainability and conscious consumption makes eco-friendly franchise concepts particularly well-positioned.`,
    keyMarkets: ['Portland', 'Salem', 'Eugene', 'Bend'],
    investorNote: 'Oregon\'s consumer orientation toward sustainability and quality-over-price makes it a strong market for premium franchise concepts with clear brand differentiation.',
  },
]

const stateMap = new Map(states.map(s => [s.slug, s]))

// ─── Static params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  return states.map(s => ({ state: s.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { state: string }
}): Promise<Metadata> {
  const state = stateMap.get(params.state)
  if (!state) return {}

  return {
    title: `${state.name} Franchise Opportunities — Curated for Serious Investors — Franchise Conduit`,
    description: `Explore advisor-curated franchise investment opportunities available in ${state.name}. Navigator Score rankings, FDD analysis, and AUV data for investors deploying $100K to $2M+ in ${state.abbr}.`,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

// Top industry hubs for internal linking
const featuredIndustries = [
  { slug: 'home-services', name: 'Home Services', icon: '🏠' },
  { slug: 'health-wellness', name: 'Health & Wellness', icon: '💪' },
  { slug: 'senior-care', name: 'Senior Care', icon: '🤝' },
  { slug: 'business-services', name: 'Business Services', icon: '🏢' },
  { slug: 'education', name: 'Education', icon: '📚' },
  { slug: 'property-restoration', name: 'Property Restoration', icon: '🔧' },
]

export default function StatePage({ params }: { params: { state: string } }) {
  const state = stateMap.get(params.state)
  if (!state) notFound()

  const stateFranchises = getFranchisesByState(params.state)
  const count = stateFranchises.length

  return (
    <main>
      {/* ── Hero ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
              <span className="badge badge-teal">State Hub</span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {state.abbr}
              </span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {count} brand{count !== 1 ? 's' : ''} available
              </span>
            </div>

            <h1 className="text-headline" style={{ marginBottom: 'var(--space-5)' }}>
              {state.name} Franchise Opportunities — Curated for Serious Investors
            </h1>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.0625rem',
              lineHeight: '1.75',
              marginBottom: 'var(--space-8)',
              maxWidth: '640px',
            }}>
              Every franchise featured here is independently ranked by Navigator Score and available for investment in {state.name}. No pay-to-rank placement. No mass inquiries. Advisor-reviewed introductions only.
            </p>

            {/* Key markets */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              paddingBottom: 'var(--space-8)',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: 'var(--space-10)',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Key markets:
              </span>
              {state.keyMarkets.map(market => (
                <span
                  key={market}
                  style={{
                    padding: 'var(--space-1) var(--space-3)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise Cards ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0 }}>
              Franchise Investments Available in {state.name}
            </h2>
            <Link href="/franchises" style={{ fontSize: '0.875rem', color: 'var(--color-primary-light)', textDecoration: 'none' }}>
              View all brands →
            </Link>
          </div>

          {count > 0 ? (
            <div className="grid-3" style={{ marginBottom: 'var(--space-12)' }}>
              {stateFranchises.map(franchise => (
                <FranchiseCard key={franchise.id} franchise={franchise} />
              ))}
            </div>
          ) : (
            <div className="insight-block" style={{ marginBottom: 'var(--space-12)', maxWidth: '560px' }}>
              <div className="insight-label"><span>◎</span> Expanding Soon</div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
                We are reviewing franchise brands with verified availability in {state.name} for inclusion in our curated catalog.
              </p>
              <Link href="/quiz" className="btn btn-outline" style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}>
                Tell us what you&apos;re looking for →
              </Link>
            </div>
          )}

          {/* State Business Climate */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginBottom: 'var(--space-12)', alignItems: 'start' }}>
            <div>
              <div className="badge badge-indigo" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
                {state.name} Business Climate
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-5)', lineHeight: '1.4' }}>
                Why investors choose {state.name}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.9375rem' }}>
                {state.businessClimate}
              </p>
            </div>
            <div>
              <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
                  Advisor Note — {state.abbr}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>
                  {state.investorNote}
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                  Browse by industry in {state.name}
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {featuredIndustries.map(ind => (
                    <Link
                      key={ind.slug}
                      href={`/franchises/industries/${ind.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        padding: 'var(--space-2) var(--space-3)',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-text-secondary)',
                        textDecoration: 'none',
                        transition: 'all var(--transition-base)',
                      }}
                      className="industry-link"
                    >
                      <span>{ind.icon}</span>
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other States */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Other top franchise markets
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {states
                .filter(s => s.slug !== params.state)
                .slice(0, 12)
                .map(s => (
                  <Link
                    key={s.slug}
                    href={`/franchises/locations/${s.slug}`}
                    style={{
                      padding: 'var(--space-2) var(--space-3)',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      transition: 'all var(--transition-base)',
                    }}
                    className="tier-link"
                  >
                    {s.name}
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
              Advisor-Matched Introduction
            </span>
            <h2 className="text-subheadline" style={{ marginBottom: 'var(--space-4)' }}>
              Find the right franchise investment in {state.name}.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto var(--space-7)', lineHeight: '1.7' }}>
              Tell us your investment range, preferred model, and timeline. Our advisor team reviews every profile before making an introduction — no mass form submissions.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" className="btn btn-gold">
                Start your investor profile →
              </Link>
              <Link href="/franchises" className="btn btn-outline">
                Browse all franchises
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
