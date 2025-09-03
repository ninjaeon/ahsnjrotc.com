"use client"
import React from 'react';

const NewsletterSection = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [enhanced, setEnhanced] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null)

  const SUPPRESS_KEY = 'newsletter-suppressed-until'
  const SIGNEDUP_KEY = 'newsletter-signed-up'

  // Decide whether to open on first load
  React.useEffect(() => {
    // 1) Detect ConvertKit redirect params and permanently suppress
    try {
      const params = new URLSearchParams(window.location.search)
      const ckKeys = ['ck_subscriber_id', 'ck_subscribed', 'ck_confirmed']
      const hasCk = ckKeys.some((k) => params.has(k))
      if (hasCk) {
        localStorage.setItem(SIGNEDUP_KEY, 'true')
        // Clean URL
        const cleanUrl = window.location.pathname + window.location.hash
        window.history.replaceState({}, '', cleanUrl)
        // Show confirmation for 3 seconds; do not redirect here (Kit handles redirects)
        setShowSuccess(true)
        setIsOpen(false)
        const t = setTimeout(() => setShowSuccess(false), 3000)
        return () => clearTimeout(t)
      }
    } catch {}

    // 2) If permanently signed up, never show again
    try {
      if (localStorage.getItem(SIGNEDUP_KEY) === 'true') {
        setIsOpen(false)
        return
      }
    } catch {}

    // 3) Respect 7-day suppression after first appearance
    try {
      const now = Date.now()
      const suppressUntilStr = localStorage.getItem(SUPPRESS_KEY)
      const suppressUntil = suppressUntilStr ? parseInt(suppressUntilStr, 10) : 0
      if (suppressUntil > now) {
        setIsOpen(false)
        return
      }
      // Show and set next suppression
      setIsOpen(true)
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000
      localStorage.setItem(SUPPRESS_KEY, String(now + sevenDaysMs))
    } catch {
      // If localStorage blocked, just open
      setIsOpen(true)
    }
  }, [])

  // Lock body scroll while modal is open
  React.useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  // Close on Escape key while open
  React.useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) return
    const el = containerRef.current
    if (!el) return
    // Avoid duplicate injects (e.g., Fast Refresh)
    if (el.querySelector('form')) return

    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/a89e921039.js'
    script.async = true
    script.setAttribute('data-uid', 'a89e921039')
    // Ensure inline render (not modal/slide-in/sticky)
    script.setAttribute('data-options', JSON.stringify({ format: 'inline' }))
    script.onload = () => setEnhanced(true)
    script.onerror = () => {
      // Helpful console signal when blocked by CSP/extension/network
      console.error('Kit embed failed to load. Check CSP/extension/network. URL:', script.src)
    }
    el.appendChild(script)

    return () => {
      setEnhanced(false)
      el.innerHTML = ''
    }
  }, [isOpen])

  // Render success confirmation overlay (three seconds) if redirected back with Kit params
  if (showSuccess) {
    return (
      <div
        className="fixed inset-0 z-50"
        role="dialog"
        aria-modal="true"
        aria-live="polite"
        aria-labelledby="newsletter-success-title"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/img/arnoldnjrotc-logo.jpeg')",
            backgroundRepeat: 'no-repeat, repeat-x',
            backgroundSize: 'cover, auto',
            backgroundPosition: 'center, center',
          }}
        />
        <div className="relative z-10 flex min-h-full items-center justify-center p-4">
          <div className="relative mx-auto max-w-lg w-full rounded-2xl bg-primary-950/30 backdrop-blur-xl backdrop-saturate-150 shadow-2xl ring-1 ring-white/15 p-8 sm:p-10 text-center">
            <h2 id="newsletter-success-title" className="text-2xl md:text-3xl font-extrabold !text-white drop-shadow mb-2">
              You're all set!
            </h2>
            <p className="text-base md:text-lg text-white/80">
              We'll take you back to the homepage in just a moment — thanks for joining the Company Chronicles.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
    >
      <div
        className="absolute inset-0"
        role="button"
        aria-label="Close newsletter signup"
        tabIndex={0}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
            e.preventDefault()
            setIsOpen(false)
          }
        }}
        style={{
          // Dark translucent overlay on top of the tiled logo background
          backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/img/arnoldnjrotc-logo.jpeg')",
          backgroundRepeat: 'no-repeat, repeat-x',
          backgroundSize: 'cover, auto',
          backgroundPosition: 'center, center',
        }}
      />
      <div className="relative z-10 flex min-h-full items-center justify-center p-4">
        <div className="relative mx-auto max-w-2xl w-full rounded-2xl bg-primary-950/30 backdrop-blur-xl backdrop-saturate-150 shadow-2xl ring-1 ring-white/15 p-8 sm:p-10 text-center">
          <button
            type="button"
            aria-label="Close"
            className="absolute right-3 top-3 text-white/80 hover:text-white"
            onClick={() => setIsOpen(false)}
            ref={closeBtnRef}
            autoFocus
          >
            &times;
          </button>
          <h2 id="newsletter-modal-title" className="text-3xl md:text-5xl font-extrabold !text-white drop-shadow-md mb-4">
            Sign Up to Get the Company Chronicles
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Sign up for our monthly newsletter.
          </p>

          {/* Fallback native form (works even if scripts are blocked). Hidden when enhanced embed loads. */}
          <form
            action="https://app.kit.com/forms/8505984/subscriptions"
            method="post"
            className={`mx-auto max-w-xl ${enhanced ? 'hidden' : ''}`}
          >
            <div className="flex flex-col gap-3 text-left">
              <label className="sr-only" htmlFor="ck-email">Email Address</label>
              <input
                id="ck-email"
                type="email"
                name="email_address"
                required
                autoComplete="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <label className="sr-only" htmlFor="ck-first-name">First Name</label>
              <input
                id="ck-first-name"
                type="text"
                name="fields[first_name]"
                autoComplete="given-name"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-600 focus:ring-2 focus:ring-purple-500"
              >
                Sign Up for Our Newsletter
              </button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              We won&apos;t send you spam. Unsubscribe at any time.
            </p>
          </form>

          {/* Container where the ConvertKit script will render when allowed */}
          <div ref={containerRef} aria-live="polite" className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
