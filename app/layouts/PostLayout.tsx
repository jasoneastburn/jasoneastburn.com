import type { Author, Blog } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { BackToPosts } from '@/app/components/blog/BackToPosts'
import { Banner } from '@/app/components/blog/Banner'
import { BlogMeta } from '@/app/components/blog/BlogMeta'
import { Comments } from '@/app/components/blog/Comments'
import { PostNav } from '@/app/components/blog/PostNav'
import { PostTitle } from '@/app/components/blog/PostTitle'
import { Reactions } from '@/app/components/blog/Reactions'
import { ScrollButtons } from '@/app/components/blog/ScrollButtons'
import { SocialShare } from '@/app/components/blog/SocialShare'
import { TableOfContents } from '@/app/components/blog/TableOfContents'
import { GradientDivider } from '@/app/components/ui/GradientDivider'
import { SITE_METADATA } from '@/data/site-metadata'
import type { StatsType } from '../../database/schema'
import type { CoreContent } from '../models/mdx'
import Tag from '@/app/components/ui/Tag'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Author>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, images, lastmod, readingTime, date, filePath, title, tags, toc, type } = content
  const postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <div>
      <ScrollButtons />
      <article className="pt-6">
        <div className="space-y-4">
          <PostTitle>{title}</PostTitle>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div className="space-y-4 pt-4">
            <Banner banner={images?.[0] || SITE_METADATA.socialBanner} />
          </div>
          <div className="flex items-center justify-between gap-2 pb-4 lg:pt-2">
            <BlogMeta
              date={date}
              lastmod={lastmod}
              type={type.toLowerCase() as StatsType}
              slug={slug}
              readingTime={readingTime}
            />
            <SocialShare
              postUrl={postUrl}
              filePath={filePath}
              title={title}
              className="hidden md:flex"
            />
          </div>
        </div>
        <GradientDivider className="mt-1 mb-2" />
        <div className="grid grid-cols-1 gap-12 pt-8 pb-10 lg:grid-cols-12 lg:pt-10">
          <div className="divide-y divide-gray-200 lg:col-span-8 xl:col-span-9 dark:divide-gray-700">
            <div className="prose dark:prose-invert lg:prose-lg max-w-none lg:pb-8">{children}</div>
          </div>
          <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="space-y-4">
                <div className="divide-y divide-gray-200 border-b border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                  <TableOfContents toc={toc} />
                </div>
                <Reactions type={type.toLowerCase() as StatsType} slug={slug} />
                <div className="hidden">{/* ... your hidden scripts ... */}</div>
              </div>
            </div>
          </div>
        </div>
        <GradientDivider />
        <div className="space-y-4">
          <PostNav next={next} nextLabel="Next post" prev={prev} prevLabel="Previous post" />
          <Comments configs={{ reactions: '0' }} />
        </div>
      </article>
    </div>
  )
}
