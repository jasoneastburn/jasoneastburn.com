import BrandIcon from '@/components/ui/BrandIcon'
import Link from '@/components/ui/Link'
import siteMetadata from '@/data/siteMetadata'

const BuiltWith = () => (
  <div className="flex items-center space-x-1">
    <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
    <div className="flex space-x-1.5">
      <Link href="https://nextjs.org">
        <BrandIcon type="NextJS" className="h-5 w-5" />
      </Link>
      <Link href="https://tailwindcss.com">
        <BrandIcon type="TailwindCSS" className="h-5 w-5" />
      </Link>
      <Link href="https://www.typescriptlang.org">
        <BrandIcon type="Typescript" className="h-5 w-5" />
      </Link>
      <Link href={siteMetadata.siteRepo}>
        <BrandIcon type="GitHub" className="h-5 w-5" />
      </Link>
    </div>
  </div>
)

export default BuiltWith
