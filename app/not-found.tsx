import Link from '@/app/components/ui/Link'
import { Twemoji } from './components/ui/Twemoji'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-12 md:mb-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <div className="mb-4 flex items-center text-xl leading-normal font-bold md:text-2xl">
          <p className="pr-2">Hmm... it looks like you're lost.</p>
          <Twemoji emoji={'face-with-monocle'} />
        </div>
        <p className="mb-8">But don't worry, you can find plenty of other things on my homepage.</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 hover:bg-blue-700 focus:outline-hidden dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
