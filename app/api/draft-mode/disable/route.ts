import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET() {
  // Disable Draft Mode
  const draft = await draftMode()
  draft.disable()

  // Redirect to the homepage
  redirect('/')
}
