import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import Image from '@/components/ui/Image'
import Link from '@/components/ui/Link'
import { Twemoji } from '@/components/ui/Twemoji'
import type { CareerTimeline } from 'app/models/career-timeline'

interface TimelineProps {
  events: CareerTimeline[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <ul className="m-0 list-none p-0">
      {events.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === events.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: CareerTimeline; last: boolean }) {
  const { org, title, icon, url, logo, start, end, event, details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:top-15 before:left-9',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="mt-0 h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          {/* <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          /> */}
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs text-gray-500 tabular-nums dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <div>{org}</div>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <ul style={{ listStyleType: 'disc' }}>
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </details>
    </div>
  )
}
