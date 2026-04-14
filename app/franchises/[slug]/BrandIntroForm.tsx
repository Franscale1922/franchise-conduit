'use client'

import { useState } from 'react'

interface BrandIntroFormProps {
  brandName: string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function BrandIntroForm({ brandName }: BrandIntroFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null)?.value ?? ''

    const data = {
      firstName:   getValue('bi-first-name'),
      lastName:    getValue('bi-last-name'),
      email:       getValue('bi-email'),
      phone:       getValue('bi-phone'),
      capital:     getValue('bi-capital'),
      timeline:    getValue('bi-timeline'),
      involvement: getValue('bi-involvement'),
      smsOptIn:    (form.elements.namedItem('bi-sms-opt') as HTMLInputElement | null)?.checked ?? false,
      brandName,
      website:     getValue('bi-website'), // honeypot
    }

    try {
      const res = await fetch('/api/brand-intro', {
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
      setErrorMsg('Unable to submit. Please check your connection and try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="form-card">
        <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
          <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>
            Request received.
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            I&apos;ll review your profile and be in touch within one business day.
            Check your inbox for a confirmation from me.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-4)' }}>
            Kelsey, Waypoint Franchise Advisors
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card">
      {/* Honeypot */}
      <input
        type="text"
        name="bi-website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
      />

      <div className="form-tier-badge form-tier-3">⭐ Request an Introduction</div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-3)', lineHeight: 1.3 }}>
        Interested in {brandName}?
      </h2>
      <p className="text-sm text-secondary" style={{ marginBottom: 'var(--space-6)' }}>
        An advisor reviews your profile and makes the introduction.
        Franchisors receive a pre-qualified contact, not a raw form blast.
      </p>

      <form id="brand-intro-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>

        <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="bi-first-name">First name</label>
            <input id="bi-first-name" name="bi-first-name" type="text" className="form-input" placeholder="Jane" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="bi-last-name">Last name</label>
            <input id="bi-last-name" name="bi-last-name" type="text" className="form-input" placeholder="Smith" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bi-email">Email address</label>
          <input id="bi-email" name="bi-email" type="email" className="form-input" placeholder="jane@company.com" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bi-phone">Phone number</label>
          <input id="bi-phone" name="bi-phone" type="tel" className="form-input" placeholder="+1 (555) 000-0000" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bi-capital">Liquid capital available</label>
          <select id="bi-capital" name="bi-capital" className="form-select" required>
            <option value="">Select range</option>
            <option value="100k-250k">$100K to $250K</option>
            <option value="250k-500k">$250K to $500K</option>
            <option value="500k-1m">$500K to $1M</option>
            <option value="1m-plus">$1M+</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bi-timeline">Your timeline</label>
          <select id="bi-timeline" name="bi-timeline" className="form-select" required>
            <option value="">Select timeline</option>
            <option value="1-3mo">Within 3 months</option>
            <option value="3-6mo">3 to 6 months</option>
            <option value="6-12mo">6 to 12 months</option>
            <option value="researching">Still researching</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bi-involvement">Owner involvement preference</label>
          <select id="bi-involvement" name="bi-involvement" className="form-select">
            <option value="">Select preference</option>
            <option value="semi-absentee">Semi-Absentee</option>
            <option value="owner-operator">Owner-Operator</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-3)', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
          <input type="checkbox" id="bi-sms-opt" name="bi-sms-opt" style={{ accentColor: 'var(--color-primary)', width: 16, height: 16 }} />
          <label htmlFor="bi-sms-opt" className="text-sm text-secondary" style={{ cursor: 'pointer' }}>
            Text me updates about this brand (no spam, unsubscribe anytime)
          </label>
        </div>

        {state === 'error' && (
          <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#dc2626' }}>
            {errorMsg}
          </div>
        )}

        <button
          id="brand-intro-submit-btn"
          type="submit"
          className="btn btn-primary"
          disabled={state === 'loading'}
          style={{ justifyContent: 'center', width: '100%', marginTop: 'var(--space-2)' }}
        >
          {state === 'loading' ? 'Submitting...' : 'Request an Introduction'}
        </button>

      </form>

      <p className="form-disclaimer">
        By submitting, you agree to be contacted by a Franchise Conduit advisor. Your information will be
        shared with {brandName}&apos;s development team only after an advisor review. No obligation.
      </p>
    </div>
  )
}
