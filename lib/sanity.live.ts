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
    useCdn: true,
    stega: {
      studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    },
  }),
  serverToken: token || '', // Provide empty string fallback for build
  browserToken: token || '', // Provide empty string fallback for build
})
