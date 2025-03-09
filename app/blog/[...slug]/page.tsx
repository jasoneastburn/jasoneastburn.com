import { MDX_COMPONENTS } from '@/app/components/mdx/MDXComponents'
import { MDXLayoutRenderer } from '@/app/components/mdx/MDXLayoutRenderer'
import { PostBanner } from '@/app/layouts/PostBanner'
import { PostLayout } from '@/app/layouts/PostLayout'
import { PostSimple } from '@/app/layouts/PostSimple'
import { allCoreContent, coreContent } from '@/app/utils/content-layer'
import { sortPosts } from '@/app/utils/misc'
import { SITE_METADATA } from '@/data/site-metadata'
import type { Author, Blog } from 'contentlayer/generated'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const DEFAULT_LAYOUT = 'PostLayout'
const LAYOUTS = {
  PostSimple,
  PostLayout,
  PostBanner,
}

const blogMap = new Map(allBlogs.map((blog) => [blog.slug, blog]))
const authorMap = new Map(allAuthors.map((author) => [author.slug, author]))

const getAuthorDetails = (authorSlugs: string[]) => {
  return authorSlugs
    .map((slug) => {
      const author = authorMap.get(slug)
      return author ? coreContent(author as Author) : null
    })
    .filter(Boolean) as Author[]
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const post = blogMap.get(slug)

  if (!post) {
    return
  }

  const authorDetails = getAuthorDetails(post.authors || ['default'])
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)

  let imageList = [SITE_METADATA.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }

  const ogImages = imageList.map((img) => ({
    url: img.includes('http') ? img : SITE_METADATA.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: SITE_METADATA.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [SITE_METADATA.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  return allBlogs.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)

  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = blogMap.get(slug) as Blog
  const authorDetails = getAuthorDetails(post.authors || ['default'])
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData

  jsonLd['author'] = authorDetails.map((author) => ({
    '@type': 'Person',
    name: author.name,
  }))

  const Layout = LAYOUTS[post.layout || DEFAULT_LAYOUT]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={MDX_COMPONENTS} toc={post.toc} />
      </Layout>
    </>
  )
}
