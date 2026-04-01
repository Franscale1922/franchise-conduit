'use client'

import Link from 'next/link'
import { Franchise, formatCurrency } from '@/lib/data'

interface FranchiseCardProps {
  franchise: Franchise
  compact?: boolean
}

export function FranchiseCard({ franchise: f, compact }: FranchiseCardProps) {
  const modelLabel = {
    'semi-absentee': 'Semi-Absentee',
    'manager-model': 'Manager-Model',
    'owner-operator': 'Owner-Operator',
    'passive': 'Passive'
  }[f.business_model]

  const modelColor = {
    'semi-absentee': 'badge-emerald',
    'manager-model': 'badge-emerald',
    'owner-operator': 'badge-muted',
    'passive': 'badge-gold'
  }[f.business_model]

  // Surface the single most differentiating badge after the model badge
  const secondaryBadge = f.fbr_top_200
    ? { className: 'badge-gold', label: 'FBR Top 200' }
    : f.item_19_available
    ? { className: 'badge-emerald', label: 'Item 19 Available' }
    : f.recession_resistant
    ? { className: 'badge-muted', label: 'Recession Resistant' }
    : null

  return (
    <Link href={`/franchises/${f.brand_slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="franchise-card">
        {/* Header */}
        <div className="franchise-card-header">
          <div className="franchise-logo">{f.brand_logo_emoji}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2)' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 'var(--space-1)' }}>{f.brand_name}</h3>
              <NavigatorScore score={f.navigator_score} />
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              {f.industry_primary}
            </p>
            {/* Max 2 badges to keep scanning fast */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
              <span className={`badge ${modelColor}`}>{modelLabel}</span>
              {secondaryBadge && (
                <span className={`badge ${secondaryBadge.className}`}>{secondaryBadge.label}</span>
              )}
            </div>
          </div>
        </div>

        {/* Body — stat bar only in grid mode; insight block visible in compact/listing context */}
        <div className="franchise-card-body">
          {/* Key Stats — scannable financials */}
          <div className="stat-bar">
            <div className="stat-item">
              <div className="stat-label">Cash Required</div>
              <div className="stat-value">{formatCurrency(f.cash_required_min)}</div>
            </div>
            {f.avg_unit_volume && (
              <div className="stat-item">
                <div className="stat-label">Avg Unit Volume</div>
                <div className="stat-value emerald">{formatCurrency(f.avg_unit_volume)}</div>
              </div>
            )}
            {f.hours_per_week_typical && (
              <div className="stat-item">
                <div className="stat-label">Owner Time</div>
                <div className="stat-value">{f.hours_per_week_typical.split(' ')[0]}</div>
              </div>
            )}
          </div>

          {/* Market Intelligence Preview — compact/listing view only, not grid scanning */}
          {compact && (
            <div className="insight-block">
              <div className="insight-label">
                <span>◈</span> Market Intelligence
              </div>
              <p className="franchise-insight-preview">{f.market_intelligence_insight}</p>
            </div>
          )}

          {/* SBA / Multi-unit utility tags */}
          {(f.sba_eligible || f.multi_unit_available) && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {f.sba_eligible && (
                <span className="badge badge-muted">SBA Eligible</span>
              )}
              {f.multi_unit_available && (
                <span className="badge badge-muted">Multi-Unit</span>
              )}
            </div>
          )}
        </div>

        {/* Footer — text link, no heavy button (AngelList/Morningstar card pattern) */}
        <div className="franchise-card-footer">
          <span className="franchise-card-link">View full profile →</span>
          <a
            href="/methodology"
            className="navigator-methodology-link"
            onClick={(e) => e.stopPropagation()}
          >
            Score methodology
          </a>
        </div>

        {/* Hover-reveal market intelligence overlay */}
        {!compact && f.market_intelligence_insight && (
          <div className="franchise-card-insight-overlay">
            <div className="franchise-card-insight-label">
              <span>◈</span> Market Intelligence
            </div>
            <p className="franchise-card-insight-text">{f.market_intelligence_insight}</p>
          </div>
        )}
      </article>
    </Link>
  )
}

function NavigatorScore({ score }: { score: number }) {
  const size = 64
  const r = 26
  const circ = 2 * Math.PI * r
  const fill = (score / 100) * circ

  // Monochrome institutional ring — single slate color (Claude + Gemini + Morningstar reference)
  // Category label carries ALL semantic meaning; ring fill shows relative depth
  const RING_COLOR = '#7B95A8'

  // Category label — 4/5 sources recommend category-first over raw 0–100 number
  const category =
    score >= 90 ? 'Exceptional' :
    score >= 75 ? 'Strong' :
    score >= 60 ? 'Solid' :
    score >= 45 ? 'Moderate' : 'Developing'

  const tooltipText = `Navigator Rating: ${category} (${score}/100) — FBR rating, Item 19 transparency, AUV performance, franchisee satisfaction. Methodology: /methodology`

  return (
    <div className="navigator-category" title={tooltipText}>
      <div className="score-ring-lg">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-surface-3)" strokeWidth="2.5" />
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke={RING_COLOR}
            strokeWidth="2.5"
            strokeDasharray={`${fill} ${circ - fill}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="score-ring-value">{score}</div>
      </div>
      <div className="navigator-category-label">{category}</div>
    </div>
  )
}
