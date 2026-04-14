import type { Metadata } from 'next'
import Link from 'next/link'
import { franchises, getCollectionFranchises, formatCurrency } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

export const metadata: Metadata = {
  title: 'Franchise Conduit — Advisor-Matched Franchise Discovery for Serious Investors',
  description: 'Curated franchise opportunities starting at $100K. Independent rankings, verified franchisee data, and advisor-routed introductions. No pay-to-rank.',
}

export default function HomePage() {
  const featuredFranchises = franchises.slice(0, 6)
  const semiAbsentee = getCollectionFranchises('semi-absentee').slice(0, 3)

  return (
    <>
      {/* HERO — Full-width centered editorial (4/5 research sources: Cadre/AngelList/Yieldstreet pattern) */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-20)' }}>
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>

            {/* Eyebrow */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <span className="badge badge-muted" style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                Private market research for franchise investors
              </span>
            </div>

            {/* Headline — declarative, category-king framing (Cadre/Gemini reference) */}
            <h1 className="text-display" style={{ marginBottom: 'var(--space-5)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              The executive standard for franchise investment
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-10)', maxWidth: '580px', margin: '0 auto var(--space-10)' }}>
              Independent rankings and franchise intelligence built for serious investors
              at every stage — from first unit to portfolio expansion. Verified franchisee data. No paid placement.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
              <Link href="/quiz" className="btn btn-gold btn-lg">
                Request Your Introduction
              </Link>
              <Link href="/franchises" className="btn btn-outline btn-lg">
                Explore ranked franchises →
              </Link>
            </div>

            {/* Proof bar — 3 quantified signals (Claude/ChatGPT recommendation) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
              {[
                { value: franchises.length.toString(), label: 'Franchise brands catalogued' },
                { value: '100%', label: 'Franchisee-data ranked' },
                { value: '$100K+', label: 'Starting investment' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', fontFamily: 'var(--font-serif)', fontVariantNumeric: 'tabular-nums' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* EXPLORE BY CAPITAL — Tier selector moved below fold (4/5 research sources)
           Keeps hero as editorial authority statement, not a configurator */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--space-12) 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            Explore by investment range
          </p>
          <InvestmentTierSelector />
        </div>
      </section>

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
                <span style={{ color: 'var(--color-gold)' }}>Don&apos;t work in it.</span>
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
              <Link href="/collections/semi-absentee" className="btn btn-gold">
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
                        <span className="badge badge-muted">{f.business_model === 'semi-absentee' ? 'Semi-Absentee' : 'Manager-Model'}</span>
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
                color: 'var(--color-primary-light)'
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
                color: 'var(--color-primary-light)'
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
            <Link href="/quiz" className="btn btn-gold btn-lg">Start the Quiz →</Link>
            <Link href="/franchises" className="btn btn-outline btn-lg">Browse Franchises</Link>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-5)' }}>
            No obligation. No salespeople. Our advisors work on your behalf.
          </p>
        </div>
      </section>

      {/* SEO LINK GRID — below Bottom CTA, above footer */}
      <SeoLinkGrid />
    </>
  )
}

function InvestmentTierSelector() {
  const tiers = [
    { value: '100k-250k', label: '$100K–$250K', sub: 'First unit range' },
    { value: '250k-500k', label: '$250K–$500K', sub: 'Most active tier', featured: true },
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
        <Link href="/quiz" className="btn btn-gold btn-lg">
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
          { icon: '◈', text: 'Independent rankings powered by verified franchisee data' },
          { icon: '◉', text: 'Advisor-routed introductions only' },
          { icon: '◎', text: 'FDD and unit economics on every listing' },
          { icon: '◐', text: 'Opportunities starting at $100K' },
          { icon: '✦', text: 'Brand spending cannot influence ranking' },
        ].map(t => (
          <div key={t.text} className="trust-item">
            <span style={{ color: 'var(--color-primary-light)' }}>{t.icon}</span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AuthoritySection() {
  const testimonials = [
    {
      initials: 'MR',
      name: 'Marcus R.',
      role: 'Franchise Owner, ServiceMaster Clean',
      former: 'Former Regional VP, Fortune 500 Logistics',
      tenure: '3 years in',
      quote: 'The intelligence briefs here are the reason I picked ServiceMaster over two other brands I was comparing. I had actual AUV and franchisee satisfaction data — not a sales deck.',
      outcome: '$1.1M AUV in Year 2',
    },
    {
      initials: 'SL',
      name: 'Sandra L.',
      role: 'Multi-Unit Owner, Club Pilates',
      former: 'Former CFO, Healthcare Group',
      tenure: '18 months in',
      quote: 'I appreciated that no brand paid to be at the top of the list. We looked at 6 concepts and the ranking was clearly methodology-driven, not sales-driven.',
      outcome: '3 units open, 2 in development',
    },
  ]

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
                  title: 'Rankings built on verified franchisee data',
                  desc: 'Every curated collection is ordered by verified franchisee satisfaction scores, disclosed AUV performance, or FBR Top 200 inclusion. Our methodology is the same whether a brand is a paying client or not.',
                  icon: '🛡️'
                },
                {
                  title: 'Market intelligence on every listing',
                  desc: 'Every franchise profile includes an industry-sourced Market Intelligence brief — market size, CAGR, competitive positioning, and demand drivers. You evaluate an opportunity, not a brochure.',
                  icon: '📊'
                },
                {
                  title: 'Advisor-in-the-loop introductions',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                {/* Outcome pill */}
                <div className="testimonial-outcome">
                  ↗ {t.outcome}
                </div>
                {/* Pull quote */}
                <blockquote className="testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                {/* Profile */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role} · {t.tenure}</div>
                    <div className="testimonial-former">{t.former}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SeoLinkGrid() {
  const industries = [
    { slug: 'home-services', label: 'Home Services Franchises' },
    { slug: 'health-wellness', label: 'Health & Wellness Franchises' },
    { slug: 'senior-care', label: 'Senior Care Franchises' },
    { slug: 'business-services', label: 'Business Services Franchises' },
    { slug: 'education', label: 'Education Franchises' },
    { slug: 'food-beverage', label: 'Food & Beverage Franchises' },
    { slug: 'property-restoration', label: 'Property Restoration Franchises' },
    { slug: 'fitness', label: 'Fitness Franchises' },
    { slug: 'retail', label: 'Retail Franchises' },
    { slug: 'automotive', label: 'Automotive Services Franchises' },
    { slug: 'cleaning-services', label: 'Cleaning & Janitorial Franchises' },
    { slug: 'technology', label: 'Technology & IT Franchises' },
  ]

  const states = [
    { slug: 'texas', label: 'Texas Franchises' },
    { slug: 'florida', label: 'Florida Franchises' },
    { slug: 'california', label: 'California Franchises' },
    { slug: 'georgia', label: 'Georgia Franchises' },
    { slug: 'north-carolina', label: 'North Carolina Franchises' },
    { slug: 'arizona', label: 'Arizona Franchises' },
    { slug: 'colorado', label: 'Colorado Franchises' },
    { slug: 'ohio', label: 'Ohio Franchises' },
    { slug: 'illinois', label: 'Illinois Franchises' },
    { slug: 'pennsylvania', label: 'Pennsylvania Franchises' },
    { slug: 'new-york', label: 'New York Franchises' },
    { slug: 'tennessee', label: 'Tennessee Franchises' },
    { slug: 'washington', label: 'Washington Franchises' },
    { slug: 'virginia', label: 'Virginia Franchises' },
    { slug: 'nevada', label: 'Nevada Franchises' },
    { slug: 'utah', label: 'Utah Franchises' },
    { slug: 'minnesota', label: 'Minnesota Franchises' },
    { slug: 'michigan', label: 'Michigan Franchises' },
    { slug: 'new-jersey', label: 'New Jersey Franchises' },
    { slug: 'oregon', label: 'Oregon Franchises' },
  ]

  return (
    <section style={{
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--space-12) 0',
      background: 'var(--color-bg)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-12)',
        }}>
          {/* Industry links */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-5)',
            }}>
              Browse by industry
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {industries.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/franchises/industries/${ind.slug}`}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    padding: 'var(--space-1) 0',
                    borderBottom: '1px solid transparent',
                    transition: 'color var(--transition-base)',
                    display: 'inline-block',
                  }}
                  className="seo-link"
                >
                  {ind.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* State links */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-5)',
            }}>
              Browse by state
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {states.map(state => (
                <Link
                  key={state.slug}
                  href={`/franchises/locations/${state.slug}`}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    padding: 'var(--space-1) 0',
                    transition: 'color var(--transition-base)',
                    display: 'inline-block',
                  }}
                  className="seo-link"
                >
                  {state.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
