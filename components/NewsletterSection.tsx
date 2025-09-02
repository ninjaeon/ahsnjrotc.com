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
        <h2 className="text-3xl font-bold text-center mb-8">Subscribe to our Newsletter</h2>
        {/* Fallback native form (works even if scripts are blocked). Hidden when enhanced embed loads. */}
        <form
          action="https://app.kit.com/forms/8505984/subscriptions"
          method="post"
          className={`mx-auto max-w-xl ${enhanced ? 'hidden' : ''}`}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="ck-first-name">First name</label>
            <input
              id="ck-first-name"
              type="text"
              name="fields[first_name]"
              autoComplete="given-name"
              placeholder="First name"
              className="flex-1 px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <label className="sr-only" htmlFor="ck-email">Email</label>
            <input
              id="ck-email"
              type="email"
              name="email_address"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-primary-600 text-white font-semibold hover:bg-primary-500"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Container where the ConvertKit script will render when allowed */}
        <div ref={containerRef} aria-live="polite" />
      </div>
    </section>
  );
};

export default NewsletterSection;
