import { fetcher } from '@/app/utils/misc'
import type { SelectStats, StatsType } from '@/database/schema'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export function useBlogStats(type: StatsType, slug: string) {
  const { data, isLoading } = useSWR<SelectStats>(`/api/stats?slug=${slug}&type=${type}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  const { views, loves, applauses, ideas, bullseyes } = data || {}
  const stats: SelectStats = {
    applauses: applauses || 0,
    bullseyes: bullseyes || 0,
    ideas: ideas || 0,
    loves: loves || 0,
    slug,
    type,
    views: views || 0,
  }
  return [stats, isLoading] as const
}

export function useUpdateBlogStats() {
  const { trigger } = useSWRMutation(
    '/api/stats',
    async (url: string, { arg }: { arg: Partial<SelectStats> }) => {
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
      }).catch(console.error)
    }
  )
  return trigger
}
