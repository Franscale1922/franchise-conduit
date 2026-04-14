import type { Metadata } from 'next'
import Link from 'next/link'
import { HOW_IT_WORKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: HOW_IT_WORKS.meta.title,
  description: HOW_IT_WORKS.meta.description,
  openGraph: {
    title: HOW_IT_WORKS.meta.title,
    description: HOW_IT_WORKS.meta.description,
  },
}

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div className="hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="badge badge-teal" style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                {HOW_IT_WORKS.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-5)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {HOW_IT_WORKS.hero.headline}
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', maxWidth: '560px' }}>
              {HOW_IT_WORKS.hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* ── THE JOURNEY — 4 steps ─────────────────────────────────────────── */}
      {/* Layer 1: icon + label + 2-line desc. Each step < 10 seconds to read. */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <p className="section-label">{HOW_IT_WORKS.journey.sectionLabel}</p>
            <h2 className="text-headline">{HOW_IT_WORKS.journey.headline}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)', position: 'relative' }}>
            {HOW_IT_WORKS.journey.steps.map((step, i) => (
              <div key={step.number} className="card" style={{ padding: 'var(--space-7)', position: 'relative' }}>
                {/* Step connector line — desktop only */}
                {i < HOW_IT_WORKS.journey.steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    right: 'calc(var(--space-6) * -1)',
                    top: 'var(--space-7)',
                    color: 'var(--color-border-strong)',
                    fontSize: '1.25rem',
                    display: 'none', // shown via CSS on desktop
                  }} aria-hidden="true">→</div>
                )}
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>{step.icon}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                  Step {step.number}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL / WON'T GET ─────────────────────────────────────── */}
      {/* Honest signals build trust faster than promises. Layer 1 — 3 bullets each. */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-8)', alignItems: 'start' }}>

            {/* Won't Get */}
            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
                {HOW_IT_WORKS.notGet.headline}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {HOW_IT_WORKS.notGet.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.5, flexShrink: 0, fontWeight: 500 }}>✗</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65, textDecoration: 'line-through' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Will Get */}
            <div className="card" style={{ padding: 'var(--space-8)', borderColor: 'var(--color-primary)', borderWidth: '1.5px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
                {HOW_IT_WORKS.willGet.headline}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {HOW_IT_WORKS.willGet.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--color-emerald)', fontSize: '1rem', lineHeight: 1.5, flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ─────────────────────────────────────────────────── */}
      {/* Layer 2 — detail for candidates who want to go deeper */}
      <FaqAccordion />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <p className="section-label">Ready when you are</p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Start exploring — no pressure, no account needed
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>
            Browse the catalog at your own pace. Take the quiz when you feel ready. Connect with an advisor only when you want to.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={HOW_IT_WORKS.cta.ctaPrimaryHref} className="btn btn-gold btn-lg">
              {HOW_IT_WORKS.cta.ctaPrimary}
            </Link>
            <Link href={HOW_IT_WORKS.cta.ctaSecondaryHref} className="btn btn-outline btn-lg">
              {HOW_IT_WORKS.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ Accordion — server-rendered with details/summary (no JS required)
// ─────────────────────────────────────────────────────────────────────────────

function FaqAccordion() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <p className="section-label">Common questions</p>
          <h2 className="text-headline">{HOW_IT_WORKS.faq.headline}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {HOW_IT_WORKS.faq.questions.map((item, i) => (
            <details
              key={i}
              className="faq-item"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <summary
                style={{
                  padding: 'var(--space-5) var(--space-6)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-primary)',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  userSelect: 'none',
                }}
              >
                <span>{item.q}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">+</span>
              </summary>
              <div style={{
                padding: '0 var(--space-6) var(--space-5)',
                color: 'var(--color-text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: '1.75',
                borderTop: '1px solid var(--color-border)',
              }}>
                <p style={{ marginTop: 'var(--space-4)' }}>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
