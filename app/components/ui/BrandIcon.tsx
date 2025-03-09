import { Link } from '@/app/components/ui/Link'
import Bash from 'public/icons/bash.svg'
import CSS from 'public/icons/css.svg'
import Commitlint from 'public/icons/commitlint.svg'
import Drizzle from 'public/icons/drizzle.svg'
import Env from 'public/icons/env.svg'
import Git from 'public/icons/git.svg'
import GitHub from 'public/icons/github.svg'
import Goodreads from 'public/icons/goodreads.svg'
import HeadlessUI from 'public/icons/headlessui.svg'
import Html from 'public/icons/html5.svg'
import JWT from 'public/icons/jsonwebtokens.svg'
import Java from 'public/icons/java.svg'
import Javascript from 'public/icons/javascript.svg'
import Markdown from 'public/icons/markdown.svg'
import MongoDB from 'public/icons/mongodb.svg'
import MySQL from 'public/icons/mysql.svg'
import NextJS from 'public/icons/nextjs.svg'
import Node from 'public/icons/nodejs.svg'
import Npm from 'public/icons/npm.svg'
import OpenAI from 'public/icons/openai.svg'
import Picsum from 'public/icons/picsum.svg'
import Pnpm from 'public/icons/pnpm.svg'
import Postcss from 'public/icons/postcss.svg'
import Prisma from 'public/icons/prisma.svg'
import Python from 'public/icons/python.svg'
import RSS from 'public/icons/rss.svg'
import React from 'public/icons/react.svg'
import Shopify from 'public/icons/shopify.svg'
import TailwindCSS from 'public/icons/tailwind.svg'
import Typescript from 'public/icons/typescript.svg'
import Umami from 'public/icons/umami.svg'
import VSCode from 'public/icons/vscode.svg'
import Webpack from 'public/icons/webpack.svg'
import { lowercaseAndHyphenate } from '@/app/utils/strings'

export const BrandsMap: Record<
  string,
  {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    url?: string
  }
> = {
  Commitlint: {
    Icon: Commitlint,
  },
  Html: {
    Icon: Html,
  },
  HTML: {
    Icon: Html,
  },
  Postcss: {
    Icon: Postcss,
  },
  Env: {
    Icon: Env,
  },
  React: {
    Icon: React,
    url: 'https://reactjs.org',
  },
  Drizzle: {
    Icon: Drizzle,
    url: 'https://orm.drizzle.team/',
  },
  Goodreads: {
    Icon: Goodreads,
    url: 'https://www.goodreads.com/',
  },
  Git: {
    Icon: Git,
    url: 'https://git-scm.com',
  },
  GitHub: {
    Icon: GitHub,
    url: 'https://github.com',
  },
  Javascript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  JavaScript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Typescript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  TypeScript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  Node: {
    Icon: Node,
    url: 'https://nodejs.org',
  },
  Npm: {
    Icon: Npm,
    url: 'https://www.npmjs.com',
  },
  Bash: {
    Icon: Bash,
    url: 'https://www.gnu.org/software/bash',
  },
  Markdown: {
    Icon: Markdown,
    url: 'https://www.markdownguide.org',
  },
  NextJS: {
    Icon: NextJS,
    url: 'https://nextjs.org',
  },
  TailwindCSS: {
    Icon: TailwindCSS,
    url: 'https://tailwindcss.com',
  },
  Prisma: {
    Icon: Prisma,
    url: 'https://www.prisma.io',
  },
  Umami: {
    Icon: Umami,
    url: 'https://umami.is',
  },
  OpenAI: {
    Icon: OpenAI,
    url: 'https://openai.com',
  },
  Shopify: {
    Icon: Shopify,
    url: 'https://shopify.dev',
  },
  Polaris: {
    Icon: Shopify,
    url: 'https://polaris.shopify.com/',
  },
  ThemeKit: {
    Icon: Shopify,
    url: 'https://shopify.dev/docs/storefronts/themes/tools/theme-kit',
  },
  HeadlessUI: {
    Icon: HeadlessUI,
    url: 'https://headlessui.dev',
  },
  Webpack: {
    Icon: Webpack,
    url: 'https://webpack.js.org',
  },
  JWT: {
    Icon: JWT,
    url: 'https://jwt.io',
  },
  MongoDB: {
    Icon: MongoDB,
    url: 'https://www.mongodb.com',
  },
  CSS: {
    Icon: CSS,
    url: 'https://www.w3.org/Style/CSS/',
  },
  Python: {
    Icon: Python,
    url: 'https://www.python.org',
  },
  Picsum: {
    Icon: Picsum,
    url: 'https://picsum.photos',
  },
  Java: {
    Icon: Java,
    url: 'https://java.com',
  },
  MySQL: {
    Icon: MySQL,
    url: 'https://mysql.com',
  },
  VSCode: {
    Icon: VSCode,
    url: 'https://code.visualstudio.com/',
  },
  Pnpm: {
    Icon: Pnpm,
    url: 'https://pnpm.io/',
  },
  RSS: {
    Icon: RSS,
    url: 'https://www.jasoneastburn.com/feed.xml',
  },
}

export function BrandIcon(props: {
  name: keyof typeof BrandsMap
  as?: 'link' | 'icon'
  className?: string
  iconClassName?: string
}) {
  const { name, as = 'link', className, iconClassName } = props
  const { Icon, url } = BrandsMap[name] || {}

  if (!Icon) return <span className="hidden">Missing brand icon for {name}</span>

  if (as === 'icon' || !url) {
    return <Icon className={className} fill="currentColor" />
  }

  return (
    <Link
      href={`${url}?ref=jasoneastburn.com`}
      className={className}
      data-umami-event={`${lowercaseAndHyphenate(name)}-visited`}
    >
      <Icon className={iconClassName} fill="currentColor" />
    </Link>
  )
}
