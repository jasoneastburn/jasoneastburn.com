'use client'

import { PostCardListView } from '@/app/components/blog/PostCardListView'
import { PageHeader } from '@/app/components/ui/PageHeader'
import React from 'react'

export function LatestPosts({ posts }) {
  return (
    <div className="space-y-4 divide-y divide-gray-200 md:space-y-8 dark:divide-gray-700">
      <PageHeader
        title="Latest Posts"
        description="Check out the most recent posts and projects from yours truly..."
      />
      <ul className="space-y-7 divide-y divide-gray-200 dark:divide-gray-700">
        {posts?.length ? (
          posts.map((post, idx) => (
            <li key={post.slug}>
              <PostCardListView post={post} loading={idx === 0 ? 'eager' : 'lazy'} />
            </li>
          ))
        ) : (
          <li>No posts found.</li>
        )}
      </ul>
    </div>
  )
}
