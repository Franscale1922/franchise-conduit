/**
 * Franchise Conduit — Data Access Layer
 * ──────────────────────────────────────────────────────────────────
 * This file provides query functions over the brand catalog.
 * Brand data lives in data/brands/*.json — one file per franchise.
 *
 * To add a new brand: see data/brands/index.ts for instructions.
 * ──────────────────────────────────────────────────────────────────
 */

export type {
  Franchise,
  BusinessModel,
  BrandMaturity,
  InvestmentTier,
  OwnerArchetype,
  RevenuePattern,
  Testimonial,
  Award,
} from './types'

import type { Franchise } from './types'
import { brands as allBrands } from '@/data/brands'

// The full catalog — sorted by Navigator Score descending by default
export const franchises: Franchise[] = (allBrands as unknown as Franchise[]).sort(
  (a, b) => b.navigator_score - a.navigator_score
)

// ─── Lookup ──────────────────────────────────────────────────────────────────

export function getFranchiseBySlug(slug: string): Franchise | undefined {
  return franchises.find(f => f.brand_slug === slug)
}

// ─── Filters ─────────────────────────────────────────────────────────────────

export function filterFranchises(params: {
  investmentTier?: string
  businessModel?: string
  industry?: string
  sbaEligible?: boolean
  itemNineteenAvailable?: boolean
  multiUnit?: boolean
  minNavigatorScore?: number
  state?: string
}): Franchise[] {
  return franchises.filter(f => {
    if (params.investmentTier && f.investment_tier !== params.investmentTier) return false
    if (params.businessModel && f.business_model !== params.businessModel) return false
    if (params.industry && f.industry_primary !== params.industry) return false
    if (params.sbaEligible && !f.sba_eligible) return false
    if (params.itemNineteenAvailable && !f.item_19_available) return false
    if (params.multiUnit && !f.multi_unit_available) return false
    if (params.minNavigatorScore && f.navigator_score < params.minNavigatorScore) return false
    if (params.state && !f.available_states.includes(params.state)) return false
    return true
  })
}

// ─── Hub page queries ─────────────────────────────────────────────────────────

export function getFranchisesByState(stateSlug: string): Franchise[] {
  return franchises.filter(f => f.available_states.includes(stateSlug))
}

export function getFranchisesByIndustry(industrySlug: string): Franchise[] {
  const slugToIndustry: Record<string, string> = {
    'home-services': 'Home Services & Maintenance',
    'health-wellness': 'Health & Wellness',
    'senior-care': 'Senior Care & Home Health',
    'business-services': 'Business & Professional Services',
    'education': 'Education & Learning',
    'food-beverage': 'Food & Beverage',
    'property-restoration': 'Property Restoration & Remediation',
    'fitness': 'Fitness & Recreation',
    'retail': 'Retail & Consumer Goods',
    'automotive': 'Automotive Services',
    'cleaning-services': 'Cleaning & Janitorial Services',
    'technology': 'Technology & IT Services',
  }
  const industryName = slugToIndustry[industrySlug]
  if (!industryName) return []
  return franchises.filter(f => f.industry_primary === industryName)
}

// ─── Collection queries ───────────────────────────────────────────────────────

export function getCollectionFranchises(collection: string): Franchise[] {
  switch (collection) {
    case 'semi-absentee':
      return franchises.filter(
        f => f.business_model === 'semi-absentee' || f.business_model === 'manager-model'
      )
    case 'most-profitable':
      return franchises
        .filter(f => f.avg_unit_volume && f.avg_unit_volume > 500000)
        .sort((a, b) => (b.avg_unit_volume || 0) - (a.avg_unit_volume || 0))
    case 'recession-resistant':
      return franchises.filter(f => f.recession_resistant)
    case 'multi-unit':
      return franchises.filter(f => f.multi_unit_available && f.exec_investor_flag)
    case 'executive-transition':
      return franchises.filter(f => f.owner_profile_archetypes.includes('corporate-exit'))
    default:
      return franchises
  }
}

// ─── Meta helpers ─────────────────────────────────────────────────────────────

export function getIndustries(): string[] {
  return Array.from(new Set(franchises.map(f => f.industry_primary))).sort()
}

export function getAllSlugs(): string[] {
  return franchises.map(f => f.brand_slug)
}

// ─── Formatters ───────────────────────────────────────────────────────────────

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`
  return `$${amount}`
}
