import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Franchise Conduit: Find the Right Franchise, With an Advisor by Your Side',
    template: '%s | Franchise Conduit'
  },
  description: 'Research and compare franchise opportunities with real FDD data. Advisor-matched, independent, and free for buyers. Start your search today.',
  keywords: ['franchise opportunities', 'semi-absentee franchise', 'how to buy a franchise', 'franchise research', 'best franchises 2026', 'franchise advisor'],
  openGraph: {
    type: 'website',
    siteName: 'Franchise Conduit',
    title: 'Franchise Conduit: Franchise Research and Advisor Matching',
    description: 'Research franchises with real FDD data. Independent rankings. Advisor-guided introductions. Free for buyers.',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Franchise Conduit',
              description: 'Franchise research and advisor-matched introductions for serious buyers. Free to use.',
              url: 'https://franchiseconduit.com',
              foundingDate: '2026',
              knowsAbout: ['Franchise Research', 'Business Ownership', 'FDD Analysis', 'Semi-Absentee Franchises'],
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
          <a href="/franchises" className="nav-link">Browse Franchises</a>
          <a href="/how-it-works" className="nav-link">How It Works</a>
          <a href="/resources" className="nav-link">Resources</a>
          <a href="/contact" className="nav-link">Talk to an Advisor</a>
        </div>
        <div className="flex gap-3 nav-cta">
          <a href="/quiz" className="btn btn-outline btn-sm">Take the Quiz</a>
          <a href="/franchises" className="btn btn-primary btn-sm">Start Exploring</a>
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
            <div className="footer-brand-name">Franchise<span style={{color:'var(--color-primary)'}}>Conduit</span></div>
            <p className="text-sm text-secondary" style={{lineHeight:'1.7'}}>
              Franchise research and advisor-matched introductions for serious buyers.
              Free to use. Independent. No brands pay to rank higher.
            </p>
            <div style={{marginTop:'var(--space-6)', display:'flex', gap:'var(--space-3)'}}>
              <span className="badge badge-teal">Independent Research</span>
              <span className="badge badge-muted">Advisor-Backed</span>
            </div>
          </div>
          <div>
            <div className="footer-nav-title">Discover</div>
            <a href="/franchises" className="footer-nav-link">Browse All Franchises</a>
            <a href="/franchises/industries/home-services" className="footer-nav-link">Home Services</a>
            <a href="/franchises/industries/senior-care" className="footer-nav-link">Senior Care</a>
            <a href="/franchises/industries/health-wellness" className="footer-nav-link">Health & Wellness</a>
            <a href="/franchises/industries/business-services" className="footer-nav-link">Business Services</a>
          </div>
          <div>
            <div className="footer-nav-title">Learn</div>
            <a href="/how-it-works" className="footer-nav-link">How It Works</a>
            <a href="/resources" className="footer-nav-link">Resources</a>
            <a href="/resources/fdd" className="footer-nav-link">FDD Explained</a>
            <a href="/methodology" className="footer-nav-link">Our Research</a>
            <a href="/quiz" className="footer-nav-link">Take the Quiz</a>
          </div>
          <div>
            <div className="footer-nav-title">Company</div>
            <a href="/about" className="footer-nav-link">About Us</a>
            <a href="/contact" className="footer-nav-link">Talk to an Advisor</a>
            <a href="/privacy-policy" className="footer-nav-link">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs text-muted">© 2026 Franchise Conduit. Powered by Waypoint Franchise Advisors. No brand can pay to rank higher.</p>
          <p className="text-xs text-muted">Franchise investments involve risk. Review all FDD disclosures before investing.</p>
        </div>
      </div>
    </footer>
  )
}
