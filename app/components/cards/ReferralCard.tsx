import { clsx } from 'clsx'
import type { BrandsMap } from '@/app/components/ui/BrandIcon'
import { BrandIcon } from '@/app/components/ui/BrandIcon'
import { GradientBorder } from '@/app/components/ui/GradientBorder'
import { Link } from '@/app/components/ui/Link'
import { SITE_METADATA } from '@/data/site-metadata'
import Image from 'next/image'
import { TiltedGridBackground } from '../ui/TiltedGridBackground'

export function ReferralCard({ description, image, link, name }) {
  return (
    <GradientBorder className="rounded-2xl">
      <TiltedGridBackground className="inset-0 z-[-1]" />
      <Link
        href={link}
        title={name}
        className={clsx([
          'relative flex h-full rounded-2xl',
          'bg-zinc-50 dark:bg-white/5',
          'transition-shadow hover:shadow-md',
          'hover:shadow-zinc-900/5 dark:hover:shadow-black/15',
        ])}
      >
        <div className="relative w-full px-4 pt-10 pb-6">
          <Image
            alt={SITE_METADATA.title}
            src={image}
            className="absolute -top-10 z-10 text-gray-900 dark:text-white"
            width={125}
            height={25}
          />
          <h3 className="mt-4 text-xl leading-7 font-semibold">{name}</h3>
          <p className="mt-1.5 line-clamp-5 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </Link>
    </GradientBorder>
  )
}
