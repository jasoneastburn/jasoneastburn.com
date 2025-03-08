import { GradientBorder } from '@/app/components/ui/GradientBorder'
import { Link } from '@/app/components/ui/Link'
import { Rating } from '@/app/components/ui/Rating'
import { Twemoji } from '@/app/components/ui/Twemoji'
import GoodreadsLogo from '../../../public/images/books/goodreads.svg'
import type { Books } from 'app/models/books'
import { BookCover } from '@/app/components/books/BookCover'
import { BookDetails } from '@/app/components/books/BookDetails'
import { TiltedGridBackground } from '../ui/TiltedGridBackground'

export function BookCard({ book }: { book: Books }) {
  return (
    <GradientBorder className="flex flex-col gap-8 rounded-2xl px-3 py-6 md:flex-row md:px-6 dark:bg-white/5">
      <TiltedGridBackground className="inset-0 z-[-1]" />
      <div className="mx-auto flex w-60 shrink-0 items-center justify-center">
        <BookCover image={book.book_large_image_url} alt={book.title} />
      </div>
      <div className="flex grow flex-col justify-between gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-12 text-xl font-semibold md:text-2xl">
              {book.link ? <Link href={book.link}>{book.title}</Link> : <h3>{book.title}</h3>}
              <Rating rating={book.user_rating} className="hidden md:inline-flex" />
            </div>
          </div>
          <BookDetails book={book} />
        </div>
        <div className="flex items-center justify-between">
          <BookMeta book={book} />
          <BookLink url={getBookUrl(book.content)} />
        </div>
      </div>
    </GradientBorder>
  )
}

function BookMeta({ book }: { book: Books }) {
  return (
    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <Twemoji emoji="writing-hand" /> by{' '}
        <span className="font-semibold">{book.author_name}</span>
      </div>
      <div className="hidden items-center gap-1 md:flex">
        <span>(avg. {book.average_rating}/5)</span>
      </div>
    </div>
  )
}

function BookLink({ url, className }: { url?: string | null; className?: string }) {
  if (url) {
    return (
      <Link href={url} className={className}>
        <GoodreadsLogo className="text-goodreads h-5 dark:text-gray-100" />
      </Link>
    )
  }
  return null
}

function getBookUrl(content: string) {
  try {
    const url = content.match(/<a href="([^"]*)">/)?.[1]?.split('?')[0]
    return url
  } catch (error) {
    console.error('Error parsing book URL:', error)
    return null
  }
}
