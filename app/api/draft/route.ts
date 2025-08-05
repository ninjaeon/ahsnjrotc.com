import { client } from '@/lib/sanity.client'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// Fallback implementation if defineEnableDraftMode fails
export async function GET(request: Request) {
  try {
    // Try to use the official defineEnableDraftMode
    const token = process.env.SANITY_VIEWER_TOKEN || process.env.SANITY_API_READ_TOKEN
    
    if (!token) {
      console.error('No Sanity token found in environment variables')
      return new Response('Configuration error: Missing Sanity token', { status: 500 })
    }

    // Create a client with the token for draft mode
    const draftClient = client.withConfig({ token })
    
    // Use the official implementation
    const { GET: officialGet } = defineEnableDraftMode({
      client: draftClient,
    })
    
    return await officialGet(request)
  } catch (error) {
    console.error('Error in defineEnableDraftMode, using fallback:', error)
    
    // Fallback implementation
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret') || searchParams.get('sanity-preview-secret')
    
    // Validate the secret (allow multiple valid secrets)
    const validSecrets = [
      'draft-preview-secret-2024',
      process.env.SANITY_VIEWER_TOKEN,
      process.env.SANITY_API_READ_TOKEN,
    ].filter(Boolean)
    
    if (!secret || !validSecrets.includes(secret)) {
      return new Response('Invalid or missing secret', { status: 401 })
    }

    // Enable Draft Mode
    const draft = await draftMode()
    draft.enable()

    // Redirect to the homepage or specified path
    const pathname = searchParams.get('sanity-preview-pathname') || '/'
    redirect(pathname)
  }
}
