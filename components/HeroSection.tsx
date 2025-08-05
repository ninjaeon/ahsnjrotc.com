import SanityImage from './SanityImage'

interface HeroSectionProps {
  title: string
  heroImage: {
    asset: {
      _ref: string
      _type: string
    }
    alt: string
  }
}

export default function HeroSection({ title, heroImage }: HeroSectionProps) {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <SanityImage
            image={heroImage}
            alt={heroImage.alt || 'NJROTC Hero Image'}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-950/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold-400 mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Building tomorrow&apos;s leaders through discipline, honor, and service
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#goals"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary-950 bg-gold-400 rounded-lg hover:bg-gold-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-primary-950"
          >
            Learn More
          </a>
          <a
            href="#events"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-gold-400 border-2 border-gold-400 rounded-lg hover:bg-gold-400 hover:text-primary-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-primary-950"
          >
            View Events
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gold-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </header>
  )
}
