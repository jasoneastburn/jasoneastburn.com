import { Image, Zoom } from '@/app/components/ui/Image'
import { capitalize, kebabCaseToPlainText } from '@/app/utils/misc'
import { clsx } from 'clsx'

export function Banner({ banner, className }: { banner: string; className?: string }) {
  const [path] = banner.split('__')
  const handle = path.split('/').pop() || ''
  return (
    <div className={clsx('relative', className)}>
      <Zoom>
        <Image
          src={banner}
          alt={capitalize(kebabCaseToPlainText(handle)) || 'Article banner photo'}
          width={1600}
          height={900}
          className="h-auto w-full rounded-lg"
        />
      </Zoom>
    </div>
  )
}
