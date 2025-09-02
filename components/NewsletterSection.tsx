"use client"
import React from 'react';

const NewsletterSection = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // Avoid duplicate injects (e.g., Fast Refresh)
    if (el.querySelector('form')) return

    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/a89e921039/index.js'
    script.async = true
    script.setAttribute('data-uid', 'a89e921039')
    // Ensure inline render (not modal/slide-in/sticky)
    script.setAttribute('data-options', JSON.stringify({ format: 'inline' }))
    script.onerror = () => {
      // Helpful console signal when blocked by CSP/extension/network
      console.error('Kit embed failed to load. Check CSP/extension/network. URL:', script.src)
    }
    el.appendChild(script)

    // Graceful fallback if embed doesn't render a <form> within 5s
    const t = window.setTimeout(() => {
      if (!el.querySelector('form')) {
        const a = document.createElement('a')
        a.href = 'https://app.kit.com/forms/a89e921039/subscriptions'
        a.target = '_blank'
        a.rel = 'noopener noreferrer'
        a.textContent = 'Subscribe to our newsletter'
        a.className = 'inline-block px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-500'
        el.appendChild(a)
      }
    }, 5000)

    return () => {
      window.clearTimeout(t)
      el.innerHTML = ''
    }
  }, [])

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Subscribe to our Newsletter</h2>
        <div ref={containerRef} aria-live="polite" />
      </div>
    </section>
  );
};

export default NewsletterSection;
