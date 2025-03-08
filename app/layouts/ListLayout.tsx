'use client'

import { PostCardGridView } from '@/app/components/blog/PostCardGridView'
import { SearchPosts } from '@/app/components/blog/SearchPosts'
import { Link } from '@/app/components/ui/Link'
import { PageHeader } from '@/app/components/ui/PageHeader'
import type { CoreContent } from '@/app/models/mdx'
import type { Blog } from 'contentlayer/generated'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState, useMemo } from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  const prevHref = useMemo(
    () => (currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`),
    [basePath, currentPage]
  )

  const nextHref = useMemo(() => `/${basePath}/page/${currentPage + 1}`, [basePath, currentPage])

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            className="hover:text-primary-500 dark:hover:text-primary-400 flex cursor-pointer items-center"
            href={prevHref}
            rel="prev"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="ml-1">Previous</span>
          </Link>
        ) : (
          <button
            className="flex cursor-auto items-center disabled:opacity-50"
            disabled={!prevPage}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="ml-1">Previous</span>
          </button>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link
            className="hover:text-primary-500 dark:hover:text-primary-400 flex cursor-pointer items-center"
            href={nextHref}
            rel="next"
          >
            <span className="mr-1">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            className="flex cursor-auto items-center disabled:opacity-50"
            disabled={!nextPage}
          >
            <span className="mr-1">Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </nav>
    </div>
  )
}

export function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchContent = post.title + post.summary + (post.tags?.join(' ') || '')
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }, [posts, searchValue])

  const displayPosts = useMemo(() => {
    return initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
  }, [initialDisplayPosts, filteredBlogPosts, searchValue])

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader
        title={title}
        description="I like to write about stuff I'm into. You'll find a mix of web dev articles, tech news, and random thoughts from my life. Use the search below to filter by title."
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <SearchPosts label="Search posts" onChange={(e) => setSearchValue(e.target.value)} />
      </PageHeader>
      {!filteredBlogPosts.length ? (
        <div className="py-10">No posts found.</div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 md:gap-y-16 lg:grid-cols-2 xl:grid-cols-3">
          {displayPosts.map((post) => (
            <PostCardGridView key={post.path} post={post} />
          ))}
        </div>
      )}
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
