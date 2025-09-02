import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { createClient } from 'next-sanity'

type SanityNextImageProps = {
  src: string
  loader?: (opts: { src: string; width: number; quality?: number }) => string
  width?: number
  height?: number
  blurDataURL?: string
} | null

type MinimalSanityClient = {
  config: () => { projectId: string; dataset: string; apiVersion?: string }
}

function getSafeClient(): MinimalSanityClient {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-05-01'

  if (projectId && dataset) {
    // Cast to MinimalSanityClient to avoid pulling in full types
    return createClient({ projectId, dataset, apiVersion, useCdn: true }) as unknown as MinimalSanityClient
  }

  // Fallback shim to satisfy libraries during local builds without env vars
  return {
    config: () => ({ projectId: projectId ?? 'dummy', dataset: dataset ?? 'production', apiVersion })
  }
}

interface SanityImageProps {
  image: {
    asset: {
      _ref: string
      _type: string
    }
    hotspot?: {
      x: number
      y: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export default function SanityImage({
  image,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: SanityImageProps) {
  // Always call the hook (rules-of-hooks) with a safe client instance.
  type HookClientType = Parameters<typeof useNextSanityImage>[0]
  const safeClient = getSafeClient() as unknown as HookClientType
  const imageProps = useNextSanityImage(safeClient, image) as SanityNextImageProps

  const isValid = Boolean(image?.asset?._ref && imageProps?.src)

  if (!isValid) {
    return (
      <div className={`bg-primary-800 flex items-center justify-center ${className}`}>
        <span className="text-gold-400">{alt}</span>
      </div>
    )
  }

  return (
    <Image
      {...imageProps!}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder={imageProps?.blurDataURL ? 'blur' : 'empty'}
      className={`object-cover ${className}`}
    />
  )
}
