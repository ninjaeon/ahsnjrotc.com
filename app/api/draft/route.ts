import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // Redirect old draft endpoint to new draft-mode/enable endpoint
  // Redirect to the new endpoint with our expected secret parameter
  const redirectUrl = new URL('/api/draft-mode/enable', request.url)
  redirectUrl.searchParams.set('secret', 'draft-preview-secret-2024')
  
  return redirect(redirectUrl.toString())
}
