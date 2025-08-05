import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'

/**
 * Firebase configuration is injected at build time via NEXT_PUBLIC_* environment
 * variables. These keys are public by design – they do NOT grant privileged
 * access and can be safely exposed in the client bundle.
 *
 * When running in production (Firebase App Hosting), the same variables must be
 * declared under the `env:` section of `apphosting.yaml` so that Next.js can
 * read them during build and at runtime.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
}

/**
 * Returns a singleton Firebase app instance (client-side only).
 * Guards against initializing twice during Fast Refresh.
 */
export function getFirebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig)
}
