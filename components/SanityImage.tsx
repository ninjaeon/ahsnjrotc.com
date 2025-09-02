import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@/lib/sanity.client'

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
  } | null
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
  // Graceful fallback if image is missing
  if (!image || !image.asset?._ref) {
    return (
      <div className={`bg-primary-800 flex items-center justify-center ${className}`}>
        <span className="text-gold-400">{alt}</span>
      </div>
    )
  }

  // Generate Next.js-compatible props via next-sanity-image
  const imageProps = useNextSanityImage(client, image) as any

  return (
    <Image
      // Use Sanity CDN with loader from next-sanity-image
      {...imageProps}
      alt={alt}
      // Fill container to behave like object-cover backgrounds
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  )
}
