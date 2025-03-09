import { escape } from '@/app/utils/html-escaper'
import { sortPosts } from '@/app/utils/misc'
import { SITE_METADATA } from '@/data/site-metadata'
import tagData from '@/json/tag-data.json'
import type { Blog } from 'contentlayer/generated'
import { mkdirSync, writeFileSync } from 'fs'
import { slug } from 'github-slugger'
import path from 'path'
import { allBlogs } from './../.contentlayer/generated/index.mjs'

const blogs = allBlogs as unknown as Blog[]
const RSS_PAGE = 'feed.xml'

function generateRssItem(item: Blog): string {
  const { siteUrl, email, author } = SITE_METADATA
  const tags = item.tags ? item.tags.map((t) => `<category>${t}</category>`).join('') : ''
  const description = item.summary ? `<description>${escape(item.summary)}</description>` : ''

  return `
    <item>
      <guid>${siteUrl}/blog/${item.slug}</guid>
      <title>${escape(item.title)}</title>
      <link>${siteUrl}/blog/${item.slug}</link>
      ${description}
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <author>${email} (${author})</author>
      ${tags}
    </item>
  `
}

function generateRss(items: Blog[], page = RSS_PAGE): string {
  const { title, siteUrl, description, language, email, author } = SITE_METADATA
  const rssItems = items.map(generateRssItem).join('')
  const lastBuildDate =
    items.length > 0 ? new Date(items[0].date).toUTCString() : new Date().toUTCString()

  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${escape(title)}</title>
        <link>${siteUrl}/blog</link>
        <description>${escape(description)}</description>
        <language>${language}</language>
        <managingEditor>${email} (${author})</managingEditor>
        <webMaster>${email} (${author})</webMaster>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <atom:link href="${siteUrl}/${page}" rel="self" type="application/rss+xml"/>
        ${rssItems}
      </channel>
    </rss>
  `
}

export async function generateRssFeed(): Promise<void> {
  const publishPosts = blogs.filter((post) => !post.draft)

  if (publishPosts.length > 0) {
    const sortedPosts = sortPosts([...publishPosts])
    writeFileSync(`./public/${RSS_PAGE}`, generateRss(sortedPosts))

    for (const tag of Object.keys(tagData)) {
      const filteredPosts = publishPosts.filter((p) => p.tags?.map((t) => slug(t)).includes(tag))
      if (filteredPosts.length > 0) {
        const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`)
        const rssPath = path.join('public', 'tags', tag)
        mkdirSync(rssPath, { recursive: true })
        writeFileSync(path.join(rssPath, RSS_PAGE), rss)
      }
    }
  }

  console.log('🗒️. RSS feed generated.')
}
