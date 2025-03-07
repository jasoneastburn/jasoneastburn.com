import { Suspense } from 'react'
import { genPageMetadata } from 'app/seo'
import { PageHeader } from '@/app/components/ui/PageHeader'
import books from '@/data/books.json' assert { type: 'json' }
import { BooksList } from '@/app/components/books/BooksList'
import type { Books } from 'app/models/books'

export const metadata = genPageMetadata({
  title: 'Books',
})

export default async function BooksPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PageHeader
        title="Books"
        description="What I've recently read and what's on my reading list."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <Suspense>
        <BooksList
          books={
            books.sort(
              (a, b) => Number(b.user_rating) - Number(a.user_rating)
            ) as unknown as Books[]
          }
        />
      </Suspense>
    </div>
  )
}
