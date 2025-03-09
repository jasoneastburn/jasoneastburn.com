import type { BrandsMap } from '@/app/components/ui/BrandIcon'
import { BrandIcon } from '@/app/components/ui/BrandIcon'
import { GradientBorder } from '@/app/components/ui/GradientBorder'
import { Image } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import { TiltedGridBackground } from '@/app/components/ui/TiltedGridBackground'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import clsx from 'clsx'
import { Fragment, useMemo } from 'react'

interface ProjectCardProps {
  description: string
  imgSrc?: string
  links?: { label: string; url: string }[]
  tech?: string[]
  title: string
}

const ProjectCard = ({ title, description, imgSrc, links, tech }: ProjectCardProps) => {
  const hasLink = useMemo(() => links && links.length > 0, [links])

  const imageElement = useMemo(() => {
    const imageProps = {
      alt: title,
      src: imgSrc || '',
      className: clsx(
        'object-cover object-center',
        imgSrc ? 'rounded-[40px]' : '',
        'h-48 md:h-32 lg:h-64'
      ),
      width: 544,
      height: 306,
    }

    if (imgSrc) {
      if (hasLink) {
        return (
          <Link
            href={links![0].url}
            aria-label={`Link to ${title}`}
            data-umami-event={`${lowercaseAndHyphenate(title)}-visited`}
          >
            <Image {...imageProps} alt={imageProps.alt || ''} />
          </Link>
        )
      } else {
        return <Image {...imageProps} alt={imageProps.alt || ''} />
      }
    }
    return null
  }, [imgSrc, hasLink, links, title])

  const titleElement = useMemo(() => {
    if (hasLink) {
      return (
        <Link
          href={links![0].url}
          aria-label={`Link to ${title}`}
          data-umami-event={`${lowercaseAndHyphenate(title)}-visited`}
        >
          {title}
        </Link>
      )
    }
    return title
  }, [title, hasLink, links])

  const linkElements = useMemo(() => {
    return links?.map(({ label, url }, idx) => (
      <Fragment key={url}>
        <Link
          href={url}
          className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400"
          data-umami-event={`${lowercaseAndHyphenate(title)}-visited`}
        >
          {label}
        </Link>
        {idx !== links.length - 1 && (
          <span className="hidden text-gray-400 md:inline dark:text-gray-500">|</span>
        )}
      </Fragment>
    ))
  }, [links, title])

  const techElements = useMemo(() => {
    return tech?.map((tool) => (
      <BrandIcon key={tool} name={tool as keyof typeof BrandsMap} iconClassName={clsx('h-6 w-6')} />
    ))
  }, [tech])

  return (
    <GradientBorder className="flex flex-col rounded-[40px] [box-shadow:0_8px_32px_rgba(194,194,218,.3)] dark:bg-white/5 dark:shadow-none">
      <TiltedGridBackground className="inset-0 z-[-1]" />
      {imageElement}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">{titleElement}</h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className={clsx('mt-auto flex grid-cols-2 gap-6 sm:gap-9 md:grid md:gap-0')}>
          <div className="space-y-1.5">
            <div className="text-s leading-8 font-bold tracking-tight">Links</div>
            <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-1.5">
              {linkElements}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-s leading-8 font-bold tracking-tight">Stack</div>
            <div className="flex h-6 flex-wrap items-center gap-1.5">{techElements}</div>
          </div>
        </div>
      </div>
    </GradientBorder>
  )
}

export default ProjectCard
