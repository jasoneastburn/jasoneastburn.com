import yaml from 'js-yaml'
import type { Parent } from 'unist'
import { visit } from 'unist-util-visit'

export function remarkExtractFrontmatter() {
  return (tree: Parent, file) => {
    visit(tree, 'yaml', (node: Parent) => {
      //@ts-ignore
      file.data.frontmatter = yaml.load(node.value)
    })
  }
}
