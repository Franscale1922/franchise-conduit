'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { FranchiseCard } from '@/components/FranchiseCard'
import Link from 'next/link'
import type { Franchise } from '@/lib/types'

// ─── Filter config — values match InvestmentTier type exactly ────────────────

const INVESTMENT_TIERS = [
  { value: '',             label: 'All investment levels' },
  { value: '$100K-$249K', label: '$100K – $250K' },
  { value: '$250K-$499K', label: '$250K – $500K' },
  { value: '$500K-$999K', label: '$500K – $1M' },
  { value: '$1M+',        label: '$1M+' },
]

const BUSINESS_MODELS = [
  { value: '',               label: 'All models' },
  { value: 'semi-absentee',  label: 'Semi-Absentee' },
  { value: 'manager-model',  label: 'Manager Model' },
  { value: 'owner-operator', label: 'Owner-Operator' },
]

const SORT_OPTIONS = [
  { value: 'navigator', label: 'Navigator Score' },
  { value: 'auv',       label: 'AUV' },
  { value: 'cash',      label: 'Cash Required' },
  { value: 'growth',    label: 'Growth Rate' },
  { value: 'fbr',       label: 'FBR Score' },
]

// ─── State slug → display name ───────────────────────────────────────────────

const STATE_LABELS: Record<string, string> = {
  'texas': 'Texas', 'florida': 'Florida', 'california': 'California',
  'georgia': 'Georgia', 'north-carolina': 'North Carolina', 'arizona': 'Arizona',
  'colorado': 'Colorado', 'ohio': 'Ohio', 'illinois': 'Illinois',
  'pennsylvania': 'Pennsylvania', 'new-york': 'New York', 'tennessee': 'Tennessee',
  'washington': 'Washington', 'virginia': 'Virginia', 'nevada': 'Nevada',
  'utah': 'Utah', 'minnesota': 'Minnesota', 'michigan': 'Michigan',
  'new-jersey': 'New Jersey', 'oregon': 'Oregon',
}

// ─── Props ───────────────────────────────────────────────────────────────────

interface Props {
  franchises: Franchise[]
  industries: string[]
  allStates: string[]
}

// ─── Shared filter UI — used in both sidebar and mobile drawer ────────────────

interface FilterSectionsProps {
  investment: string; setInvestment: (v: string) => void
  model: string;      setModel:      (v: string) => void
  industry: string;   setIndustry:   (v: string) => void
  state: string;      setState:      (v: string) => void
  industries: string[]
  allStates: string[]
}

function FilterSections({
  investment, setInvestment,
  model, setModel,
  industry, setIndustry,
  state, setState,
  industries, allStates,
}: FilterSectionsProps) {
  return (
    <>
      {/* Investment Range */}
      <div className="filter-section">
        <div className="filter-title">Investment Range</div>
        {INVESTMENT_TIERS.map(opt => (
          <div
            key={opt.value}
            className="filter-option"
            onClick={() => setInvestment(opt.value)}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="radio"
              readOnly
              checked={investment === opt.value}
              style={{ accentColor: 'var(--color-primary)' }}
            />
            <span>{opt.label}</span>
          </div>
        ))}
      </div>

      {/* Owner Involvement */}
      <div className="filter-section">
        <div className="filter-title">Owner Involvement</div>
        {BUSINESS_MODELS.map(opt => (
          <div
            key={opt.value}
            className="filter-option"
            onClick={() => setModel(opt.value)}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="radio"
              readOnly
              checked={model === opt.value}
              style={{ accentColor: 'var(--color-primary)' }}
            />
            <span>{opt.label}</span>
          </div>
        ))}
      </div>

      {/* Industry */}
      <div className="filter-section">
        <div className="filter-title">Industry</div>
        <div
          className="filter-option"
          onClick={() => setIndustry('')}
          style={{ cursor: 'pointer' }}
        >
          <input type="radio" readOnly checked={!industry} style={{ accentColor: 'var(--color-primary)' }} />
          <span>All industries</span>
        </div>
        {industries.map(ind => (
          <div
            key={ind}
            className="filter-option"
            onClick={() => setIndustry(industry === ind ? '' : ind)}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="radio"
              readOnly
              checked={industry === ind}
              style={{ accentColor: 'var(--color-primary)' }}
            />
            <span style={{ fontSize: '0.875rem' }}>{ind}</span>
          </div>
        ))}
      </div>

      {/* State */}
      <div className="filter-section">
        <div className="filter-title">State</div>
        <select
          value={state}
          onChange={e => setState(e.target.value)}
          style={{
            width: '100%',
            padding: 'var(--space-2) var(--space-3)',
            background: 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
          }}
        >
          <option value="">All states</option>
          {allStates.map(s => (
            <option key={s} value={s}>
              {STATE_LABELS[s] ?? s}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function FranchisesClient({ franchises, industries, allStates }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Read initial filter state from URL params
  const [investment, setInvestment] = useState(searchParams.get('investment') ?? '')
  const [model,      setModel]      = useState(searchParams.get('model') ?? '')
  const [industry,   setIndustry]   = useState(searchParams.get('industry') ?? '')
  const [state,      setState]      = useState(searchParams.get('state') ?? '')
  const [sort,       setSort]       = useState(searchParams.get('sort') ?? 'navigator')
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Sync URL params whenever filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (investment) params.set('investment', investment)
    if (model)      params.set('model', model)
    if (industry)   params.set('industry', industry)
    if (state)      params.set('state', state)
    if (sort && sort !== 'navigator') params.set('sort', sort)
    const q = params.toString()
    router.replace(`${pathname}${q ? '?' + q : ''}`, { scroll: false })
  }, [investment, model, industry, state, sort, pathname, router])

  const activeFilterCount = [investment, model, industry, state].filter(Boolean).length

  const resetFilters = useCallback(() => {
    setInvestment(''); setModel(''); setIndustry(''); setState('')
  }, [])

  // Instant client-side filter + sort
  const results = useMemo(() => {
    let list = [...franchises]
    if (investment) list = list.filter(f => f.investment_tier === investment)
    if (model)      list = list.filter(f => f.business_model === model)
    if (industry)   list = list.filter(f => f.industry_primary === industry)
    if (state)      list = list.filter(f => f.available_states.includes(state))
    if (sort === 'navigator') list.sort((a, b) => b.navigator_score - a.navigator_score)
    if (sort === 'auv')       list.sort((a, b) => (b.avg_unit_volume || 0) - (a.avg_unit_volume || 0))
    if (sort === 'cash')      list.sort((a, b) => a.cash_required_min - b.cash_required_min)
    if (sort === 'growth')    list.sort((a, b) => b.unit_growth_rate_yoy - a.unit_growth_rate_yoy)
    if (sort === 'fbr')       list.sort((a, b) => (b.fbr_satisfaction_score || 0) - (a.fbr_satisfaction_score || 0))
    return list
  }, [franchises, investment, model, industry, state, sort])

  const filterSectionProps = { investment, setInvestment, model, setModel, industry, setIndustry, state, setState, industries, allStates }

  return (
    <div className="section">
      <div className="container">

        {/* ── Page Header ── */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="section-label">Franchise Discovery</p>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-2)' }}>
            Browse {franchises.length} Researched Franchises
          </h1>
          <p className="text-secondary">
            {results.length} result{results.length !== 1 ? 's' : ''} · Ranked by {SORT_OPTIONS.find(s => s.value === sort)?.label} · No pay-to-rank
          </p>
        </div>

        {/* ── Mobile: Filter Button ── */}
        <div className="mobile-filter-bar" style={{ marginBottom: 'var(--space-5)' }}>
          <button
            id="open-filter-drawer"
            className="btn btn-outline"
            onClick={() => setDrawerOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
          >
            <span>⚙️ Filters</span>
            {activeFilterCount > 0 && (
              <span style={{
                background: 'var(--color-primary)', color: '#fff',
                borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700, padding: '1px 6px',
              }}>
                {activeFilterCount}
              </span>
            )}
          </button>
          {activeFilterCount > 0 && (
            <button className="btn btn-ghost btn-sm" onClick={resetFilters} style={{ color: 'var(--color-text-muted)' }}>
              Clear all
            </button>
          )}
        </div>

        {/* ── Mobile Drawer Overlay ── */}
        {drawerOpen && (
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(28, 43, 50, 0.5)',
              backdropFilter: 'blur(2px)',
            }}
            onClick={() => setDrawerOpen(false)}
          >
            <div
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
                padding: 'var(--space-8) var(--space-6)',
                maxHeight: '85dvh', overflowY: 'auto',
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <span style={{ fontWeight: 700, fontSize: '1.0625rem' }}>Filters</span>
                <button className="btn btn-ghost btn-sm" onClick={() => setDrawerOpen(false)}>Done ✓</button>
              </div>
              <FilterSections {...filterSectionProps} />
              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setDrawerOpen(false)}>
                  Show {results.length} result{results.length !== 1 ? 's' : ''}
                </button>
                {activeFilterCount > 0 && (
                  <button className="btn btn-ghost" onClick={resetFilters}>Clear</button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Desktop Layout: Sidebar + Results ── */}
        <div className="browse-layout">

          {/* ── Sidebar ── */}
          <aside className="filter-sidebar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontWeight: 600, fontSize: '0.9375rem', margin: 0 }}>Filter</h2>
              {activeFilterCount > 0 && (
                <button className="btn btn-ghost btn-sm" onClick={resetFilters} style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>
                  Reset
                </button>
              )}
            </div>

            <FilterSections {...filterSectionProps} />

            {/* Quiz nudge */}
            <div style={{
              marginTop: 'var(--space-8)', padding: 'var(--space-5)',
              background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
            }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-4)' }}>
                Not sure where to start?
              </p>
              <Link href="/quiz" className="btn btn-outline btn-sm" style={{ display: 'flex', justifyContent: 'center' }}>
                Take the quiz →
              </Link>
            </div>
          </aside>

          {/* ── Results Column ── */}
          <div>
            {/* Sort Bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-3)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span className="text-sm text-muted">Sort by:</span>
                {SORT_OPTIONS.map(s => (
                  <button
                    key={s.value}
                    id={`sort-${s.value}`}
                    onClick={() => setSort(s.value)}
                    className="btn btn-ghost btn-sm"
                    style={sort === s.value
                      ? { color: 'var(--color-primary)', background: 'var(--color-surface-2)', border: '1px solid var(--color-border-strong)' }
                      : {}}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <span className="text-sm text-muted">{results.length} result{results.length !== 1 ? 's' : ''}</span>
            </div>

            {/* Quiz inline CTA */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: 'var(--space-4) var(--space-5)',
              background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-6)',
              flexWrap: 'wrap', gap: 'var(--space-3)',
            }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                Not sure where to start? Let us match you.
              </p>
              <Link href="/quiz" id="franchises-quiz-cta" className="btn btn-primary btn-sm">
                Take the quiz →
              </Link>
            </div>

            {/* Card Grid / Empty State */}
            {results.length === 0 ? (
              <div className="card" style={{ padding: 'var(--space-12)', textAlign: 'center' }}>
                <p className="text-secondary" style={{ marginBottom: 'var(--space-5)' }}>
                  No franchises match your current filters.
                </p>
                <button className="btn btn-outline" onClick={resetFilters}>
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {results.map(f => <FranchiseCard key={f.id} franchise={f} />)}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .browse-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          align-items: start;
        }
        .mobile-filter-bar { display: none; }

        @media (max-width: 900px) {
          .browse-layout { grid-template-columns: 1fr; }
          .filter-sidebar { display: none; }
          .mobile-filter-bar { display: flex; align-items: center; gap: var(--space-3); }
        }

        @media (max-width: 640px) {
          .grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
