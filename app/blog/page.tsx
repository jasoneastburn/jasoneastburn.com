import { ListLayout } from '@/app/layouts/ListLayout'
import { genPageMetadata } from '@/app/seo'
import { allCoreContent } from '@/app/utils/content-layer'
import { sortPosts } from '@/app/utils/misc'
import { allBlogs } from 'contentlayer/generated'

const POSTS_PER_PAGE = 6

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: { searchParams: Promise<{ page?: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageParam = await props.searchParams
  const page = Number(pageParam?.page || 1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const displayPosts = posts.slice(startIndex, endIndex)

  const pagination = {
    currentPage: page,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={displayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
