import { Link } from '@/app/components/ui/Link'
import { lowercaseAndHyphenate } from '@/app/utils/strings'

export function DiscussOnX({ postUrl, postTitle }: { postUrl: string; postTitle: string }) {
  return (
    <Link
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      href={`https://x.com/search?q=${encodeURIComponent(postUrl)}`}
      rel="nofollow"
      data-umami-event={`post-${lowercaseAndHyphenate(postTitle)}-on-x-clicked`}
    >
      Discuss on <span className="font-semibold">X</span>
    </Link>
  )
}
