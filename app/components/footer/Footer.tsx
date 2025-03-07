import BuiltWith from '@/app/components/footer/BuiltWith'
import SocialIcon from '@/app/components/social-icons'
import Link from '@/app/components/ui/Link'
import { SITE_METADATA } from '@/data/site-metadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 flex space-x-2 text-sm">
          <div className="text-gray-500 dark:text-gray-400">{`© ${new Date().getFullYear()} ${SITE_METADATA.author}`}</div>
          <div className="text-gray-500 dark:text-gray-400">{` • `}</div>
          <BuiltWith />
        </div>

        <div className="my-2 mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <SocialIcon kind="mail" href={`mailto:${SITE_METADATA.email}`} size={6} />
          <SocialIcon kind="github" href={SITE_METADATA.github} size={6} />
          <SocialIcon kind="facebook" href={SITE_METADATA.facebook} size={6} />
          <SocialIcon kind="youtube" href={SITE_METADATA.youtube} size={6} />
          <SocialIcon kind="linkedin" href={SITE_METADATA.linkedin} size={6} />
          <SocialIcon kind="twitter" href={SITE_METADATA.twitter} size={6} />
          <SocialIcon kind="bluesky" href={SITE_METADATA.bluesky} size={6} />
          <SocialIcon kind="x" href={SITE_METADATA.x} size={6} />
          <SocialIcon kind="instagram" href={SITE_METADATA.instagram} size={6} />
          <SocialIcon kind="threads" href={SITE_METADATA.threads} size={6} />
          <SocialIcon kind="medium" href={SITE_METADATA.medium} size={6} />
        </div>
      </div>
    </footer>
  )
}
