'use client'

import { useState } from 'react'
import Link from 'next/link'

const STEPS = [
  {
    id: 'capital',
    question: 'How much liquid capital can you invest?',
    sub: 'This helps us find franchises you can realistically qualify for, and filter out brands that don\'t fit.',
    options: [
      { value: '100k-250k', label: '$100K–$250K', sub: 'Entry executive range' },
      { value: '250k-500k', label: '$250K–$500K', sub: 'Prime investment zone' },
      { value: '500k-1m',   label: '$500K–$1M',   sub: 'Premium opportunities' },
      { value: '1m-plus',   label: '$1M+',         sub: 'Portfolio-level' },
    ]
  },
  {
    id: 'involvement',
    question: 'How involved do you want to be?',
    sub: 'Be honest — this single answer shapes more of your shortlist than any other.',
    options: [
      { value: 'semi-absentee', label: 'Semi-Absentee', sub: '10–20 hrs/week · GM runs operations' },
      { value: 'manager-model', label: 'Manager-Model', sub: 'Hire to run it, review monthly' },
      { value: 'owner-operator', label: 'Owner-Operator', sub: 'Hands-on · Full-time involved' },
      { value: 'not-sure', label: 'Not sure yet', sub: 'Show me options across models' },
    ]
  },
  {
    id: 'industry',
    question: 'Which industries interest you?',
    sub: 'Select all that apply — we\'ll weight your shortlist accordingly.',
    multiSelect: true,
    options: [
      { value: 'home-services', label: '🏠 Home Services', sub: 'Pest control, restoration, cleaning' },
      { value: 'health-wellness', label: '💪 Health & Wellness', sub: 'Chiropractic, fitness, nutrition' },
      { value: 'senior-care', label: '🤝 Senior Care', sub: 'In-home non-medical care' },
      { value: 'education', label: '📚 Education', sub: 'Tutoring, early childhood, training' },
      { value: 'business-services', label: '💼 Business Services', sub: 'B2B, professional services' },
      { value: 'food-bev', label: '🍕 Food & Beverage', sub: 'Restaurants, cafes, specialty food' },
      { value: 'open', label: '🔭 Open to anything', sub: 'Show me what fits my capital + model' },
    ]
  },
  {
    id: 'timeline',
    question: 'When are you looking to open?',
    sub: 'This helps us prioritize advisors and identify brands with available territories in your window.',
    options: [
      { value: '1-3mo', label: 'Within 3 months', sub: 'Actively ready to move' },
      { value: '3-6mo', label: '3–6 months', sub: 'In due diligence mode' },
      { value: '6-12mo', label: '6–12 months', sub: 'Serious researcher' },
      { value: 'researching', label: 'Just researching', sub: 'No timeline yet' },
    ]
  },
  {
    id: 'background',
    question: 'What\'s your current situation?',
    sub: 'This helps us tailor your shortlist and match you with the right advisor focus.',
    options: [
      { value: 'corporate-executive', label: '👔 Corporate Executive', sub: 'Currently employed, exploring exit' },
      { value: 'business-owner', label: '🏢 Business Owner', sub: 'Looking to add or diversify' },
      { value: 'investor', label: '📈 Capital Investor', sub: 'Portfolio allocation focus' },
      { value: 'transitioning', label: '🔄 In Transition', sub: 'Recently left corporate, evaluating options' },
    ]
  },
]

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const currentStep = STEPS[step]
  const isLastStep = step === STEPS.length - 1
  const progress = ((step) / STEPS.length) * 100

  function selectOption(value: string) {
    const s = STEPS[step]
    if (s.multiSelect) {
      const current = (answers[s.id] as string[]) || []
      if (value === 'open') {
        setAnswers({ ...answers, [s.id]: ['open'] })
      } else {
        const filtered = current.filter(v => v !== 'open')
        if (filtered.includes(value)) {
          setAnswers({ ...answers, [s.id]: filtered.filter(v => v !== value) })
        } else {
          setAnswers({ ...answers, [s.id]: [...filtered, value] })
        }
      }
    } else {
      setAnswers({ ...answers, [s.id]: value })
      if (!isLastStep) {
        setTimeout(() => setStep(s => s + 1), 300)
      }
    }
  }

  function isSelected(value: string) {
    const ans = answers[currentStep.id]
    if (Array.isArray(ans)) return ans.includes(value)
    return ans === value
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <QuizConfirmation answers={answers} />
  }

  return (
    <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8) var(--space-6)' }}>
      <div className="quiz-container" style={{ width: '100%' }}>

        {/* Progress */}
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-8)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
          <span>Step {step + 1} of {STEPS.length}</span>
          <span>Franchise Match Quiz</span>
        </div>

        {step < STEPS.length ? (
          <div className="quiz-step" key={step}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'var(--space-3)', lineHeight: 1.25 }}>
              {currentStep.question}
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', fontSize: '0.9375rem' }}>
              {currentStep.sub}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
              {currentStep.options.map(opt => (
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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {step > 0 ? (
                <button className="btn btn-ghost" onClick={() => setStep(s => s - 1)}>← Back</button>
              ) : <span />}

              {(currentStep.multiSelect) && (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (isLastStep) {
                      // go to email capture
                      setStep(s => s + 1)
                    } else {
                      setStep(s => s + 1)
                    }
                  }}
                  disabled={!answers[currentStep.id] || (answers[currentStep.id] as string[]).length === 0}
                >
                  Continue →
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Email Capture Step */
          <div className="quiz-step">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>🎯</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>
                Your shortlist is ready.
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto' }}>
                Based on your answers, we&apos;ve matched you with {' '}
                <strong style={{ color: 'var(--color-indigo-light)' }}>8–12 franchises</strong>.
                Enter your email to see them.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '420px', margin: '0 auto' }}>
              <div className="grid-2" style={{ gap: 'var(--space-3)' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-first">First name</label>
                  <input id="q-first" type="text" className="form-input" placeholder="Jane" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-zip">ZIP code</label>
                  <input id="q-zip" type="text" className="form-input" placeholder="10001" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="q-email">Email address</label>
                <input
                  id="q-email"
                  type="email"
                  className="form-input"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
                See My Franchise Matches →
              </button>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                No spam. No salespeople. Your advisor will reach out within 24 hours.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

function QuizConfirmation({ answers }: { answers: Record<string, string | string[]> }) {
  return (
    <section style={{ minHeight: '80dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8) var(--space-6)' }}>
      <div style={{ maxWidth: '540px', textAlign: 'center' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 'var(--space-6)' }}>✅</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-4)' }}>
          Your shortlist is being built.
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75', marginBottom: 'var(--space-8)' }}>
          A franchise advisor is reviewing your profile now. You&apos;ll receive your personalized shortlist 
          by email within the hour — along with market intelligence briefs for each match.
          Expect a personal note from your advisor within 24 hours.
        </p>
        <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-8)', textAlign: 'left' }}>
          <div className="stat-label" style={{ marginBottom: 'var(--space-4)' }}>What happens next</div>
          {[
            { time: 'Within 1 hour', action: 'Your personalized shortlist arrives by email' },
            { time: 'Within 24 hours', action: 'A franchise advisor sends a personal note' },
            { time: 'On your schedule', action: 'Optional 15-minute call to review your matches' },
          ].map(item => (
            <div key={item.time} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border)' }}>
              <span className="badge badge-indigo" style={{ flexShrink: 0, alignSelf: 'flex-start' }}>{item.time}</span>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{item.action}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/franchises" className="btn btn-outline">Browse while you wait →</Link>
          <Link href="/" className="btn btn-ghost">Back to home</Link>
        </div>
      </div>
    </section>
  )
}
