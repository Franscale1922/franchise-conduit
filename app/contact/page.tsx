import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Talk to a Franchise Advisor',
  description: 'Connect with a credentialed franchise advisor at Waypoint. Tell us your investment range and goals — we will review your profile and curate a brand shortlist within one business day.',
  alternates: {
    canonical: 'https://franchiseconduit.com/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
