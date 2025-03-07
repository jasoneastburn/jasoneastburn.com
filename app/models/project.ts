export class Project {
  id: string
  active: boolean
  title: string
  description: string
  links?: { url: string; label: string }[]
  image?: string
  tech: string[]
}
