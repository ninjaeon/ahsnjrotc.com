'use client'

import { useEffect, useState } from 'react'
import { getFirebaseApp, firebaseMeasurementId } from '@/lib/firebaseClient'
import { getAnalytics, isSupported } from 'firebase/analytics'

/**
 * Loads Firebase Analytics on the client. Handles SSR gracefully.
 */
export default function AnalyticsLoader() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Only load analytics if the browser supports it (safari private etc.)
    isSupported()
      .then((supported) => {
        // Only initialize analytics when browser supports it AND a measurement ID is present.
        if (supported && firebaseMeasurementId) {
          const app = getFirebaseApp()
          getAnalytics(app)
        }
      })
      .catch(() => {})
  }, [isMounted])

  // Don't render anything during SSR to prevent hydration mismatches
  if (!isMounted) {
    return null
  }

  return null
}
