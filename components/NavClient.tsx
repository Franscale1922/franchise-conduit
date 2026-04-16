'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/franchises',    label: 'Browse Franchises' },
  { href: '/how-it-works',  label: 'How It Works' },
  { href: '/resources',     label: 'Resources' },
  { href: '/contact',       label: 'Talk to an Advisor' },
]

export default function NavClient() {
  const [open, setOpen] = useState(false)

  // Close drawer on route change (popstate) and resize to desktop
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('popstate', close)
    const mq = window.matchMedia('(min-width: 769px)')
    mq.addEventListener('change', (e) => { if (e.matches) setOpen(false) })
    return () => { window.removeEventListener('popstate', close) }
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Franchise<span>Conduit</span>
        </a>

        {/* Desktop nav links */}
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="flex gap-3 nav-cta">
          <a href="/quiz" className="btn btn-outline btn-sm">Take the Quiz</a>
          <a href="/franchises" className="btn btn-primary btn-sm">Start Exploring</a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          id="nav-hamburger"
          className="nav-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav-hamburger-line ${open ? 'open' : ''}`} />
          <span className={`nav-hamburger-line ${open ? 'open' : ''}`} />
          <span className={`nav-hamburger-line ${open ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="nav-mobile-overlay"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="nav-mobile-links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-mobile-ctas">
          <a
            href="/quiz"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setOpen(false)}
          >
            Take the Quiz
          </a>
          <a
            href="/franchises"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setOpen(false)}
          >
            Start Exploring
          </a>
        </div>
      </div>
    </nav>
  )
}
