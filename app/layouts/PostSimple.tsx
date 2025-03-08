import type { Blog } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { BlogMeta } from '@/app/components/blog/BlogMeta'
import { Comments } from '@/app/components/blog/Comments'
import { DiscussOnX } from '@/app/components/blog/DiscussOnX'
import { EditOnGithub } from '@/app/components/blog/EditOnGithub'
import { PostTitle } from '@/app/components/blog/PostTitle'
import { ScrollButtons } from '@/app/components/blog/ScrollButtons'
import { SocialShare } from '@/app/components/blog/SocialShare'
import { GradientDivider } from '@/app/components/ui/GradientDivider'
import { SITE_METADATA } from '@/data/site-metadata'
import type { StatsType } from '../../database/schema'
import type { CoreContent } from '../models/mdx'
import Tag from '@/app/components/ui/Tag'

interface PostSimpleProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function PostSimple({ content, children }: PostSimpleProps) {
  const { slug, date, lastmod, title, type, tags, readingTime, filePath } = content
  const postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <div>
      <ScrollButtons />
      <article className="space-y-6 pt-6 lg:space-y-12">
        <div className="space-y-4">
          <PostTitle>{title}</PostTitle>
          <div className="flex flex-wrap">
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
        <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
        <GradientDivider className="mt-1 mb-2" />
        <div className="space-y-8">
          {/* <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <DiscussOnX postUrl={postUrl} />
              <span className="text-gray-500">/</span>
              <EditOnGithub filePath={filePath} />
            </div>
            <SocialShare postUrl={postUrl} filePath={filePath} title={title} />
          </div> */}
          <Comments />
        </div>
      </article>
    </div>
  )
}
