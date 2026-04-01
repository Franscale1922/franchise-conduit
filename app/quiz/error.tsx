'use client'

import { useEffect } from 'react'

export default function QuizError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>Something went wrong</h2>
        <button className="btn btn-outline" onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}
