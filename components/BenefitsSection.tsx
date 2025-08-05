import { PortableText } from '@portabletext/react'

interface BenefitsSectionProps {
  title: string
  content: Array<{
    _type: string
    children?: Array<{
      _type: string
      text: string
      marks?: string[]
    }>
    style?: string
  }>
}

export default function BenefitsSection({ title, content }: BenefitsSectionProps) {
  return (
    <section id="benefits" className="py-20 px-4 bg-primary-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-white/90 leading-relaxed space-y-6">
            {content && (
              <PortableText
                value={content}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-lg leading-relaxed mb-6 text-white/90">
                        {children}
                      </p>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="text-gold-400 font-semibold">
                        {children}
                      </strong>
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
