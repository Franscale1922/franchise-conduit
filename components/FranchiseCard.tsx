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
    'owner-operator': 'badge-indigo',
    'passive': 'badge-gold'
  }[f.business_model]

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
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
              <span className={`badge ${modelColor}`}>{modelLabel}</span>
              {f.fbr_top_200 && <span className="badge badge-gold">FBR Top 200</span>}
              {f.recession_resistant && <span className="badge badge-muted">Recession Resistant</span>}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="franchise-card-body">
          {/* Key Stats */}
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

          {/* Market Intelligence Preview */}
          {!compact && (
            <div className="insight-block">
              <div className="insight-label">
                <span>◈</span> Market Intelligence
              </div>
              <p className="franchise-insight-preview">{f.market_intelligence_insight}</p>
            </div>
          )}

          {/* Key Tags */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {f.item_19_available && (
              <span className="badge badge-emerald">Item 19 Available</span>
            )}
            {f.sba_eligible && (
              <span className="badge badge-muted">SBA Eligible</span>
            )}
            {f.multi_unit_available && (
              <span className="badge badge-muted">Multi-Unit</span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="franchise-card-footer">
          <div className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center', pointerEvents: 'none' }}>
            View Intelligence Brief
          </div>
          <div className="btn btn-ghost btn-sm" style={{ pointerEvents: 'none' }}>
            ♡
          </div>
        </div>
      </article>
    </Link>
  )
}

function NavigatorScore({ score }: { score: number }) {
  const r = 20
  const circ = 2 * Math.PI * r
  const fill = (score / 100) * circ
  const color = score >= 85 ? '#10B981' : score >= 75 ? '#6366F1' : '#F59E0B'

  return (
    <div className="score-ring" title={`Navigator Score: ${score}/100`}>
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r={r} fill="none" stroke="var(--color-surface-3)" strokeWidth="3" />
        <circle
          cx="26" cy="26" r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${fill} ${circ - fill}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="score-ring-value" style={{ color }}>
        {score}
      </div>
    </div>
  )
}
