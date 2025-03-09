import { Link } from '@/app/components/ui/Link'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
      data-umami-event={`tags-${lowercaseAndHyphenate(text)}-clicked`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
