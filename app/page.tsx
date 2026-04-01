import type { Metadata } from 'next'
import Link from 'next/link'
import { franchises, getCollectionFranchises, formatCurrency } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

export const metadata: Metadata = {
  title: 'Franchise Conduit — Executive Franchise Matching for $250K+ Investors',
  description: 'The only franchise platform built for executives and investors with capital to deploy. Advisor-matched, unbiased, and data-driven.',
}

export default function HomePage() {
  const featuredFranchises = franchises.slice(0, 6)
  const semiAbsentee = getCollectionFranchises('semi-absentee').slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-20)' }}>
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-6)' }}>
              <span className="badge badge-indigo">
                ✦ Built for executives investing $250K+
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display" style={{ marginBottom: 'var(--space-6)' }}>
              The franchise platform built for your{' '}
              <span style={{ color: 'var(--color-indigo-light)', fontStyle: 'italic' }}>capital</span>
              {' '}and your{' '}
              <span style={{ color: 'var(--color-gold)' }}>calendar</span>
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-8)', maxWidth: '580px', margin: '0 auto var(--space-10)' }}>
              Unbiased franchisee data, market intelligence on every listing, and advisor-guided matching.
              No lead farms. No pay-to-rank. No{' '}&ldquo;Request Free Info&rdquo; forms.
            </p>

            {/* Investment Tier Selector */}
            <InvestmentTierSelector />

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* COLLECTIONS */}
      <section className="section">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="section-label">Browse by Theme</p>
              <h2 className="text-headline">Curated Collections</h2>
            </div>
            <Link href="/franchises" className="btn btn-ghost">View all →</Link>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
            {[
              { href: '/collections/semi-absentee', label: '🕐 Semi-Absentee', desc: 'Manager-model ownership' },
              { href: '/collections/most-profitable', label: '📈 Most Profitable', desc: 'Highest AUV brands' },
              { href: '/collections/recession-resistant', label: '🛡️ Recession Resistant', desc: 'Proven through downturns' },
              { href: '/collections/multi-unit', label: '🏗️ Multi-Unit Track', desc: 'Scale to multiple locations' },
              { href: '/collections/executive-transition', label: '💼 Executive Transition', desc: 'Built for corporate exits' },
            ].map(c => (
              <Link key={c.href} href={c.href} className="collection-pill" title={c.desc}>
                {c.label}
              </Link>
            ))}
          </div>

          {/* Featured Grid */}
          <div className="grid-3">
            {featuredFranchises.map(f => (
              <FranchiseCard key={f.id} franchise={f} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link href="/franchises" className="btn btn-outline">
              Browse all franchise opportunities →
            </Link>
          </div>
        </div>
      </section>

      {/* SEMI-ABSENTEE SPOTLIGHT */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-16)' }}>
            <div>
              <p className="section-label">For the Capital Deployer</p>
              <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
                Own the business.<br />
                <span style={{ color: 'var(--color-indigo-light)' }}>Don&apos;t work in it.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-6)' }}>
                Semi-absentee and manager-model franchises are purpose-built for executives who want
                to deploy capital into a proven system without trading their time for a salary.
                Your GM runs the operation. You review the P&amp;L.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                {[
                  '10–20 hours/week average owner time commitment',
                  'Director or GM handles day-to-day operations',
                  'Recurring revenue models — predictable cash flow',
                  'Multi-unit scalability from day one',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--color-emerald)', fontSize: '1.1rem', marginTop: '1px' }}>✓</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/collections/semi-absentee" className="btn btn-primary">
                View semi-absentee franchises →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {semiAbsentee.map(f => (
                <Link key={f.id} href={`/franchises/${f.brand_slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 'var(--space-5)', display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                    <div className="franchise-logo" style={{ width: '44px', height: '44px', fontSize: '1.4rem' }}>
                      {f.brand_logo_emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{f.brand_name}</div>
                      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                        <span className="badge badge-indigo">{f.business_model === 'semi-absentee' ? 'Semi-Absentee' : 'Manager-Model'}</span>
                        <span className="badge badge-muted">{formatCurrency(f.cash_required_min)} min cash</span>
                        {f.hours_per_week_typical && <span className="badge badge-emerald">{f.hours_per_week_typical}</span>}
                      </div>
                    </div>
                    <span style={{ color: 'var(--color-text-muted)' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p className="section-label">The Process</p>
            <h2 className="text-headline">How Franchise Conduit works</h2>
          </div>
          <div className="grid-4">
            {[
              {
                step: '01',
                title: 'Take the 5-question quiz',
                desc: 'Tell us your capital, involvement preference, and timeline. We build your personalized shortlist instantly.',
                color: 'var(--color-indigo-light)'
              },
              {
                step: '02',
                title: 'Review market intelligence',
                desc: 'Every listing includes verified AUV data, franchisee satisfaction scores, and an industry market brief.',
                color: 'var(--color-gold)'
              },
              {
                step: '03',
                title: 'Compare your top picks',
                desc: 'Side-by-side comparison across 15 financial fields. No brand can pay to rank higher.',
                color: 'var(--color-emerald)'
              },
              {
                step: '04',
                title: 'Request an Introduction',
                desc: 'An advisor reviews your profile, preps you for the conversation, then makes the introduction. Not a form blast.',
                color: 'var(--color-indigo-light)'
              },
            ].map(step => (
              <div key={step.step} className="card" style={{ padding: 'var(--space-6)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.color, letterSpacing: '0.08em', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-sans)' }}>
                  STEP {step.step}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 'var(--space-3)' }}>{step.title}</h3>
                <p className="text-sm text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY PROOF */}
      <AuthoritySection />

      {/* BOTTOM CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-label">Ready to start?</p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Your next chapter doesn&apos;t require starting from scratch.
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
            Take the 5-minute quiz. Get a personalized shortlist. Talk to an advisor who works for you.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quiz" className="btn btn-primary btn-lg">Start the Quiz →</Link>
            <Link href="/franchises" className="btn btn-outline btn-lg">Browse Franchises</Link>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-5)' }}>
            No obligation. No salespeople. Our advisors work on your behalf.
          </p>
        </div>
      </section>
    </>
  )
}

function InvestmentTierSelector() {
  const tiers = [
    { value: '100k-250k', label: '$100K–$250K', sub: 'Entry executive range' },
    { value: '250k-500k', label: '$250K–$500K', sub: 'Prime exec investment zone', featured: true },
    { value: '500k-1m',   label: '$500K–$1M',   sub: 'Premium opportunities' },
    { value: '1m-plus',   label: '$1M+',         sub: 'Portfolio-level investing' },
  ]

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-5)' }}>
        How much capital can you invest?
      </p>
      <div className="tier-grid" style={{ marginBottom: 'var(--space-6)' }}>
        {tiers.map(tier => (
          <Link key={tier.value} href={`/franchises?investment=${tier.value}`} style={{ textDecoration: 'none' }}>
            <div className={`tier-card ${tier.featured ? 'selected' : ''}`}>
              {tier.featured && (
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)', fontSize: '0.65rem' }}>Most Searched</span>
              )}
              <div className="tier-amount">{tier.label}</div>
              <div className="tier-label">{tier.sub}</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)' }}>
        <Link href="/quiz" className="btn btn-primary btn-lg">
          Get My Personalized Shortlist →
        </Link>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-4)' }}>
        No account required · No obligation · Takes 3 minutes
      </p>
    </div>
  )
}

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner container">
        {[
          { icon: '✦', text: 'No brand can pay to rank' },
          { icon: '◈', text: 'Verified franchisee data' },
          { icon: '◉', text: 'Advisor-routed introductions' },
          { icon: '◎', text: 'Market intelligence on every listing' },
          { icon: '◐', text: '$250K+ investment floor' },
        ].map(t => (
          <div key={t.text} className="trust-item">
            <span style={{ color: 'var(--color-indigo-light)' }}>{t.icon}</span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AuthoritySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>
          <div>
            <p className="section-label">Why Franchise Conduit</p>
            <h2 className="text-headline" style={{ marginBottom: 'var(--space-6)' }}>
              Built to a different standard than every other directory
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {[
                {
                  title: 'No brand can pay to rank',
                  desc: 'Every curated collection is based on verified franchisee satisfaction data, disclosed AUV performance, or FBR Top 200 inclusion. Our rankings are the same whether a brand is a paying client or not.',
                  icon: '🛡️'
                },
                {
                  title: 'Market intelligence on every listing',
                  desc: 'Every franchise profile includes an industry-sourced Market Intelligence brief — market size, CAGR, competitive positioning, and demand drivers. You evaluate an opportunity, not a brochure.',
                  icon: '📊'
                },
                {
                  title: 'Advisor-in-the-loop',
                  desc: 'When you request an introduction, a franchise advisor reviews your profile, preps you for the conversation, and makes the introduction. Franchisors receive a vetted lead — not a raw form submission.',
                  icon: '🤝'
                },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                    <p className="text-sm text-secondary" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-3)' }}>📋</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>
                  The Executive Buyer&apos;s Guide
                </h3>
                <p className="text-sm text-secondary">
                  How to evaluate a franchise like a financial analyst — AUV, Item 19, royalty math, and the 3 metrics that matter most.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                {[
                  'How to read an FDD in 30 minutes',
                  'The 3 financial metrics every $250K+ buyer checks',
                  'Semi-absentee vs. owner-operator decision framework',
                  'What corporate executives get wrong in year one',
                  'SBA vs. ROBS: financing your first franchise',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--color-emerald)', flexShrink: 0 }}>✓</span>
                    <span className="text-sm text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <input
                  type="email"
                  placeholder="Your work email"
                  className="form-input"
                  id="guide-email-hero"
                />
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Download Free Guide →
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
