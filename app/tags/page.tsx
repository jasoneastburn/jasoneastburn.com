import { Link } from '@/app/components/ui/Link'
import Tag from '@/app/components/ui/Tag'
import { genPageMetadata } from '@/app/seo'
import tagData from '@/json/tag-data.json'
import { slug } from 'github-slugger'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.entries(tagCounts).sort(([, a], [, b]) => b - a)

  return (
    <>
      <div className="flex flex-col md:mt-12 md:mb-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-[1.25] md:border-r-2 md:pr-6 md:text-6xl md:leading-[1.4] dark:text-gray-100">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {sortedTags.length === 0 && 'No tags found.'}
          {sortedTags.map(([tag, count]) => (
            <div key={tag} className="mt-2 mr-5 mb-2">
              <Tag text={tag} />
              <Link
                href={`/tags/${slug(tag)}`}
                className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                aria-label={`View posts tagged ${tag}`}
              >
                {` (${count})`}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
