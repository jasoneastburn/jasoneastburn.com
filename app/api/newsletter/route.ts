import { NextResponse, type NextRequest } from 'next/server'

async function convertkitSubscribe(email: string) {
  const formId = process.env.CONVERTKIT_FORM_ID
  const apiKey = process.env.CONVERTKIT_API_KEY

  if (!formId || !apiKey) {
    throw new Error('ConvertKit API configuration missing.')
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    body: JSON.stringify({ email, api_key: apiKey }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      `ConvertKit API error: ${response.status} - ${errorData.message || 'Unknown error'}`
    )
  }

  return response
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const trimmedEmail = email.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    await convertkitSubscribe(trimmedEmail)

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error subscribing to ConvertKit:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
