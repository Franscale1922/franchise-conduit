import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Franchise Conduit — Advisor-Matched Franchise Discovery for Serious Investors',
    template: '%s | Franchise Conduit'
  },
  description: 'The only franchise platform built for executives and investors with capital to deploy. Unbiased franchisee satisfaction data, market intelligence, and advisor-guided matching.',
  keywords: ['franchise opportunities', 'semi-absentee franchise', 'franchise for executives', 'franchise investor', 'best franchises 2026'],
  openGraph: {
    type: 'website',
    siteName: 'Franchise Conduit',
    title: 'Franchise Conduit — Executive Franchise Matching',
    description: 'Advisor-matched franchise discovery for serious investors. Opportunities from $100K. Independent rankings. No pay-to-rank. No lead farms.',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Franchise Conduit',
              description: 'Advisor-matched franchise platform for serious investors. Curated opportunities from $100K.',
              url: 'https://franchiseconduit.com',
              foundingDate: '2026',
              knowsAbout: ['Franchise Investment', 'Executive Transition', 'Franchise Due Diligence', 'Semi-Absentee Franchises'],
            })
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Franchise<span>Conduit</span>
        </a>
        <div className="nav-links">
          <a href="/franchises" className="nav-link">Browse</a>
          <a href="/collections/semi-absentee" className="nav-link">Semi-Absentee</a>
          <a href="/collections/most-profitable" className="nav-link">Top Performers</a>
          <a href="/resources/fdd" className="nav-link">FDD Library</a>
          <a href="/methodology" className="nav-link">How We Rank</a>
        </div>
        <div className="flex gap-3 nav-cta">
          <a href="/quiz" className="btn btn-outline btn-sm">Take the Quiz</a>
          <a href="/match" className="btn btn-primary btn-sm">Get Matched</a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">Franchise<span style={{color:'var(--color-primary-light)'}}>Conduit</span></div>
            <p className="text-sm text-secondary" style={{lineHeight:'1.7'}}>
              Advisor-matched franchise discovery for serious investors. Curated opportunities starting at $100K.
              Unbiased data. Market intelligence. Advisor-matched.
            </p>
            <div style={{marginTop:'var(--space-6)', display:'flex', gap:'var(--space-3)'}}>
              <span className="badge badge-emerald">No Pay-to-Rank</span>
              <span className="badge badge-muted">Advisor-Backed</span>
            </div>
          </div>
          <div>
            <div className="footer-nav-title">Discover</div>
            <a href="/franchises" className="footer-nav-link">Browse All</a>
            <a href="/collections/semi-absentee" className="footer-nav-link">Semi-Absentee</a>
            <a href="/collections/most-profitable" className="footer-nav-link">Most Profitable</a>
            <a href="/collections/recession-resistant" className="footer-nav-link">Recession Resistant</a>
            <a href="/collections/multi-unit" className="footer-nav-link">Multi-Unit Track</a>
            <a href="/collections/executive-transition" className="footer-nav-link">Executive Transition</a>
          </div>
          <div>
            <div className="footer-nav-title">Resources</div>
            <a href="/resources/fdd" className="footer-nav-link">FDD Library</a>
            <a href="/resources/fdd/item-19" className="footer-nav-link">Item 19 Explained</a>
            <a href="/resources/calculator" className="footer-nav-link">ROI Calculator</a>
            <a href="/methodology" className="footer-nav-link">How We Rank</a>
            <a href="/quiz" className="footer-nav-link">Take the Quiz</a>
          </div>
          <div>
            <div className="footer-nav-title">Company</div>
            <a href="/about" className="footer-nav-link">About</a>
            <a href="/for-franchisors" className="footer-nav-link">For Franchisors</a>
            <a href="/privacy-policy" className="footer-nav-link">Privacy Policy</a>
            <a href="/terms" className="footer-nav-link">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs text-muted">© 2026 Franchise Conduit. No brand can pay to appear in our editorial rankings.</p>
          <p className="text-xs text-muted">Franchise investments involve risk. Review all FDD disclosures before investing.</p>
        </div>
      </div>
    </footer>
  )
}
