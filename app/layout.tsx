import 'app/css/tailwind.css'
import 'app/css/twemoji.css'
import 'pliny/search/algolia.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'remark-github-blockquote-alert/alert.css'

import { Roboto } from 'next/font/google'
import Header from '@/app/components/header'
import SectionContainer from '@/app/components/ui/SectionContainer'
import Footer from '@/app/components/footer'
import { SITE_METADATA } from '../data/site-metadata'
import { ThemeProviders } from './theme-providers'
import type { Metadata } from 'next'
import { UmamiAnalytics } from '@/app/components/analytics/UmamiAnalytics'
import type { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, type SearchConfig } from 'pliny/search'
// import { KBarSearchProvider } from '@/app/components/search/KBarSearchProvider'

const ROBOTO = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: './',
    siteName: SITE_METADATA.title,
    images: [SITE_METADATA.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${SITE_METADATA.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: SITE_METADATA.title,
    card: 'summary_large_image',
    images: [SITE_METADATA.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={SITE_METADATA.language}
      className={`${ROBOTO.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
      <link rel="mask-icon" href={`${basePath}/favicon/safari-pinned-tab.svg`} color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <UmamiAnalytics websiteId={SITE_METADATA.analytics?.umamiAnalytics?.umamiWebsiteId} />
          {/* <Analytics analyticsConfig={SITE_METADATA.analytics as AnalyticsConfig} /> */}
          <SectionContainer>
            {/* <KBarSearchProvider configs={SITE_METADATA.search.kbarConfig}> */}
            <SearchProvider searchConfig={SITE_METADATA.search as SearchConfig}>
              <Header />
              <main className="mb-auto">{children}</main>
              {/* </KBarSearchProvider> */}
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
