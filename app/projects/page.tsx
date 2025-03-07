import Card from '@/app/components/Card'
import { Project } from 'app/models/project'
import { genPageMetadata } from 'app/seo'
import { getProjects } from 'lib/firebase/firestore'
import { PageHeader } from '@/app/components/ui/PageHeader'

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
        <PageHeader
          title="Projects"
          description="Some of the things I have worked on over years..."
          className="border-b border-gray-200 dark:border-gray-700"
        />
        <div className="mt-10 grid-cols-2 space-y-10 gap-x-6 gap-y-10 md:grid md:space-y-0">
          {projects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.image}
              links={d.links}
              tech={d.tech}
            />
          ))}
        </div>
      </div>
    </>
  )
}
