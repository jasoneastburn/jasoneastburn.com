import { BooksList } from '@/app/components/books/BooksList'
import { PageHeader } from '@/app/components/ui/PageHeader'
import type { Books } from '@/app/models/books'
import { genPageMetadata } from '@/app/seo'
import booksData from '@/json/books.json' assert { type: 'json' }
import { Suspense, useMemo } from 'react'

export const metadata = genPageMetadata({
  title: 'Books',
})

export default function BooksPage() {
  const sortedBooks = useMemo(() => {
    const sorted = [...booksData].sort(
      (a, b) => Number(b.user_rating) - Number(a.user_rating)
    ) as unknown as Books[]
    return sorted
  }, [])

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader
        title="Books"
        description="What I've recently read and what's on my reading list."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <Suspense>
        <BooksList books={sortedBooks} />
      </Suspense>
    </div>
  )
}
