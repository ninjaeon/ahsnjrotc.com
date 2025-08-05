import { defineLive } from 'next-sanity'
import { client, token } from './sanity.client'

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
