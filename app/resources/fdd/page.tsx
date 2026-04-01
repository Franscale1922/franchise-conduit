import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FDD Resource Library — How to Read a Franchise Disclosure Document',
  description: 'Free guides to understanding FDD Items 7, 19, and 20. Learn how to evaluate franchise financial performance data before investing.',
}

export default function FDDLibraryPage() {
  return (
    <div className="section">
      <div className="container-md">

        <div style={{ maxWidth: '620px', marginBottom: 'var(--space-12)' }}>
          <span className="badge badge-indigo" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>FDD Resource Library</span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Read an FDD like an analyst, not a lawyer.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
            The Franchise Disclosure Document contains everything you need to evaluate an investment — 
            if you know where to look. Most buyers skip it. Executive buyers don&apos;t.
          </p>
        </div>

        {/* Guide Grid */}
        <div className="grid-2" style={{ marginBottom: 'var(--space-12)' }}>
          {[
            {
              item: 'Item 7',
              title: 'Understanding Franchise Start-Up Costs',
              desc: 'The full breakdown of what it actually costs to open — including working capital, equipment, real estate, and fees. Most buyers underestimate by 20–30%.',
              href: '/resources/fdd/item-7',
              badge: 'Essential Reading'
            },
            {
              item: 'Item 19',
              title: 'Financial Performance Representations',
              desc: 'The single most important item in any FDD for an investor. Only 60% of franchisors publish it — here\'s how to read it, what numbers matter, and what to do when it\'s missing.',
              href: '/resources/fdd/item-19',
              badge: 'Most Critical'
            },
            {
              item: 'Item 20',
              title: 'Outlet Information & Franchisee Contacts',
              desc: 'A list of every franchisee in the system, including those who left. This is your direct line to validation calls — the most powerful due diligence tool most buyers ignore.',
              href: '/resources/fdd/item-20',
              badge: 'Due Diligence'
            },
            {
              item: 'Red Flags',
              title: 'FDD Red Flags Every Buyer Must Know',
              desc: 'High franchisee turnover, missing Item 19, excessive litigation in Item 3, non-renewable agreements in Item 17. What to look for and what to do when you find it.',
              href: '/resources/fdd/red-flags',
              badge: 'Risk Management'
            },
            {
              item: 'Full Guide',
              title: 'How to Read an FDD in 30 Minutes',
              desc: 'A triage guide for busy executives. Which items matter most, which to skim, and what every serious buyer asks their attorney to review.',
              href: '/resources/fdd/explained',
              badge: 'Start Here'
            },
            {
              item: 'Checklist',
              title: 'FDD Pre-Signing Checklist',
              desc: 'Download the 27-point checklist our advisors use before any franchise introduction. Used by executives to run structured, professional discovery processes.',
              href: '/resources/fdd/checklist',
              badge: 'Free Download'
            },
          ].map(guide => (
            <Link key={guide.item} href={guide.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: 'var(--space-6)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                  <span className="badge badge-indigo">FDD {guide.item}</span>
                  <span className="badge badge-muted">{guide.badge}</span>
                </div>
                <h2 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 'var(--space-3)', lineHeight: 1.4 }}>{guide.title}</h2>
                <p className="text-sm text-secondary" style={{ flex: 1, lineHeight: '1.65' }}>{guide.desc}</p>
                <div style={{ marginTop: 'var(--space-4)', color: 'var(--color-indigo-light)', fontSize: '0.875rem', fontWeight: 500 }}>
                  Read guide →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Item 19 Deep Dive Inline */}
        <div className="insight-block" style={{ marginBottom: 'var(--space-12)' }}>
          <div className="insight-label"><span>◈</span> Item 19 Quick Reference</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
            What Item 19 actually tells you — and what it doesn&apos;t
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-6)' }}>
            Item 19 is the only section of an FDD where a franchisor can make financial performance claims. 
            Approximately 60% of franchisors publish it. Here&apos;s the hierarchy of what to look for:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {[
              { rank: '01', metric: 'Gross Revenue / AUV', why: 'Confirms the size of the business you\'re buying into. Don\'t confuse gross revenue with owner income.' },
              { rank: '02', metric: 'Net Operating Income', why: 'Rare but extremely valuable. Most franchisors won\'t share net income data. If they do, scrutinize assumptions carefully.' },
              { rank: '03', metric: 'Revenue Range (Top/Bottom Quartile)', why: 'Range matters more than average. Understand what the bottom quartile looks like — that\'s your downside planning scenario.' },
              { rank: '04', metric: '% of Franchisees Included', why: 'If only 40% of franchisees are included in the Item 19 data, ask why. What happened to the others?' },
            ].map(row => (
              <div key={row.rank} style={{ display: 'flex', gap: 'var(--space-5)', padding: 'var(--space-4)', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-indigo-light)', opacity: 0.5, flexShrink: 0 }}>{row.rank}</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{row.metric}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{row.why}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link href="/resources/fdd/item-19" className="btn btn-outline btn-sm">Full Item 19 Guide →</Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: 'var(--space-8)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>
            Need help evaluating a specific FDD?
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
            Our advisors review FDD data with buyers before every introduction. No obligation.
          </p>
          <Link href="/quiz" className="btn btn-primary">Match me with an advisor →</Link>
        </div>

      </div>
    </div>
  )
}
