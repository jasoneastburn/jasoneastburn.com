// import type { NextRequest } from 'next/server'
// import { getBlogStats, updateBlogStats } from '~/db/queries'
// import type { SelectStats, StatsType } from '~/db/schema'

// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams: params } = new URL(request.url)
//     const slug = params.get('slug')
//     const type = params.get('type') as StatsType
//     if (!slug || !type) {
//       return Response.json(
//         { message: 'Missing `type` or `slug` parameter!' },
//         {
//           status: 400,
//         }
//       )
//     }
//     const data = await getBlogStats(type, slug)
//     return Response.json(data)
//   } catch (e) {
//     console.error(e)
//     return Response.json(
//       { message: 'Internal Server Error!' },
//       {
//         status: 500,
//       }
//     )
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data: SelectStats = await request.json()
//     const { type, slug, ...updates } = data
//     if (!slug || !type) {
//       return Response.json(
//         { message: 'Missing `type` or `slug` parameter!' },
//         {
//           status: 400,
//         }
//       )
//     }
//     const updatedStats = await updateBlogStats(type, slug, updates)
//     return Response.json(updatedStats)
//   } catch (e) {
//     console.error(e)
//     return Response.json({ message: 'Internal Server Error!' }, { status: 500 })
//   }
// }
