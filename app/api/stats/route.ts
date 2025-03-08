import { NextResponse, type NextRequest } from 'next/server'
import { getBlogStats, updateBlogStats } from '@/database/queries'
import type { SelectStats, StatsType } from '@/database/schema'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const type = searchParams.get('type') as StatsType

    if (!slug) {
      return NextResponse.json({ message: 'Missing `slug` parameter!' }, { status: 400 })
    }

    if (!type) {
      return NextResponse.json({ message: 'Missing `type` parameter!' }, { status: 400 })
    }

    const data = await getBlogStats(type, slug)
    return NextResponse.json(data)
  } catch (error) {
    console.error('GET error:', error)
    return NextResponse.json({ message: 'Internal Server Error!' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: SelectStats = await request.json()
    const { type, slug, ...updates } = data

    if (!slug) {
      return NextResponse.json({ message: 'Missing `slug` in request body!' }, { status: 400 })
    }

    if (!type) {
      return NextResponse.json({ message: 'Missing `type` in request body!' }, { status: 400 })
    }

    const updatedStats = await updateBlogStats(type, slug, updates)
    return NextResponse.json(updatedStats)
  } catch (error) {
    console.error('POST error:', error)
    return NextResponse.json({ message: 'Internal Server Error!' }, { status: 500 })
  }
}
