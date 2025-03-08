import type { MDXDocument, CoreContent } from '@/app/models/mdx'

const isProduction = process.env.NODE_ENV === 'production'

function omit<Obj, Keys extends keyof Obj>(obj: Obj, keys: Keys[]): Omit<Obj, Keys> {
  const result = Object.assign({}, obj)
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}

export function coreContent<T extends MDXDocument>(content: T): CoreContent<T> {
  return omit(content, ['body', '_raw', '_id'])
}

export function allCoreContent<T extends MDXDocument>(contents: T[]): CoreContent<T>[] {
  if (isProduction)
    return contents.map((c) => coreContent(c)).filter((c) => !('draft' in c && c.draft === true))
  return contents.map((c) => coreContent(c))
}
