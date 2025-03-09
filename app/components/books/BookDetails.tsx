'use client'

import { Twemoji } from '@/app/components/ui/Twemoji'
import type { Books } from '@/app/models/books'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import clsx from 'clsx'
import { PenTool, Quote, type LucideProps } from 'lucide-react'
import { useState, useCallback } from 'react'

export function BookDetails({ book }: { book: Books }) {
  const [tab, setTab] = useState<'summary' | 'review'>('summary')

  const handleTabChange = useCallback((newTab: 'summary' | 'review') => {
    setTab(newTab)
  }, [])

  return (
    <div className="space-y-3">
      <div className="-ml-1 flex items-center gap-2">
        <TabTrigger
          active={tab === 'summary'}
          onClick={() => handleTabChange('summary')}
          label="Summary"
          emoji="spiral-notepad"
          author={book.author_name}
        />
        {book.user_review && (
          <>
            <span>/</span>
            <TabTrigger
              active={tab === 'review'}
              onClick={() => handleTabChange('review')}
              label="My Review"
              emoji="glowing-star"
              author={book.author_name}
            />
          </>
        )}
      </div>
      <div className="relative md:pr-4">
        {tab === 'summary' ? (
          <TabContent icon={Quote} content={book.book_description} />
        ) : (
          <TabContent icon={PenTool} content={book.user_review} />
        )}
      </div>
    </div>
  )
}

function TabTrigger(props: {
  active: boolean
  onClick: () => void
  label: string
  emoji: string
  author: string
}) {
  const { active, onClick, label, emoji, author } = props
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1 font-medium underline-offset-4',
        active ? 'underline' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
      )}
      data-umami-event={`books-${lowercaseAndHyphenate(author)}-${lowercaseAndHyphenate(label)}`}
    >
      <Twemoji emoji={emoji} />
      <span>{label}</span>
    </button>
  )
}

function TabContent(props: { icon: React.FC<LucideProps>; content: string }) {
  const { icon: Icon, content } = props
  return (
    <>
      <Icon
        size={20}
        strokeWidth={1.5}
        className="absolute -top-4 right-0 z-[-1] h-10 w-10 text-gray-200 md:-top-2 dark:text-gray-700"
      />
      <p className="line-clamp-5 text-gray-700 italic dark:text-gray-400">"{content}"</p>
    </>
  )
}
