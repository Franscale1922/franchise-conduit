import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      brandName,
      capital,
      timeline,
      involvement,
      smsOptIn,
      website, // honeypot
    } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Validation
    if (!firstName || !email || !brandName) {
      return NextResponse.json(
        { error: 'First name, email, and brand are required.' },
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

    const advisorEmail = process.env.ADVISOR_EMAIL
    const fromEmail = process.env.EMAIL_FROM
    const fullName = [firstName, lastName].filter(Boolean).join(' ')

    // Advisor notification
    await resend.emails.send({
      from: fromEmail!,
      to: advisorEmail!,
      subject: `Brand introduction request: ${brandName} — from ${fullName}`,
      text: `
Brand introduction request — Franchise Conduit
===============================================

Brand requested: ${brandName}

Candidate details:
  Name:        ${fullName}
  Email:       ${email}
  Phone:       ${phone || 'Not provided'}

Profile:
  Capital:     ${capital || 'Not specified'}
  Timeline:    ${timeline || 'Not specified'}
  Involvement: ${involvement || 'Not specified'}
  SMS opt-in:  ${smsOptIn ? 'Yes' : 'No'}

--
Submitted via brand detail page on franchiseconduit.com
    `.trim(),
    })

    // Candidate confirmation
    await resend.emails.send({
      from: fromEmail!,
      to: email,
      subject: `Your inquiry about ${brandName}`,
      text: `
Hi ${firstName},

Got your note about ${brandName}. Before I make any introduction, I'll review your profile and confirm it's a genuine fit, on territory, and worth your time to explore.

I'll be in touch within one business day. If you have questions before then, just reply here.

Kelsey
Waypoint Franchise Advisors
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/brand-intro] error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
