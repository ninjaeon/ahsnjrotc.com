import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import AnalyticsLoader from '@/components/AnalyticsLoader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnold High School NJROTC',
  description: 'Arnold High School Naval Junior Reserve Officers Training Corps program information, goals, benefits, and events.',
  applicationName: 'Arnold High School NJROTC',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsLoader />
        {children}
      </body>
    </html>
  )
}
