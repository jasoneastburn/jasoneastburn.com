import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isAnchorLink = href && href.startsWith('#')
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} aria-label={`Link for ${rest.title}`} />
  }

  return (
    <a
      className="break-words"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      aria-label={`Link for ${rest.title}`}
    />
  )
}

export default CustomLink
