import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { signInAnonymously } from 'lib/firebase/auth'
import Quote from '@/components/Quote'
import { getQuotes } from 'lib/firebase/firestore'

export const dynamic = 'force-dynamic'

async function signIn() {
  return await signInAnonymously()
}

async function loadQuotes() {
  return await getQuotes()
}

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const user = await signIn()
  const quotes = await loadQuotes()

  return (
    <div>
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
        Welcome!
      </h1>
      <p className="prose dark:prose-invert max-w-none divide-y divide-gray-200 pt-8 pb-8 xl:col-span-2 dark:divide-gray-700">
        Hi, I&apos;m Jason! Welcome to my digital slice of the world. I&apos;m passionate about
        learning technology, creating solutions to help people, and building a community. You can
        find me building and teaching random things here and on my Github page. I&apos;m often
        making really bad dad jokes, sharing my sarcasm on social media, and playing the random game
        at home.
      </p>
      <Quote quotes={quotes} />
      <Main posts={posts} />
    </div>
  )
}
