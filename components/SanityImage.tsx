// import Image from 'next/image'
// import { useNextSanityImage } from 'next-sanity-image'
// import { client } from '@/lib/sanity.client'

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
}: SanityImageProps) {
  // Return a placeholder div instead of rendering the image
  return (
    <div
      className={`bg-primary-800 flex items-center justify-center ${className}`}
    >
      <span className="text-gold-400">{alt}</span>
    </div>
  )
}
