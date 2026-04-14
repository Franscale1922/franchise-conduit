import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getFranchisesByState } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'
import { STATE_HUBS, INDUSTRY_HUBS } from '@/lib/constants'

// ─── Derived lookup ───────────────────────────────────────────────────────────

const stateMap = new Map(STATE_HUBS.map(s => [s.slug, s]))

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return STATE_HUBS.map(s => ({ state: s.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { state: string }
}): Promise<Metadata> {
  const state = stateMap.get(params.state)
  if (!state) return {}
  return {
    title: state.metaTitle,
    description: state.metaDescription,
  }
}

// ─── Featured industries for internal linking ─────────────────────────────────

const featuredIndustries = INDUSTRY_HUBS.slice(0, 6).map(h => ({
  slug: h.slug,
  name: h.name,
  icon: h.iconGlyph,
}))

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StatePage({ params }: { params: { state: string } }) {
  const state = stateMap.get(params.state)
  if (!state) notFound()

  const stateFranchises = getFranchisesByState(params.state)
  const count = stateFranchises.length

  // Related states for internal linking
  const relatedStates = STATE_HUBS
    .filter(s => s.slug !== params.state)
    .slice(0, 12)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
              <span className="badge badge-teal">State Hub</span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {state.abbr}
              </span>
              <span className="badge" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                {count} brand{count !== 1 ? 's' : ''} available
              </span>
            </div>

            <h1 className="text-headline" style={{ marginBottom: 'var(--space-5)' }}>
              {state.name} Franchise Opportunities: Curated for Serious Investors
            </h1>

            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.0625rem',
              lineHeight: '1.75',
              marginBottom: 'var(--space-8)',
              maxWidth: '640px',
            }}>
              Every franchise featured here is independently ranked by Navigator Score and available for investment in {state.name}. No pay-to-rank placement. No mass inquiries. Advisor-reviewed introductions only.
            </p>

            {/* Key markets */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              flexWrap: 'wrap',
              paddingBottom: 'var(--space-8)',
              borderBottom: '1px solid var(--color-border)',
              marginBottom: 'var(--space-10)',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Key markets:
              </span>
              {state.keyMarkets.map(market => (
                <span
                  key={market}
                  style={{
                    padding: 'var(--space-1) var(--space-3)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Franchise Cards ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: 0 }}>
              Franchise Investments Available in {state.name}
            </h2>
            <Link href="/franchises" style={{ fontSize: '0.875rem', color: 'var(--color-primary-light)', textDecoration: 'none' }}>
              View all brands →
            </Link>
          </div>

          {count > 0 ? (
            <div className="grid-3" style={{ marginBottom: 'var(--space-12)' }}>
              {stateFranchises.map(franchise => (
                <FranchiseCard key={franchise.id} franchise={franchise} />
              ))}
            </div>
          ) : (
            <div className="insight-block" style={{ marginBottom: 'var(--space-12)', maxWidth: '560px' }}>
              <div className="insight-label"><span>◎</span> Expanding Soon</div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
                We are reviewing franchise brands with verified availability in {state.name} for inclusion in our curated catalog.
              </p>
              <Link href="/quiz" className="btn btn-outline" style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}>
                Tell us what you&apos;re looking for →
              </Link>
            </div>
          )}

          {/* State Business Climate */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginBottom: 'var(--space-12)', alignItems: 'start' }}>
            <div>
              <div className="badge badge-indigo" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
                {state.name} Business Climate
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-5)', lineHeight: '1.4' }}>
                Why investors choose {state.name}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.9375rem' }}>
                {state.businessClimate}
              </p>
            </div>
            <div>
              <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
                  Advisor Note: {state.abbr}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>
                  {state.investorNote}
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                  Browse by industry in {state.name}
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {featuredIndustries.map(ind => (
                    <Link
                      key={ind.slug}
                      href={`/franchises/industries/${ind.slug}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                        padding: 'var(--space-2) var(--space-3)',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8125rem', color: 'var(--color-text-secondary)',
                        textDecoration: 'none', transition: 'all var(--transition-base)',
                      }}
                      className="industry-link"
                    >
                      <span>{ind.icon}</span>
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ — from constants */}
          {state.faq && state.faq.length > 0 && (
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-6)' }}>
                Frequently asked questions: {state.name}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {state.faq.map((item, i) => (
                  <div key={i} style={{ padding: 'var(--space-5)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: 'var(--space-2)', color: 'var(--color-text)' }}>{item.q}</p>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem', margin: 0 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other States — internal linking */}
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
              Other top franchise markets
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              {relatedStates.map(s => (
                <Link
                  key={s.slug}
                  href={`/franchises/locations/${s.slug}`}
                  style={{
                    padding: 'var(--space-2) var(--space-3)',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem', color: 'var(--color-text-secondary)',
                    textDecoration: 'none', transition: 'all var(--transition-base)',
                  }}
                  className="tier-link"
                >
                  {s.name}
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
              Advisor-Matched Introduction
            </span>
            <h2 className="text-subheadline" style={{ marginBottom: 'var(--space-4)' }}>
              Find the right franchise investment in {state.name}.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto var(--space-7)', lineHeight: '1.7' }}>
              Tell us your investment range, preferred model, and timeline. Our advisor team reviews every profile before making an introduction. No mass form submissions.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" className="btn btn-gold">
                Start your investor profile →
              </Link>
              <Link href="/franchises" className="btn btn-outline">
                Browse all franchises
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
