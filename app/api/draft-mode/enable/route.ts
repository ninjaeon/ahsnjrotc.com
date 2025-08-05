import { client } from '@/lib/sanity.client'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'

const token = process.env.SANITY_VIEWER_TOKEN

// Provide fallback for build time when token might be missing
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: token || '' }),
})
