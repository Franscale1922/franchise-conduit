import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCollectionFranchises } from '@/lib/data'
import { FranchiseCard } from '@/components/FranchiseCard'

const COLLECTIONS: Record<string, {
  title: string
  headline: string
  description: string
  icon: string
  seoDescription: string
}> = {
  'semi-absentee': {
    title: 'Semi-Absentee Franchise Opportunities',
    headline: 'Own the business. Don\'t work in it.',
    description: 'Semi-absentee and manager-model franchises are designed for executives who want to deploy capital into a proven system — with a GM or manager running daily operations. Typical owner time commitment: 10–25 hours/week.',
    icon: '🕐',
    seoDescription: 'Browse semi-absentee franchise opportunities for serious investors. Manager-model ownership, 10–20 hrs/week, recurring revenue. Opportunities from $100K.',
  },
  'most-profitable': {
    title: 'Most Profitable Franchise Opportunities',
    headline: 'Ranked by verified average unit volume.',
    description: 'These franchises are ranked by disclosed Average Unit Volume (AUV) data sourced from FDD Item 19 disclosures and third-party franchisee data. No brand can pay to appear on this list.',
    icon: '📈',
    seoDescription: 'The most profitable franchise opportunities for serious investors, ranked by verified AUV data and franchisee satisfaction scores.',
  },
  'recession-resistant': {
    title: 'Recession-Resistant Franchise Opportunities',
    headline: 'Proven through downturns. Built for the long hold.',
    description: 'These franchises demonstrated revenue stability or growth through the 2008 financial crisis and 2020 COVID shutdowns. They serve demand that is non-deferrable — senior care, pest control, property restoration, essential education.',
    icon: '🛡️',
    seoDescription: 'Recession-resistant franchise opportunities with proven performance through economic downturns. Senior care, home services, and essential education franchises.',
  },
  'multi-unit': {
    title: 'Multi-Unit & Area Developer Franchises',
    headline: 'Built for owners who want to scale.',
    description: 'These franchises support multi-unit development and area developer agreements — allowing investors to lock in territory for 2, 3, or 5+ locations from day one.',
    icon: '🏗️',
    seoDescription: 'Multi-unit franchise opportunities for experienced investors and area developers. Scale from 2 to 10+ locations.',
  },
  'executive-transition': {
    title: 'Executive Transition Franchises',
    headline: 'Your next chapter doesn\'t require starting from scratch.',
    description: 'These franchises have the highest concentration of ex-corporate executive owners. They leverage management skills, financial literacy, and team-building capability — skills executives have in abundance.',
    icon: '💼',
    seoDescription: 'The best franchises for corporate executives transitioning to business ownership. Manager-model, semi-absentee, and B2B franchises built for executive buyers.',
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(COLLECTIONS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const col = COLLECTIONS[params.slug]
  if (!col) return {}
  return {
    title: col.title,
    description: col.seoDescription,
  }
}

export default function CollectionPage({ params }: Props) {
  const col = COLLECTIONS[params.slug]
  if (!col) notFound()

  const results = getCollectionFranchises(params.slug)

  return (
    <div className="section">
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <span style={{ fontSize: '2rem' }}>{col.icon}</span>
            <span className="badge badge-emerald">No Pay-to-Rank</span>
          </div>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>{col.headline}</h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1rem' }}>{col.description}</p>
        </div>

        {/* Other Collections */}
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
          {Object.entries(COLLECTIONS)
            .filter(([slug]) => slug !== params.slug)
            .map(([slug, c]) => (
              <Link key={slug} href={`/collections/${slug}`} className="collection-pill">
                {c.icon} {c.title.split(' ').slice(0, 2).join(' ')}
              </Link>
            ))}
        </div>

        {/* Results */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <p className="text-muted text-sm">{results.length} franchises · Ranked by Navigator Score</p>
        </div>

        <div className="grid-3">
          {results.map(f => <FranchiseCard key={f.id} franchise={f} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)', padding: 'var(--space-10)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-4)' }}>
            Not sure which one fits?
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
            Take the 5-minute quiz and get a personalized shortlist based on your capital, timeline, and involvement preference.
          </p>
          <Link href="/quiz" className="btn btn-primary btn-lg">Start the Match Quiz →</Link>
        </div>
      </div>
    </div>
  )
}
