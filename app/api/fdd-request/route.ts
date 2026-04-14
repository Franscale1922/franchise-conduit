import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      email,
      state,
      brandName,
      website, // honeypot
    } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Validation
    if (!firstName || !email || !state || !brandName) {
      return NextResponse.json(
        { error: 'All fields are required.' },
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

    // Advisor notification
    await resend.emails.send({
      from: fromEmail!,
      to: advisorEmail!,
      subject: `FDD request: ${brandName} — ${firstName} in ${state}`,
      text: `
FDD request — Franchise Conduit
================================

Brand:     ${brandName}
State:     ${state} (territory check needed)

Candidate:
  Name:    ${firstName}
  Email:   ${email}

Action needed: Verify territory availability in ${state}, then send FDD or follow up.

--
Submitted via brand detail page on franchiseconduit.com
      `.trim(),
    })

    // Candidate confirmation
    await resend.emails.send({
      from: fromEmail!,
      to: email,
      subject: `Your FDD request for ${brandName}`,
      text: `
Hi ${firstName},

I've logged your request for the ${brandName} FDD. I'll check territory availability in ${state} and get back to you within one business day with next steps.

If you have questions in the meantime, just reply here.

Kelsey
Waypoint Franchise Advisors
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/fdd-request] error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
