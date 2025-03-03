import Image from '@/components/ui/Image'
import SocialIcon from '@/components/social-icons'
import { Button } from '@/components/ui/Button'
import { Timeline } from '@/components/ui/Timeline'
import { Twemoji } from '@/components/ui/Twemoji'
import { genPageMetadata } from 'app/seo'
import { type Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import siteMetadata from '@/data/siteMetadata'
import { getCareerTimeline } from 'lib/firebase/firestore'
import type { CareerTimeline } from 'app/models/career-timeline'

export const metadata = genPageMetadata({
  title: 'About',
})

async function loadCareerTimeline() {
  const response = await getCareerTimeline()

  return response
}

export default async function Page() {
  const careerTimeline: CareerTimeline[] = await loadCareerTimeline()
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-500 italic dark:text-gray-400">
            A little insight into me...
          </p>
        </div>
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
              href={siteMetadata.support.buyMeACoffee}
              target="_blank"
              className="mt-3 [&_.image-container]:mx-0"
            >
              <Image
                className="mt-6 mb-4"
                src="/images/about/bmc-button.png"
                alt="Buy Me A Coffee"
                width={213.7}
                height={60}
                style={{ height: 60 }}
              />
            </a>
            <a
              href={siteMetadata.support.paypal}
              target="_blank"
              className="flex h-15 w-[214px] items-center justify-center rounded-lg bg-[#FFFFFF] p-1"
            >
              <Image
                src="/images/about/paypal-logo.png"
                alt="Donate via PayPal"
                width={225.88}
                height={60}
                style={{ height: 30, width: 'auto' }}
              />
            </a>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            <h2 className="mt-0">
              Hello, nerds! <Twemoji emoji="waving-hand" />
            </h2>
            <MDXLayoutRenderer code={author.body.code} />
            <div className="mt-[2em] mb-[1em] flex items-center justify-between [&>h2]:my-0">
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
