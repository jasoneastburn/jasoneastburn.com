import { SITE_METADATA } from '@/data/site-metadata'

const AnalyticsButton = () => {
  return (
    <button
      aria-label="Open analytics"
      type="button"
      className="hover:text-primary-500 dark:hover:text-primary-400"
      data-umami-event="view-analytics"
      onClick={() => window.open(SITE_METADATA.analyticsUrl, '_blank')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
      </svg>
    </button>
  )
}

export default AnalyticsButton
