import type { Metadata } from 'next'
import Link from 'next/link'
import { ABOUT } from '@/lib/constants'

export const metadata: Metadata = {
  title: ABOUT.meta.title,
  description: ABOUT.meta.description,
  openGraph: {
    title: ABOUT.meta.title,
    description: ABOUT.meta.description,
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* H1 speaks to the candidate's candidate's question: "Who built this and why?" */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div className="hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <span className="badge badge-muted" style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}>
                {ABOUT.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-5)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {ABOUT.hero.headline}
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', maxWidth: '580px' }}>
              {ABOUT.hero.subhead}
            </p>
          </div>
        </div>
      </section>

      <div className="container-md">

        {/* ── THE PROBLEM WE SOLVED ─────────────────────────────────────────── */}
        {/* Honest narrative — Layer 1 — readable in < 15 seconds */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <div className="insight-block" style={{ marginBottom: 'var(--space-10)' }}>
            <div className="insight-label"><span>✦</span> Our Position</div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-primary)', fontFamily: 'var(--font-serif)' }}>
              &ldquo;Most franchise directories optimize for volume. We optimize for quality.
              The right franchise match for the right buyer, made once — not blasted to 12 brands and forgotten.&rdquo;
            </p>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-5)' }}>
            {ABOUT.problem.headline}
          </h2>
          {ABOUT.problem.body.map((para, i) => (
            <p key={i} style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-4)', fontSize: '0.9375rem' }}>
              {para}
            </p>
          ))}
        </section>

        {/* ── PLATFORM SIGNALS ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-6)' }}>
            Built on a decade of franchise expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
            {ABOUT.signals.map(item => (
              <div key={item.stat} className="surface-2" style={{ padding: 'var(--space-5)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', fontWeight: 400 }}>
                    {item.stat}
                  </span>
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.875rem', marginBottom: 'var(--space-1)' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO WE WORK WITH ─────────────────────────────────────────────── */}
        {/* Explains the audience without gatekeeping — warm but specific */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <div className="grid-2" style={{ gap: 'var(--space-10)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-5)' }}>
                {ABOUT.focus.headline}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-6)', fontSize: '0.9375rem' }}>
                {ABOUT.focus.body}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {ABOUT.focus.bullets.map(bullet => (
                  <div key={bullet} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-emerald)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How we differ — comparison table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    {['', 'Lead Farms', 'Brokers', 'Franchise Conduit'].map((h, i) => (
                      <th key={h} style={{
                        textAlign: 'left',
                        padding: 'var(--space-3) var(--space-3)',
                        color: i === 3 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        fontWeight: i === 3 ? 600 : 400,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Audience', 'Anyone', 'Anyone who calls', '$100K+ investors'],
                    ['Rankings', 'Paid placement', 'Broker preference', 'Data-only'],
                    ['Data', 'Gated', 'In consultation', 'Visible upfront'],
                    ['Introductions', 'Blast to 8+', 'Advisor decides', 'One at a time'],
                  ].map(([dim, ...cols], i) => (
                    <tr key={dim} style={{ borderBottom: '1px solid var(--color-border)', background: i % 2 === 0 ? 'transparent' : 'var(--color-surface)' }}>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{dim}</td>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--color-text-muted)' }}>{cols[0]}</td>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--color-text-muted)' }}>{cols[1]}</td>
                      <td style={{ padding: 'var(--space-3)', color: 'var(--color-primary)', fontWeight: 500 }}>{cols[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE — Team ─────────────────────────────────────────────── */}
        {/* Placeholder initials until Kelsey provides headshots */}
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-4)' }}>
            {ABOUT.team.headline}
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-8)', fontSize: '0.9375rem' }}>
            {ABOUT.team.intro}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)' }}>
            {ABOUT.team.members.map(member => (
              <div key={member.name} className="card" style={{ padding: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', maxWidth: '420px', flex: '1 1 320px' }}>
                <div className="testimonial-avatar" style={{ width: '52px', height: '52px', fontSize: '1rem', flexShrink: 0 }}>
                  {member.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 'var(--space-1)' }}>{member.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>{member.role}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 'var(--space-6)', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            {ABOUT.team.headshots}
          </p>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Ready to start?</div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Take the 4-minute quiz. We&apos;ll match your capital and goals to the right franchise categories.
            </p>
            <Link href="/quiz" id="about-quiz-cta" className="btn btn-gold">
              Take the Quiz →
            </Link>
          </div>
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Speak with an advisor</div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Talk directly with a credentialed franchise advisor. No sales pressure. An honest assessment of what fits your profile.
            </p>
            <Link href={ABOUT.cta.href} id="about-contact-cta" className="btn btn-outline">
              {ABOUT.cta.text}
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
