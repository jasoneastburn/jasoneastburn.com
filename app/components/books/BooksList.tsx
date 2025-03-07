'use client'

import { useSearchParams } from 'next/navigation'
import { BookCard } from '@/app/components/cards/BookCard'
import type { Books } from 'app/models/books'
import { SHELVES, ShelveSelect, type ShelfType } from '@/app/components/books/ShelveSelect'

interface BooksListProps {
  books: Books[]
}

export function BooksList({ books }: BooksListProps) {
  const searchParams = useSearchParams()
  const shelf = (searchParams.get('shelf') as ShelfType) || 'all'
  const displayBooks =
    shelf === 'all'
      ? books
      : books.filter((book) => {
          if (shelf === 'read') {
            return book.user_shelves === ''
          }
          return book.user_shelves.includes(shelf)
        })
  const { label } = SHELVES.find(({ value }) => value === shelf) || SHELVES[0]

  return (
    <div className="py-5 md:py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-xl leading-9 font-bold tracking-tight md:text-2xl">
          <span className="mr-1 capitalize">{label}</span>
          <span className="font-normal">({displayBooks.length})</span>
        </span>
        <div className="flex items-center gap-1 md:gap-2">
          <span>Shelve: </span>
          <ShelveSelect shelf={shelf} />
        </div>
      </div>
      <div className="space-y-10">
        {displayBooks.map((book) => (
          <BookCard key={book.guid} book={book} />
        ))}
      </div>
    </div>
  )
}
