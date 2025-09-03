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

  // Content Security Policy: allow kit.com / convertkit resources and core app domains
  // Note: If the hosting platform already sets a CSP header, browsers enforce the intersection
  // of all CSPs. Ensure the platform policy is compatible with this one.
  const csp = [
    "default-src 'self';",
    // Next.js may use inline snippets; Kit loads from kit.com + f.convertkit.com
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://ahsnjrotc.kit.com https://kit.com https://app.kit.com https://f.convertkit.com https://www.googletagmanager.com https://app.convertkit.com https://convertkit.com;",
    "style-src 'self' 'unsafe-inline';",
    // Allow local images and remote over https plus data and blob URIs
    "img-src 'self' data: blob: https:;",
    "font-src 'self' data:;",
    // Allow API/analytics, kit connections, and Firebase endpoints
    "connect-src 'self' https://ahsnjrotc.sanity.studio https://cdn.sanity.io https://apicdn.sanity.io https://www.google-analytics.com https://region1.google-analytics.com https://f.convertkit.com https://ahsnjrotc.kit.com https://kit.com https://app.kit.com https://app.convertkit.com https://api.convertkit.com https://convertkit.com https://firebase.googleapis.com https://firebaseinstallations.googleapis.com https://firebaselogging.googleapis.com https://firestore.googleapis.com https://identitytoolkit.googleapis.com;",
    // In case kit uses iframes in some formats
    "frame-src 'self' https://ahsnjrotc.kit.com https://kit.com https://app.kit.com https://f.convertkit.com https://app.convertkit.com;",
    // Form submissions post to kit/app domains
    "form-action 'self' https://app.kit.com https://app.convertkit.com;",
    "base-uri 'self';",
    "object-src 'none';",
  ].join(' ')

  response.headers.set('Content-Security-Policy', csp)
  
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
