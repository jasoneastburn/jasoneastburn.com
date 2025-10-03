import { ViewsCounter } from '@/app/components/blog/ViewsCounter'
import { formatDate, getTimeAgo } from '@/app/utils/misc'
import type readingTime from 'reading-time'

type BlogMetaProps = {
  date: string
  lastmod?: string
  readingTime: ReturnType<typeof readingTime>
  slug: string
}

export function BlogMeta({ date, lastmod, slug, readingTime }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 md:text-base dark:text-gray-400">
        <time dateTime="{date}" className="flex items-center">
          {formatDate(date)}
          {lastmod && (
            <time dateTime="{date}" className="ml-1.5 hidden items-center md:ml-2 md:flex">
              (<span>updated</span>
              <span className="ml-1.5">{getTimeAgo(lastmod)}</span>)
            </time>
          )}
        </time>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <span>{Math.ceil(readingTime.minutes)} mins read</span>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <ViewsCounter slug={slug} />
      </dd>
    </dl>
  )
}
