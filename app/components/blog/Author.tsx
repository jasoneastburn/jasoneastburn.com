import { Image } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import type { CoreContent } from '@/app/models/mdx'
import { type Author } from 'contentlayer/generated'

interface AuthorsProps {
  authors: CoreContent<Author>[]
  className?: string
}

export function Author({ authors, className }: AuthorsProps) {
  return (
    <dl className={className}>
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-x-12 xl:flex-col xl:gap-y-8">
          {authors.map(({ name, avatar, x }) => (
            <li key={name} className="flex items-center gap-2">
              {avatar && (
                <Image
                  src={avatar}
                  width={38}
                  height={38}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <div className="text-sm font-medium whitespace-nowrap">
                <div className="text-gray-900 dark:text-gray-100">{name}</div>
                {x && (
                  <Link
                    href={x}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {x.replace(/https:\/\/(x|twitter)\.com\//, '@')}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}
