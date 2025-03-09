import { Image } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import Tag from '@/app/components/ui/Tag'
import { formatDate } from '@/app/utils/misc'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { SITE_METADATA } from '@/data/site-metadata'

export function PostCardListView({ post, loading }) {
  const { slug, date, title, summary, tags, images, readingTime } = post
  return (
    <article className="mb-4">
      <div className="flex flex-col md:flex-row md:gap-8">
        <Link
          href={`/blog/${slug}`}
          className="relative mb-3 block h-60 w-full shrink-0 transition-transform hover:translate-x-1 hover:translate-y-1 md:w-60"
          data-umami-event={`post-${lowercaseAndHyphenate(title)}-clicked`}
        >
          <Image
            src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
            alt={title}
            width={60}
            height={60}
            className="mb-5 h-full w-full rounded-xl shadow-2xl"
            loading={loading}
          />
        </Link>
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <dl className="text-sm">
                <dt className="sr-only">Published on</dt>
                <dd className="leading-6 font-medium text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                  <span className="mx-2 text-gray-400">/</span>
                  <span>{Math.ceil(readingTime.minutes)} mins read</span>
                </dd>
              </dl>
              <div>
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  <Link
                    href={`/blog/${slug}`}
                    className="text-gray-900 dark:text-gray-100"
                    data-umami-event={`post-${lowercaseAndHyphenate(title)}-clicked`}
                  >
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
              data-umami-event={`post-${lowercaseAndHyphenate(title)}-clicked`}
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
