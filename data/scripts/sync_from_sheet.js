#!/usr/bin/env node
/**
 * FranchiseConduit — Google Sheet → Brand JSON Sync
 * ──────────────────────────────────────────────────
 * Reads the master FDD brand data spreadsheet and generates
 * individual brand JSON files in data/brands/.
 *
 * Usage:
 *   node data/scripts/sync_from_sheet.js
 *   node data/scripts/sync_from_sheet.js --brand "CertaPro Painters"
 *   node data/scripts/sync_from_sheet.js --row 42
 *   node data/scripts/sync_from_sheet.js --dry-run
 *
 * Config:
 *   GOOGLE_SHEET_ID — set in .env.local or pass as env var
 *   GOOGLE_SERVICE_ACCOUNT_KEY_PATH — path to service account JSON key file
 *
 * Sheet columns (see COLUMN_MAP below for exact mapping):
 *   The sheet at https://docs.google.com/spreadsheets/d/1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU
 *   is the authoritative source. This script maps columns → Franchise interface fields.
 */

const fs = require('fs')
const path = require('path')

// ──────────────────────────────────────────────────────────────
// CONFIG
// ──────────────────────────────────────────────────────────────
const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1QvpbbUZ55d6YfFNxdQkMuL0p_TrxT1XFCT8tGc6wasU'
const SHEET_NAME = 'Sheet1'
const BRANDS_DIR = path.join(__dirname, '../brands')
const SERVICE_ACCOUNT_KEY_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || path.join(__dirname, '../../credentials/fddapi-service-account.json')

// Parse CLI args
const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const SINGLE_BRAND = args.includes('--brand') ? args[args.indexOf('--brand') + 1] : null
const SINGLE_ROW = args.includes('--row') ? parseInt(args[args.indexOf('--row') + 1]) : null

// ──────────────────────────────────────────────────────────────
// COLUMN MAP
// Maps spreadsheet column letters → Franchise interface fields
// Update this map if columns are added/reordered in the sheet.
// ──────────────────────────────────────────────────────────────
const COLUMN_MAP = {
  // ── Core identity ──────────────────────────────────────────
  A: 'brand_name',
  B: 'investment_min',
  C: 'investment_max',
  D: 'cash_required_min',
  E: 'franchise_fee',
  F: 'royalty_rate',
  G: 'unit_count_total',
  H: 'year_founded',
  I: 'year_franchising_began',
  J: 'industry_primary',
  K: 'business_model',
  L: 'avg_unit_volume',
  M: 'item_19_available',
  N: 'available_states',
  O: 'fbr_satisfaction_score',
  P: 'entrepreneur_rank',
  // ── Extended fields (added by Claude FDD skill, columns Q+) ─
  Q: 'tagline',
  R: 'description_short',
  S: 'market_intelligence_insight',
  T: 'net_worth_required',
  U: 'marketing_fee',
  V: 'investment_tier',
  W: 'sba_eligible',
  X: 'veteran_discount',
  Y: 'territory_type',
  Z: 'home_based',
  AA: 'navigator_score',
  AB: 'item_19_headline',
  AC: 'breakeven_timeline',
  AD: 'cash_on_cash_return_range',
  AE: 'unit_growth_rate_yoy',
  AF: 'brand_maturity',
  AG: 'exec_investor_flag',
  AH: 'semi_absentee_verified',
  AI: 'initial_training_days',
  AJ: 'ongoing_support',
  AK: 'marketing_support',
  AL: 'franchisee_validation_available',
  AM: 'target_customer',
  AN: 'revenue_pattern',
  AO: 'recession_resistant',
  AP: 'lifestyle_fit_tags',
  AQ: 'owner_profile_archetypes',
  AR: 'matching_tags',
  AS: 'brand_logo_emoji',
  AT: 'industry_secondary',
  AU: 'completeness_state',
  AV: 'unit_count_us',
  AW: 'physical_location_required',
  AX: 'financing_available',
  AY: 'multi_unit_available',
  AZ: 'fbr_top_200',
}

// ──────────────────────────────────────────────────────────────
// DEFAULTS — used when a column is empty
// ──────────────────────────────────────────────────────────────
const DEFAULTS = {
  brand_logo_emoji: '🏢',
  tagline: '',
  description_short: '',
  market_intelligence_insight: '',
  industry_secondary: null,
  exec_investor_flag: false,
  brand_maturity: 'established',
  unit_count_us: null,
  unit_count_pipeline: null,
  unit_growth_rate_yoy: 0,
  marketing_fee: null,
  investment_tier: null,
  sba_eligible: false,
  robs_eligible: false,
  financing_available: false,
  veteran_discount: false,
  item_19_available: false,
  item_19_headline: null,
  avg_unit_volume: null,
  cash_on_cash_return_range: null,
  breakeven_timeline: null,
  macro_market_cagr: null,
  semi_absentee_verified: false,
  hours_per_week_typical: null,
  employees_typical: null,
  physical_location_required: false,
  home_based: false,
  mobile_van_based: false,
  territory_type: 'exclusive',
  multi_unit_available: true,
  area_developer_available: false,
  target_customer: 'b2c',
  revenue_pattern: 'recurring',
  recession_resistant: false,
  growth_sector: false,
  lifestyle_fit_tags: [],
  initial_training_days: 0,
  training_location: null,
  ongoing_support: '',
  field_support: false,
  marketing_support: true,
  technology_platform: false,
  franchisee_validation_available: false,
  fbr_satisfaction_score: null,
  fbr_top_200: false,
  fbr_top_200_year: null,
  entrepreneur_rank: null,
  entrepreneur_rank_year: null,
  awards: [],
  ifa_member: false,
  fdd_available: true,
  testimonials: [],
  owner_profile_archetypes: ['corporate-exit'],
  matching_tags: [],
  navigator_score: 0,
  available_states: ['all'],
  completeness_state: 'partial',
}

// ──────────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────────

/** Converts a brand name to a URL slug */
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/** Converts column letter(s) to zero-based index (A=0, Z=25, AA=26, etc.) */
function colToIndex(col) {
  let index = 0
  for (let i = 0; i < col.length; i++) {
    index = index * 26 + (col.charCodeAt(i) - 64)
  }
  return index - 1
}

/** Parses a cell value to the appropriate JS type */
function parseCell(value, field) {
  if (value === '' || value === null || value === undefined) return undefined

  // Boolean fields
  const boolFields = [
    'exec_investor_flag', 'sba_eligible', 'robs_eligible', 'financing_available',
    'veteran_discount', 'item_19_available', 'semi_absentee_verified',
    'physical_location_required', 'home_based', 'mobile_van_based',
    'multi_unit_available', 'area_developer_available', 'recession_resistant',
    'growth_sector', 'field_support', 'marketing_support', 'technology_platform',
    'franchisee_validation_available', 'fbr_top_200', 'ifa_member', 'fdd_available'
  ]
  if (boolFields.includes(field)) {
    const v = String(value).toLowerCase().trim()
    return v === 'true' || v === 'yes' || v === 'y' || v === '1'
  }

  // Number fields
  const numberFields = [
    'investment_min', 'investment_max', 'cash_required_min', 'net_worth_required',
    'franchise_fee', 'royalty_rate', 'marketing_fee', 'avg_unit_volume',
    'unit_count_total', 'unit_count_us', 'unit_count_pipeline', 'unit_growth_rate_yoy',
    'year_founded', 'year_franchising_began', 'fbr_satisfaction_score',
    'entrepreneur_rank', 'entrepreneur_rank_year', 'navigator_score',
    'initial_training_days', 'macro_market_cagr', 'fbr_top_200_year'
  ]
  if (numberFields.includes(field)) {
    // Strip currency/percent formatting
    const cleaned = String(value).replace(/[$,%]/g, '').replace(/,/g, '').trim()
    const num = parseFloat(cleaned)
    return isNaN(num) ? undefined : num
  }

  // Array fields — comma or semicolon separated
  const arrayFields = [
    'available_states', 'lifestyle_fit_tags', 'owner_profile_archetypes',
    'matching_tags'
  ]
  if (arrayFields.includes(field)) {
    if (Array.isArray(value)) return value
    const str = String(value).trim()
    if (str === '' || str.toLowerCase() === 'all') return ['all']
    return str.split(/[,;]/).map(s => s.trim().toLowerCase()).filter(Boolean)
  }

  // Investment tier — normalize
  if (field === 'investment_tier') {
    const v = String(value).trim()
    const tiers = ['$100K-$249K', '$250K-$499K', '$500K-$999K', '$1M+']
    return tiers.find(t => v.includes(t)) || v || undefined
  }

  // Business model — normalize
  if (field === 'business_model') {
    const v = String(value).toLowerCase().trim()
    if (v.includes('semi')) return 'semi-absentee'
    if (v.includes('owner') || v.includes('operator')) return 'owner-operator'
    if (v.includes('manager')) return 'manager-model'
    if (v.includes('passive')) return 'passive'
    return 'owner-operator'
  }

  // Territory type — normalize
  if (field === 'territory_type') {
    const v = String(value).toLowerCase().trim()
    if (v.includes('protected')) return 'protected'
    if (v.includes('open')) return 'open'
    return 'exclusive'
  }

  // Brand maturity — normalize
  if (field === 'brand_maturity') {
    const v = String(value).toLowerCase().trim()
    if (v.includes('emerg')) return 'emerging'
    if (v.includes('growth')) return 'growth'
    return 'established'
  }

  // Completeness state — normalize
  if (field === 'completeness_state') {
    const v = String(value).toLowerCase().trim()
    if (v === 'stub') return 'stub'
    if (v === 'complete') return 'complete'
    return 'partial'
  }

  return String(value).trim()
}

/** Derives investment tier from min/max if not provided */
function deriveInvestmentTier(min) {
  if (!min) return '$250K-$499K'
  if (min < 250000) return '$100K-$249K'
  if (min < 500000) return '$250K-$499K'
  if (min < 1000000) return '$500K-$999K'
  return '$1M+'
}

/** Derives brand maturity from year franchising began */
function deriveBrandMaturity(yearBegan) {
  if (!yearBegan) return 'established'
  const age = new Date().getFullYear() - yearBegan
  if (age < 5) return 'emerging'
  if (age < 10) return 'growth'
  return 'established'
}

/** Derives navigator score if not provided (basic composite from available data) */
function deriveNavigatorScore(brand) {
  let score = 50 // base
  if (brand.item_19_available) score += 10
  if (brand.fbr_satisfaction_score > 4) score += 10
  if (brand.fbr_satisfaction_score > 4.5) score += 5
  if (brand.entrepreneur_rank && brand.entrepreneur_rank <= 200) score += 8
  if (brand.fbr_top_200) score += 7
  if (brand.sba_eligible) score += 3
  if (brand.veteran_discount) score += 2
  if (brand.franchisee_validation_available) score += 5
  return Math.min(Math.round(score), 100)
}

// ──────────────────────────────────────────────────────────────
// CONVERT ROW → BRAND JSON
// ──────────────────────────────────────────────────────────────
function rowToBrand(rowData, rowIndex) {
  const raw = {}

  // Map each column to its field name
  for (const [col, field] of Object.entries(COLUMN_MAP)) {
    const colIndex = colToIndex(col)
    const cellValue = rowData[colIndex]
    const parsed = parseCell(cellValue, field)
    if (parsed !== undefined) {
      raw[field] = parsed
    }
  }

  if (!raw.brand_name) {
    console.warn(`  ⚠ Row ${rowIndex}: no brand_name — skipping`)
    return null
  }

  // Merge with defaults
  const brand = { ...DEFAULTS, ...raw }

  // Derived fields
  brand.id = String(rowIndex - 1) // row 2 = id "1"
  brand.brand_slug = toSlug(brand.brand_name)
  brand.investment_tier = brand.investment_tier || deriveInvestmentTier(brand.investment_min)
  brand.brand_maturity = brand.brand_maturity || deriveBrandMaturity(brand.year_franchising_began)
  brand.unit_count_us = brand.unit_count_us || brand.unit_count_total
  brand.exec_investor_flag = brand.business_model === 'semi-absentee' || brand.business_model === 'manager-model' || brand.business_model === 'passive'

  // Navigator score — use provided value or derive
  if (!brand.navigator_score || brand.navigator_score === 0) {
    brand.navigator_score = deriveNavigatorScore(brand)
  }

  // Mark as partial if key copy fields are missing
  if (!brand.tagline || !brand.description_short) {
    brand.completeness_state = brand.completeness_state === 'complete' ? 'partial' : brand.completeness_state
  }

  return brand
}

// ──────────────────────────────────────────────────────────────
// GOOGLE SHEETS FETCH
// ──────────────────────────────────────────────────────────────
async function fetchSheetData() {
  let keyFile = null

  // Check for service account key file
  if (fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
    keyFile = SERVICE_ACCOUNT_KEY_PATH
    console.log(`  Using service account: ${SERVICE_ACCOUNT_KEY_PATH}`)
  } else {
    console.log(`  No service account key found at ${SERVICE_ACCOUNT_KEY_PATH}`)
    console.log(`  Falling back to public CSV export...`)
  }

  if (keyFile) {
    // Use Google Sheets API with service account
    const { google } = require('googleapis')
    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1:AZ`,
    })
    return res.data.values || []
  } else {
    // Public CSV export fallback (works when sheet is publicly viewable)
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`
    const https = require('https')
    return new Promise((resolve, reject) => {
      https.get(csvUrl, (res) => {
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
          const lines = data.split('\n').filter(l => l.trim())
          const rows = lines.map(line => {
            // Simple CSV parse (handles quoted fields)
            const result = []
            let current = ''
            let inQuotes = false
            for (const char of line) {
              if (char === '"') { inQuotes = !inQuotes }
              else if (char === ',' && !inQuotes) { result.push(current); current = '' }
              else { current += char }
            }
            result.push(current)
            return result
          })
          resolve(rows)
        })
        res.on('error', reject)
      }).on('error', reject)
    })
  }
}

// ──────────────────────────────────────────────────────────────
// WRITE BRAND JSON
// ──────────────────────────────────────────────────────────────
function writeBrandJson(brand) {
  const filePath = path.join(BRANDS_DIR, `${brand.brand_slug}.json`)
  if (DRY_RUN) {
    console.log(`  [DRY RUN] Would write: ${brand.brand_slug}.json (state: ${brand.completeness_state})`)
    return
  }
  fs.writeFileSync(filePath, JSON.stringify(brand, null, 2))
  console.log(`  ✓ ${brand.brand_slug}.json (${brand.completeness_state})`)
}

// ──────────────────────────────────────────────────────────────
// UPDATE data/brands/index.ts
// ──────────────────────────────────────────────────────────────
function updateBrandIndex(slugs) {
  if (DRY_RUN) {
    console.log(`  [DRY RUN] Would update index.ts with ${slugs.length} brands`)
    return
  }

  // Read existing index.ts
  const indexPath = path.join(BRANDS_DIR, 'index.ts')
  if (!fs.existsSync(indexPath)) {
    console.log(`  ⚠ index.ts not found — skipping index update`)
    return
  }

  const existingContent = fs.readFileSync(indexPath, 'utf8')

  // Check if it has a dynamic pattern or static imports
  if (existingContent.includes('require(')) {
    // Already dynamic — just log
    console.log(`  ✓ index.ts uses dynamic loading — no update needed`)
    return
  }

  // Generate new index.ts with all non-stub brands
  const publicSlugs = slugs.filter(s => {
    const filePath = path.join(BRANDS_DIR, `${s}.json`)
    if (!fs.existsSync(filePath)) return false
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return data.completeness_state !== 'stub'
  })

  const imports = publicSlugs.map(s => `import ${s.replace(/-/g, '_')} from './${s}.json'`).join('\n')
  const exports = `\nexport const brands = [\n  ${publicSlugs.map(s => s.replace(/-/g, '_')).join(',\n  ')}\n]\n`

  fs.writeFileSync(indexPath, `${imports}\n${exports}`)
  console.log(`  ✓ index.ts updated with ${publicSlugs.length} public brands`)
}

// ──────────────────────────────────────────────────────────────
// MAIN
// ──────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🔄 FranchiseConduit — Sheet → Brand JSON Sync')
  console.log('─'.repeat(50))
  if (DRY_RUN) console.log('  MODE: DRY RUN (no files written)\n')

  // Fetch sheet data
  console.log('📥 Fetching sheet data...')
  let rows
  try {
    rows = await fetchSheetData()
  } catch (err) {
    console.error('  ✗ Failed to fetch sheet:', err.message)
    process.exit(1)
  }

  if (!rows || rows.length < 2) {
    console.error('  ✗ Sheet appears empty or inaccessible')
    process.exit(1)
  }

  const headerRow = rows[0]
  const dataRows = rows.slice(1)
  console.log(`  Found ${dataRows.length} brand rows\n`)

  // Filter to specific brand/row if requested
  let targetRows = dataRows.map((row, i) => ({ row, rowIndex: i + 2 }))

  if (SINGLE_BRAND) {
    targetRows = targetRows.filter(({ row }) =>
      String(row[0]).toLowerCase().trim() === SINGLE_BRAND.toLowerCase().trim()
    )
    if (targetRows.length === 0) {
      console.error(`  ✗ Brand "${SINGLE_BRAND}" not found in sheet`)
      process.exit(1)
    }
    console.log(`  Syncing single brand: ${SINGLE_BRAND}`)
  }

  if (SINGLE_ROW) {
    targetRows = targetRows.filter(({ rowIndex }) => rowIndex === SINGLE_ROW)
    if (targetRows.length === 0) {
      console.error(`  ✗ Row ${SINGLE_ROW} not found`)
      process.exit(1)
    }
  }

  // Process rows
  console.log('⚙️  Processing brands...')
  const writtenSlugs = []
  let skipped = 0
  let written = 0
  let errors = 0

  for (const { row, rowIndex } of targetRows) {
    try {
      const brand = rowToBrand(row, rowIndex)
      if (!brand) { skipped++; continue }
      writeBrandJson(brand)
      writtenSlugs.push(brand.brand_slug)
      written++
    } catch (err) {
      console.error(`  ✗ Row ${rowIndex} error: ${err.message}`)
      errors++
    }
  }

  // Update index if full sync
  if (!SINGLE_BRAND && !SINGLE_ROW && !DRY_RUN) {
    console.log('\n📑 Updating brand index...')
    const allSlugs = dataRows
      .map(row => row[0])
      .filter(Boolean)
      .map(name => toSlug(String(name)))
    updateBrandIndex(allSlugs)
  }

  // Summary
  console.log('\n' + '─'.repeat(50))
  console.log(`✅ Sync complete`)
  console.log(`   Written:  ${written}`)
  console.log(`   Skipped:  ${skipped}`)
  console.log(`   Errors:   ${errors}`)
  if (!DRY_RUN && written > 0) {
    console.log(`\nNext step: npm run build`)
  }
  if (DRY_RUN) {
    console.log(`\nRun without --dry-run to write files`)
  }
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
