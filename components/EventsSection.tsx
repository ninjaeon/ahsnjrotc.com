import Image from 'next/image'
import SanityImage from './SanityImage'

// The 'SanityImageObject' represents the structure of an image object from Sanity
type SanityImageObject = {
  _key: string
  asset: {
    _ref: string
    _type: string
  }
  alt: string
  caption?: string
}

interface Event {
  _id: string
  title: string
  description: string
  date?: string // Date is now optional
  location: string
  isPastEvent: boolean
  gallery?: Array<SanityImageObject | string> // Gallery can be an array of Sanity objects or strings (for local images)
}

interface EventsSectionProps {
  events: Event[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  const upcomingEvents = events?.filter(event => !event.isPastEvent) || []
  const pastEvents = events?.filter(event => event.isPastEvent) || []

  return (
    <section id="events" className="py-20 px-4 bg-primary-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Events & Activities
          </h2>
        </div>
        
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-400 mb-8 text-center">
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </div>
        )}
        
        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gold-400 mb-8 text-center">
              Recent Events
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              {pastEvents.map((event) => (
                <PastEventCard key={event._id} event={event} />
              ))}
            </div>
          </div>
        )}
        
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">
              No events available at this time. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  const eventDate = event.date ? new Date(event.date) : null
  
  return (
    <div className="bg-primary-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gold-400/20 hover:border-gold-400/40 transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-xl font-bold text-gold-400 flex-1">
            {event.title}
          </h4>
          {eventDate && (
            <div className="text-sm text-white/70 ml-4">
              {eventDate.toLocaleDateString()}
            </div>
          )}
        </div>
        
        <p className="text-white/90 mb-4 leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex items-center text-sm text-white/70">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {event.location}
        </div>
      </div>
    </div>
  )
}

function PastEventCard({ event }: { event: Event }) {
  const eventDate = event.date ? new Date(event.date) : null
  
  return (
    <div className="bg-primary-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gold-400/20">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-xl font-bold text-gold-400 flex-1">
            {event.title}
          </h4>
          {eventDate && (
            <div className="text-sm text-white/70 ml-4">
              {eventDate.toLocaleDateString()}
            </div>
          )}
        </div>
        
        <p className="text-white/90 mb-4 leading-relaxed">
          {event.description}
        </p>
        
        <div className="flex items-center text-sm text-white/70 mb-6">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {event.location}
        </div>
        
        {/* Photo Gallery */}
        {event.gallery && event.gallery.length > 0 && (
          <div>
            <h5 className="text-lg font-semibold text-gold-400 mb-4">
              Event Photos
            </h5>
            <div className="flex overflow-x-auto space-x-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {event.gallery.map((photo, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden relative" style={{ scrollSnapAlign: 'start' }}>
                  {typeof photo === 'string' ? (
                    <Image
                      src={photo}
                      alt={`${event.title} photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <SanityImage
                      image={photo as SanityImageObject}
                      alt={(photo as SanityImageObject).alt || `${event.title} photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
