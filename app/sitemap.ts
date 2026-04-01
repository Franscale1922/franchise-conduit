import { franchises } from '@/lib/data'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franchiseconduit.com'
  const now = new Date().toISOString()

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/franchises`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/quiz`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/methodology`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
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

  return [...staticPages, ...brandPages]
}
