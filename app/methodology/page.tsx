import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How We Rank Franchises — Our Methodology',
  description: 'Franchise Conduit\'s ranking methodology is transparent, data-driven, and free from pay-to-rank influence. Read exactly how the Navigator Score and curated collections are built.',
}

export default function MethodologyPage() {
  return (
    <div className="section">
      <div className="container-md">

        <div style={{ maxWidth: '600px', marginBottom: 'var(--space-12)' }}>
          <span className="badge badge-emerald" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
            Transparency Statement
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            How we rank franchises — and what we won&apos;t do.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1rem' }}>
            Most franchise directories are lead farms: they rank by who pays for prominence,
            send the same buyer to 8 brands at once, and optimize for volume over quality.
            We built Franchise Conduit to work differently — for buyers, not advertisers.
          </p>
        </div>

        {/* The Statement */}
        <div className="insight-block" style={{ marginBottom: 'var(--space-10)' }}>
          <div className="insight-label"><span>✦</span> Our Core Promise</div>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-primary)', fontFamily: 'var(--font-serif)' }}>
            &ldquo;No brand can pay to appear in our editorial rankings or curated collections.
            Our Navigator Score is calculated from verified data only.
            Paid placement exists only in base listing visibility — and it is clearly labeled.&rdquo;
          </p>
        </div>

        {/* Navigator Score */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            The Navigator Score
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-6)' }}>
            The Navigator Score is a composite 0–100 score assigned to every franchise in our catalog.
            It is calculated from the following verified data sources, weighted by importance to an executive buyer:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', marginBottom: 'var(--space-6)' }}>
            {[
              { factor: 'FBR Franchisee Satisfaction Score', weight: '30%', source: 'Franchise Business Review annual survey' },
              { factor: 'Item 19 Financial Performance Disclosure', weight: '25%', source: 'FDD filed with state regulators' },
              { factor: 'Unit Count Growth Rate (YoY)', weight: '15%', source: 'Brand-reported + FDD Item 20 verification' },
              { factor: 'Owner Involvement Model Clarity', weight: '15%', source: 'Advisor validation + franchisee interviews' },
              { factor: 'Support & Training Score', weight: '10%', source: 'FBR training satisfaction data' },
              { factor: 'IFA Membership & Awards', weight: '5%', source: 'IFA member registry + editorial records' },
            ].map((row, i) => (
              <div key={i} className="card" style={{ padding: 'var(--space-4) var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <span style={{ fontWeight: 500 }}>{row.factor}</span>
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                  <span className="badge badge-gold">{row.weight}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{row.source}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <p className="text-sm text-secondary">
              <strong style={{ color: 'var(--color-text-primary)' }}>Data refresh:</strong> Navigator Scores are reviewed quarterly.
              FBR satisfaction data is updated annually following their franchisee survey cycle.
              Brands that lose FBR Top 200 inclusion or have significant franchisee satisfaction score drops will see their Navigator Score adjusted accordingly.
            </p>
          </div>
        </section>

        {/* Curated Collections */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            How Curated Collections Are Built
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {[
              {
                collection: 'Most Profitable',
                criteria: 'Ranked by disclosed Average Unit Volume (AUV) from FDD Item 19 only. Brands without a published Item 19 are ineligible for this collection regardless of size or ad spend.'
              },
              {
                collection: 'Semi-Absentee',
                criteria: 'Inclusion requires verification by an advisor interview with at least 3 active franchisees confirming the semi-absentee model. Self-reported "semi-absentee" claims by franchisors are not sufficient.'
              },
              {
                collection: 'Recession Resistant',
                criteria: 'Requires demonstrated revenue stability through at least one of the 2008–2009 or 2020 economic contractions, verified through FDD Item 20 outlet data or third-party franchisee survey data.'
              },
              {
                collection: 'FBR Top 200',
                criteria: 'Directly sourced from Franchise Business Review\'s annual Top 200 list, which requires passing a minimum 100-franchisee survey threshold. No brand achieves this designation via Franchise Conduit.'
              },
            ].map(c => (
              <div key={c.collection} style={{ display: 'flex', gap: 'var(--space-5)' }}>
                <span className="badge badge-indigo" style={{ flexShrink: 0, alignSelf: 'flex-start', marginTop: '2px' }}>{c.collection}</span>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem' }}>{c.criteria}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Don't Do */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            What we explicitly do not do
          </h2>
          <div className="grid-2">
            {[
              { bad: 'Sell "featured placement" in editorial rankings', good: 'Rankings are data-only. Paid promotion is a separate, labeled product.' },
              { bad: 'Send your inquiry to multiple brands at once without consent', good: 'Single-brand, advisor-reviewed introductions only.' },
              { bad: 'Share your contact data before advisor review', good: 'Franchisors receive pre-qualified, advisor-vetted leads only.' },
              { bad: 'Use lifestyle copywriting to obscure investment risk', good: 'Every listing includes a frank Item 19 status, royalty math, and risk disclosure.' },
            ].map(item => (
              <div key={item.bad} className="card" style={{ padding: 'var(--space-5)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--color-rose)', flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>{item.bad}</span>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--color-emerald)', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{item.good}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Make Money */}
        <section style={{ marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-4)' }}>
            How Franchise Conduit makes money
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-4)' }}>
            We charge franchisors for two things:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="surface-2" style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>1. Base Catalog Listing</div>
              <p className="text-sm text-secondary">A flat fee to appear in our searchable catalog. This has no effect on Navigator Score or collection placement. Think of it as the cost to have your brand on the platform.</p>
            </div>
            <div className="surface-2" style={{ padding: 'var(--space-5)' }}>
              <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>2. Per-Introduction Fee</div>
              <p className="text-sm text-secondary">When a buyer requests an introduction to a specific brand and an advisor completes the handoff, we charge the franchisor a per-introduction fee. This aligns our incentives with quality, not volume — we earn more when introductions are well-matched, not when anyone submits a form.</p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)' }}>
            Have a question about our methodology? Want to challenge a ranking?
          </p>
          <a href="mailto:methodology@franchiseconduit.com" className="btn btn-outline">
            Contact our data team →
          </a>
        </div>

      </div>
    </div>
  )
}
