import Link from '@/app/components/ui/Link'
import siteMetadata from '@/data/siteMetadata'
import { BrandIcon } from '../ui/BrandIcon'
import clsx from 'clsx'

const BuiltWith = () => (
  <div className="flex items-center space-x-1">
    <div className="flex space-x-1.5">
      <BrandIcon name="NextJS" iconClassName={clsx('h-5 w-5')} />
      <BrandIcon name="TailwindCSS" iconClassName={clsx('h-5 w-5')} />
      <BrandIcon name="Typescript" iconClassName={clsx('h-5 w-5')} />
      <BrandIcon name="Markdown" iconClassName={clsx('h-5 w-5')} />
      <BrandIcon name="Umami" iconClassName={clsx('h-5 w-5')} />
      <BrandIcon name="GitHub" iconClassName={clsx('h-5 w-5')} />
    </div>
  </div>
)

export default BuiltWith
