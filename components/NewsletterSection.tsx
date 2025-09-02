 'use client'
import React, { useEffect, useRef } from 'react';

const NewsletterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // Avoid duplicate injects (e.g., Fast Refresh)
    if (containerRef.current.querySelector('form')) return

    const script = document.createElement('script')
    script.src = 'https://ahsnjrotc.kit.com/a89e921039/index.js'
    script.async = true
    script.setAttribute('data-uid', 'a89e921039')
    // Ensure inline render (not modal/slide-in/sticky)
    script.setAttribute('data-options', JSON.stringify({ format: 'inline' }))
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = ''
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
