'use client'

import { useState } from 'react'
import BrandIntroForm from './BrandIntroForm'
import FddRequestModal from './FddRequestModal'

interface BrandLeadSidebarProps {
  brandName: string
}

export default function BrandLeadSidebar({ brandName }: BrandLeadSidebarProps) {
  const [showFddModal, setShowFddModal] = useState(false)

  return (
    <>
      {showFddModal && (
        <FddRequestModal brandName={brandName} onClose={() => setShowFddModal(false)} />
      )}

      <BrandIntroForm brandName={brandName} />

      {/* FDD Request CTA */}
      <div className="card" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
          Want the actual FDD?
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
          Request it directly. We will check territory and follow up within one business day.
        </p>
        <button
          id="fdd-request-open-btn"
          onClick={() => setShowFddModal(true)}
          className="btn btn-ghost btn-sm"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          📄 Request the FDD
        </button>
      </div>
    </>
  )
}
