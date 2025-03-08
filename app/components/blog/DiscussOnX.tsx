import { Link } from '@/app/components/ui/Link'

export function DiscussOnX({ postUrl }: { postUrl: string }) {
  return (
    <Link
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      href={`https://x.com/search?q=${encodeURIComponent(postUrl)}`}
      rel="nofollow"
    >
      <span data-umami-event="discuss-on-x">
        Discuss on <span className="font-semibold">X</span>
      </span>
    </Link>
  )
}
