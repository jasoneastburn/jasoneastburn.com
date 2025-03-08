'use client'

import { SITE_METADATA } from '@/data/site-metadata'
import { ThemeProvider } from 'next-themes'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={SITE_METADATA.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
