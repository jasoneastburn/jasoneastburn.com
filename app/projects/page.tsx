import Card from '@/components/Card'
import { Project } from 'app/models/project'
import { genPageMetadata } from 'app/seo'
import { getProjects } from 'lib/firebase/firestore'

export const metadata = genPageMetadata({
  title: 'Projects',
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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 italic dark:text-gray-400">
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
                tech={d.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
