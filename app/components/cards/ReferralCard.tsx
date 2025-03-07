import { clsx } from 'clsx'
import type { BrandsMap } from '@/app/components/ui/BrandIcon'
import { BrandIcon } from '@/app/components/ui/BrandIcon'
import { GradientBorder } from '@/app/components/ui/GradientBorder'
import Link from '@/app/components/ui/Link'
import { title } from '@/data/siteMetadata'
import Image from 'next/image'

export function ReferralCard({ description, image, link, name }) {
  return (
    <GradientBorder className="rounded-2xl">
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
        <Image
          alt={title}
          src={image}
          className="absolute -top-5 left-4 z-10 text-gray-900 dark:text-white"
          width={75}
          height={25}
        />
        <div className="relative w-full px-4 pt-6 pb-6">
          <h3 className="mt-4 text-xl leading-7 font-semibold">{name}</h3>
          <p className="mt-1.5 line-clamp-5 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </Link>
    </GradientBorder>
  )
}
