import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Franchise Investment Resources — Guides, FDD Analysis & Investor Tools — Franchise Conduit',
  description: 'Investor-grade franchise resources: how to buy a franchise, FDD analysis, ROI calculation, due diligence checklists, and unit economics guides. Built for executives with capital to deploy.',
  openGraph: {
    title: 'Franchise Investment Resources — Franchise Conduit',
    description: 'Investor-grade guides on franchise due diligence, FDD analysis, ROI calculation, and finding the right franchise for serious investors.',
  },
}

const featuredResources = [
  {
    slug: 'fdd',
    category: 'Legal & Compliance',
    title: 'The FDD Library',
    description: 'Everything you need to understand a Franchise Disclosure Document — items 1 through 23, explained for investors rather than lawyers.',
    badge: 'badge-primary',
    badgeLabel: 'Essential',
    isBuilt: true,
  },
  {
    slug: 'how-to-buy-a-franchise',
    category: 'Getting Started',
    title: 'How to Buy a Franchise (Investor Edition)',
    description: 'A step-by-step guide for executives and investors entering the franchise market with $100K+. Covers capital structure, due diligence, franchisor evaluation, and common mistakes.',
    badge: 'badge-gold',
    badgeLabel: 'Most Read',
    isBuilt: false,
  },
  {
    slug: 'franchise-roi',
    category: 'Financial Analysis',
    title: 'Calculating ROI on a Franchise Investment',
    description: 'How to model return on a franchise investment: AUV analysis, royalty drag, ramp-up period, and the break-even math franchisors don\'t show you.',
    badge: 'badge-emerald',
    badgeLabel: 'High Intent',
    isBuilt: false,
  },
  {
    slug: 'why-franchises-fail',
    category: 'Risk Assessment',
    title: "Why Franchises Fail — And How to Avoid the Common Mistakes",
    description: 'The real reasons franchise investments underperform — from poor territory selection to undercapitalization — and the red flags to screen for before you sign.',
    badge: 'badge-muted',
    badgeLabel: 'Due Diligence',
    isBuilt: false,
  },
  {
    slug: 'choosing-the-right-franchise',
    category: 'Strategy',
    title: '15 Key Questions Before You Choose a Franchise',
    description: 'The questions franchise brokers don\'t want you to ask — and the answers that separate a strong investment-grade brand from a marginal one.',
    badge: 'badge-muted',
    badgeLabel: 'Checklist',
    isBuilt: false,
  },
  {
    slug: 'due-diligence-questions',
    category: 'Due Diligence',
    title: 'Questions to Ask Existing Franchisees Before You Invest',
    description: 'The most important validation step most buyers skip. How to structure franchisee interviews, what to ask, and how to interpret what you hear.',
    badge: 'badge-muted',
    badgeLabel: 'Interview Guide',
    isBuilt: false,
  },
]

const categories = [
  {
    title: 'Getting Started',
    icon: '◈',
    links: [
      { label: 'How to Buy a Franchise', href: '/resources/how-to-buy-a-franchise' },
      { label: 'What Is Franchising?', href: '/resources/what-is-franchising' },
      { label: 'Take the Investor Quiz', href: '/quiz' },
    ],
  },
  {
    title: 'Financial Analysis',
    icon: '◎',
    links: [
      { label: 'Franchise ROI Calculator', href: '/resources/franchise-roi' },
      { label: 'Startup Costs Breakdown', href: '/resources/franchise-startup-costs' },
      { label: 'Compare Franchise Models', href: '/resources/compare-franchise-models' },
    ],
  },
  {
    title: 'Legal & FDD',
    icon: '◉',
    links: [
      { label: 'FDD Library (All 23 Items)', href: '/resources/fdd' },
      { label: 'Item 19 Explained', href: '/resources/fdd' },
      { label: 'How to Present the FDD', href: '/resources/fdd' },
    ],
  },
  {
    title: 'Due Diligence',
    icon: '◐',
    links: [
      { label: 'Franchisee Interview Guide', href: '/resources/due-diligence-questions' },
      { label: '15 Questions Before You Sign', href: '/resources/choosing-the-right-franchise' },
      { label: 'Why Franchises Fail', href: '/resources/why-franchises-fail' },
    ],
  },
  {
    title: 'Browse by Industry',
    icon: '✦',
    links: [
      { label: 'Home Services Franchises', href: '/franchises/industries/home-services' },
      { label: 'Health & Wellness Franchises', href: '/franchises/industries/health-wellness' },
      { label: 'Business Services Franchises', href: '/franchises/industries/business-services' },
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
            Investor Resource Center
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Franchise investment guides for serious investors.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>
            Not &ldquo;Franchising 101.&rdquo; Investment-grade analysis of unit economics, 
            FDD disclosures, and brand due diligence — for executives with capital to deploy.
          </p>
        </div>

        {/* Featured Resources Grid */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Featured Resources</h2>
          </div>
          <div className="grid-3" style={{ gap: 'var(--space-4)' }}>
            {featuredResources.map((resource) => (
              <div key={resource.slug} className="card" style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {resource.category}
                  </span>
                  <span className={`badge ${resource.badge}`}>{resource.badgeLabel}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', lineHeight: '1.4', flex: 1 }}>
                  {resource.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: 'var(--space-5)', flex: 1 }}>
                  {resource.description}
                </p>
                {resource.isBuilt ? (
                  <Link
                    href={`/resources/${resource.slug}`}
                    id={`resource-link-${resource.slug}`}
                    style={{ color: 'var(--color-primary-light)', fontSize: '0.875rem', fontWeight: 500 }}
                  >
                    Read the guide →
                  </Link>
                ) : (
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', fontStyle: 'italic' }}>
                    Coming soon
                  </span>
                )}
              </div>
            ))}
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
