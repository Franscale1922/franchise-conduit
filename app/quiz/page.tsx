import type { Metadata } from 'next'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Franchise Matching Quiz: Find Your Best Fit',
  description: 'Answer 7 questions about your capital, goals, and lifestyle and receive a curated shortlist of franchise opportunities matched to your profile. Free. No obligation.',
  alternates: {
    canonical: 'https://franchiseconduit.com/quiz',
  },
}

export default function QuizPage() {
  return <QuizClient />
}
