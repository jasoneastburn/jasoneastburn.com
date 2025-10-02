import { GradientBorder } from '@/app/components/ui/GradientBorder'
import { Link } from '@/app/components/ui/Link'
import { TiltedGridBackground } from '@/app/components/ui/TiltedGridBackground'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { SITE_METADATA } from '@/data/site-metadata'
import Image from 'next/image'

export function ReferralCard({ description, image, link, name }) {
  return (
    <GradientBorder className="rounded-2xl">
      <TiltedGridBackground className="inset-0 z-[-1]" />
      <Link
        href={link}
        title={name}
        className="relative flex h-full rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/5 dark:hover:shadow-black/15"
        data-umami-event={`referral-${lowercaseAndHyphenate(name)}-visited`}
      >
        <div className="relative flex w-full p-4">
          <div className="flex-grow pr-4">
            <h3 className="mt-2 text-xl leading-7 font-semibold">{name}</h3>
            <p className="mt-1.5 line-clamp-5 text-zinc-600 dark:text-zinc-400">{description}</p>
          </div>
          <div className="absolute right-4 flex h-[50px] w-[120px] -translate-y-7/8 items-center justify-center">
            <Image
              alt={`${name} logo`}
              src={image}
              className="object-contain"
              width={120}
              height={50}
            />
          </div>
        </div>
      </Link>
    </GradientBorder>
  )
}
