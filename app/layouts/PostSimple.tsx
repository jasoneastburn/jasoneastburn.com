import { BlogMeta } from '@/app/components/blog/BlogMeta'
import { Comments } from '@/app/components/blog/Comments'
import { PostTitle } from '@/app/components/blog/PostTitle'
import { ScrollButtons } from '@/app/components/blog/ScrollButtons'
import { GradientDivider } from '@/app/components/ui/GradientDivider'
import Tag from '@/app/components/ui/Tag'
import type { CoreContent } from '@/app/models/mdx'
import { SITE_METADATA } from '@/data/site-metadata'
import type { StatsType } from '@/database/schema'
import type { Blog } from 'contentlayer/generated'
import type { ReactNode } from 'react'

interface PostSimpleProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function PostSimple({ content, children }: PostSimpleProps) {
  const { slug, date, lastmod, title, type, tags, readingTime } = content
  const postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <div>
      <ScrollButtons />
      <article className="pt-6 lg:pt-12">
        <div className="mb-8 space-y-4">
          <PostTitle>{title}</PostTitle>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <dl>
            <div>
              <dt className="sr-only">Published on</dt>
              <BlogMeta
                date={date}
                lastmod={lastmod}
                type={type.toLowerCase() as StatsType}
                slug={slug}
                readingTime={readingTime}
              />
            </div>
          </dl>
        </div>
        <GradientDivider />
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">{children}</div>
        <GradientDivider className="mt-6 mb-8" />
        <div className="space-y-8">
          <Comments />
        </div>
      </article>
    </div>
  )
}
