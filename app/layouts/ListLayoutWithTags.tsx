'use client'

import { PostCardGridView } from '@/app/components/blog/PostCardGridView'
import { Link } from '@/app/components/ui/Link'
import { PageHeader } from '@/app/components/ui/PageHeader'
import type { CoreContent } from '@/app/models/mdx'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import tagData from '@/json/tag-data.json'
import type { Blog } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

interface ListLayoutProps {
  title: string
  description: React.ReactNode
  posts: CoreContent<Blog>[]
}

export function ListLayoutWithTags({ title, description, posts }: ListLayoutProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader
        title={title}
        description={description}
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="flex flex-col-reverse md:flex-row md:gap-x-12">
        <TagsList />
        <div className="flex-grow py-5 md:py-10">
          <ul className="grid grid-cols-1 gap-y-10 md:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {posts.map((post) => (
              <li key={post.path}>
                <PostCardGridView post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function TagsList() {
  const tagCounts = tagData as Record<string, number>
  const pathname = usePathname()

  const sortedTags = useMemo(() => {
    return Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
  }, [tagCounts])

  return (
    <div className="mt-0 md:mt-10">
      <div className="mx-auto max-w-[280px] min-w-[280px] rounded-sm bg-gray-50 pt-5 pb-3 shadow-md md:mx-0 dark:bg-gray-900/70 dark:shadow-gray-800/40">
        <div className="px-6">
          {pathname.startsWith('/blog') ? (
            <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
          ) : (
            <Link
              href={`/blog`}
              className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
              data-umami-event="post-list-all-posts-clicked"
            >
              All Posts
            </Link>
          )}
          <ul>
            {sortedTags.map((t) => {
              const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
              return (
                <li key={t} className="my-3">
                  {isActive ? (
                    <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                      {`${t} (${tagCounts[t]})`}
                    </h3>
                  ) : (
                    <Link
                      href={`/tags/${slug(t)}`}
                      className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
                      aria-label={`View posts tagged ${t}`}
                      data-umami-event={`post-list-tags-${lowercaseAndHyphenate(t)}-clicked`}
                    >
                      {`${t} (${tagCounts[t]})`}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
