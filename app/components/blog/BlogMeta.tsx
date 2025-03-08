import type readingTime from 'reading-time'
import type { StatsType } from '../../../database/schema'
import { getTimeAgo } from '../../utils/misc'
import { ViewsCounter } from '@/app/components/blog/ViewsCounter'
import { formatDate } from 'pliny/utils/formatDate'

type BlogMetaProps = {
  date: string
  lastmod?: string
  slug: string
  type: StatsType
  readingTime: ReturnType<typeof readingTime>
}

export function BlogMeta({ date, lastmod, type, slug, readingTime }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm leading-6 font-medium text-gray-500 md:text-base dark:text-gray-400">
        <time dateTime={date} className="flex items-center justify-center">
          <time dateTime={date}>{formatDate(date)}</time>
          {lastmod && (
            <time
              dateTime={date}
              className="ml-1.5 hidden items-center justify-center md:ml-2 md:flex"
            >
              (<span>updated</span>
              <span className="ml-1.5">{getTimeAgo(lastmod)}</span>)
            </time>
          )}
        </time>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <span>{Math.ceil(readingTime.minutes)} mins read</span>
        <span className="text-gray-300 dark:text-gray-700">/</span>
        <ViewsCounter type={type} slug={slug} />
      </dd>
    </dl>
  )
}
