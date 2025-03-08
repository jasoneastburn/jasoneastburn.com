import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import type { Parent } from 'unist'
import { visit } from 'unist-util-visit'

export type TocItem = {
  depth: number
  url: string
  value: string
}

export type Toc = TocItem[]

function remarkTocHeadings() {
  return (tree: Parent, file) => {
    const toc: Toc = []
    visit(tree, 'heading', (node) => {
      const textContent = toString(node).replace(/<[^>]*(>|$)/g, '')
      if (textContent) {
        toc.push({
          value: textContent,
          url: '#' + slug(textContent),
          // @ts-ignore
          depth: node.depth,
        })
      }
    })
    file.data.toc = toc
  }
}

export async function extractTocHeadings(markdown: string): Promise<Toc> {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)

  return vfile.data.toc as Toc
}
