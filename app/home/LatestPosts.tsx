'use client'

import { useState } from 'react'
import { PostCardListView } from '@/app/components/blog/PostCardListView'
import { PageHeader } from '@/app/components/ui/PageHeader'

export function LatestPosts({ posts }) {
  const [view, setView] = useState<'posts'>('posts')
  return (
    <div className="space-y-4 divide-y divide-gray-200 md:space-y-8 dark:divide-gray-700">
      <PageHeader
        title="Latest Posts"
        description="Check out the most recent posts and projects from yours truly..."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <ul className="space-y-7 divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.map((post, idx) => (
          <li key={post.slug}>
            <PostCardListView post={post} loading={idx === 0 ? 'eager' : 'lazy'} />
          </li>
        ))}
      </ul>
    </div>
  )
}
