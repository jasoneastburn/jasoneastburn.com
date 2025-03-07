import clsx from 'clsx'
import type { Blog } from 'contentlayer/generated'
import { Image } from '@/app/components/ui/Image'
import Link from '@/app/components/ui/Link'
import { SITE_METADATA } from '@/data/site-metadata'
import Tag from '@/app/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

export function PostCardListView({ post, loading }) {
  const { slug, date, title, summary, tags, images, readingTime } = post
  return (
    <article>
      <div className="mb-4 flex flex-col gap-2 space-y-3 md:flex-row md:gap-8">
        <Link
          href={`/blog/${slug}`}
          className={clsx([
            'relative block shrink-0',
            'h-60 w-full md:h-60 md:w-60',
            'pt-0 pr-3 pb-3 pl-0',
            'transition-all ease-in-out hover:pt-1 hover:pr-2 hover:pb-2 hover:pl-1',
          ])}
        >
          <Image
            src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
            alt={title}
            width={60}
            height={60}
            className={clsx(['h-60 rounded-xl shadow-2xl', 'w-full md:w-60'])}
            loading={loading}
          />
        </Link>
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <dl className="text-sm">
                <dt className="sr-only">Published on</dt>
                <dd className="leading-6 font-medium text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, SITE_METADATA.locale)}</time>
                  <span className="mx-2 text-gray-400">/</span>
                  <span>{Math.ceil(readingTime.minutes)} mins read</span>
                </dd>
              </dl>
              <div>
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </div>
            <div className="line-clamp-2 text-gray-500 md:line-clamp-3 dark:text-gray-400">
              {summary}
            </div>
          </div>
          <div className="text-base leading-6 font-medium">
            <Link
              href={`/blog/${slug}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Read more: "${title}"`}
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
