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
      investmentRange,
      ownershipModel,
      message,
      howHeard,
      website, // honeypot — bots fill this, humans don't
    } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true }) // silently discard
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

    const advisorEmail = process.env.ADVISOR_EMAIL
    const fromEmail = process.env.EMAIL_FROM
    const fullName = [firstName, lastName].filter(Boolean).join(' ')

    // Send advisor notification
    await resend.emails.send({
      from: fromEmail!,
      to: advisorEmail!,
      subject: `New contact inquiry from ${fullName}`,
      text: `
New contact inquiry — Franchise Conduit
========================================

Name:             ${fullName}
Email:            ${email}
Phone:            ${phone || 'Not provided'}
Investment Range: ${investmentRange || 'Not specified'}
Ownership Model:  ${ownershipModel || 'Not specified'}
How they heard:   ${howHeard || 'Not provided'}

Message:
${message || '(none)'}

--
Submitted via /contact on franchiseconduit.com
      `.trim(),
    })

    // Send candidate confirmation
    await resend.emails.send({
      from: fromEmail!,
      to: email,
      subject: `Got it, ${firstName}. I'll be in touch soon.`,
      text: `
Hi ${firstName},

Thanks for reaching out. I've reviewed your note and will be in touch within one business day.

If there's anything else you'd like me to know before we talk, just reply to this email. I read every response personally.

Looking forward to the conversation.

Kelsey
Waypoint Franchise Advisors
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/contact] error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
