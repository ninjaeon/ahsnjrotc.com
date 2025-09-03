# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository summary
- Framework: Next.js 15 (App Router) with React 19 and TypeScript
- Styling: Tailwind CSS
- CMS: Sanity v4 (separate Studio in ./sanity)
- Hosting: Firebase App Hosting
- Analytics: Firebase Analytics (optional at runtime)

Common commands
- Install dependencies (npm is the package manager; package-lock.json is present)
  - npm install

- Run the web app locally (Next.js)
  - npm run dev
  - Opens http://localhost:3000 by default

- Lint
  - npm run lint

- Build and run in production mode
  - npm run build
  - npm run start

- Sanity Studio (local development)
  - cd sanity
  - npm install
  - npx sanity dev
  - Notes: The Studio is also hosted remotely at https://ahsnjrotc.sanity.studio per sanity.cli.ts. Local Studio uses the same content project.

- Deploy to Firebase App Hosting
  - Ensure you are authenticated and the default project is set by .firebaserc
    - firebase login
  - Deploy
    - firebase deploy
  - Notes: apphosting.yaml configures build/runtime environment variables and Secret Manager parameters for the hosted app.

- Tests
  - No unit test framework or scripts are configured in this repo (no jest/vitest setup and no "test" script at the root). Running a single test is not applicable.

Environment configuration (local)
- Next.js app (read at build/runtime):
  - NEXT_PUBLIC_SANITY_PROJECT_ID
  - NEXT_PUBLIC_SANITY_DATASET
  - NEXT_PUBLIC_SANITY_API_VERSION (defaults to 2024-05-01 in code paths that provide a fallback)
  - NEXT_PUBLIC_SANITY_STUDIO_URL (optional; used for integrations/links)
  - NEXT_PUBLIC_FIREBASE_API_KEY
  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  - NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  - NEXT_PUBLIC_FIREBASE_APP_ID
  - NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID (optional; if absent, analytics will not initialize)
- Hosted environment (Firebase App Hosting):
  - apphosting.yaml defines the above NEXT_PUBLIC_* variables and Secret Manager bindings (e.g., SANITY_API_READ_TOKEN, SANITY_VIEWER_TOKEN). Do not commit secrets; use Secret Manager.

High-level architecture and structure
- App Router layout and composition
  - app/layout.tsx defines the HTML shell, loads the Inter font, and mounts a client-only AnalyticsLoader. Global styles come from app/globals.css.
  - app/page.tsx is the homepage. It currently renders from local data (lib/sampleData.ts), composing section components from ./components (Hero, Goals, Curriculum, StudentLeadership, Benefits, Events, Newsletter, Footer).

- Styling
  - Tailwind is configured in tailwind.config.js with a custom primary and gold palette. postcss.config.js wires tailwindcss and autoprefixer. Content scanning includes ./app, ./components, and ./pages.

- Data and CMS integration
  - Sanity integration is wired but not yet used on the homepage: lib/sanity.client.ts provides a configured next-sanity client using NEXT_PUBLIC_SANITY_* variables.
  - components/SanityImage.tsx integrates next-sanity-image and safely handles missing env vars by returning a shim client so server/client rendering and hooks remain stable during local dev.
  - The sanity/ folder contains the Sanity Studio configuration and content model:
    - sanity/schemas/njrotcPage.ts: singleton page document with grouped fields (hero, content, contact) and validations. Intended to drive the homepage sections (titles, program goals, benefits, curriculum, events, contact info, social links).
    - sanity/schemas/event.ts: event documents with content/media/settings groups, validations, optional gallery (required for past events), and curated previews.
    - sanity/sanity.config.ts registers structure, vision, and presentation tools. presentationTool.previewUrl.origin points to the deployed Firebase App Hosting URL and references previewMode enable path at /api/draft-mode/enable.

- Visual Editing and preview
  - middleware.ts configures CORS and sets SameSite=None;Secure for draft cookies to enable iframe-based visual editing from https://ahsnjrotc.sanity.studio. It also sets a CSP header.
  - next.config.js also sets security headers including Content-Security-Policy. Keep domains in sync across middleware.ts and next.config.js when adding third-party resources (e.g., kit.com/convertkit, Firebase endpoints, Google Analytics).
  - Note: The routes referenced by the presentation tool (e.g., /api/draft-mode/enable) are not currently implemented in this repo.

- Images and media
  - next.config.js whitelists cdn.sanity.io for next/image. Local images live under public/img and are used across components. EventsSection supports both local image paths and Sanity image objects via SanityImage.

- Analytics
  - components/AnalyticsLoader.tsx conditionally initializes Firebase Analytics only on supported browsers and only if NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID is set, guarding SSR and hydration.

- TypeScript and linting
  - tsconfig.json uses moduleResolution "bundler", strict type checking, noEmit, and a path alias: import paths can use '@/...' (baseUrl is '.'). The sanity directory is excluded from the Next app tsconfig.
  - .eslintrc.json extends next/core-web-vitals and next/typescript, with accessibility-focused jsx-a11y rules enabled as errors.

Gotchas and repo-specific notes
- CSP domains are defined in two places (middleware.ts and next.config.js). Update both when integrating new third-party scripts, styles, frames, or network endpoints.
- The homepage currently uses lib/sampleData.ts rather than querying Sanity. Switching to live content will require GROQ queries via lib/sanity.client.ts and wiring data into app/page.tsx.
- The Sanity presentation tool configuration references preview endpoints that are not implemented; if you enable preview/visual editing, add the corresponding /api/draft-mode handlers.

