import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Franchise Conduit — Advisor-Backed Franchise Discovery for Serious Investors',
  description: 'Franchise Conduit connects serious investors with the right franchise opportunity through independent data, transparent rankings, and advisor-reviewed introductions. Learn how we work.',
  openGraph: {
    title: 'About Franchise Conduit',
    description: 'Advisor-matched franchise discovery. Independent data. No pay-to-rank. No lead blast. Built for investors with capital to deploy.',
  },
}

const differentiators = [
  {
    icon: '◈',
    label: 'Independent Rankings',
    description: 'Our Navigator Score is calculated from verified franchisee satisfaction data, Item 19 disclosures, and unit economics — not advertising spend. A brand cannot buy a better ranking.'
  },
  {
    icon: '◉',
    label: 'Advisor-Routed Introductions',
    description: 'Every introduction request is reviewed by a credentialed franchise advisor before the franchisor receives it. You are never blasted to 8 brands at once.'
  },
  {
    icon: '◎',
    label: 'Investment-Grade Data',
    description: 'FDD summaries, AUV benchmarks, Item 19 status, and franchisee satisfaction scores are visible upfront — not gated behind a form submission.'
  },
  {
    icon: '◐',
    label: 'Investor-First Minimum',
    description: 'The platform starts at $100K liquid floor and serves investors up to $2M+. We serve serious capital deployment — not impulse franchise shopping.'
  },
]

const teamSignals = [
  { stat: '10+', label: 'Years operating FranchiseConduit.com', sub: 'Domain authority earned the right way — through content and trust' },
  { stat: '618', label: 'Referring domains', sub: 'Organically earned backlinks from franchise industry publishers' },
  { stat: '1,800+', label: 'Franchise brands catalogued', sub: 'Covering every major category from home services to technology' },
  { stat: '$100K+', label: 'Minimum investment floor', sub: 'We serve investors with real capital to deploy, not tire-kickers' },
]

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-md">

        {/* Hero */}
        <div style={{ maxWidth: '640px', marginBottom: 'var(--space-16)' }}>
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
            About The Platform
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-5)' }}>
            The franchise platform built for investors, not lead farms.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>
            Franchise Conduit has been connecting serious investors with franchise opportunities since 2014. 
            The new platform raises that standard: independent rankings, transparent unit economics, 
            and advisor-reviewed introductions — for capital between $100K and $2M+.
          </p>
        </div>

        {/* Core Promise */}
        <div className="insight-block" style={{ marginBottom: 'var(--space-16)' }}>
          <div className="insight-label"><span>✦</span> Our Position</div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-primary)', fontFamily: 'var(--font-serif)' }}>
            &ldquo;Most franchise directories optimize for volume. We optimize for quality. 
            The right franchise match for the right investor, made once — not blasted to 12 brands and forgotten.&rdquo;
          </p>
        </div>

        {/* What Makes Us Different */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>
            How we work differently
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', lineHeight: '1.7' }}>
            The franchise discovery market has a structural problem: platforms earn more when they generate more leads, 
            not better leads. That incentive structure produces lead farms. We built Franchise Conduit to break that model.
          </p>
          <div className="grid-2" style={{ gap: 'var(--space-4)' }}>
            {differentiators.map((item) => (
              <div key={item.label} className="card" style={{ padding: 'var(--space-6)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--color-primary-light)', fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.9375rem' }}>{item.label}</span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.9rem', paddingLeft: 'calc(1.25rem + var(--space-3))' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The FMS Connection */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            Built on a decade of franchise expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-4)' }}>
                FranchiseConduit.com has operated in the franchise industry since 2014, 
                building one of the most comprehensive franchise catalogs in North America 
                and earning trust signals from 618+ referring domains — organically.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-4)' }}>
                The new platform is built on that foundation, adding the institutional rigor 
                that serious investors demand: verified unit economics, independent scoring, 
                and an advisor model that protects buyers at every step of the process.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
                We are backed by FMS (Franchise Marketing Systems), a franchise development 
                firm with direct relationships across hundreds of franchise brands — which 
                gives our advisor team unfiltered access to franchisor data, 
                franchisee networks, and FDD disclosures.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {teamSignals.map((item) => (
                <div key={item.stat} className="surface-2" style={{ padding: 'var(--space-5)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-1)' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary-light)', fontWeight: 400 }}>
                      {item.stat}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.875rem' }}>
                      {item.label}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginLeft: 'calc(2rem + var(--space-3))' }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positioning vs. the market */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            The gap we fill
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Dimension
                  </th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Lead Farms
                  </th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Traditional Brokers
                  </th>
                  <th style={{ textAlign: 'left', padding: 'var(--space-3) var(--space-4)', color: 'var(--color-primary-light)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Franchise Conduit
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Audience', 'Anyone with a pulse', 'Anyone who calls', '$100K+ investors'],
                  ['Discovery', 'Volume-based matching', 'Commission-motivated', 'Data-ranked, advisor-verified'],
                  ['Data transparency', 'Gated behind email wall', 'Available in consultation', 'Visible upfront'],
                  ['Rankings', 'Paid placement', 'Broker preference', 'Independent Navigator Score'],
                  ['Introductions', 'Blast to 8+ brands', 'Advisor determines fit', 'Advisor-reviewed, one at a time'],
                ].map(([dim, leadFarm, broker, us], i) => (
                  <tr key={dim} style={{ borderBottom: '1px solid var(--color-border)', background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{dim}</td>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>{leadFarm}</td>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-text-muted)' }}>{broker}</td>
                    <td style={{ padding: 'var(--space-3) var(--space-4)', color: 'var(--color-primary-light)', fontWeight: 500 }}>{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Ready to start?</div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Take the 5-minute investor quiz. We will match your capital, timeline, and model preferences to the right franchise categories.
            </p>
            <Link href="/quiz" id="about-quiz-cta" className="btn btn-primary">
              Take the Investor Quiz →
            </Link>
          </div>
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Speak with an advisor</div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Talk directly with a credentialed franchise advisor. No sales pressure. 
              An honest assessment of which categories fit your investment profile.
            </p>
            <Link href="/contact" id="about-contact-cta" className="btn btn-outline">
              Contact an Advisor →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
