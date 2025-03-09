import { Link } from '@/app/components/ui/Link'
import { Twemoji } from '@/app/components/ui/Twemoji'

export default function NotFound() {
  return (
    <div className="mt-12 mb-24 flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-[1.25] md:border-r-2 md:pr-6 md:text-6xl md:leading-[1.4] dark:text-gray-100">
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
          className="inline-flex items-center justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-xs transition-colors duration-150 hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none dark:hover:bg-blue-500"
          data-umami-event="page-not-found-home-clicked"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
