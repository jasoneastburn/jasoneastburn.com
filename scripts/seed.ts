import { writeFileSync } from 'fs'
import Parser from 'rss-parser'
import siteMetadata from '@/data/siteMetadata'
import type { Books } from 'app/models/books'

const parser = new Parser<{ [key: string]: unknown }, Books>({
  customFields: {
    item: [
      'guid',
      'pubDate',
      'title',
      'link',
      'book_id',
      'book_image_url',
      'book_small_image_url',
      'book_medium_image_url',
      'book_large_image_url',
      'book_description',
      'author_name',
      'isbn',
      'user_name',
      'user_rating',
      'user_read_at',
      'user_date_added',
      'user_date_created',
      'user_shelves',
      'user_review',
      'average_rating',
      'book_published',
    ],
  },
})

export async function fetchGoodreadsBooks() {
  if (siteMetadata.goodreadsFeedUrl) {
    try {
      const data = await parser.parseURL(siteMetadata.goodreadsFeedUrl)
      for (const book of data.items) {
        book.book_description = book.book_description
          .replace(/<[^>]*(>|$)/g, '')
          .replace(/\s\s+/g, ' ')
          .replace(/^["|“]|["|“]$/g, '')
          .replace(/\.([a-zA-Z0-9])/g, '. $1')
        book.content = book.content.replace(/\n/g, '').replace(/\s\s+/g, ' ')
      }
      writeFileSync(`./data/books.json`, JSON.stringify(data.items))
      console.log('📚 Books seeded.')
    } catch (error) {
      console.error(`Error fetching the Goodreads RSS feed: ${error.message}`)
    }
  } else {
    console.log('📚 No Goodreads RSS feed found.')
  }
}

export async function seed() {
  await fetchGoodreadsBooks()
}

seed()
