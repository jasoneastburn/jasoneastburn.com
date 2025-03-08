import { SITE_METADATA } from '@/data/site-metadata'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
    host: SITE_METADATA.siteUrl,
  }
}
