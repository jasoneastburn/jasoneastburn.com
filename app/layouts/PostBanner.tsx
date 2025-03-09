import { Banner } from '@/app/components/blog/Banner'
import { BlogMeta } from '@/app/components/blog/BlogMeta'
import { Comments } from '@/app/components/blog/Comments'
import { DiscussOnX } from '@/app/components/blog/DiscussOnX'
import { EditOnGithub } from '@/app/components/blog/EditOnGithub'
import { PostTitle } from '@/app/components/blog/PostTitle'
import { ScrollButtons } from '@/app/components/blog/ScrollButtons'
import Tag from '@/app/components/ui/Tag'
import type { CoreContent } from '@/app/models/mdx'
import { SITE_METADATA } from '@/data/site-metadata'
import type { StatsType } from '@/database/schema'
import type { Blog } from 'contentlayer/generated'
import { clsx } from 'clsx'
import React from 'react'
import type { ReactNode } from 'react'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  )
}

function PostHeader({
  title,
  date,
  lastmod,
  type,
  slug,
  readingTime,
  tags,
}: {
  title: string
  date: string
  lastmod: string | undefined
  type: string
  slug: string
  readingTime: { text: string; minutes: number; words: number }
  tags: string[]
}) {
  return (
    <div className="space-y-4">
      <TagList tags={tags} />
      <PostTitle>{title}</PostTitle>
      <dl>
        <div>
          <dt className="sr-only">Published on</dt>
          <BlogMeta
            date={date}
            lastmod={lastmod}
            type={type.toLowerCase() as StatsType}
            slug={slug}
            readingTime={{ ...readingTime, time: readingTime.minutes * 60 * 1000 }}
          />
        </div>
      </dl>
    </div>
  )
}

function Credit({ image, className }: { image: string; className?: string }) {
  const parts = image.split('__')
  if (parts.length === 3) {
    const [, author, id] = parts
    return (
      <div className={clsx('text-right text-sm italic', className)}>
        Photo by{' '}
        <a
          className="text-primary-500 dark:text-primary-400 underline-offset-4 hover:underline"
          href={`https://unsplash.com/@${author}`}
          target="_blank"
          rel="noreferrer"
        >
          <span data-umami-event="banner-author">@{author}</span>
        </a>{' '}
        on{' '}
        <a
          className="text-primary-500 dark:text-primary-400 underline-offset-4 hover:underline"
          href={`https://unsplash.com/photos/${id}`}
          target="_blank"
          rel="noreferrer"
          data-umami-event="unsplash-link"
        >
          <span data-umami-event="banner-unsplash">Unsplash</span>
        </a>
      </div>
    )
  }
  return null
}

export const PostBanner = React.memo(function PostBanner({ content, children }: LayoutProps) {
  const { slug, type, title, images, date, lastmod, readingTime, tags, filePath } = content
  const postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <div>
      <ScrollButtons />
      <article className="space-y-6 pt-6 lg:space-y-16">
        <PostHeader
          title={title}
          date={date}
          lastmod={lastmod}
          type={type.toLowerCase()}
          slug={slug}
          readingTime={{ ...readingTime, time: readingTime.minutes * 60 * 1000 }}
          tags={tags}
        />
        <div className="space-y-4 pt-4">
          <Banner
            banner={images?.[0] || SITE_METADATA.socialBanner}
            className="lg:-mx-8 xl:-mx-36 2xl:-mx-52"
          />
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
        <div className="space-y-8 border-t border-gray-200 pt-4 dark:border-gray-700">
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <DiscussOnX postUrl={postUrl} />
              <span className="text-gray-500">/</span>
              <EditOnGithub filePath={filePath} />
            </div>
          </div>
          <Comments />
        </div>
      </article>
    </div>
  )
})
