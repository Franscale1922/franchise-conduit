import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RESOURCES } from '@/lib/constants'

// ── Static params — one route per article ─────────────────────────────────────
export async function generateStaticParams() {
  return RESOURCES.articles.map((a) => ({ slug: a.slug }))
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = RESOURCES.articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
    },
  }
}

// ── JSON-LD builder ───────────────────────────────────────────────────────────
function buildJsonLd(article: (typeof RESOURCES.articles)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Franchise Conduit',
      url: 'https://franchiseconduit.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Franchise Conduit',
      url: 'https://franchiseconduit.com',
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://franchiseconduit.com/resources/${article.slug}`,
    },
  }
}

// ── Article content components ────────────────────────────────────────────────
// Each article is its own rendered component imported conditionally below.
// This keeps the template lean and the content fully in constants.ts.

function HowToBuyAFranchise() {
  const c = RESOURCES.howToBuyAFranchise
  const steps = [c.step1, c.step2, c.step3, c.step4, c.step5, c.step6]
  return (
    <article>
      <p className="article-lede">{c.intro.lede}</p>
      <p>{c.intro.p1}</p>
      <p>{c.intro.p2}</p>

      {steps.map((step) => (
        <section key={step.number}>
          <div className="article-step-label">Step {step.number}</div>
          <h2>{step.title}</h2>
          {step.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>
      ))}

      <section className="article-conclusion">
        <h2>{c.conclusion.headline}</h2>
        {c.conclusion.body.map((para, i) => <p key={i}>{para}</p>)}
        <div className="article-advisor-cta">
          <p>{c.conclusion.cta}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
            <Link href="/quiz" id="article-htbf-quiz-cta" className="btn btn-primary">Take the Matching Quiz</Link>
            <Link href="/contact" id="article-htbf-contact-cta" className="btn btn-outline">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

function ReadingAnFdd() {
  const c = RESOURCES.readingAnFdd
  return (
    <article>
      <p className="article-lede">{c.intro.lede}</p>
      <p>{c.intro.p1}</p>
      <p>{c.intro.p2}</p>

      <section>
        <h2>{c.whatIsIt.headline}</h2>
        {c.whatIsIt.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.the23Items.headline}</h2>
        {c.the23Items.body.map((para, i) => <p key={i}>{para}</p>)}
        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>The Items that matter most</h3>
        <div className="article-item-list">
          {c.the23Items.criticalItems.map((item) => (
            <div key={item.item} className="article-item-card">
              <div className="article-item-label">{item.item}</div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <h3 style={{ marginTop: 'var(--space-6)' }}>Items 1 through 4 and 8 through 18</h3>
        <p>{c.the23Items.lessImportantItems}</p>
      </section>

      <section>
        <h2>{c.redFlags.headline}</h2>
        <ul className="article-list">
          {c.redFlags.items.map((flag, i) => (
            <li key={i}>{flag}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{c.cleanFdd.headline}</h2>
        {c.cleanFdd.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.whatWeLookFor.headline}</h2>
        {c.whatWeLookFor.body.map((para, i) => <p key={i}>{para}</p>)}
        <div className="article-advisor-cta">
          <p>{c.whatWeLookFor.cta}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
            <Link href="/contact" id="article-fdd-contact-cta" className="btn btn-primary">Speak with an Advisor</Link>
            <Link href="/franchises" id="article-fdd-browse-cta" className="btn btn-outline">Browse Brands with FDD Data</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

function FranchiseRoi() {
  const c = RESOURCES.franchiseRoi
  return (
    <article>
      <p className="article-lede">{c.intro.lede}</p>
      <p>{c.intro.p1}</p>
      <p>{c.intro.p2}</p>

      <section>
        <h2>{c.wrongQuestion.headline}</h2>
        {c.wrongQuestion.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.metrics.headline}</h2>
        <div className="article-item-list">
          {c.metrics.items.map((metric) => (
            <div key={metric.name} className="article-item-card">
              <div className="article-item-label">{metric.name}</div>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{c.item19.headline}</h2>
        {c.item19.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.investmentEfficiency.headline}</h2>
        {c.investmentEfficiency.body.map((para, i) => <p key={i}>{para}</p>)}
        <div className="article-advisor-cta">
          <p>{c.investmentEfficiency.cta}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
            <Link href="/contact" id="article-roi-contact-cta" className="btn btn-primary">Talk to an Advisor</Link>
            <Link href="/methodology" id="article-roi-methodology-cta" className="btn btn-outline">How We Score Brands</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

function SemiAbsenteeFranchises() {
  const c = RESOURCES.semiAbsentee
  return (
    <article>
      <p className="article-lede">{c.intro.lede}</p>
      <p>{c.intro.p1}</p>

      <section>
        <h2>{c.actualMeaning.headline}</h2>
        {c.actualMeaning.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.managerModel.headline}</h2>
        {c.managerModel.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.whoItWorksFor.headline}</h2>
        {c.whoItWorksFor.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.industries.headline}</h2>
        {c.industries.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.checklist.headline}</h2>
        <ol className="article-list article-list--ordered">
          {c.checklist.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
        <div className="article-advisor-cta">
          <p>{c.checklist.cta}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
            <Link href="/quiz" id="article-sa-quiz-cta" className="btn btn-primary">Find Semi-Absentee Matches</Link>
            <Link href="/contact" id="article-sa-contact-cta" className="btn btn-outline">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

function WhyFranchisesFail() {
  const c = RESOURCES.whyFranchisesFail
  return (
    <article>
      <p className="article-lede">{c.intro.lede}</p>
      <p>{c.intro.p1}</p>

      <section>
        <h2>{c.context.headline}</h2>
        {c.context.body.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section>
        <h2>{c.reasons.headline}</h2>
        <div className="article-item-list">
          {c.reasons.items.map((reason) => (
            <div key={reason.title} className="article-item-card">
              <div className="article-item-label">{reason.title}</div>
              <p>{reason.detail}</p>
              <div className="article-what-to-check">
                <span className="article-check-label">What to check:</span> {reason.whatToCheck}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>{c.whatWeCheck.headline}</h2>
        {c.whatWeCheck.body.map((para, i) => <p key={i}>{para}</p>)}
        <div className="article-advisor-cta">
          <p>{c.whatWeCheck.cta}</p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
            <Link href="/contact" id="article-fail-contact-cta" className="btn btn-primary">Get a Brand Risk Review</Link>
            <Link href="/franchises" id="article-fail-browse-cta" className="btn btn-outline">Browse Navigator Score Rankings</Link>
          </div>
        </div>
      </section>
    </article>
  )
}

// ── Article content router ────────────────────────────────────────────────────
function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case 'how-to-buy-a-franchise':    return <HowToBuyAFranchise />
    case 'reading-an-fdd':            return <ReadingAnFdd />
    case 'franchise-roi':             return <FranchiseRoi />
    case 'semi-absentee-franchises':  return <SemiAbsenteeFranchises />
    case 'why-franchises-fail':       return <WhyFranchisesFail />
    default:                          return null
  }
}

// ── Related articles helper ───────────────────────────────────────────────────
function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = RESOURCES.articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, 3)

  return (
    <aside style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-10)', borderTop: '1px solid var(--color-border)' }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
        Related resources
      </h3>
      <div className="grid-3" style={{ gap: 'var(--space-4)' }}>
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/resources/${a.slug}`}
            id={`related-${a.slug}`}
            style={{ display: 'block', padding: 'var(--space-5)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}
            className="resource-related-card"
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>
              {a.category}
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text-primary)', lineHeight: '1.4', marginBottom: 'var(--space-2)' }}>
              {a.title}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{a.readTime} read</div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ResourceArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const article = RESOURCES.articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const jsonLd = buildJsonLd(article)

  const formattedDate = new Date(article.datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section">
        <div className="container">

          {/* Breadcrumb */}
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span aria-hidden="true"> / </span>
            <span>{article.category}</span>
          </nav>

          {/* Article layout */}
          <div className="article-layout">

            {/* Main content */}
            <main className="article-body">

              {/* Article header */}
              <header className="article-header">
                <span className="badge badge-primary" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
                  {article.category}
                </span>
                <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
                  {article.title}
                </h1>
                <div className="article-meta">
                  <span>Published {formattedDate}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{article.readTime} read</span>
                </div>
              </header>

              {/* Article content */}
              <div className="article-prose">
                <ArticleContent slug={slug} />
              </div>

              {/* Related articles */}
              <RelatedArticles currentSlug={slug} />
            </main>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="article-sidebar-card">
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-3)' }}>
                  Ready to take action?
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: 'var(--space-5)' }}>
                  Our advisors work with buyers at every stage of research. When you are ready to move from reading to doing, we are the next step.
                </p>
                <Link href="/quiz" id={`sidebar-quiz-${slug}`} className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                  Take the Matching Quiz
                </Link>
                <Link href="/contact" id={`sidebar-contact-${slug}`} className="btn btn-outline" style={{ display: 'block', textAlign: 'center' }}>
                  Talk to an Advisor
                </Link>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-3)', textAlign: 'center' }}>
                  No obligation · No cold calls
                </p>
              </div>

              <div className="article-sidebar-card" style={{ marginTop: 'var(--space-5)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-3)' }}>
                  In this resource
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Category: <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{article.category}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Read time: <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{article.readTime}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Published: <span style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{formattedDate}</span>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <style>{`
        .article-breadcrumb {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-8);
        }
        .article-breadcrumb a {
          color: var(--color-primary-light);
          text-decoration: none;
        }
        .article-breadcrumb a:hover { text-decoration: underline; }

        .article-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: var(--space-12);
          align-items: start;
        }
        @media (max-width: 900px) {
          .article-layout { grid-template-columns: 1fr; }
          .article-sidebar { display: none; }
        }

        .article-header { margin-bottom: var(--space-10); }
        .article-meta {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-top: var(--space-3);
        }

        .article-prose { font-size: 1rem; line-height: 1.8; color: var(--color-text-secondary); }
        .article-prose h2 {
          font-family: var(--font-serif);
          font-size: 1.375rem;
          color: var(--color-text-primary);
          margin-top: var(--space-12);
          margin-bottom: var(--space-4);
          line-height: 1.3;
        }
        .article-prose h3 {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--space-3);
        }
        .article-prose p { margin-bottom: var(--space-5); }
        .article-prose section { margin-bottom: var(--space-2); }

        .article-lede {
          font-size: 1.125rem;
          font-weight: 400;
          color: var(--color-text-primary);
          line-height: 1.75;
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-6);
          border-bottom: 1px solid var(--color-border);
        }

        .article-step-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-primary-light);
          background: color-mix(in srgb, var(--color-primary) 10%, transparent);
          padding: 3px 10px;
          border-radius: 4px;
          margin-bottom: var(--space-3);
        }

        .article-item-list { display: flex; flex-direction: column; gap: var(--space-4); margin: var(--space-4) 0; }
        .article-item-card {
          padding: var(--space-5);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
        }
        .article-item-card p { margin-bottom: 0; }
        .article-item-label {
          font-weight: 700;
          font-size: 0.9375rem;
          color: var(--color-text-primary);
          margin-bottom: var(--space-3);
        }
        .article-what-to-check {
          margin-top: var(--space-3);
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-border);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
        .article-check-label { font-weight: 600; color: var(--color-text-primary); }

        .article-list { padding-left: var(--space-6); margin: var(--space-4) 0; display: flex; flex-direction: column; gap: var(--space-3); }
        .article-list li { line-height: 1.7; }
        .article-list--ordered { list-style-type: decimal; }

        .article-advisor-cta {
          margin-top: var(--space-8);
          padding: var(--space-6);
          background: color-mix(in srgb, var(--color-primary) 6%, var(--color-surface));
          border: 1px solid color-mix(in srgb, var(--color-primary) 20%, var(--color-border));
          border-radius: var(--radius-lg);
        }
        .article-advisor-cta p { margin-bottom: 0; font-size: 0.9375rem; }

        .article-conclusion {
          padding-top: var(--space-8);
          border-top: 2px solid var(--color-border);
          margin-top: var(--space-12);
        }

        .article-sidebar-card {
          padding: var(--space-5);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          position: sticky;
          top: var(--space-8);
        }

        .resource-related-card:hover {
          border-color: var(--color-primary-light);
          box-shadow: 0 2px 12px rgba(11, 94, 106, 0.08);
        }
      `}</style>
    </>
  )
}
