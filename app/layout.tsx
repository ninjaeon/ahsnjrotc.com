import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
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
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
