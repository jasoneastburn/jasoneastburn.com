import type { Document, MDX } from 'contentlayer2/core'

export type MDXDocument = Document & { body: MDX }

export type MDXDocumentDate = MDXDocument & {
  date: string
}

export type CoreContent<T> = Omit<T, 'body' | '_raw' | '_id'>
