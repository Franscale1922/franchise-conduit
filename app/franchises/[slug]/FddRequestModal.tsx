'use client'

import { useState } from 'react'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

interface FddRequestModalProps {
  brandName: string
  onClose: () => void
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function FddRequestModal({ brandName, onClose }: FddRequestModalProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null)?.value ?? ''

    const data = {
      firstName: getValue('fdd-first-name'),
      email:     getValue('fdd-email'),
      state:     getValue('fdd-state'),
      brandName,
      website:   getValue('fdd-website'), // honeypot
    }

    try {
      const res = await fetch('/api/fdd-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setErrorMsg(json.error || 'Something went wrong. Please try again.')
        setFormState('error')
      } else {
        setFormState('success')
      }
    } catch {
      setErrorMsg('Unable to submit. Please check your connection and try again.')
      setFormState('error')
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-6)',
        }}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="card"
          style={{
            width: '100%',
            maxWidth: '460px',
            padding: 'var(--space-8)',
            position: 'relative',
            zIndex: 1001,
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: 'var(--space-4)',
              right: 'var(--space-4)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.25rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1,
              padding: 'var(--space-1)',
            }}
          >
            ✕
          </button>

          {formState === 'success' ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>✓</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-3)' }}>
                FDD request logged.
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-6)' }}>
                I&apos;ll check territory availability and get back to you within one business day.
                Check your inbox for a confirmation.
              </p>
              <button onClick={onClose} className="btn btn-outline">
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', marginBottom: 'var(--space-2)', lineHeight: 1.3 }}>
                Request the {brandName} FDD
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', lineHeight: '1.6' }}>
                We&apos;ll check territory availability in your state and follow up within one business day.
              </p>

              <form id="fdd-request-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Honeypot */}
                <input
                  type="text"
                  name="fdd-website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
                />

                <div className="form-group">
                  <label className="form-label" htmlFor="fdd-first-name">First name</label>
                  <input
                    id="fdd-first-name"
                    name="fdd-first-name"
                    type="text"
                    className="form-input"
                    placeholder="Jane"
                    required
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="fdd-email">Email address</label>
                  <input
                    id="fdd-email"
                    name="fdd-email"
                    type="email"
                    className="form-input"
                    placeholder="jane@company.com"
                    required
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="fdd-state">Which state are you in?</label>
                  <select
                    id="fdd-state"
                    name="fdd-state"
                    className="form-select"
                    required
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    <option value="">Select your state...</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {formState === 'error' && (
                  <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#dc2626' }}>
                    {errorMsg}
                  </div>
                )}

                <button
                  id="fdd-request-submit-btn"
                  type="submit"
                  className="btn btn-primary"
                  disabled={formState === 'loading'}
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  {formState === 'loading' ? 'Submitting...' : 'Request FDD'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
                  Your information will not be shared with {brandName} without your approval.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}
