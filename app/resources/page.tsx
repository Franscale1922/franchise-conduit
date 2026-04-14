import type { Metadata } from 'next'
import Link from 'next/link'
import { RESOURCES } from '@/lib/constants'

export const metadata: Metadata = {
  title: RESOURCES.meta.title,
  description: RESOURCES.meta.description,
  openGraph: {
    title: RESOURCES.meta.title,
    description: RESOURCES.meta.description,
  },
}

// ── Category badge color map ──────────────────────────────────────────────────
const categoryBadge: Record<string, { badge: string; label: string }> = {
  'The Buying Process':      { badge: 'badge-primary', label: 'Getting Started' },
  'FDD Explained':           { badge: 'badge-gold',    label: 'FDD' },
  'Financial Essentials':    { badge: 'badge-emerald', label: 'Finance' },
  'Risk and Due Diligence':  { badge: 'badge-muted',   label: 'Due Diligence' },
  'Industries and Markets':  { badge: 'badge-muted',   label: 'Markets' },
}

// ── Category directory ─────────────────────────────────────────────────────────
const categories = [
  {
    title: 'Getting Started',
    icon: '◈',
    links: [
      { label: 'How to Buy a Franchise', href: '/resources/how-to-buy-a-franchise' },
      { label: 'Semi-Absentee Franchises', href: '/resources/semi-absentee-franchises' },
      { label: 'Take the Investor Quiz', href: '/quiz' },
    ],
  },
  {
    title: 'Financial Analysis',
    icon: '◎',
    links: [
      { label: 'Franchise ROI Guide', href: '/resources/franchise-roi' },
      { label: 'FDD Explained', href: '/resources/reading-an-fdd' },
      { label: 'Navigator Score Methodology', href: '/methodology' },
    ],
  },
  {
    title: 'Legal and FDD',
    icon: '◉',
    links: [
      { label: 'Reading an FDD', href: '/resources/reading-an-fdd' },
      { label: 'FDD Library (All 23 Items)', href: '/resources/fdd' },
      { label: 'Why Franchises Fail', href: '/resources/why-franchises-fail' },
    ],
  },
  {
    title: 'Due Diligence',
    icon: '◐',
    links: [
      { label: 'Why Franchises Fail', href: '/resources/why-franchises-fail' },
      { label: 'Semi-Absentee Franchises', href: '/resources/semi-absentee-franchises' },
      { label: 'Contact an Advisor', href: '/contact' },
    ],
  },
  {
    title: 'Browse by Industry',
    icon: '✦',
    links: [
      { label: 'Home Services Franchises', href: '/franchises/industries/home-services' },
      { label: 'Health and Wellness Franchises', href: '/franchises/industries/health-wellness' },
      { label: 'Senior Care Franchises', href: '/franchises/industries/senior-care' },
    ],
  },
  {
    title: 'Platform',
    icon: '→',
    links: [
      { label: 'Navigator Score Methodology', href: '/methodology' },
      { label: 'Browse All Franchises', href: '/franchises' },
      { label: 'Contact an Advisor', href: '/contact' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="section">
      <div className="container">

        {/* Hero */}
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto var(--space-16)' }}>
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
            {RESOURCES.hub.eyebrow}
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            {RESOURCES.hub.headline}
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>
            {RESOURCES.hub.subhead}
          </p>
        </div>

        {/* Article Grid */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Foundation articles</h2>
          </div>
          <div className="grid-3" style={{ gap: 'var(--space-4)' }}>
            {RESOURCES.articles.map((article) => {
              const meta = categoryBadge[article.category] ?? { badge: 'badge-muted', label: article.category }
              return (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  id={`resource-card-${article.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
                >
                  <div className="card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {article.category}
                      </span>
                      <span className={`badge ${meta.badge}`}>{meta.label}</span>
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', lineHeight: '1.4', flex: 1 }}>
                      {article.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: 'var(--space-5)', flex: 1 }}>
                      {article.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-primary-light)', fontSize: '0.875rem', fontWeight: 500 }}>
                        Read the guide →
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
            {/* FDD Library card */}
            <Link
              href="/resources/fdd"
              id="resource-card-fdd"
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            >
              <div className="card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Legal and Compliance
                  </span>
                  <span className="badge badge-primary">Essential</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', lineHeight: '1.4', flex: 1 }}>
                  The FDD Library: All 23 Items Explained
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: 'var(--space-5)', flex: 1 }}>
                  Every FDD item explained in plain English, for investors rather than lawyers.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-primary-light)', fontSize: '0.875rem', fontWeight: 500 }}>
                    Read the guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Category Directory */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-8)' }}>
            Browse by topic
          </h2>
          <div className="grid-3" style={{ gap: 'var(--space-5)' }}>
            {categories.map((cat) => (
              <div key={cat.title} style={{ padding: 'var(--space-5)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                  <span style={{ color: 'var(--color-primary-light)', fontSize: '1rem' }}>{cat.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>{cat.title}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {cat.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', textDecoration: 'none', padding: 'var(--space-1) 0' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Block */}
        <div className="insight-block" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
          <div>
            <div className="insight-label"><span>◈</span> Ready to go beyond research?</div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: '1.7', maxWidth: '500px' }}>
              The resources above will help you understand the landscape. When you are ready for
              a curated shortlist built around your specific investment profile, our advisors are the next step.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexShrink: 0 }}>
            <Link href="/quiz" id="resources-quiz-cta" className="btn btn-outline">
              Take the Quiz
            </Link>
            <Link href="/contact" id="resources-contact-cta" className="btn btn-primary">
              Speak with an Advisor →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
