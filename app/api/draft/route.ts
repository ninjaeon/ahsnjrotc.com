import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // Redirect old draft endpoint to new draft-mode/enable endpoint
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('sanity-preview-secret') || searchParams.get('secret') || 'draft-preview-secret-2024'
  
  // Redirect to the new endpoint with our expected secret parameter
  const redirectUrl = new URL('/api/draft-mode/enable', request.url)
  redirectUrl.searchParams.set('secret', 'draft-preview-secret-2024')
  
  return redirect(redirectUrl.toString())
}
