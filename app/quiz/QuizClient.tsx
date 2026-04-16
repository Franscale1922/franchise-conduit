'use client'

import { useState } from 'react'
import Link from 'next/link'

// ─── Types ───────────────────────────────────────────────────────────────────

type Answers = Record<string, string | string[]>

interface MatchedBrand {
  brand_slug: string
  brand_name: string
  industry_primary: string
  business_model: string
  cash_required_min: number
  brand_logo_emoji: string
  description_short: string
  navigator_score: number
}

// ─── Quiz Questions — per Stage 7 spec ───────────────────────────────────────

const STEPS = [
  {
    id: 'capital',
    question: "What's your liquid capital available to invest?",
    sub: 'This shapes your shortlist more than almost any other answer. Every range has strong options.',
    options: [
      { value: '100k-250k', label: '$100K to $250K', sub: 'Strong first-unit opportunities' },
      { value: '250k-500k', label: '$250K to $500K', sub: 'Most active investment tier' },
      { value: '500k-1m',   label: '$500K to $1M',   sub: 'Premium and multi-unit ready' },
      { value: '1m-plus',   label: '$1M+',            sub: 'Portfolio-level investing' },
    ],
  },
  {
    id: 'background',
    question: 'Which best describes your work background?',
    sub: 'This helps us understand what kind of franchise environment you are likely to thrive in.',
    options: [
      { value: 'corporate',          label: 'Corporate',           sub: 'Finance, operations, sales, management' },
      { value: 'blue-collar-trades', label: 'Blue-Collar Trades',  sub: 'Construction, skilled services, field work' },
      { value: 'healthcare',         label: 'Healthcare',          sub: 'Clinical, administration, wellness' },
      { value: 'education',          label: 'Education',           sub: 'Teaching, training, coaching, curriculum' },
      { value: 'military',           label: 'Military',            sub: 'Veterans often qualify for special programs' },
      { value: 'other',              label: 'Other',               sub: 'Entrepreneurial, self-employed, or other path' },
    ],
  },
  {
    id: 'involvement',
    question: 'How involved do you want to be day-to-day?',
    sub: 'Be honest here. This single answer shapes more of your shortlist than any other.',
    options: [
      { value: 'fully-involved', label: 'Fully involved',   sub: 'Owner-operated, hands-on, you are the leader' },
      { value: 'hybrid',         label: 'Hybrid',           sub: '20 to 30 hours per week, team runs day-to-day' },
      { value: 'minimal',        label: 'Minimal',          sub: 'Manager model, 10 to 15 hours per week' },
    ],
  },
  {
    id: 'industry',
    question: 'Which industries interest you most?',
    sub: 'Select all that apply. We will weight your shortlist accordingly.',
    multiSelect: true,
    options: [
      { value: 'home-services',    label: '🏠 Home Services',      sub: 'Pest control, restoration, cleaning' },
      { value: 'health-wellness',  label: '💪 Health and Wellness', sub: 'Chiropractic, fitness, nutrition' },
      { value: 'senior-care',      label: '🤝 Senior Care',         sub: 'In-home non-medical care' },
      { value: 'education',        label: '📚 Education',           sub: 'Tutoring, early childhood, training' },
      { value: 'business-services',label: '💼 Business Services',   sub: 'B2B, professional services' },
      { value: 'food-bev',         label: '🍕 Food and Beverage',   sub: 'Restaurants, cafes, specialty food' },
      { value: 'automotive',       label: '🚗 Automotive',          sub: 'Repair, detailing, specialty services' },
      { value: 'pets',             label: '🐾 Pet Services',        sub: 'Grooming, boarding, training' },
      { value: 'real-estate',      label: '🏡 Real Estate',         sub: 'Property management, brokerage' },
      { value: 'financial',        label: '📊 Financial Services',  sub: 'Tax, bookkeeping, planning' },
      { value: 'beauty',           label: '✨ Beauty and Wellness',  sub: 'Salons, medspas, personal care' },
      { value: 'open',             label: '🔭 Open to anything',    sub: 'Show me what fits my capital and model' },
    ],
  },
  {
    id: 'state',
    question: 'What state are you looking to operate in?',
    sub: 'Territory availability and franchise presence vary by state.',
    dropdown: true,
    options: [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
      'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
      'West Virginia', 'Wisconsin', 'Wyoming',
    ] as const,
  },
  {
    id: 'goal',
    question: "What's your primary goal?",
    sub: 'Knowing what you are building toward helps us prioritize brands that actually fit.',
    options: [
      { value: 'income-replacement',  label: 'Income replacement',         sub: 'Replace or exceed your current salary' },
      { value: 'wealth-building',     label: 'Wealth building',             sub: 'Long-term asset and net worth growth' },
      { value: 'legacy',              label: 'Legacy',                      sub: 'Generational wealth, family business' },
      { value: 'portfolio-expansion', label: 'Portfolio expansion',         sub: 'Adding a business to existing assets' },
    ],
  },
  {
    id: 'timeline',
    question: "What's your timeline to make a decision?",
    sub: 'Optional. This helps us understand where you are in the process.',
    optional: true,
    options: [
      { value: '3-months', label: 'Within 3 months',   sub: 'Actively ready to move' },
      { value: '6-months', label: 'Within 6 months',   sub: 'In due diligence mode' },
      { value: '1-year',   label: 'Within a year',     sub: 'Researching seriously' },
      { value: 'exploring',label: 'Just exploring',    sub: 'No timeline yet' },
    ],
  },
] as const

type StepId = typeof STEPS[number]['id']

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(val: number) {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(val % 1000000 === 0 ? 0 : 1)}M`
  if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`
  return `$${val}`
}

const MODEL_LABELS: Record<string, string> = {
  'semi-absentee':  'Semi-Absentee',
  'manager-model':  'Manager-Model',
  'owner-operator': 'Owner-Operator',
  'passive':        'Passive',
}

function whyThisMatches(brand: MatchedBrand, answers: Answers): string {
  const involvement = answers.involvement as string
  const modelName = MODEL_LABELS[brand.business_model] || brand.business_model

  if (involvement === 'minimal' && brand.business_model === 'manager-model') {
    return `Runs with a hired GM, fitting your preference for a minimal, hands-off role.`
  }
  if (involvement === 'minimal' && brand.business_model === 'semi-absentee') {
    return `A semi-absentee model, close to the low-involvement role you described.`
  }
  if (involvement === 'fully-involved') {
    return `Owner-operated and well-suited for someone who wants to be hands-on in ${brand.industry_primary}.`
  }
  return `A ${modelName} opportunity in ${brand.industry_primary}, matching your capital range and profile.`
}

// ─── Component ───────────────────────────────────────────────────────────────

type FlowState = 'quiz' | 'contact' | 'results'

export default function QuizClient() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [stateDropdown, setStateDropdown] = useState('')

  const [flowState, setFlowState] = useState<FlowState>('quiz')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [matches, setMatches] = useState<MatchedBrand[]>([])

  const currentStep = STEPS[step]
  const totalSteps = STEPS.length
  const progress = (step / totalSteps) * 100

  function selectOption(value: string) {
    const s = STEPS[step]
    if ('multiSelect' in s && s.multiSelect) {
      const current = (answers[s.id] as string[]) || []
      if (value === 'open') {
        setAnswers({ ...answers, [s.id]: ['open'] })
      } else {
        const filtered = current.filter((v) => v !== 'open')
        if (filtered.includes(value)) {
          setAnswers({ ...answers, [s.id]: filtered.filter((v) => v !== value) })
        } else {
          setAnswers({ ...answers, [s.id]: [...filtered, value] })
        }
      }
    } else {
      setAnswers({ ...answers, [s.id]: value })
      // Auto-advance for single-select (not dropdown, not optional)
      if (!('dropdown' in s) && !('optional' in s && s.optional)) {
        setTimeout(() => setStep((n) => n + 1), 280)
      }
    }
  }

  function isSelected(value: string) {
    const ans = answers[currentStep.id]
    if (Array.isArray(ans)) return ans.includes(value)
    return ans === value
  }

  function canAdvance() {
    const s = STEPS[step]
    if ('optional' in s && s.optional) return true
    if ('dropdown' in s && s.dropdown) return !!stateDropdown
    if ('multiSelect' in s && s.multiSelect) {
      const ans = answers[s.id]
      return Array.isArray(ans) && ans.length > 0
    }
    return !!answers[s.id]
  }

  function advance() {
    if ('dropdown' in currentStep && currentStep.dropdown) {
      setAnswers({ ...answers, [currentStep.id]: stateDropdown })
    }
    if (step < totalSteps - 1) {
      setStep((n) => n + 1)
    } else {
      setFlowState('contact')
    }
  }

  function goBack() {
    if (flowState === 'contact') { setFlowState('quiz'); return }
    setStep((n) => Math.max(0, n - 1))
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName || !email) return
    setSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, phone, answers }),
      })
      const json = await res.json()
      if (!res.ok) {
        setSubmitError(json.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
      } else {
        setMatches(json.matches || [])
        setFlowState('results')
      }
    } catch {
      setSubmitError('Unable to submit. Please try again.')
      setSubmitting(false)
    }
  }

  // ── Results view ─────────────────────────────────────────────────────────
  if (flowState === 'results') {
    return (
      <section style={{ minHeight: '100dvh', padding: 'var(--space-10) var(--space-6)' }}>
        <div className="quiz-container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>✓</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: 'var(--space-4)' }}>
              Your shortlist is ready.
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
              Based on your answers, {firstName}, here are the brands that best fit your capital range,
              involvement preference, and goals.
            </p>
          </div>

          {matches.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-10)' }}>
              {matches.map((brand) => (
                <div key={brand.brand_slug} className="card" style={{ padding: 'var(--space-6)', display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)' }}>
                    {brand.brand_logo_emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}>
                      <div style={{ fontWeight: 700, fontSize: '1.0625rem' }}>{brand.brand_name}</div>
                      <span className="badge badge-muted">{brand.industry_primary}</span>
                      <span className="badge badge-emerald">{MODEL_LABELS[brand.business_model] || brand.business_model}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                      {whyThisMatches(brand, answers)}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      <span>Min capital: <strong style={{ color: 'var(--color-text-secondary)' }}>{formatCurrency(brand.cash_required_min)}</strong></span>
                      <span>Navigator: <strong style={{ color: 'var(--color-text-secondary)' }}>{brand.navigator_score}/100</strong></span>
                    </div>
                  </div>
                  <Link
                    href={`/franchises/${brand.brand_slug}`}
                    className="btn btn-outline btn-sm"
                    style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
                  >
                    View profile
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Your profile is on its way to a Waypoint advisor who will build a hand-curated shortlist for your
                specific criteria. Expect it by email within a few hours.
              </p>
            </div>
          )}

          <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-8)', background: 'var(--color-surface-2)' }}>
            <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>What happens next</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { time: 'Within 1 hour', action: 'Your personalized shortlist arrives by email' },
                { time: 'Within 24 hours', action: 'A franchise advisor sends a personal note' },
                { time: 'On your schedule', action: 'Optional 15-minute call to review your matches' },
              ].map((item) => (
                <div key={item.time} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border)' }}>
                  <span className="badge badge-muted" style={{ flexShrink: 0, alignSelf: 'flex-start' }}>{item.time}</span>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{item.action}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/contact?ref=quiz`} className="btn btn-primary">
              Talk to an advisor about these matches
            </Link>
            <Link href="/franchises" className="btn btn-outline">
              Browse while you wait
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // ── Contact capture view ─────────────────────────────────────────────────
  if (flowState === 'contact') {
    return (
      <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8) var(--space-6)' }}>
        <div className="quiz-container" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>🎯</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'var(--space-3)' }}>
              Your answers are in. Where should we send your shortlist?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto', lineHeight: '1.7' }}>
              A Waypoint advisor will review your profile and send a personalized match list.
              No pitch. No spam. Just the brands that actually fit.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '420px', margin: '0 auto' }}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="q-first">First name</label>
                <input
                  id="q-first"
                  type="text"
                  className="form-input"
                  placeholder="Jane"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="q-phone">Phone <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
                <input
                  id="q-phone"
                  type="tel"
                  className="form-input"
                  placeholder="555-0100"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="q-email">Email address</label>
              <input
                id="q-email"
                type="email"
                className="form-input"
                placeholder="jane@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {submitError && (
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#dc2626' }}>
                {submitError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={submitting}
              style={{ justifyContent: 'center' }}
            >
              {submitting ? 'Building your shortlist...' : 'See My Franchise Matches'}
            </button>

            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
              No spam. Your advisor will be in touch within one business day.
            </p>

            <button type="button" className="btn btn-ghost" onClick={goBack} style={{ justifyContent: 'center' }}>
              ← Back to quiz
            </button>
          </form>
        </div>
      </section>
    )
  }

  // ── Quiz view ─────────────────────────────────────────────────────────────
  return (
    <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8) var(--space-6)' }}>
      <div className="quiz-container" style={{ width: '100%' }}>

        {/* Progress */}
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-8)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
          <span>Question {step + 1} of {totalSteps}</span>
          <span>Franchise Match Quiz</span>
        </div>

        <div className="quiz-step" key={step}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'var(--space-3)', lineHeight: 1.25 }}>
            {currentStep.question}
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', fontSize: '0.9375rem' }}>
            {currentStep.sub}
          </p>

          {/* Dropdown variant (state selector) */}
          {'dropdown' in currentStep && currentStep.dropdown ? (
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <select
                id="quiz-state-select"
                className="form-select"
                value={stateDropdown}
                onChange={(e) => setStateDropdown(e.target.value)}
                style={{ width: '100%', fontSize: '1rem', padding: 'var(--space-4)' }}
              >
                <option value="">Select your state...</option>
                {(currentStep.options as readonly string[]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          ) : (
            /* Card grid variant */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-8)',
              }}
            >
              {('options' in currentStep ? currentStep.options as ReadonlyArray<{ value: string; label: string; sub: string }> : []).map((opt) => (
                <button
                  key={opt.value}
                  className={`radio-card ${isSelected(opt.value) ? 'selected' : ''}`}
                  onClick={() => selectOption(opt.value)}
                  style={{ textAlign: 'left', border: 'none', cursor: 'pointer', background: 'none' }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: 'var(--space-1)' }}>{opt.label}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {step > 0 ? (
              <button className="btn btn-ghost" onClick={goBack}>← Back</button>
            ) : (
              <span />
            )}

            {/* Show Continue for multi-select, dropdown, and optional steps */}
            {(('multiSelect' in currentStep && currentStep.multiSelect) ||
              ('dropdown' in currentStep && currentStep.dropdown) ||
              ('optional' in currentStep && currentStep.optional)) && (
              <button
                className="btn btn-primary"
                onClick={advance}
                disabled={!canAdvance()}
              >
                {step === totalSteps - 1 ? 'See my matches' : 'Continue'}
              </button>
            )}

            {/* Optional step skip */}
            {'optional' in currentStep && currentStep.optional && (
              <button
                className="btn btn-ghost"
                onClick={() => {
                  if (step === totalSteps - 1) {
                    setFlowState('contact')
                  } else {
                    setStep((n) => n + 1)
                  }
                }}
                style={{ fontSize: '0.8125rem' }}
              >
                Skip
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
