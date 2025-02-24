import Card from '@/components/Card'
import { Project } from 'app/models/project'
import { genPageMetadata } from 'app/seo'
import { getProjects } from 'lib/firebase/firestore'

export const metadata = genPageMetadata({
  title: 'Projects'
})
async function loadProjects() {
  const response = await getProjects()

  return response
}

export default async function Projects() {
  const projects: Project[] = await loadProjects()
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg italic leading-7 text-gray-500 dark:text-gray-400">
            Some of the things I have worked on over years...
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.image}
                href={d.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
