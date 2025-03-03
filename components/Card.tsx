import type { Key } from 'react'
import Image from './ui/Image'
import { BrandIcon } from './ui/BrandIcon'
import Link from './ui/Link'
import type { BrandsMap } from '@/components/ui/BrandIcon'
import clsx from 'clsx'

const Card = ({ title, description, imgSrc, href, tech }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
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
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="text-s mb-3 leading-8 font-bold tracking-tight">Stack</div>
        <div className="flex h-6 flex-wrap items-center gap-1.5">
          {tech?.map((tool: Key | null | undefined) => {
            return (
              <BrandIcon
                key={tool}
                name={tool as keyof typeof BrandsMap}
                iconClassName={clsx('h-6 w-6')}
              />
            )
          })}
        </div>
        <div className="mt-5">
          {href && (
            <Link
              href={href}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
