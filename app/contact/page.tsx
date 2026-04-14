'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

const processSteps = [
  {
    number: '01',
    title: 'Submit your profile',
    description: 'Tell us your investment range, timeline, and what kind of ownership model fits your life. Takes about 4 minutes.',
  },
  {
    number: '02',
    title: 'Advisor review',
    description: 'A credentialed franchise advisor reviews your profile within 1 business day. We filter for fit before any brand ever sees your name.',
  },
  {
    number: '03',
    title: 'A curated shortlist',
    description: 'You receive 2 to 4 brand recommendations with advisor notes explaining the rationale for each match.',
  },
  {
    number: '04',
    title: 'One introduction at a time',
    description: 'You choose which brand to explore. We make a single, advisor-prepared introduction, not a blast to everyone on the list.',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      investmentRange: (form.elements.namedItem('investmentRange') as HTMLSelectElement).value,
      ownershipModel: (form.elements.namedItem('ownershipModel') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      howHeard: (form.elements.namedItem('howHeard') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value, // honeypot
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setState('error')
      } else {
        setState('success')
      }
    } catch {
      setErrorMsg('Unable to submit. Please try again or email us directly.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="section">
        <div className="container-md">
          <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', padding: 'var(--space-16) 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-6)' }}>✓</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: 'var(--space-4)' }}>
              You&apos;ll hear from me soon.
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem', marginBottom: 'var(--space-8)' }}>
              I&apos;ve got your note and will be in touch within one business day.
              Check your inbox for a confirmation. If you want to add anything before we talk,
              just reply to that email.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)' }}>
              Kelsey, Waypoint Franchise Advisors
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="container-md">

        {/* Hero */}
        <div style={{ maxWidth: '600px', marginBottom: 'var(--space-14)' }}>
          <span className="badge badge-gold" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
            Advisor Access
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Let&apos;s talk about what&apos;s next.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>
            No pitch. No pressure. Just a real conversation with someone who knows this path
            and can help you see it clearly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-10)', alignItems: 'start' }}>

          {/* Form */}
          <div>
            <div className="card" style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
                Tell us about your investment goals
              </h2>
              <form
                id="contact-advisor-form"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              >
                {/* Honeypot — hidden from humans, bots fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div>
                    <label htmlFor="contact-first-name" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                      First Name
                    </label>
                    <input
                      id="contact-first-name"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Alex"
                      className="form-input"
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                      Last Name
                    </label>
                    <input
                      id="contact-last-name"
                      name="lastName"
                      type="text"
                      placeholder="Morgan"
                      className="form-input"
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Phone <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="form-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-investment" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Investment Range
                  </label>
                  <select
                    id="contact-investment"
                    name="investmentRange"
                    required
                    className="form-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    <option value="">Select your liquid capital...</option>
                    <option value="100k-250k">$100K to $250K</option>
                    <option value="250k-500k">$250K to $500K</option>
                    <option value="500k-1m">$500K to $1M</option>
                    <option value="1m-2m">$1M to $2M</option>
                    <option value="2m-plus">$2M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-model" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Ownership Model <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <select
                    id="contact-model"
                    name="ownershipModel"
                    className="form-select"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    <option value="">Select preferred model...</option>
                    <option value="semi-absentee">Semi-Absentee (10 to 15 hrs/week)</option>
                    <option value="manager-model">Manager-Model (hired GM runs it)</option>
                    <option value="owner-operator">Owner-Operator (full involvement)</option>
                    <option value="multi-unit">Multi-Unit / Portfolio Strategy</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    What would you like to talk about? <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="E.g. I'm transitioning out of a VP role and want to understand what my capital can realistically buy."
                    className="form-input"
                    style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit', lineHeight: '1.6' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-how-heard" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    How did you hear about us? <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="contact-how-heard"
                    name="howHeard"
                    type="text"
                    placeholder="Google, referral, podcast..."
                    className="form-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                {state === 'error' && (
                  <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#dc2626' }}>
                    {errorMsg}
                  </div>
                )}

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn btn-primary"
                  disabled={state === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', padding: 'var(--space-4)' }}
                >
                  {state === 'loading' ? 'Sending...' : 'Submit for Advisor Review'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
                  Your information is reviewed by an advisor within 1 business day.
                  It is never shared with franchisors without your explicit approval.
                </p>
              </form>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Process */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-5)', color: 'var(--color-text-primary)' }}>
                How the process works
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {processSteps.map((step) => (
                  <div key={step.number} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: 'var(--color-primary)',
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: '2rem',
                    }}>
                      {step.number}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
                        {step.title}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust block */}
            <div className="surface-2" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                Our Commitment
              </div>
              {[
                '◈ Your name is never shared without your approval',
                '◉ One introduction at a time, never blasted',
                '◎ Advisor on every inquiry, no automated matching',
                '◐ No obligation to pursue any recommendation',
                '✦ No advisor commission conflicts on platform rankings',
              ].map((item) => (
                <div key={item} style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border)' }}>
                  {item}
                </div>
              ))}
            </div>

            {/* Direct email */}
            <div style={{ padding: 'var(--space-5)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Prefer email?</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                Reach us directly at{' '}
                <a href="mailto:advisors@franchiseconduit.com" style={{ color: 'var(--color-primary)' }}>
                  advisors@franchiseconduit.com
                </a>
                . We respond within 1 business day.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
