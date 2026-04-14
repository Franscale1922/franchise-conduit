import type { Metadata } from 'next'
import { Suspense } from 'react'
import { franchises, getIndustries } from '@/lib/data'
import { FranchisesClient } from '@/components/FranchisesClient'

export const metadata: Metadata = {
  title: 'Browse Franchise Opportunities: Curated for Serious Investors | Franchise Conduit',
  description:
    'Filter franchise opportunities by investment range, owner involvement, industry, and state. Independent Navigator Score rankings. No pay-to-rank. Built for experienced buyers deploying $100K+.',
}

// All unique available_states across the catalog for the state filter dropdown
function getAllStates(allFranchises: typeof franchises): string[] {
  const set = new Set<string>()
  allFranchises.forEach(f => f.available_states.forEach(s => set.add(s)))
  return Array.from(set).sort()
}

export default function FranchisesPage() {
  const industries = getIndustries()
  const allStates = getAllStates(franchises)

  // Suspense required: FranchisesClient uses useSearchParams() for URL-synced filters
  return (
    <Suspense fallback={null}>
      <FranchisesClient
        franchises={franchises}
        industries={industries}
        allStates={allStates}
      />
    </Suspense>
  )
}
