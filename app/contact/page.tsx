import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact an Advisor — Franchise Conduit',
  description: 'Connect with a Franchise Conduit advisor. We review every inquiry before making a brand introduction. Serious investors only — your inquiry is not shared without your approval.',
  openGraph: {
    title: 'Contact a Franchise Conduit Advisor',
    description: 'Advisor-reviewed franchise matching. Your inquiry is never blasted to multiple brands. We review it first.',
  },
}

const processSteps = [
  {
    number: '01',
    title: 'Submit your profile',
    description: 'Tell us your investment range, timeline, location preferences, and what type of ownership model you want. Takes about 4 minutes.',
  },
  {
    number: '02',
    title: 'Advisor review',
    description: 'A credentialed franchise advisor reviews your profile within 1 business day. We filter for fit before any brand ever sees your name.',
  },
  {
    number: '03',
    title: 'Curated match list',
    description: 'You receive a short list of 2–4 brand recommendations with advisor notes explaining the fit rationale for each.',
  },
  {
    number: '04',
    title: 'Advisor-reviewed introduction',
    description: "You choose which brand to explore. We make a single, advisor-prepared introduction — not a blast to everyone on the list.",
  },
]

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-md">

        {/* Hero */}
        <div style={{ maxWidth: '600px', marginBottom: 'var(--space-14)' }}>
          <span className="badge badge-gold" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex' }}>
            Advisor Access
          </span>
          <h1 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Your inquiry is reviewed before any brand sees it.
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>
            We do not blast your contact information to franchisors. Every inquiry is reviewed by 
            a credentialed advisor, matched to appropriate brands, and introduced one at a time — 
            only after you approve the match.
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
                action="mailto:advisors@franchiseconduit.com"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}
              >
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
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
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
                      required
                      placeholder="Morgan"
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
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
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
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
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      appearance: 'none',
                    }}
                  >
                    <option value="">Select your liquid capital...</option>
                    <option value="100k-250k">$100K – $250K</option>
                    <option value="250k-500k">$250K – $500K</option>
                    <option value="500k-1m">$500K – $1M</option>
                    <option value="1m-2m">$1M – $2M</option>
                    <option value="2m+">$2M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-model" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Ownership Model
                  </label>
                  <select
                    id="contact-model"
                    name="ownershipModel"
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      appearance: 'none',
                    }}
                  >
                    <option value="">Select preferred model...</option>
                    <option value="semi-absentee">Semi-Absentee (10–15 hrs/week)</option>
                    <option value="manager-model">Manager-Model (hired GM runs it)</option>
                    <option value="owner-operator">Owner-Operator (full involvement)</option>
                    <option value="multi-unit">Multi-Unit / Portfolio Strategy</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    What are you looking for? <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="E.g. I'm a corporate executive transitioning out of a VP role. Looking for semi-absentee, prefer B2B services, open to multi-unit."
                    style={{
                      width: '100%',
                      padding: 'var(--space-3) var(--space-4)',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      lineHeight: '1.6',
                    }}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: 'var(--space-4)' }}
                >
                  Submit for Advisor Review →
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
                '◉ One introduction at a time — never blasted',
                '◎ Advisor on every inquiry — no automated matching',
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
                <a href="mailto:advisors@franchiseconduit.com" style={{ color: 'var(--color-primary-light)' }}>
                  advisors@franchiseconduit.com
                </a>
                . We respond within 1 business day.
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Methodology questions:{' '}
                <a href="mailto:methodology@franchiseconduit.com" style={{ color: 'var(--color-primary-light)' }}>
                  methodology@franchiseconduit.com
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
