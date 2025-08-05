import { defineLive } from 'next-sanity'
import { client } from './sanity.client'

const token = process.env.SANITY_VIEWER_TOKEN

// Only throw error at runtime, not during build
if (!token && typeof window !== 'undefined') {
  console.warn('Missing SANITY_VIEWER_TOKEN - Live Content API will be disabled')
}

// Provide fallback configuration when token is missing during build
export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false, // Disable CDN for live content to ensure fresh data
    stega: {
      studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
      // Enable stega encoding for Visual Editing overlays
      enabled: false,
    },
  }),
  serverToken: token || '', // Only used server-side
  // Important: We need to provide the token to the browser for Visual Editing to work
  // We should only do this in draft mode, controlled by the draft mode API
  browserToken: process.env.NODE_ENV === 'development' ? token || '' : '', // Only expose in development
})
