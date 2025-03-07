'use client'

import Link from '@/app/components/ui/Link'
import { SITE_METADATA } from '@/data/site-metadata'
import type { GithubRepository, CommitState } from 'app/models/github-repository'
import useSWR from 'swr'
import { fetcher } from '../../utils/misc'
import { CheckCheck, Circle, X } from 'lucide-react'

export function GithubCommit() {
  const siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')
  const { data: repo } = useSWR<GithubRepository>(`/api/github?repo=${siteRepo}`, fetcher)
  console.log(repo)

  return (
    <div className="flex items-center">
      {repo?.lastCommit && (
        <>
          <span className="pr-1">{` • `}</span>
          <Link
            href={repo.lastCommit.url}
            className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-500 dark:text-gray-400"
            title={repo.lastCommit.message}
          >
            {repo.lastCommit.abbreviatedOid}
          </Link>
        </>
      )}
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
        <Circle size={12} strokeWidth={1.5} fill="green" className="animate-pulse text-[green]" />
      )
    case 'ERROR':
    case 'FAILURE':
      return <X size={16} strokeWidth={2} className="text-red-700" />
    default:
      return null
  }
}
