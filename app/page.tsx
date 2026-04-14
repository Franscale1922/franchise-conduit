import type { Metadata } from 'next'
import Link from 'next/link'
import { franchises, getCollectionFranchises, formatCurrency } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'
import { HOMEPAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: HOMEPAGE.meta.title,
  description: HOMEPAGE.meta.description,
}

export default function HomePage() {
  // Gold standard brands — first 3 cards on homepage (Stage 3 deliverable)
  const featuredFranchises = franchises.slice(0, 3)
  // Semi-absentee spotlight — 2 cards max per spec
  const semiAbsentee = getCollectionFranchises('semi-absentee').slice(0, 2)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* Billboard test: "You've decided. Now find the right franchise."
          Candidate arrives and immediately knows: (1) what this is, (2) it's for
          them, (3) what to do next. Warm lifestyle context — not data dashboard. */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-20)' }}>
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>

            {/* Eyebrow */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <span className="badge badge-muted" style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                {HOMEPAGE.hero.eyebrow}
              </span>
            </div>

            {/* H1 — speaks to the candidate's current moment */}
            <h1 className="text-display" style={{ marginBottom: 'var(--space-6)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              {HOMEPAGE.hero.headline}
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto var(--space-10)' }}>
              {HOMEPAGE.hero.subhead}
            </p>

            {/* CTAs — copper (primary/conversion) + outline (exploratory) */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
              <Link href={HOMEPAGE.hero.ctaPrimaryHref} className="btn btn-gold btn-lg">
                {HOMEPAGE.hero.ctaPrimary}
              </Link>
              <Link href={HOMEPAGE.hero.ctaSecondaryHref} className="btn btn-outline btn-lg">
                {HOMEPAGE.hero.ctaSecondary} →
              </Link>
            </div>

            {/* Proof bar — 3 quantified signals */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
              {[
                { value: franchises.length.toString(), label: HOMEPAGE.hero.stats[0].label },
                { value: HOMEPAGE.hero.stats[1].value,  label: HOMEPAGE.hero.stats[1].label },
                { value: HOMEPAGE.hero.stats[2].value,  label: HOMEPAGE.hero.stats[2].label },
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

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      {/* Locked copy from PLATFORM_BRIEF §4e — affirms, never defensive */}
      <TrustBar />

      {/* ── INVESTMENT TIER SELECTOR ─────────────────────────────────────── */}
      {/* Moved below fold — keeps hero as editorial authority, not configurator */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--space-12) 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            {HOMEPAGE.investmentTiers.sectionLabel}
          </p>
          <InvestmentTierSelector />
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      {/* Layer 1: 3 steps only — Explore / Research / Connect.
          Billboard test: candidate reads all 3 labels in 5 seconds.
          Layer 2 CTA links to /how-it-works for full education. */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p className="section-label">{HOMEPAGE.howItWorks.sectionLabel}</p>
            <h2 className="text-headline">{HOMEPAGE.howItWorks.headline}</h2>
          </div>
          <div className="grid-3" style={{ marginBottom: 'var(--space-10)' }}>
            {HOMEPAGE.howItWorks.steps.map(step => (
              <div key={step.icon} className="card" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.08em', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-sans)' }}>
                  STEP {step.icon}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1.0625rem', marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>
                  {step.label}
                </h3>
                <p className="text-sm text-secondary" style={{ lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Layer 2 CTA — seekers click through to full process page */}
          <div style={{ textAlign: 'center' }}>
            <Link href={HOMEPAGE.howItWorks.ctaHref} className="btn btn-ghost">
              {HOMEPAGE.howItWorks.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED BRANDS ──────────────────────────────────────────────── */}
      {/* Gold standard brand pages from Stage 3. 3 cards max.
          Section label speaks to curation, not volume. */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="section-label">{HOMEPAGE.featuredBrands.sectionLabel}</p>
              <h2 className="text-headline">{HOMEPAGE.featuredBrands.headline}</h2>
            </div>
            <Link href={HOMEPAGE.featuredBrands.ctaHref} className="btn btn-ghost">
              {HOMEPAGE.featuredBrands.ctaText}
            </Link>
          </div>

          {/* Collection pills — quick browse by theme */}
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
            {HOMEPAGE.collections.map(c => (
              <Link key={c.href} href={c.href} className="collection-pill" title={c.desc}>
                {c.label}
              </Link>
            ))}
          </div>

          {/* 3-card grid — gold standard brands */}
          <div className="grid-3">
            {featuredFranchises.map(f => (
              <FranchiseCard key={f.id} franchise={f} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link href={HOMEPAGE.featuredBrands.ctaHref} className="btn btn-outline">
              Browse all franchise opportunities →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEMI-ABSENTEE SPOTLIGHT ───────────────────────────────────────── */}
      {/* Billboard test: "Don't just own a job. Own a business."
          Candidate immediately understands: ownership structure, not career. */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-16)' }}>
            <div>
              <p className="section-label">{HOMEPAGE.semiAbsentee.sectionLabel}</p>
              <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
                {HOMEPAGE.semiAbsentee.headline}<br />
                <span style={{ color: 'var(--color-gold)' }}>{HOMEPAGE.semiAbsentee.headlineAccent}</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-6)' }}>
                {HOMEPAGE.semiAbsentee.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                {HOMEPAGE.semiAbsentee.bullets.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--color-emerald)', fontSize: '1.1rem', marginTop: '1px' }}>✓</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href={HOMEPAGE.semiAbsentee.ctaHref} className="btn btn-outline">
                {HOMEPAGE.semiAbsentee.ctaText}
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

      {/* ── WHY FRANCHISE CONDUIT ─────────────────────────────────────────── */}
      {/* Layer 1: 3 differentiators — 1 sentence each (billboard test enforced).
          Layer 2: 2 testimonial cards right column (real initials, placeholder headshots). */}
      <WhyFCSection />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      {/* Single copper CTA per page — highest intent action.
          Billboard test: "Ready to take the first step?" — obvious what to do. */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-label">{HOMEPAGE.bottomCta.sectionLabel}</p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            {HOMEPAGE.bottomCta.headline}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
            {HOMEPAGE.bottomCta.subhead}
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={HOMEPAGE.bottomCta.ctaPrimaryHref} className="btn btn-gold btn-lg">
              {HOMEPAGE.bottomCta.ctaPrimary}
            </Link>
            <Link href={HOMEPAGE.bottomCta.ctaSecondaryHref} className="btn btn-outline btn-lg">
              {HOMEPAGE.bottomCta.ctaSecondary}
            </Link>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-5)' }}>
            {HOMEPAGE.bottomCta.microcopy}
          </p>
        </div>
      </section>

      {/* ── SEO LINK GRID ─────────────────────────────────────────────────── */}
      {/* Functional, below the fold — no billboard attribution needed.
          Industry + state hubs. All links point to existing routes. */}
      <SeoLinkGrid />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components (all copy imported from constants)
// ─────────────────────────────────────────────────────────────────────────────

function InvestmentTierSelector() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-5)', textAlign: 'center' }}>
        {HOMEPAGE.investmentTiers.prompt}
      </p>
      <div className="tier-grid" style={{ marginBottom: 'var(--space-6)' }}>
        {HOMEPAGE.investmentTiers.tiers.map(tier => (
          <Link key={tier.value} href={`/franchises?investment=${tier.value}`} style={{ textDecoration: 'none' }}>
            <div className={`tier-card ${'featured' in tier && tier.featured ? 'selected' : ''}`}>
              {'featured' in tier && tier.featured && (
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)', fontSize: '0.65rem' }}>
                  {HOMEPAGE.investmentTiers.tierFeaturedBadge}
                </span>
              )}
              <div className="tier-amount">{tier.label}</div>
              <div className="tier-label">{tier.sub}</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)' }}>
        <Link href={HOMEPAGE.investmentTiers.ctaHref} className="btn btn-gold btn-lg">
          {HOMEPAGE.investmentTiers.ctaText}
        </Link>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-4)', textAlign: 'center' }}>
        {HOMEPAGE.investmentTiers.microcopy}
      </p>
    </div>
  )
}

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner container">
        {HOMEPAGE.trustBar.map(t => (
          <div key={t.text} className="trust-item">
            <span style={{ color: 'var(--color-primary-light)' }}>{t.icon}</span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhyFCSection() {
  return (
    <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--space-16)', alignItems: 'center' }}>

          {/* Left — 3 differentiators (Layer 1, billboard tested) */}
          <div>
            <p className="section-label">{HOMEPAGE.whyFC.sectionLabel}</p>
            <h2 className="text-headline" style={{ marginBottom: 'var(--space-6)' }}>
              {HOMEPAGE.whyFC.headline}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {HOMEPAGE.whyFC.differentiators.map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                    {/* 1 sentence each — billboard: all 3 readable in 8 seconds */}
                    <p className="text-sm text-secondary" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2 testimonial cards (Layer 2 depth) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {HOMEPAGE.whyFC.testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-outcome">↗ {t.outcome}</div>
                <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
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
  return (
    <section style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--space-12) 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)' }}>

          {/* Industry links */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              {HOMEPAGE.seoGrid.industriesLabel}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {HOMEPAGE.seoGrid.industries.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/franchises/industries/${ind.slug}`}
                  style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', textDecoration: 'none', padding: 'var(--space-1) 0', borderBottom: '1px solid transparent', transition: 'color var(--transition-base)', display: 'inline-block' }}
                  className="seo-link"
                >
                  {ind.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* State links */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              {HOMEPAGE.seoGrid.statesLabel}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {HOMEPAGE.seoGrid.states.map(state => (
                <Link
                  key={state.slug}
                  href={`/franchises/locations/${state.slug}`}
                  style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', textDecoration: 'none', padding: 'var(--space-1) 0', transition: 'color var(--transition-base)', display: 'inline-block' }}
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
