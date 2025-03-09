'use client'

import { Link } from '@/app/components/ui/Link'
import type { GithubRepository, CommitState } from '@/app/models/github-repository'
import { fetcher } from '@/app/utils/misc'
import { lowercaseAndHyphenate } from '@/app/utils/strings'
import { SITE_METADATA } from '@/data/site-metadata'
import { CheckCheck, Circle, X } from 'lucide-react'
import useSWR from 'swr'

export function GithubCommit() {
  const siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')
  const { data: repo } = useSWR<GithubRepository>(`/api/github?repo=${siteRepo}`, fetcher)

  if (!repo || !repo.lastCommit) {
    return null
  }

  const { url, message, abbreviatedOid } = repo.lastCommit

  return (
    <div className="flex items-center">
      <span className="pr-1"> • </span>
      <Link
        href={url}
        className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400"
        title={message}
        data-umami-event={`github-commit-${lowercaseAndHyphenate(abbreviatedOid)}-visited`}
      >
        {abbreviatedOid}
      </Link>
    </div>
  )
}

function CommitStatus({ status }: { status: CommitState }) {
  switch (status) {
    case 'EXPECTED':
    case 'SUCCESS':
      return <CheckCheck size={16} strokeWidth={2} className="text-green-700" />
    case 'PENDING':
      return (
        <Circle size={12} strokeWidth={1.5} fill="green" className="animate-pulse text-green-700" />
      )
    case 'ERROR':
    case 'FAILURE':
      return <X size={16} strokeWidth={2} className="text-red-700" />
    default:
      return null
  }
}
