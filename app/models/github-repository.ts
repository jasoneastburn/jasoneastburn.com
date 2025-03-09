export type GithubRepository = {
  description: string
  forkCount: number
  homepageUrl: string
  languages: {
    color: string
    name: string
  }[]
  lastCommit?: GithubRepositoryCommit
  name: string
  nameWithOwner: string
  repositoryTopics: string[]
  stargazerCount: number
  url: string
}
export type CommitState = 'SUCCESS' | 'PENDING' | 'FAILURE' | 'ERROR' | 'EXPECTED'

export type GithubRepositoryCommit = {
  abbreviatedOid: string
  committedDate: string
  id: string
  message: string
  status: {
    state: CommitState
  }
  url: string
}
