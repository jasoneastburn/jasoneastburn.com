'use client'

import { Link } from '@/app/components/ui/Link'
import { Twemoji } from '@/app/components/ui/Twemoji'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '@/data/navigation-links'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { useState, useEffect, useRef, Fragment } from 'react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)
  const allNavLinks = [...HEADER_NAV_LINKS, ...MORE_NAV_LINKS]

  const toggleNav = () => {
    setNavShow((prevShow) => {
      if (!prevShow) {
        disableBodyScroll(navRef.current)
      } else {
        enableBodyScroll(navRef.current)
      }
      return !prevShow
    })
  }

  useEffect(() => {
    return () => clearAllBodyScrollLocks()
  }, [])

  return (
    <>
      <button
        aria-label="Toggle menu"
        onClick={toggleNav}
        className="sm:hidden"
        data-umami-event={`mobile-header-toggle-nav-clicked`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hover:text-primary-500 dark:hover:text-primary-400 h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition appear show={navShow} as={Fragment}>
        <Dialog as="div" onClose={toggleNav}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
          >
            <DialogPanel className="fixed top-0 left-0 z-70 h-full w-full bg-white/95 dark:bg-gray-950/98">
              <nav
                ref={navRef}
                className="mt-8 flex h-full flex-col overflow-y-auto pt-2 pl-12 text-left"
              >
                {allNavLinks.map((link) => (
                  <div
                    key={link.title}
                    className="hover:text-primary-500 dark:hover:text-primary-400 mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  >
                    <Twemoji emoji={link.emoji} />
                    <Link
                      href={link.href}
                      className="ml-3"
                      onClick={toggleNav}
                      data-umami-event={`mobile-header-${lowercaseAndHyphenate(link.title)}-clicked`}
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </nav>

              <button
                className="hover:text-primary-500 dark:hover:text-primary-400 fixed top-7 right-4 z-80 h-16 w-16 p-4 text-gray-900 dark:text-gray-100"
                aria-label="Close menu"
                onClick={toggleNav}
                data-umami-event={`mobile-header-toggle-nav-clicked`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
