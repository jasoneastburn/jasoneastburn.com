import { fetchRepoData } from '@/app/utils/github'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const repo = searchParams.get('repo')

  if (!repo) {
    return NextResponse.json({ message: 'Missing repo parameter' }, { status: 400 })
  }

  if (repo === 'undefined' || repo === 'null' || !repo.trim()) {
    return NextResponse.json(null)
  }

  try {
    const data = await fetchRepoData({ repo, includeLastCommit: true })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching repo data:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
