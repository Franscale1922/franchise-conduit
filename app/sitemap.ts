import { franchises } from '@/lib/data'
import { MetadataRoute } from 'next'

// ─── Hub page slugs — keep in sync with hub page generateStaticParams ─────────

const industrySlugs = [
  'home-services',
  'health-wellness',
  'senior-care',
  'business-services',
  'education',
  'food-beverage',
  'property-restoration',
  'fitness',
  'retail',
  'automotive',
  'cleaning-services',
  'technology',
]

const stateSlugs = [
  'texas',
  'florida',
  'california',
  'georgia',
  'north-carolina',
  'arizona',
  'colorado',
  'ohio',
  'illinois',
  'pennsylvania',
  'new-york',
  'tennessee',
  'washington',
  'virginia',
  'nevada',
  'utah',
  'minnesota',
  'michigan',
  'new-jersey',
  'oregon',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franchiseconduit.com'
  const now = new Date().toISOString()

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/franchises`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/quiz`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/methodology`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources/fdd`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/collections/semi-absentee`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/collections/most-profitable`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/collections/recession-resistant`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/collections/multi-unit`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/collections/executive-transition`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const brandPages = franchises.map(f => ({
    url: `${baseUrl}/franchises/${f.brand_slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const industryPages = industrySlugs.map((slug: string) => ({
    url: `${baseUrl}/franchises/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const statePages = stateSlugs.map(slug => ({
    url: `${baseUrl}/franchises/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...brandPages, ...industryPages, ...statePages]
}
