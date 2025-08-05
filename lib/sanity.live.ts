import { defineLive } from 'next-sanity'
import { client } from './sanity.client'

const token = process.env.SANITY_VIEWER_TOKEN

if (!token) {
  throw new Error('Missing SANITY_VIEWER_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true,
    stega: {
      studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    },
  }),
  serverToken: token,
  browserToken: token,
})
