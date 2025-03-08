'use client'

import { useEffect } from 'react'
import type { StatsType } from '../../../database/schema'
import { useBlogStats, useUpdateBlogStats } from '../../../hooks/use-blog-stats'

export function ViewsCounter({
  type,
  slug,
  className,
}: {
  type: StatsType
  slug: string
  className?: string
}) {
  const [stats, isLoading] = useBlogStats(type, slug)
  const updateView = useUpdateBlogStats()

  useEffect(() => {
    if (!isLoading && stats) {
      updateView({ type, slug, views: stats['views'] + 1 })
    }
  }, [stats, isLoading, updateView, type, slug])

  return <span className={className}>{isLoading ? '---' : (stats['views'] || 0) + ' views'}</span>
}
