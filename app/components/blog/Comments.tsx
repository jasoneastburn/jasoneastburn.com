'use client'

import { SITE_METADATA } from '@/data/site-metadata'
import type { BooleanString, InputPosition, Mapping } from '@giscus/react'
import GiscusComponent from '@giscus/react'
import { useTheme } from 'next-themes'

interface GiscusConfigs {
  category: string
  categoryId: string
  darkTheme: string
  inputPosition: InputPosition
  lang: string
  mapping: Mapping
  metadata: BooleanString
  reactions: BooleanString
  repo: `${string}/${string}`
  repositoryId: string
  theme: string
  themeURL: string
}

interface CommentsProps {
  className?: string
  configs?: Partial<GiscusConfigs>
}

export function Comments({ configs, className }: CommentsProps) {
  const defaultConfigs = SITE_METADATA.comments.giscusConfig as GiscusConfigs
  const {
    category,
    categoryId,
    darkTheme,
    inputPosition,
    lang,
    mapping,
    metadata,
    reactions,
    repo,
    repositoryId,
    theme,
    themeURL,
  } = { ...defaultConfigs, ...configs }

  const { theme: siteTheme, resolvedTheme } = useTheme()
  const commentsTheme =
    themeURL === ''
      ? siteTheme === 'dark' || resolvedTheme === 'dark'
        ? darkTheme
        : theme
      : themeURL

  return (
    <div id="comment" className={className}>
      <GiscusComponent
        category={category}
        categoryId={categoryId}
        emitMetadata={metadata}
        id="comments-container"
        inputPosition={inputPosition}
        lang={lang}
        loading="lazy"
        mapping={mapping}
        reactionsEnabled={reactions}
        repo={repo}
        repoId={repositoryId}
        theme={commentsTheme}
      />
    </div>
  )
}
