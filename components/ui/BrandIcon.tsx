import Bash from 'public/icons/bash.svg'
import Docker from 'public/icons/docker.svg'
import Git from 'public/icons/git.svg'
import GitHub from 'public/icons/github.svg'
import Javascript from 'public/icons/javascript.svg'
import Liquid from 'public/icons/liquid.svg'
import Markdown from 'public/icons/markdown.svg'
import Mongodb from 'public/icons/mongodb.svg'
import NestJS from 'public/icons/nestjs.svg'
import NextJS from 'public/icons/nextjs.svg'
import Node from 'public/icons/nodejs.svg'
import Postgres from 'public/icons/postgres.svg'
import Prisma from 'public/icons/prisma.svg'
import Railway from 'public/icons/railway.svg'
import React from 'public/icons/react.svg'
import Remix from 'public/icons/remix.svg'
import Spotify from 'public/icons/spotify.svg'
import TailwindCSS from 'public/icons/tailwind.svg'
import Typescript from 'public/icons/typescript.svg'
import Umami from 'public/icons/umami.svg'
import Vercel from 'public/icons/vercel.svg'

export const BrandIconsMap = {
  Bash,
  Docker,
  Git,
  GitHub,
  Javascript,
  Liquid,
  Markdown,
  Mongodb,
  NestJS,
  NextJS,
  Node,
  Postgres,
  Prisma,
  Railway,
  React,
  Remix,
  Spotify,
  TailwindCSS,
  Typescript,
  Umami,
  Vercel,
}

export type BrandIconType = keyof typeof BrandIconsMap

const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
  const { className, type } = props
  const Icon = BrandIconsMap[type]

  return (
    <Icon
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
      alt={`Icon for ${type}`}
    />
  )
}

export default BrandIcon
