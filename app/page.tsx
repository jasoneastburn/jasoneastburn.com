import Quote from '@/app/components/ui/Quote'
import { TypedText } from '@/app/components/ui/TypedText'
import { LatestPosts } from '@/app/home/LatestPosts'
import { allCoreContent } from '@/app/utils/content-layer'
import { sortPosts } from '@/app/utils/misc'
import { signInAnonymously } from '@/lib/firebase/auth'
import { getQuotes } from '@/lib/firebase/firestore'
import { allBlogs } from 'contentlayer/generated'

export const dynamic = 'force-dynamic'

async function fetchInitialData() {
  try {
    const [user, quotes] = await Promise.all([signInAnonymously(), getQuotes()])
    return { user, quotes }
  } catch (error) {
    console.error('Error fetching initial data:', error)
    return { user: null, quotes: [] }
  }
}

export default async function Page() {
  const { user, quotes } = await fetchInitialData()
  const sortedPosts = sortPosts(allBlogs)
  const corePosts = allCoreContent(sortedPosts)

  return (
    <div>
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
        <TypedText />
      </h1>
      <p className="prose dark:prose-invert max-w-none divide-y divide-gray-200 pt-8 pb-8 xl:col-span-2 dark:divide-gray-700">
        Hi, I&apos;m Jason! Welcome to my digital slice of the world. I&apos;m passionate about
        learning technology, creating solutions to help people, and building a community. You can
        find me building and teaching random things here and on my Github page. I&apos;m often
        making really bad dad jokes, sharing my sarcasm on social media, and playing the random game
        at home.
      </p>
      <Quote quotes={quotes} />
      <LatestPosts posts={corePosts} />
    </div>
  )
}
