import type { Books } from '@/app/models/books'
import { SITE_METADATA } from '@/data/site-metadata'
import { promises as fsPromises } from 'fs'
import Parser from 'rss-parser'

const parser = new Parser<{ [key: string]: unknown }, Books>({
  customFields: {
    item: [
      'author_name',
      'average_rating',
      'book_description',
      'book_id',
      'book_image_url',
      'book_large_image_url',
      'book_medium_image_url',
      'book_published',
      'book_small_image_url',
      'guid',
      'isbn',
      'link',
      'pubDate',
      'title',
      'user_date_added',
      'user_date_created',
      'user_name',
      'user_rating',
      'user_read_at',
      'user_review',
      'user_shelves',
    ],
  },
})

const cleanDescription = (description: string): string => {
  return description
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s{2,}/g, ' ') // Remove multiple spaces
    .replace(/^["“]|["”]$/g, '') // Remove leading/trailing quotes
    .replace(/\.([a-zA-Z0-9])/g, '. $1') // Add space after periods
    .trim()
}

const cleanContent = (content: string): string => {
  return content
    .replace(/\n/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export async function fetchGoodreadsBooks() {
  if (SITE_METADATA.goodreadsFeedUrl) {
    try {
      const data = await parser.parseURL(SITE_METADATA.goodreadsFeedUrl)
      const items = data.items.map((book) => ({
        ...book,
        book_description: cleanDescription(book.book_description),
        content: cleanContent(book.content),
      }))

      if (items.length > 0) {
        await fsPromises.writeFile(`../json/books.json`, JSON.stringify(items))
        console.log('📚 Books seeded.')
      } else {
        console.log('📚 Goodreads feed was empty.')
      }
    } catch (error) {
      console.error(
        `Error fetching Goodreads RSS feed from ${SITE_METADATA.goodreadsFeedUrl}: ${error.message}`
      )
    }
  } else {
    console.log('📚 No Goodreads RSS feed found.')
  }
}

export async function seed() {
  await fetchGoodreadsBooks()
}

seed()
