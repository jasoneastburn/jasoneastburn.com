import BuiltWith from '@/app/components/footer/BuiltWith'
import { GithubCommit } from '@/app/components/footer/GithubCommit'
import SocialIcon from '@/app/components/social-icons'
import { SITE_METADATA } from '@/data/site-metadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-between md:flex-row">
        <div className="my-2 mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <SocialIcon kind="mail" href={`mailto:${SITE_METADATA.email}`} size={6} />
          <SocialIcon kind="github" href={SITE_METADATA.github} size={6} />
          <SocialIcon kind="facebook" href={SITE_METADATA.facebook} size={6} />
          <SocialIcon kind="youtube" href={SITE_METADATA.youtube} size={6} />
          <SocialIcon kind="linkedin" href={SITE_METADATA.linkedin} size={6} />
          <SocialIcon kind="bluesky" href={SITE_METADATA.bluesky} size={6} />
          <SocialIcon kind="x" href={SITE_METADATA.x} size={6} />
          <SocialIcon kind="instagram" href={SITE_METADATA.instagram} size={6} />
          <SocialIcon kind="threads" href={SITE_METADATA.threads} size={6} />
          <SocialIcon kind="medium" href={SITE_METADATA.medium} size={6} />
        </div>
        <div className="mb-4 flex flex-col items-center text-sm sm:flex-row sm:space-x-2">
          <div className="mb-2 text-gray-500 md:mb-0 dark:text-gray-400">{`© ${new Date().getFullYear()} ${SITE_METADATA.author}`}</div>
          <div className="hidden text-gray-500 sm:block dark:text-gray-400">{` • `}</div>{' '}
          <BuiltWith />
          <div className="mt-1 sm:mt-0 sm:ml-0">
            <GithubCommit />
          </div>
        </div>
      </div>
    </footer>
  )
}
