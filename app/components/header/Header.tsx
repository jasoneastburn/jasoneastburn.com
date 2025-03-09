'use client'

import AnalyticsButton from '@/app/components/header/AnalyticsButton'
import MobileNav from '@/app/components/header/MobileNav'
import { MoreLinks } from '@/app/components/header/MoreLinks'
import SearchButton from '@/app/components/header/SearchButton'
import ThemeSwitch from '@/app/components/header/ThemeSwitch'
import { Image } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { HEADER_NAV_LINKS } from '@/data/navigation-links'
import { SITE_METADATA } from '@/data/site-metadata'
import clsx from 'clsx'

const Header = () => {
  const headerClass = clsx('flex items-center w-full justify-between py-10', {
    'sticky top-0 z-50 bg-white dark:bg-gray-950': SITE_METADATA.stickyNav,
    'bg-white dark:bg-gray-950': !SITE_METADATA.stickyNav,
  })

  return (
    <header className={headerClass}>
      <Link
        href="/"
        aria-label={SITE_METADATA.headerTitle}
        className="flex items-center"
        data-umami-event="header-home-clicked"
      >
        <Image
          className="mr-3 h-10 w-10 rounded-full"
          src="/images/jasoneastburn-avatar.jpg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        {typeof SITE_METADATA.headerTitle === 'string' && (
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            {SITE_METADATA.headerTitle}
          </div>
        )}
        {typeof SITE_METADATA.headerTitle !== 'string' && SITE_METADATA.headerTitle}
      </Link>
      <div className="flex items-center space-x-4 sm:-mr-6 sm:space-x-6">
        <nav className="hidden gap-1.5 sm:flex">
          {HEADER_NAV_LINKS.map(({ title, href }) => (
            <Link
              key={title}
              href={href}
              className="hover:text-primary-500 dark:hover:text-primary-400 px-3 py-1 font-medium"
              data-umami-event={`header-${lowercaseAndHyphenate(title)}-clicked`}
            >
              {title}
            </Link>
          ))}
          <MoreLinks />
        </nav>
        <div className="bg-primary-500 dark:bg-primary-400 hidden h-6 w-px md:block" />
        <AnalyticsButton />
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
