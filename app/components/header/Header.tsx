'use client'

import AnalyticsButton from '@/app/components/header/AnalyticsButton'
import MobileNav from '@/app/components/header/MobileNav'
import SearchButton from '@/app/components/header/SearchButton'
import ThemeSwitch from '@/app/components/header/ThemeSwitch'
import Link from '@/app/components/ui/Link'
import siteMetadata from '@/data/siteMetadata'
import { HEADER_NAV_LINKS } from '@/data/navigation-links'
import { Image } from '../ui/Image'
import { MoreLinks } from './MoreLinks'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image
              className="h-10 w-10 rounded-full"
              src="/images/jasoneastburn-avatar.jpg"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="hidden gap-1.5 sm:flex">
          {HEADER_NAV_LINKS.map(({ title, href }) => {
            return (
              <Link
                key={title}
                href={href}
                className="hover:text-primary-500 dark:hover:text-primary-400 px-3 py-1 font-medium"
              >
                {title}
              </Link>
            )
          })}
          <MoreLinks />
        </div>
        <div
          role="separator"
          data-orientation="vertical"
          className="bg-primary-500 dark:bg-primary-400 hidden h-6 w-px shrink-0 md:block"
        />
        <AnalyticsButton />
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
