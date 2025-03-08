import type { Blog } from 'contentlayer/generated'
import { Image } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import Tag from '@/app/components/ui/Tag'
import type { CoreContent } from '@/app/models/mdx'
import { formatDate } from '@/app/utils/misc'
import { SITE_METADATA } from '@/data/site-metadata'
import { clsx } from 'clsx'

export function PostCardGridView({ post }: { post: CoreContent<Blog> }) {
  const { path, date, title, summary, images, readingTime, tags, slug } = post
  return (
    <article>
      <div className="flex flex-col items-start justify-between gap-4 md:gap-6">
        <Link
          href={`/${path}`}
          className={clsx([
            'relative block shrink-0',
            'h-auto w-full md:aspect-[3/2]',
            'pt-0 pl-0',
            'transition-all ease-in-out hover:pt-1 hover:pr-2 hover:pb-2 hover:pl-1',
          ])}
        >
          <Image
            src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
            alt={title}
            width={600}
            height={400}
            className="aspect-video h-full w-full rounded-xl shadow-2xl"
          />
        </Link>
        <div className="w-full space-y-3">
          <div className="flex items-center gap-x-1.5 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="text-gray-400">/</span>
            <span>{Math.ceil(readingTime.minutes)} mins read</span>
          </div>
          <div className="group relative">
            <h3 className="text-xl leading-6 font-semibold">
              <Link href={`/${path}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 md:mt-3 dark:text-gray-500">
              {summary}
            </p>
            <div className="mt-4 font-medium">
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
      </div>
    </article>
  )
}
