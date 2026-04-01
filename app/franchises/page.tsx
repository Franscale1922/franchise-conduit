import type { Metadata } from 'next'
import { franchises, formatCurrency, getIndustries } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

export const metadata: Metadata = {
  title: 'Browse Franchise Opportunities — $250K+ Executive Investors',
  description: 'Filter franchise opportunities by investment floor, owner involvement, industry, and franchisee satisfaction score. No pay-to-rank. Built for executives.',
}

export default function FranchisesPage({
  searchParams,
}: {
  searchParams: { investment?: string; model?: string; industry?: string; sort?: string }
}) {
  const industries = getIndustries()

  // Filter
  let results = [...franchises]
  if (searchParams.model) {
    results = results.filter(f => f.business_model === searchParams.model)
  }
  if (searchParams.industry) {
    results = results.filter(f => f.industry_primary === searchParams.industry)
  }
  if (searchParams.investment) {
    const tierMap: Record<string, string> = {
      '100k-250k': '$100K-$249K',
      '250k-500k': '$250K-$499K',
      '500k-1m':   '$500K-$999K',
      '1m-plus':   '$1M+',
    }
    const tier = tierMap[searchParams.investment]
    if (tier) results = results.filter(f => f.investment_tier === tier)
  }

  // Sort
  const sort = searchParams.sort || 'navigator'
  if (sort === 'navigator') results.sort((a, b) => b.navigator_score - a.navigator_score)
  if (sort === 'auv')      results.sort((a, b) => (b.avg_unit_volume || 0) - (a.avg_unit_volume || 0))
  if (sort === 'cash')     results.sort((a, b) => a.cash_required_min - b.cash_required_min)
  if (sort === 'growth')   results.sort((a, b) => b.unit_growth_rate_yoy - a.unit_growth_rate_yoy)
  if (sort === 'fbr')      results.sort((a, b) => (b.fbr_satisfaction_score || 0) - (a.fbr_satisfaction_score || 0))

  return (
    <div className="section">
      <div className="container">
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="section-label">Franchise Discovery</p>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-2)' }}>
            Franchise Opportunities — $250K+ Investors
          </h1>
          <p className="text-secondary">
            {results.length} opportunities · Ranked by Navigator Score · No pay-to-rank
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 'var(--space-8)', alignItems: 'start' }}>
          {/* Filter Sidebar */}
          <aside className="filter-sidebar">
            <h2 style={{ fontWeight: 600, marginBottom: 'var(--space-6)', fontSize: '0.9375rem' }}>Filter</h2>

            {/* Investment Floor */}
            <div className="filter-section">
              <div className="filter-title">Investment Floor</div>
              {[
                { value: '', label: 'All levels' },
                { value: '100k-250k', label: '$100K–$250K' },
                { value: '250k-500k', label: '$250K–$500K ⭐' },
                { value: '500k-1m',   label: '$500K–$1M' },
                { value: '1m-plus',   label: '$1M+' },
              ].map(opt => (
                <a key={opt.value} href={buildURL(searchParams, { investment: opt.value })} style={{ textDecoration: 'none' }}>
                  <div className={`filter-option ${searchParams.investment === opt.value || (!searchParams.investment && !opt.value) ? '' : ''}`}>
                    <input type="radio" readOnly checked={searchParams.investment === opt.value || (!searchParams.investment && !opt.value)} />
                    <span>{opt.label}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Owner Involvement */}
            <div className="filter-section">
              <div className="filter-title">Owner Involvement</div>
              {[
                { value: '', label: 'All models' },
                { value: 'semi-absentee', label: 'Semi-Absentee' },
                { value: 'manager-model', label: 'Manager-Model' },
                { value: 'owner-operator', label: 'Owner-Operator' },
              ].map(opt => (
                <a key={opt.value} href={buildURL(searchParams, { model: opt.value })} style={{ textDecoration: 'none' }}>
                  <div className="filter-option">
                    <input type="radio" readOnly checked={searchParams.model === opt.value || (!searchParams.model && !opt.value)} />
                    <span>{opt.label}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Industry */}
            <div className="filter-section">
              <div className="filter-title">Industry</div>
              <a href={buildURL(searchParams, { industry: '' })} style={{ textDecoration: 'none' }}>
                <div className="filter-option">
                  <input type="radio" readOnly checked={!searchParams.industry} />
                  <span>All industries</span>
                </div>
              </a>
              {industries.map(ind => (
                <a key={ind} href={buildURL(searchParams, { industry: ind })} style={{ textDecoration: 'none' }}>
                  <div className="filter-option">
                    <input type="radio" readOnly checked={searchParams.industry === ind} />
                    <span>{ind}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Filters */}
            <div className="filter-section">
              <div className="filter-title">Must-Haves</div>
              <div className="filter-option">
                <input type="checkbox" id="sba" />
                <label htmlFor="sba">SBA Eligible</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="item19" />
                <label htmlFor="item19">Item 19 Published</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="fbr" />
                <label htmlFor="fbr">FBR Top 200</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="recession" />
                <label htmlFor="recession">Recession Resistant</label>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            {/* Sort Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span className="text-sm text-muted">Sort by:</span>
                {[
                  { value: 'navigator', label: 'Navigator Score' },
                  { value: 'auv',       label: 'AUV' },
                  { value: 'cash',      label: 'Cash Required' },
                  { value: 'growth',    label: 'Growth Rate' },
                  { value: 'fbr',       label: 'FBR Score' },
                ].map(s => (
                  <a key={s.value} href={buildURL(searchParams, { sort: s.value })} style={{ textDecoration: 'none' }}>
                    <button
                      className={`btn btn-ghost btn-sm ${sort === s.value ? 'selected' : ''}`}
                      style={sort === s.value ? { color: 'var(--color-indigo-light)', background: 'var(--color-indigo-dim)' } : {}}
                    >
                      {s.label}
                    </button>
                  </a>
                ))}
              </div>
              <span className="text-sm text-muted">{results.length} results</span>
            </div>

            {results.length === 0 ? (
              <div className="card" style={{ padding: 'var(--space-12)', textAlign: 'center' }}>
                <p className="text-secondary">No franchises match your current filters. Try adjusting your criteria.</p>
              </div>
            ) : (
              <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {results.map(f => <FranchiseCard key={f.id} franchise={f} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function buildURL(
  current: Record<string, string | undefined>,
  updates: Record<string, string | undefined>
): string {
  const params = new URLSearchParams()
  const merged = { ...current, ...updates }
  for (const [k, v] of Object.entries(merged)) {
    if (v) params.set(k, v)
  }
  const q = params.toString()
  return `/franchises${q ? '?' + q : ''}`
}
