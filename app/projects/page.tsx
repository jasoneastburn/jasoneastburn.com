import { Project } from 'app/models/project'
import { genPageMetadata } from 'app/seo'
import { getProjects } from 'lib/firebase/firestore'
import { PageHeader } from '@/app/components/ui/PageHeader'
import ProjectCard from '../components/cards/ProjectCard'
import { Suspense } from 'react'

export const metadata = genPageMetadata({
  title: 'Projects',
})

async function loadProjects() {
  try {
    const response = await getProjects()
    return response
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export default async function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PageHeader
          title="Projects"
          description="Some of the things I have worked on over years..."
          className="border-b border-gray-200 dark:border-gray-700"
        />
        <Suspense>
          <ProjectGrid />
        </Suspense>
      </div>
    </>
  )
}

async function ProjectGrid() {
  const projects: Project[] = await loadProjects()
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 md:space-y-0">
      {projects.map((d, index) => (
        <ProjectCard
          key={index}
          title={d.title}
          description={d.description}
          imgSrc={d.image}
          links={d.links}
          tech={d.tech}
        />
      ))}
    </div>
  )
}
