import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'okw4h2hy',
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
