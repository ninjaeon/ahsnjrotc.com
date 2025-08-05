interface ContactInfo {
  schoolName: string
  address: string
  phone1: string
  phone2: string
}

interface SocialLinks {
  instagramUrl: string
  schoolWebsiteUrl: string
}

interface FooterProps {
  contactInfo: ContactInfo
  socialLinks: SocialLinks
}

export default function Footer({ contactInfo, socialLinks }: FooterProps) {
  return (
    <footer className="bg-primary-950 border-t border-gold-400/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-white/90">
              <div>
                <h4 className="font-semibold text-gold-400 mb-2">
                  {contactInfo?.schoolName}
                </h4>
                <p className="leading-relaxed">
                  {contactInfo?.address}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-3 text-gold-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${contactInfo?.phone1}`}
                    className="hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
                  >
                    {contactInfo?.phone1}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-3 text-gold-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${contactInfo?.phone2}`}
                    className="hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
                  >
                    {contactInfo?.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <a
                href="#goals"
                className="block text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                Program Goals
              </a>
              <a
                href="#benefits"
                className="block text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                Benefits
              </a>
              <a
                href="#curriculum"
                className="block text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                Curriculum
              </a>
              <a
                href="#events"
                className="block text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                Events
              </a>
            </nav>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-6">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <a
                href={socialLinks?.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.431.33 4.862.628a5.918 5.918 0 00-2.235 2.235C2.33 3.431 2.131 4.094 2.072 5.041.013 7.989 0 8.396 0 12.017s.013 4.028.072 4.976c.059.947.258 1.61.556 2.179a5.918 5.918 0 002.235 2.235c.569.298 1.232.497 2.179.556.948.059 1.355.072 4.976.072s4.028-.013 4.976-.072c.947-.059 1.61-.258 2.179-.556a5.918 5.918 0 002.235-2.235c.298-.569.497-1.232.556-2.179.059-.948.072-1.355.072-4.976s-.013-4.028-.072-4.976c-.059-.947-.258-1.61-.556-2.179a5.918 5.918 0 00-2.235-2.235C18.631.33 17.968.131 17.021.072 16.073.013 15.666 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.849.07.3.012.611.054.918.126a3.756 3.756 0 012.235 2.235c.072.307.114.618.126.918.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.012.3-.054.611-.126.918a3.756 3.756 0 01-2.235 2.235c-.307.072-.618.114-.918.126-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a3.756 3.756 0 01-.918-.126 3.756 3.756 0 01-2.235-2.235 3.756 3.756 0 01-.126-.918c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.012-.3.054-.611.126-.918a3.756 3.756 0 012.235-2.235c.307-.072.618-.114.918-.126 1.265-.058 1.645-.07 4.849-.07z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z"
                    clipRule="evenodd"
                  />
                  <path d="M19.846 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                Instagram
              </a>
              
              <a
                href={socialLinks?.schoolWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/90 hover:text-gold-400 transition-colors duration-200 focus:outline-none focus:text-gold-400"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                  />
                </svg>
                School Website
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gold-400/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} Arnold High School NJROTC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
