"use client"
import React from 'react';

const NewsletterSection = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [enhanced, setEnhanced] = React.useState(false)

  React.useEffect(() => {
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
  }, [])

  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/img/arnoldnjrotc-logo.jpeg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl bg-primary-950/90 backdrop-blur shadow-2xl border border-white/10 p-8 sm:p-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold !text-white drop-shadow-md mb-4">
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
    </section>
  );
};

export default NewsletterSection;
