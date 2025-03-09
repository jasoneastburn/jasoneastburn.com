import { Link } from '@/app/components/ui/Link'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { clsx } from 'clsx'
import { ChevronRight } from 'lucide-react'
import React, { useMemo } from 'react'

type TocItem = {
  depth: number
  url: string
  value: string
}

export function TableOfContents({ toc, className }: { toc: TocItem[]; className?: string }) {
  const tocItems = useMemo(() => {
    return toc.map(({ value, depth, url }) => (
      <li
        key={url}
        className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        style={{ paddingLeft: (depth - 2) * 16 }}
      >
        <Link href={url} data-umami-event={`post-${lowercaseAndHyphenate(value)}-toc-clicked`}>
          {value}
        </Link>
      </li>
    ))
  }, [toc])

  return (
    <details
      className={clsx(
        'space-y-4 transition-transform [&[open]_.chevron-right]:rotate-90',
        className
      )}
      open
    >
      <summary className="sticky top-20 flex cursor-pointer items-center gap-1 marker:content-none">
        <ChevronRight
          strokeWidth={1.5}
          size={25}
          className="chevron-right rotate-0 transition-transform"
        />
        <div className="text-lg font-medium">Table of Contents</div>
      </summary>
      <ul className="mb-4 flex flex-col space-y-2">{tocItems}</ul>
    </details>
  )
}
