import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { revalidatePath, revalidateTag } from 'next/cache'
import { SanityLive } from '@/lib/sanity.live'
import AnalyticsLoader from '@/components/AnalyticsLoader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnold High School NJROTC',
  description: 'Arnold High School Naval Junior Reserve Officers Training Corps program information, goals, benefits, and events.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled } = await draftMode()
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsLoader />
        {children}
        <SanityLive />
        {isEnabled && (
          <VisualEditing
            refresh={async (payload) => {
              'use server'
              // Guard against a bad actor attempting to revalidate the page
              const { isEnabled: draftModeEnabled } = await draftMode()
              if (!draftModeEnabled) {
                return
              }
              if (payload.source === 'manual') {
                await revalidatePath('/', 'layout')
              }
              // Only revalidate on mutations if the route doesn't have loaders or preview-kit
              if (payload.source === 'mutation' && !payload.livePreviewEnabled) {
                await revalidatePath('/', 'layout')
              }
            }}
          />
        )}
      </body>
    </html>
  )
}
