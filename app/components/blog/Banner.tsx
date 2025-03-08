import { clsx } from 'clsx'
import { Image, Zoom } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import { capitalize, kebabCaseToPlainText } from '../../utils/misc'

export function Banner({ banner, className }: { banner: string; className?: string }) {
  const [path, author, id] = banner.split('__')
  const handle = path.split('/').pop() || ''
  return (
    <div className={clsx('relative', className)}>
      <Image
        src={banner}
        alt={capitalize(kebabCaseToPlainText(handle)) || 'Article banner photo'}
        width={1600}
        height={900}
        className="h-auto w-full rounded-lg"
      />
    </div>
  )
}

interface CreditProps {
  author: string
  id: string
  className?: string
}

function Credit({ author, id, className }: CreditProps) {
  if (author && id) {
    return (
      <div className={clsx('italic', className)}>
        Photo by{' '}
        <Link
          className="underline-offset-4 hover:underline"
          href={`https://unsplash.com/@${author}`}
        >
          <span data-umami-event="banner-author">@{author}</span>
        </Link>{' '}
        on{' '}
        <Link
          className="underline-offset-4 hover:underline"
          href={`https://unsplash.com/photos/${id}`}
        >
          <span data-umami-event="banner-unsplash">Unsplash</span>
        </Link>
      </div>
    )
  }
  return null
}
