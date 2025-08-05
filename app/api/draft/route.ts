import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const authHeader = request.headers.get('authorization')
  
  // Check the secret from URL parameter or Authorization header
  // This secret should only be known to this route handler and the CMS
  const token = secret || (authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null)
  
  // Use a shorter, custom secret for draft mode or fall back to the full Sanity token
  const validTokens = [
    process.env.SANITY_DRAFT_SECRET || 'draft-preview-secret-2024',
    process.env.SANITY_API_READ_TOKEN
  ].filter(Boolean)
  
  if (!token || !validTokens.includes(token)) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect('/')
}
