import { Fragment, type Key } from 'react'
import { Image } from './ui/Image'
import { BrandIcon } from './ui/BrandIcon'
import Link from './ui/Link'
import type { BrandsMap } from '@/app/components/ui/BrandIcon'
import clsx from 'clsx'
import { GradientBorder } from './ui/GradientBorder'
import { TiltedGridBackground } from './ui/TiltedGridBackground'

const Card = ({ title, description, imgSrc, links, tech }) => (
  <GradientBorder className="flex flex-col rounded-[40px] [box-shadow:0_8px_32px_rgba(194,194,218,.3)] dark:bg-white/5 dark:shadow-none">
    <TiltedGridBackground className="inset-0 z-[-1]" />
    {imgSrc &&
      (links[0] ? (
        <Link href={links[0].url} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="h-48 rounded-[40px] object-cover object-center md:h-36 lg:h-75" // Adjusted height for mobile
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-48"
          width={544}
          height={306}
        />
      ))}
    <div className="p-6">
      <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
        {links ? (
          <Link href={links[0].url} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      <div className={clsx('mt-auto flex grid-cols-2 gap-6 sm:gap-9 md:grid md:gap-0')}>
        <div className="space-y-1.5">
          <div className="text-s leading-8 font-bold tracking-tight">Links</div>
          <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-1.5">
            {links?.map(({ label, url }, idx) => (
              <Fragment key={url}>
                <Link
                  href={url}
                  className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400"
                >
                  {label}
                </Link>
                {idx !== links.length - 1 && (
                  <span className="hidden text-gray-400 md:inline dark:text-gray-500">|</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="text-s leading-8 font-bold tracking-tight">Stack</div>
          <div className="flex h-6 flex-wrap items-center gap-1.5">
            {tech?.map((tool) => {
              return (
                <BrandIcon
                  key={tool}
                  name={tool as keyof typeof BrandsMap}
                  iconClassName={clsx('h-6 w-6')}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </GradientBorder>
)

export default Card
