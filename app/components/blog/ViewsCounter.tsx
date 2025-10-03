'use client'

import { useEffect, useState } from 'react'
import { getBlogStats, incrementBlogViews } from '@/lib/firebase/firestore'

type BlogStats = {
  views: number
  [key: string]: unknown
} | null

export function ViewsCounter({ slug, className }: { slug: string; className?: string }) {
  const [stats, setStats] = useState<BlogStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasIncremented, setHasIncremented] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const initialStats = await getBlogStats(slug)

        if (isMounted) {
          setStats(initialStats)
        }
      } catch (error) {
        console.error('Error fetching blog stats:', error)
        if (isMounted) {
          setStats(null)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [slug])

  useEffect(() => {
    if (!isLoading && stats && !hasIncremented) {
      incrementBlogViews(slug).catch((error) => {
        console.error('Error incrementing views on Firebase:', error)
      })

      const currentViews = stats.views || 0

      setStats((prevStats) => ({
        ...(prevStats as BlogStats),
        views: currentViews + 1,
      }))

      setHasIncremented(true)
    }
  }, [stats, isLoading, slug, hasIncremented])

  const displayViews = stats?.views ?? 0

  return <span className={className}>{isLoading ? '---' : `${displayViews} views`}</span>
}
