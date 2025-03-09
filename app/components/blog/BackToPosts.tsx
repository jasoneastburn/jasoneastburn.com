import { Link } from '@/app/components/ui/Link'
import { MoveLeft } from 'lucide-react'

export function BackToPosts({ label, className }: { label: string; className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/blog"
        className="flex w-fit items-center gap-3 font-medium"
        data-umami-event="back-to-posts-clicked"
      >
        <MoveLeft strokeWidth={1.5} />
        {label}
      </Link>
    </div>
  )
}
