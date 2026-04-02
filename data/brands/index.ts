/**
 * Brand Data Loader
 * ─────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW BRAND:
 *   1. Copy BRAND_TEMPLATE.json → data/brands/your-brand-slug.json
 *   2. Fill in all fields (required fields are marked in the template)
 *   3. Add one import line below (in alphabetical order by slug)
 *   4. Add the brand variable to the `allBrands` array at the bottom
 *   5. Run `npm run build` to validate the TypeScript types
 *
 * BRAND ID CONVENTION:
 *   Assign the next sequential integer as a string: "9", "10", etc.
 *   Check the current highest ID before adding.
 *
 * SLUG CONVENTION:
 *   Lowercase, hyphenated, matches the JSON filename.
 *   E.g.: "the-joint-chiropractic" → the-joint-chiropractic.json
 *
 * TYPE SAFETY:
 *   All brand JSON files are validated against the Franchise interface
 *   in lib/types.ts at build time via TypeScript's satisfies operator.
 * ─────────────────────────────────────────────────────────────────
 */

import type { Franchise } from '../../lib/types'

// ─── Brand imports (alphabetical by slug) ────────────────────────────────────

import caringseniorservice from './caring-senior-service.json'
import celebreeschool from './celebree-school.json'
import intelligentoffice from './intelligent-office.json'
import junkluggers from './junkluggers.json'
import kumon from './kumon.json'
import mosquitosquad from './mosquito-squad.json'
import restoration1 from './restoration-1.json'
import thejointchiropractic from './the-joint-chiropractic.json'

// ─── Add new brand imports above this line (alphabetical) ────────────────────

export const allBrands: Franchise[] = [
  caringseniorservice as unknown as Franchise,
  celebreeschool as unknown as Franchise,
  intelligentoffice as unknown as Franchise,
  junkluggers as unknown as Franchise,
  kumon as unknown as Franchise,
  mosquitosquad as unknown as Franchise,
  restoration1 as unknown as Franchise,
  thejointchiropractic as unknown as Franchise,
  // ─── Add new brands above this line (alphabetical) ───────────────────────
]

export default allBrands
