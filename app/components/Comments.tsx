'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import { SITE_METADATA } from '@/data/site-metadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(true)

  if (!SITE_METADATA.comments?.provider) {
    return null
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={SITE_METADATA.comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
