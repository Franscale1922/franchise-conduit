import type { Metadata } from 'next'
import Link from 'next/link'
import { METHODOLOGY } from '@/lib/constants'

export const metadata: Metadata = {
  title: METHODOLOGY.meta.title,
  description: METHODOLOGY.meta.description,
  openGraph: {
    title: METHODOLOGY.meta.title,
    description: METHODOLOGY.meta.description,
  },
}

export default function MethodologyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div className="hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="badge badge-emerald" style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                {METHODOLOGY.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-5)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {METHODOLOGY.hero.headline}
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', maxWidth: '560px' }}>
              {METHODOLOGY.hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE PROMISE BLOCK ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: 'var(--space-10) 0' }}>
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="insight-block">
            <div className="insight-label"><span>✦</span> Our Core Promise</div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-primary)', fontFamily: 'var(--font-serif)' }}>
              &ldquo;No brand can pay to appear in our editorial rankings or curated collections.
              Our Navigator Score is calculated from verified data only.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* ── WHAT IT IS NOT / WHAT IT IS ─────────────────────────────────── */}
        {/* Layer 1 — brief, direct. Readable in < 10 seconds each. */}
        <section className="section">
          <div className="grid-2" style={{ gap: 'var(--space-6)', alignItems: 'start' }}>

            {/* NOT */}
            <div className="card" style={{ padding: 'var(--space-7)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>
                {METHODOLOGY.notWhat.headline}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {METHODOLOGY.notWhat.items.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-text-muted)', flexShrink: 0, fontWeight: 500, lineHeight: 1.5 }}>✗</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65, textDecoration: 'line-through' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IS */}
            <div className="card" style={{ padding: 'var(--space-7)', borderColor: 'var(--color-primary)', borderWidth: '1.5px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>
                {METHODOLOGY.whatIs.headline}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                {METHODOLOGY.whatIs.desc}
              </p>
            </div>

          </div>
        </section>

        {/* ── THE 5 DIMENSIONS ─────────────────────────────────────────────── */}
        {/* Layer 2 — full detail per dimension */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>
            The Navigator Score
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-8)' }}>
            A composite 0–100 score built from five verified data dimensions, weighted by importance to an executive buyer.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
            {METHODOLOGY.dimensions.map(dim => (
              <div key={dim.number} className="card" style={{ padding: 'var(--space-5) var(--space-6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', lineHeight: 1 }}>{dim.number}</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.9375rem' }}>{dim.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="badge badge-gold">{dim.weight}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{dim.source}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: 'calc(1.25rem + var(--space-3))' }}>
                  {dim.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Score category bands */}
          <div style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
            <div style={{ padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>Score categories</p>
            </div>
            {METHODOLOGY.categories.map((cat, i) => (
              <div key={cat.label} style={{
                display: 'flex',
                gap: 'var(--space-4)',
                alignItems: 'center',
                padding: 'var(--space-4) var(--space-5)',
                borderBottom: i < METHODOLOGY.categories.length - 1 ? '1px solid var(--color-border)' : undefined,
                flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', minWidth: '180px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>{cat.label}</span>
                  <span className="badge badge-muted" style={{ fontSize: '0.7rem' }}>{cat.range}</span>
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{cat.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CURATED COLLECTIONS ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            How curated collections are built
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {[
              {
                collection: 'Most Profitable',
                criteria: 'Ranked by disclosed Average Unit Volume from FDD Item 19 only. Brands without a published Item 19 are ineligible regardless of size or ad spend.',
              },
              {
                collection: 'Semi-Absentee',
                criteria: 'Inclusion requires verification through advisor interviews with at least 3 active franchisees confirming the semi-absentee model. Franchisor self-reporting is not sufficient.',
              },
              {
                collection: 'Recession Resistant',
                criteria: 'Requires demonstrated revenue stability through at least one of the 2008–2009 or 2020 contractions, verified through FDD Item 20 data or third-party franchisee survey data.',
              },
              {
                collection: 'FBR Top 200',
                criteria: "Directly sourced from Franchise Business Review's annual Top 200 list, which requires a minimum 100-franchisee survey response threshold. No brand earns this via Franchise Conduit.",
              },
            ].map(c => (
              <div key={c.collection} style={{ display: 'flex', gap: 'var(--space-5)' }}>
                <span className="badge badge-muted" style={{ flexShrink: 0, alignSelf: 'flex-start', marginTop: '2px' }}>{c.collection}</span>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem' }}>{c.criteria}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT WE DON'T DO ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            What we explicitly do not do
          </h2>
          <div className="grid-2">
            {[
              { bad: 'Sell "featured placement" in editorial rankings', good: 'Rankings are data-only. Paid promotion is a separate, clearly-labeled product.' },
              { bad: 'Send your inquiry to multiple brands at once without consent', good: 'Single-brand, advisor-reviewed introductions only.' },
              { bad: 'Share your contact data before advisor review', good: 'Franchisors receive pre-qualified, advisor-vetted leads only.' },
              { bad: 'Use lifestyle copy to obscure investment risk', good: 'Every listing includes a frank Item 19 status, royalty math, and risk disclosure.' },
            ].map(item => (
              <div key={item.bad} className="card" style={{ padding: 'var(--space-5)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--color-text-muted)', flexShrink: 0, fontWeight: 500 }}>✕</span>
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

        {/* ── HONEST DISCLOSURE ────────────────────────────────────────────── */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-4)' }}>
            {METHODOLOGY.disclosure.headline}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '0.9375rem' }}>
            {METHODOLOGY.disclosure.body}
          </p>
        </section>

        {/* ── HOW WE MAKE MONEY ────────────────────────────────────────────── */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
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
              <p className="text-sm text-secondary">When a buyer requests an introduction and an advisor completes the handoff, we charge the franchisor a per-introduction fee. This aligns our incentives with quality, not volume.</p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div style={{ textAlign: 'center', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', marginBottom: 'var(--space-16)' }}>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)' }}>
            Have a question about our methodology? Want to challenge a ranking?
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={METHODOLOGY.cta.href} className="btn btn-gold">
              {METHODOLOGY.cta.text}
            </Link>
            <a href="mailto:methodology@franchiseconduit.com" className="btn btn-outline">
              Contact our data team →
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
