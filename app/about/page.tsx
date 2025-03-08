import { Button } from '@/app/components/ui/Button'
import { Image } from '@/app/components/ui/Image'
import { PageHeader } from '@/app/components/ui/PageHeader'
import { Timeline } from '@/app/components/ui/Timeline'
import { Twemoji } from '@/app/components/ui/Twemoji'
import { SITE_METADATA } from '@/data/site-metadata'
import type { CareerTimeline } from 'app/models/career-timeline'
import { genPageMetadata } from 'app/seo'
import { type Author, allAuthors } from 'contentlayer/generated'
import { getCareerTimeline } from 'lib/firebase/firestore'
import { MDXLayoutRenderer } from '@/app/components/mdx/MDXLayoutRenderer'

export const metadata = genPageMetadata({
  title: 'About',
})

async function loadCareerTimeline() {
  const response = await getCareerTimeline()

  return response
}

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Author
  const careerTimeline: CareerTimeline[] = await loadCareerTimeline()

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PageHeader
          title="About"
          description="A little insight into me..."
          className="border-b border-gray-200 dark:border-gray-700"
        />
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center pt-8">
            {author.avatar && (
              <Image
                src={author.avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{author.name}</h3>
            <div className="text-center text-gray-500 dark:text-gray-400">{author.occupation}</div>
            <div className="text-center text-gray-500 dark:text-gray-400">{author.company}</div>
            <a
              href={SITE_METADATA.support.buyMeACoffee}
              target="_blank"
              className="mt-3 [&_.image-container]:mx-0"
            >
              <Image
                className="mt-6 mb-4 h-15"
                src="/images/about/bmc-button.png"
                alt="Buy Me A Coffee"
                width={213.7}
                height={60}
              />
            </a>
            <a
              href={SITE_METADATA.support.paypal}
              target="_blank"
              className="mt-3 flex h-16 w-52 items-center justify-center rounded-lg bg-white p-1"
            >
              <Image
                src="/images/about/paypal-logo.png"
                alt="Donate via PayPal"
                width={225.88}
                height={60}
                className="h-8"
              />
            </a>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 xl:col-span-2">
            <h2 className="mt-0">
              Hello, nerds! <Twemoji emoji="waving-hand" />
            </h2>
            <MDXLayoutRenderer code={author.body.code} />
            <div className="mt-8 mb-4 flex items-center justify-between [&>h2]:my-0">
              <h2 className="mb-0">Career</h2>
              <Button as="a" href="/files/resume.pdf" target="_blank">
                <span>Resume</span>
                <Twemoji emoji="page-facing-up" />
              </Button>
            </div>
            <Timeline events={careerTimeline} />
          </div>
        </div>
      </div>
    </>
  )
}
