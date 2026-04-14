import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { franchises } from '@/lib/data'

const resend = new Resend(process.env.RESEND_API_KEY)

const CAPITAL_RANGES: Record<string, { min: number; max: number }> = {
  '100k-250k': { min: 100000, max: 250000 },
  '250k-500k': { min: 250000, max: 500000 },
  '500k-1m':   { min: 500000, max: 1000000 },
  '1m-plus':   { min: 1000000, max: Infinity },
}

const INDUSTRY_MAP: Record<string, string[]> = {
  'home-services':     ['Home Services', 'Cleaning', 'Restoration', 'Pest Control'],
  'health-wellness':   ['Health & Wellness', 'Fitness', 'Chiropractic', 'Nutrition'],
  'senior-care':       ['Senior Care', 'Home Care', 'Healthcare'],
  'education':         ['Education', 'Child Services', 'Tutoring'],
  'business-services': ['Business Services', 'B2B Services', 'Staffing'],
  'food-bev':          ['Food & Beverage', 'Restaurant', 'Fast Food', 'QSR'],
  'automotive':        ['Automotive'],
  'pets':              ['Pet Services', 'Pet Care'],
  'real-estate':       ['Real Estate'],
  'financial':         ['Financial Services'],
  'beauty':            ['Beauty', 'Personal Care'],
  'open':              [], // match everything
}

const MODEL_MAP: Record<string, string[]> = {
  'fully-involved':   ['owner-operator'],
  'hybrid':           ['semi-absentee', 'owner-operator'],
  'minimal':          ['semi-absentee', 'manager-model'],
}

function matchBrands(answers: Record<string, string | string[]>) {
  const capitalKey = answers.capital as string
  const capitalRange = CAPITAL_RANGES[capitalKey]
  const industries = (answers.industry as string[]) || []
  const involvementKey = answers.involvement as string
  const allowedModels = MODEL_MAP[involvementKey] || ['semi-absentee', 'manager-model', 'owner-operator']
  const openToAll = industries.includes('open') || industries.length === 0

  const scored = franchises
    .map(f => {
      let score = 0

      // Capital fit (required — filter out if over budget)
      if (capitalRange && f.cash_required_min > capitalRange.max) return null
      if (capitalRange && f.cash_required_min <= capitalRange.max) score += 3

      // Industry match
      if (!openToAll) {
        const matchedIndustries = industries.filter(ind => {
          const keywords = INDUSTRY_MAP[ind] || []
          return keywords.some(k => f.industry_primary?.toLowerCase().includes(k.toLowerCase()))
        })
        if (matchedIndustries.length > 0) score += matchedIndustries.length * 2
        else score -= 1
      } else {
        score += 1
      }

      // Ownership model match
      if (allowedModels.includes(f.business_model)) score += 2

      return { franchise: f, score }
    })
    .filter((item): item is { franchise: typeof franchises[0]; score: number } => item !== null && item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  return scored.map(item => item.franchise)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      email,
      phone,
      answers,
      website, // honeypot
    } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true, matches: [] })
    }

    // Validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (!answers || Object.keys(answers).length < 3) {
      return NextResponse.json(
        { error: 'Please complete the quiz before submitting.' },
        { status: 400 }
      )
    }

    const matched = matchBrands(answers)
    const advisorEmail = process.env.ADVISOR_EMAIL
    const fromEmail = process.env.EMAIL_FROM

    const capitalLabels: Record<string, string> = {
      '100k-250k': '$100K–$250K',
      '250k-500k': '$250K–$500K',
      '500k-1m': '$500K–$1M',
      '1m-plus': '$1M+',
    }

    const goalLabels: Record<string, string> = {
      'income-replacement': 'Income replacement',
      'wealth-building': 'Wealth building',
      'legacy': 'Legacy / generational wealth',
      'portfolio-expansion': 'Portfolio expansion',
    }

    const timelineLabels: Record<string, string> = {
      '3-months': 'Within 3 months',
      '6-months': '6 months',
      '1-year': 'Within a year',
      'exploring': 'Just exploring',
    }

    const matchedBrandNames = matched.map(f => f.brand_name).join(', ') || 'None matched in current catalog'

    // Advisor notification
    await resend.emails.send({
      from: fromEmail!,
      to: advisorEmail!,
      subject: `New quiz lead from ${firstName} — ${capitalLabels[answers.capital as string] || answers.capital}`,
      text: `
New quiz submission — Franchise Conduit
========================================

Name:            ${firstName}
Email:           ${email}
Phone:           ${phone || 'Not provided'}

QUIZ ANSWERS
------------
1. Liquid capital:   ${capitalLabels[answers.capital as string] || answers.capital}
2. Background:       ${answers.background}
3. Involvement:      ${answers.involvement}
4. Industries:       ${Array.isArray(answers.industry) ? (answers.industry as string[]).join(', ') : answers.industry}
5. Target state:     ${answers.state}
6. Primary goal:     ${goalLabels[answers.goal as string] || answers.goal}
7. Timeline:         ${timelineLabels[answers.timeline as string] || answers.timeline || 'Not answered'}

MATCHED BRANDS (${matched.length} results)
--------------
${matched.map(f => `- ${f.brand_name} | ${f.industry_primary} | ${f.business_model} | $${(f.cash_required_min / 1000).toFixed(0)}K min`).join('\n') || 'None'}

--
Submitted via /quiz on franchiseconduit.com
      `.trim(),
    })

    // Candidate confirmation
    await resend.emails.send({
      from: fromEmail!,
      to: email,
      subject: `Your franchise shortlist, ${firstName}`,
      text: `
Hi ${firstName},

Based on your answers, I've put together a shortlist that fits your profile, and I'll have it in your inbox shortly.

In the meantime, I wanted to reach out personally. The choices you described, specifically around ${goalLabels[answers.goal as string] || 'your goals'} and a ${answers.involvement} role, point to some genuinely strong options. I'm looking forward to walking through them with you.

Expect to hear from me within one business day. If anything changes or you want to add context before we talk, just reply to this email.

Kelsey
Waypoint Franchise Advisors
      `.trim(),
    })

    return NextResponse.json({
      success: true,
      matches: matched.map(f => ({
        brand_slug: f.brand_slug,
        brand_name: f.brand_name,
        industry_primary: f.industry_primary,
        business_model: f.business_model,
        cash_required_min: f.cash_required_min,
        brand_logo_emoji: f.brand_logo_emoji,
        description_short: f.description_short,
        navigator_score: f.navigator_score,
      })),
    })
  } catch (err) {
    console.error('[api/quiz] error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
