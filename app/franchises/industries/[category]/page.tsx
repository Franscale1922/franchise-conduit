import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFranchisesByIndustry } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'
import { INDUSTRY_HUBS } from '@/lib/constants'

// ─── Derived lookup ───────────────────────────────────────────────────────────

const industryMap = new Map(INDUSTRY_HUBS.map(i => [i.slug, i]))

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return INDUSTRY_HUBS.map(i => ({ category: i.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const industry = industryMap.get(params.category)
  if (!industry) return {}
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustryPage({ params }: { params: { category: string } }) {
  const industry = industryMap.get(params.category)
  if (!industry) notFound()

  const matchingFranchises = getFranchisesByIndustry(params.category)
  const allFranchisesInCategory = matchingFranchises.length
  const hasFranchises = allFranchisesInCategory > 0

  // Related industries for internal linking — pull from INDUSTRY_HUBS
  const relatedIndustries = INDUSTRY_HUBS
    .filter(i => i.slug !== params.category)
    .slice(0, 6)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.5rem' }}>{industry.iconGlyph}</span>
              <span className="badge badge-teal">Industry Hub</span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {allFranchisesInCategory} brand{allFranchisesInCategory !== 1 ? 's' : ''} curated
              </span>
            </div>

            <h1 className="text-headline" style={{ marginBottom: 'var(--space-5)' }}>
              {industry.headline} for Serious Investors
            </h1>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.0625rem',
              lineHeight: '1.75',
              marginBottom: 'var(--space-8)',
              maxWidth: '640px',
            }}>
              {industry.subhead}
            </p>

            {/* Market stats */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-8)',
              padding: 'var(--space-6) 0',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: 'var(--space-10)',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary-light)', letterSpacing: '-0.02em' }}>
                  {industry.marketSize}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Market size (2025)</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-teal)', letterSpacing: '-0.02em' }}>
                  {industry.cagr}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Projected CAGR</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '-0.02em' }}>
                  $100K+
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>Min. investment featured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise Cards ── */}
      <section className="section">
        <div className="container">
          {hasFranchises ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0 }}>
                  Curated {industry.name} Franchises
                </h2>
                <Link href="/franchises" style={{ fontSize: '0.875rem', color: 'var(--color-primary-light)', textDecoration: 'none' }}>
                  View all brands →
                </Link>
              </div>
              <div className="grid-3" style={{ marginBottom: 'var(--space-12)' }}>
                {matchingFranchises.map(franchise => (
                  <FranchiseCard key={franchise.id} franchise={franchise} />
                ))}
              </div>
            </>
          ) : (
            <div className="insight-block" style={{ marginBottom: 'var(--space-12)', maxWidth: '560px' }}>
              <div className="insight-label"><span>◎</span> Coming Soon</div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
                We are actively reviewing and vetting {industry.name.toLowerCase()} franchise brands for inclusion in our curated catalog. Our process requires verified FDD data and franchisee validation — we don&apos;t rush curation.
              </p>
              <Link href="/quiz" className="btn btn-outline" style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}>
                Tell us what you&apos;re looking for →
              </Link>
            </div>
          )}

          {/* Market Intelligence */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginBottom: 'var(--space-12)', alignItems: 'start' }}>
            <div>
              <div className="badge badge-indigo" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>Market Intelligence</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-5)', lineHeight: '1.4' }}>
                Why {industry.name} Franchising
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.9375rem' }}>
                {industry.marketIntelligence}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="insight-block">
                <div className="insight-label"><span>◉</span> Investor Perspective</div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>
                  {industry.whyFranchise}
                </p>
              </div>
              <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
                  Advisor Note
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.875rem', margin: 0 }}>
                  {industry.investorNote}
                </p>
              </div>
            </div>
          </div>

          {/* FAQ — from constants */}
          {industry.faq && industry.faq.length > 0 && (
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-6)' }}>
                Frequently asked questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {industry.faq.map((item, i) => (
                  <div key={i} style={{ padding: 'var(--space-5)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>{item.q}</p>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Investment Tier Links */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Browse by investment tier
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {[
                { label: 'Under $250K',    tier: '$100K-$249K' },
                { label: '$250K – $500K',  tier: '$250K-$499K' },
                { label: '$500K – $1M',    tier: '$500K-$999K' },
                { label: '$1M+',           tier: '$1M+' },
              ].map(t => (
                <Link
                  key={t.tier}
                  href={`/franchises?investment=${encodeURIComponent(t.tier)}`}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                  }}
                  className="tier-link"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Industries */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Related industries
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {relatedIndustries.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/franchises/industries/${ind.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-2) var(--space-4)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                  }}
                  className="industry-link"
                >
                  <span>{ind.iconGlyph}</span>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12) var(--space-8)',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
          }}>
            <span className="badge badge-gold" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
              Advisor-Matched
            </span>
            <h2 className="text-subheadline" style={{ marginBottom: 'var(--space-4)' }}>
              Find the right {industry.name.toLowerCase()} franchise for your capital and timeline.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-7)', maxWidth: '480px', margin: '0 auto var(--space-7)' }}>
              Our advisor team reviews every inquiry before making an introduction. No mass form submissions. No cold calls from franchisors.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" className="btn btn-gold">
                Start your investor profile →
              </Link>
              <Link href="/methodology" className="btn btn-outline">
                How we rank brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
