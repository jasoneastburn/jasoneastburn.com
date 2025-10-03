'use client'

import { Twemoji } from '@/app/components/ui/Twemoji'
import { clsx } from 'clsx'
import { useEffect, useRef, useState, useCallback } from 'react'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { getBlogStats, updateBlogReaction } from '@/lib/firebase/firestore'

const MAX_REACTIONS = 10
type StatKey = 'loves' | 'applause' | 'bullseyes' | 'ideas' | 'views' | 'shares'
type StatsMap = Record<StatKey, number>
type InitialReactionsMap = Record<StatKey, number>

const REACTIONS: Array<{ emoji: string; key: StatKey }> = [
  {
    emoji: 'sparkling-heart',
    key: 'loves',
  },
  {
    emoji: 'clapping-hands',
    key: 'applause',
  },
  {
    emoji: 'bullseye',
    key: 'bullseyes',
  },
  {
    emoji: 'light-bulb',
    key: 'ideas',
  },
]

export function Reactions({ slug, className }: { slug: string; className?: string }) {
  const [stats, setStats] = useState<StatsMap | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [initialReactions, setInitialReactions] = useState<InitialReactionsMap | unknown>({})
  const [localReactions, setLocalReactions] = useState<InitialReactionsMap | unknown>({})

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const initialStats = (await getBlogStats(slug)) as StatsMap | null
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
    try {
      const data: Partial<InitialReactionsMap> = JSON.parse(
        localStorage.getItem(`reaction/${slug}`) || '{}'
      )

      const defaultData: InitialReactionsMap = REACTIONS.reduce((acc, r) => {
        acc[r.key] = data[r.key] || 0
        return acc
      }, {} as InitialReactionsMap)

      setInitialReactions(defaultData)
      setLocalReactions(defaultData)
    } catch (e) {
      console.error('Error loading local reactions:', e)
      setInitialReactions({})
      setLocalReactions({})
    }
  }, [slug])

  const handleSaveReactions = useCallback(
    (key: StatKey) => {
      if (!stats) return

      const currentLocal = (localReactions as InitialReactionsMap)[key] || 0
      const initialLocal = (initialReactions as InitialReactionsMap)[key] || 0
      const delta = currentLocal - initialLocal

      if (delta !== 0) {
        updateBlogReaction(slug, key, delta)
          .then(() => {
            setStats((prevStats) => ({
              ...(prevStats as StatsMap),
              [key]: (prevStats as StatsMap)[key] + delta,
            }))
            setInitialReactions((prev) => ({ ...prev, [key]: currentLocal }))
          })
          .catch((error) => {
            console.error('Failed to save reaction:', error)
          })
      }

      localStorage.setItem(`reaction/${slug}`, JSON.stringify(localReactions))
    },
    [slug, stats, initialReactions, localReactions]
  )

  return (
    <div className={clsx('flex items-center gap-6', className)}>
      {REACTIONS.map(({ key, emoji }) => {
        const initialCount = (stats ? stats[key] : 0) || 0
        const localCount = (localReactions as InitialReactionsMap)[key] || 0
        const initialUserCount = (initialReactions as InitialReactionsMap)[key] || 0
        const totalValue = initialCount + (localCount - initialUserCount)

        return (
          <Reaction
            key={key}
            emoji={emoji}
            value={isLoading ? '--' : totalValue}
            reactions={localCount}
            onReact={(v) => setLocalReactions((r) => ({ ...r, [key]: v }))}
            onSave={() => handleSaveReactions(key)}
          />
        )
      })}
    </div>
  )
}

function Reaction({
  emoji,
  value,
  reactions,
  onReact,
  onSave,
}: {
  emoji: string
  value: string | number
  reactions: number
  onReact: (v: number) => void
  onSave: () => void
}) {
  const [reacting, setReacting] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)
  let reactingTimeoutId: ReturnType<typeof setTimeout> | undefined

  function handleReact() {
    if (typeof value === 'number') {
      if (reactingTimeoutId) {
        clearTimeout(reactingTimeoutId)
      }
      setReacting(true)
      const newReactions = reactions >= MAX_REACTIONS ? MAX_REACTIONS : reactions + 1
      onReact(newReactions)
      if (countRef.current) {
        if (reactions >= MAX_REACTIONS) {
          countRef.current.classList.add('animate-scale-up')
          setTimeout(() => {
            if (countRef.current) {
              countRef.current.classList.remove('animate-scale-up')
            }
          }, 150)
        }
      }
    }
  }

  function handleMouseLeave() {
    if (typeof value === 'number') {
      if (reacting) {
        reactingTimeoutId = setTimeout(() => {
          setReacting(false)
          onSave()
        }, 1000)
      }
    }
  }

  return (
    <button
      onClick={handleReact}
      onMouseLeave={handleMouseLeave}
      className="relative flex cursor-pointer flex-col items-center justify-center gap-1.5"
      data-umami-event={`post-reaction-${lowercaseAndHyphenate(emoji)}-clicked`}
    >
      <Twemoji
        emoji={emoji}
        size="2x"
        // className="grayscale transition-[filter] hover:grayscale-0"
      />
      <span className="relative h-6 w-8 overflow-hidden">
        <span
          className={clsx(
            'absolute inset-0',
            'font-semibold text-gray-600 dark:text-gray-300',
            'transition-all',
            reacting ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          {typeof value === 'string' ? '--' : value}
        </span>
        <span
          ref={countRef}
          className={clsx(
            'absolute inset-0',
            'text-gray-500 dark:text-gray-400',
            'transition-all',
            reacting ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          +{reactions}
        </span>
      </span>
    </button>
  )
}
