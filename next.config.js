/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async headers() {
    const csp = [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://ahsnjrotc.kit.com https://f.convertkit.com;",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https:;",
      "font-src 'self' data:;",
      "connect-src 'self' https://ahsnjrotc.sanity.studio https://cdn.sanity.io https://apicdn.sanity.io https://www.google-analytics.com https://region1.google-analytics.com https://f.convertkit.com https://ahsnjrotc.kit.com https://app.kit.com;",
      "frame-src 'self' https://ahsnjrotc.kit.com https://kit.com https://app.kit.com;",
      "form-action 'self' https://app.kit.com;",
      "base-uri 'self';",
      "object-src 'none';",
    ].join(' ')

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
