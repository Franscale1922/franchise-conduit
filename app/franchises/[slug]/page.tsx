import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFranchiseBySlug, franchises, formatCurrency } from '@/lib/data'
import BrandLeadSidebar from './BrandLeadSidebar'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return franchises.map(f => ({ slug: f.brand_slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const f = getFranchiseBySlug(params.slug)
  if (!f) return {}
  return {
    title: `${f.brand_name} Franchise: Cost, AUV & Owner Intelligence`,
    description: `Review ${f.brand_name} franchise investment data: ${formatCurrency(f.cash_required_min)} min cash required, ${f.avg_unit_volume ? formatCurrency(f.avg_unit_volume) + ' AUV, ' : ''}${f.business_model} model. Market intelligence and franchisee satisfaction data.`,
    openGraph: { title: `${f.brand_name} Franchise Intelligence Brief | Franchise Conduit` }
  }
}

export default function FranchiseDetailPage({ params }: Props) {
  const f = getFranchiseBySlug(params.slug)
  if (!f) notFound()

  const modelLabel = {
    'semi-absentee': 'Semi-Absentee',
    'manager-model': 'Manager-Model',
    'owner-operator': 'Owner-Operator',
    'passive': 'Passive'
  }[f.business_model]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: `${f.brand_name} Franchise`,
            category: 'Franchise Opportunity',
            description: f.description_short,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: `${f.cash_required_min}`,
              priceSpecification: {
                minPrice: f.investment_min,
                maxPrice: f.investment_max
              }
            },
            ...(f.fbr_satisfaction_score ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: (f.fbr_satisfaction_score / 20).toFixed(1),
                bestRating: '5',
                ratingCount: '26000'
              }
            } : {})
          })
        }}
      />

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--space-6)' }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: 'var(--space-6)', display: 'flex', gap: 'var(--space-2)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          <Link href="/" style={{ color: 'var(--color-text-muted)' }}>Home</Link>
          <span>/</span>
          <Link href="/franchises" style={{ color: 'var(--color-text-muted)' }}>Franchises</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-text-secondary)' }}>{f.brand_name}</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--space-8)', alignItems: 'start' }}>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

            {/* Header */}
            <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
              <div className="franchise-logo" style={{ width: 72, height: 72, fontSize: '2.2rem', flexShrink: 0 }}>
                {f.brand_logo_emoji}
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-2)', lineHeight: 1.2 }}>
                  {f.brand_name}
                </h1>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>{f.tagline}</p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  <span className={`badge ${f.business_model === 'semi-absentee' || f.business_model === 'manager-model' ? 'badge-emerald' : 'badge-indigo'}`}>
                    {modelLabel}
                  </span>
                  {f.fbr_top_200 && <span className="badge badge-gold">FBR Top 200{f.fbr_top_200_year ? ` (${f.fbr_top_200_year})` : ''}</span>}
                  {f.entrepreneur_rank && <span className="badge badge-muted">Entrepreneur #{f.entrepreneur_rank}</span>}
                  {f.recession_resistant && <span className="badge badge-muted">Recession Resistant</span>}
                  <span className="badge badge-muted">{f.industry_primary}</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)', letterSpacing: '0.04em' }}>NAVIGATOR</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: f.navigator_score >= 85 ? 'var(--color-emerald)' : 'var(--color-indigo-light)' }}>
                  {f.navigator_score}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>/100</div>
              </div>
            </div>

            {/* 1. Market Intelligence */}
            <section>
              <div className="insight-block">
                <div className="insight-label">
                  <span>◈</span> Market Intelligence Brief
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '0.9375rem' }}>
                  {f.market_intelligence_insight}
                </p>
                {f.macro_market_cagr && (
                  <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)' }}>
                    <span className="badge badge-emerald">CAGR: {f.macro_market_cagr}%</span>
                    <span className="badge badge-muted">Industry: {f.industry_primary}</span>
                  </div>
                )}
              </div>
            </section>

            {/* 2. Investment Snapshot */}
            <section>
              <p className="section-label">Investment Snapshot</p>
              <div className="stat-bar" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="stat-item">
                  <div className="stat-label">Liquid Cash Required</div>
                  <div className="stat-value gold">{formatCurrency(f.cash_required_min)}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Total Investment</div>
                  <div className="stat-value">{formatCurrency(f.investment_min)}–{formatCurrency(f.investment_max)}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Net Worth Required</div>
                  <div className="stat-value">{formatCurrency(f.net_worth_required)}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Franchise Fee</div>
                  <div className="stat-value">{formatCurrency(f.franchise_fee)}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Royalty Rate</div>
                  <div className="stat-value">{f.royalty_rate}%</div>
                </div>
                {f.marketing_fee && (
                  <div className="stat-item">
                    <div className="stat-label">Ad Fund</div>
                    <div className="stat-value">{f.marketing_fee}%</div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
                {f.sba_eligible && <span className="badge badge-emerald">✓ SBA Eligible</span>}
                {f.robs_eligible && <span className="badge badge-emerald">✓ ROBS Eligible</span>}
                {f.financing_available && <span className="badge badge-muted">Financing Available</span>}
                {f.veteran_discount && <span className="badge badge-gold">Veteran Discount</span>}
              </div>
            </section>

            {/* 3. Business Model */}
            <section>
              <p className="section-label">Business Model & Owner Involvement</p>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <div className="grid-2">
                  <div>
                    <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Ownership Model</div>
                    <span className={`badge ${f.business_model === 'semi-absentee' || f.business_model === 'manager-model' ? 'badge-emerald' : 'badge-indigo'}`} style={{ fontSize: '0.875rem', padding: '6px 14px' }}>
                      {modelLabel}
                    </span>
                  </div>
                  {f.hours_per_week_typical && (
                    <div>
                      <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Owner Time/Week</div>
                      <div style={{ fontWeight: 600 }}>{f.hours_per_week_typical}</div>
                    </div>
                  )}
                  {f.employees_typical && (
                    <div>
                      <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Typical Employees</div>
                      <div style={{ fontWeight: 600 }}>{f.employees_typical}</div>
                    </div>
                  )}
                  <div>
                    <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Territory</div>
                    <div style={{ fontWeight: 600, textTransform: 'capitalize' }}>{f.territory_type}</div>
                  </div>
                  <div>
                    <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Location Type</div>
                    <div style={{ fontWeight: 600 }}>{f.home_based ? 'Home-Based' : f.physical_location_required ? 'Physical Location' : 'Flexible'}</div>
                  </div>
                  <div>
                    <div className="stat-label" style={{ marginBottom: 'var(--space-2)' }}>Customer Base</div>
                    <div style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>{f.target_customer}</div>
                  </div>
                </div>
                <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--color-border)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  {f.multi_unit_available && <span className="badge badge-muted">Multi-Unit Available</span>}
                  {f.area_developer_available && <span className="badge badge-muted">Area Developer Available</span>}
                  {f.lifestyle_fit_tags.map(tag => (
                    <span key={tag} className="badge badge-muted" style={{ textTransform: 'capitalize' }}>
                      {tag.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Financial Performance */}
            <section>
              <p className="section-label">Financial Performance</p>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                {f.item_19_available ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                      <span className="badge badge-emerald">✓ Item 19 Financial Data Published</span>
                    </div>
                    {f.item_19_headline && (
                      <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-5)' }}>
                        <div className="stat-label">Item 19 Headline</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-emerald)', marginTop: 'var(--space-1)' }}>{f.item_19_headline}</div>
                      </div>
                    )}
                    <div className="grid-3">
                      {f.avg_unit_volume && (
                        <div>
                          <div className="stat-label">Avg Unit Volume</div>
                          <div className="stat-value emerald">{formatCurrency(f.avg_unit_volume)}</div>
                        </div>
                      )}
                      {f.cash_on_cash_return_range && (
                        <div>
                          <div className="stat-label">Est. Cash-on-Cash Return</div>
                          <div className="stat-value">{f.cash_on_cash_return_range}</div>
                        </div>
                      )}
                      {f.breakeven_timeline && (
                        <div>
                          <div className="stat-label">Typical Breakeven</div>
                          <div className="stat-value">{f.breakeven_timeline}</div>
                        </div>
                      )}
                      <div>
                        <div className="stat-label">Unit Growth (YoY)</div>
                        <div className="stat-value accent">+{f.unit_growth_rate_yoy}%</div>
                      </div>
                      <div>
                        <div className="stat-label">Total Units</div>
                        <div className="stat-value">{f.unit_count_total?.toLocaleString() ?? '—'}</div>
                      </div>
                      {f.fbr_satisfaction_score && (
                        <div>
                          <div className="stat-label">FBR Satisfaction Score</div>
                          <div className="stat-value gold">{f.fbr_satisfaction_score}/100</div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                      <span className="badge badge-muted">Item 19 Not Published</span>
                    </div>
                    <p className="text-sm text-secondary" style={{ marginBottom: 'var(--space-5)' }}>
                      This brand has not published a financial performance representation in their FDD.
                      This is common among growing brands. Ask for franchisee references (Item 20)
                      to gather informal revenue data directly from existing owners.
                    </p>
                    {f.avg_unit_volume && (
                      <div className="surface-2" style={{ padding: 'var(--space-4)' }}>
                        <div className="stat-label">Estimated Avg Unit Volume (Unofficial)</div>
                        <div className="stat-value" style={{ marginTop: 'var(--space-1)' }}>{formatCurrency(f.avg_unit_volume)}</div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>Based on franchisee interviews. Not an FDD disclosure.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* 5. Support & Training */}
            <section>
              <p className="section-label">Support & Training</p>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <div className="grid-2" style={{ marginBottom: 'var(--space-5)' }}>
                  <div>
                    <div className="stat-label">Initial Training</div>
                    <div style={{ fontWeight: 600, marginTop: 'var(--space-1)' }}>{f.initial_training_days} days</div>
                    {f.training_location && <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{f.training_location}</div>}
                  </div>
                  <div>
                    <div className="stat-label">Ongoing Support</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>{f.ongoing_support}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  {f.marketing_support && <span className="badge badge-emerald">✓ Marketing Support</span>}
                  {f.technology_platform && <span className="badge badge-emerald">✓ Proprietary Tech Platform</span>}
                  {f.field_support && <span className="badge badge-emerald">✓ Field Support Team</span>}
                  {f.franchisee_validation_available && <span className="badge badge-emerald">✓ Franchisee Validation Available</span>}
                </div>
              </div>
            </section>

            {/* 6. Franchisee Testimonials */}
            {f.testimonials.length > 0 && (
              <section>
                <p className="section-label">From the Franchise Owners</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {f.testimonials.map((t, i) => (
                    <div key={i} className="card" style={{ padding: 'var(--space-6)' }}>
                      <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '0.9375rem', fontStyle: 'italic', marginBottom: 'var(--space-4)' }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-indigo-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-indigo-light)' }}>
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            {t.location} · {t.tenure} owner
                            {t.background && ` · ${t.background}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. FDD & Due Diligence */}
            <section>
              <p className="section-label">FDD & Due Diligence</p>
              <div className="card" style={{ padding: 'var(--space-6)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div>
                    <div className="stat-label">FDD Status</div>
                    <div style={{ marginTop: 'var(--space-2)' }}>
                      {f.fdd_available
                        ? <span className="badge badge-emerald">✓ FDD Available</span>
                        : <span className="badge badge-muted">FDD Pending</span>}
                    </div>
                  </div>
                  <div>
                    <div className="stat-label">Item 19 (Financial Performance)</div>
                    <div style={{ marginTop: 'var(--space-2)' }}>
                      {f.item_19_available
                        ? <span className="badge badge-emerald">✓ Published</span>
                        : <span className="badge badge-muted">Not Published</span>}
                    </div>
                  </div>
                  <div>
                    <div className="stat-label">IFA Member</div>
                    <div style={{ marginTop: 'var(--space-2)' }}>
                      {f.ifa_member
                        ? <span className="badge badge-emerald">✓ IFA Member</span>
                        : <span className="badge badge-muted">No</span>}
                    </div>
                  </div>
                  {f.franchisee_validation_available && (
                    <div>
                      <div className="stat-label">Validation Calls</div>
                      <div style={{ marginTop: 'var(--space-2)' }}>
                        <span className="badge badge-emerald">✓ Available</span>
                      </div>
                    </div>
                  )}
                </div>
                <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--color-border)' }}>
                  <Link href="/resources/fdd/item-19" className="btn btn-ghost btn-sm">
                    📋 Learn how to read an FDD →
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar — Lead Capture */}
          <aside style={{ position: 'sticky', top: '84px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

            <BrandLeadSidebar brandName={f.brand_name} />

            {/* Territory Availability */}
            <div className="card" style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, marginBottom: 'var(--space-3)', fontSize: '0.9375rem' }}>
                📍 Check territory availability
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <input type="text" className="form-input" placeholder="Enter your ZIP code" style={{ flex: 1 }} />
                <button className="btn btn-outline btn-sm" style={{ whiteSpace: 'nowrap' }}>Check</button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card" style={{ padding: 'var(--space-5)' }}>
              <div className="stat-label" style={{ marginBottom: 'var(--space-4)' }}>Quick Facts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <StatRow label="Founded" value={String(f.year_founded)} />
                <StatRow label="Franchising Since" value={String(f.year_franchising_began)} />
                <StatRow label="Total Units" value={f.unit_count_total?.toLocaleString() ?? '—'} />
                <StatRow label="Revenue Pattern" value={f.revenue_pattern.replace(/-/g, ' ')} />
                <StatRow label="Royalty Rate" value={`${f.royalty_rate}%`} />
                {f.unit_growth_rate_yoy && <StatRow label="Unit Growth (YoY)" value={`+${f.unit_growth_rate_yoy}%`} highlight />}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  )
}

function StatRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
      <span style={{ color: 'var(--color-text-muted)' }}>{label}</span>
      <span style={{ fontWeight: 500, color: highlight ? 'var(--color-emerald)' : 'var(--color-text-secondary)' }}>{value}</span>
    </div>
  )
}
