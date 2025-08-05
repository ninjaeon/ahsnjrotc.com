import { NextRequest, NextFetchEvent } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next()
  
  // Add CORS headers for Sanity Presentation tool
  response.headers.set('Access-Control-Allow-Origin', 'https://ahsnjrotc.sanity.studio')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Accept, Content-Type, Origin')
  response.headers.set('Access-Control-Expose-Headers', 'X-Draft-Mode-Enabled')
  
  // Set cookie SameSite attribute to None for iframe compatibility
  // This is important for Visual Editing to work in the Studio iframe
  const draftModeCookie = request.cookies.get('__prerender_bypass')
  if (draftModeCookie) {
    response.cookies.set('__prerender_bypass', draftModeCookie.value, {
      sameSite: 'none',
      secure: true,
    })
  }
  
  return response
}

export const config = {
  matcher: [
    '/api/draft-mode/enable',
    '/api/draft-mode/disable',
    '/:path*',
  ],
}
