import { Link } from '@/app/components/ui/Link'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { SITE_METADATA } from '@/data/site-metadata'

export function EditOnGithub({ filePath, postTitle }: { filePath: string; postTitle: string }) {
  return (
    <Link
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      href={`${SITE_METADATA.siteRepo}/blob/main/data/${filePath}?plain=1`}
      data-umami-event={`post-${lowercaseAndHyphenate(postTitle)}-on-github-clicked`}
    >
      Edit on <span className="font-semibold">GitHub</span>
    </Link>
  )
}
