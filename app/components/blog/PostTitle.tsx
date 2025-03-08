import type { ReactNode } from 'react'

export function PostTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-0 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
      {children}
    </h1>
  )
}
