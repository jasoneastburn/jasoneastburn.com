import type { MDXComponents } from 'mdx/types'
import { Image, Zoom, type ImageProps } from '@/app/components/ui/Image'
import { Link } from '@/app/components/ui/Link'
import { Twemoji } from '@/app/components/ui/Twemoji'
import { CodeTitle } from '@/app/components/mdx/CodeTitle'
import { Pre } from '@/app/components/mdx/Pre'
import { TableWrapper } from '@/app/components/mdx/TableWrapper'

export const MDX_COMPONENTS: MDXComponents = {
  Image: ({ alt, ...rest }: ImageProps) => {
    return (
      <Zoom>
        <Image alt={alt} {...rest} />
      </Zoom>
    )
  },
  Twemoji,
  CodeTitle,
  a: Link,
  pre: Pre,
  table: TableWrapper,
}
