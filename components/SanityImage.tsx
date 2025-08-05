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
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: SanityImageProps) {
  // Always call hooks at the top level - pass a fallback object if image is null
  const fallbackImage = { asset: { _ref: '', _type: 'reference' } }
  const imageProps = useNextSanityImage(client, image || fallbackImage)
  
  // Handle case where image is not available
  if (!image?.asset) {
    return (
      <div className={`bg-primary-800 flex items-center justify-center ${className}`}>
        <span className="text-gold-400">No image available</span>
      </div>
    )
  }

  try {
    
    if (!imageProps) {
      return (
        <div className={`bg-primary-800 flex items-center justify-center ${className}`}>
          <span className="text-gold-400">Image loading...</span>
        </div>
      )
    }

    // Generate a simple blur data URL
    const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

    return (
      <Image
        src={imageProps.src}
        width={imageProps.width}
        height={imageProps.height}
        alt={alt}
        className={className}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    )
  } catch (error) {
    console.error('Error loading Sanity image:', error)
    return (
      <div className={`bg-primary-800 flex items-center justify-center ${className}`}>
        <span className="text-gold-400">Image error</span>
      </div>
    )
  }
}
