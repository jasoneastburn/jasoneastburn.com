import { ListLayoutWithTags } from '@/app/layouts/ListLayoutWithTags'
import { genPageMetadata } from '@/app/seo'
import { allCoreContent } from '@/app/utils/content-layer'
import { sortPosts } from '@/app/utils/misc'
import { SITE_METADATA } from '@/data/site-metadata'
import tagData from '@/json/tag-data.json'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'

interface TagPageProps {
  params: { tag: string }
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${SITE_METADATA.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${SITE_METADATA.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  return Object.keys(tagData as Record<string, number>).map((tag) => ({
    tag: encodeURI(tag),
  }))
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const title = `#${tag[0]}${tag.split(' ').join('-').slice(1)}`
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags?.map((t) => slug(t)).includes(tag)))
  )

  return (
    <ListLayoutWithTags
      title={title}
      description={
        <>
          Things I've written about <span className="font-semibold">#{tag}</span>
        </>
      }
      posts={filteredPosts}
    />
  )
}
