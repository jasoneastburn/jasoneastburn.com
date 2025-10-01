import fs from 'fs'
import { sync as sizeOf } from 'probe-image-size'
import type { Parent, Node, Literal } from 'unist'
import { visit } from 'unist-util-visit'

export type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  attributes: (Literal & { name: string })[]
}

export function remarkImgToJsx() {
  return (tree: Node) => {
    visit(
      tree,
      (node: Parent): node is Parent =>
        node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node: Parent) => {
        const imageNodeIndex = node.children.findIndex((n) => n.type === 'image')
        const imageNode = node.children[imageNodeIndex] as ImageNode

        if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
          const dimensions = sizeOf(fs.readFileSync(`${process.cwd()}/public${imageNode.url}`))

          imageNode.type = 'mdxJsxFlowElement'
          imageNode.name = 'Image'
          imageNode.attributes = [
            { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
            { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
            { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
            { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
          ]

          node.type = 'div'
          node.children[imageNodeIndex] = imageNode
        }
      }
    )
  }
}
