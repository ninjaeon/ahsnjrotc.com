"use client"

import { useState } from 'react'
import Image from 'next/image'

interface CurriculumSubject {
  subject: string
  description: string
}

interface CurriculumSectionProps {
  title: string
  subjects: CurriculumSubject[]
}

export default function CurriculumSection({ title, subjects }: CurriculumSectionProps) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const handleFlip = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null)
    } else {
      setFlippedCard(index)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleFlip(index)
    }
  }

  return (
    <section id="curriculum" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {subjects?.map((subject, index) => {
            if (subject.subject === "Naval Science") {
              return (
                <div
                  key={index}
                  className="flip-card-container"
                  onClick={() => handleFlip(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}>
                    <div className="flip-card-front bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                      <h3 className="text-xl font-bold text-gold-400 mb-4">
                        {subject.subject}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>
                    <div className="flip-card-back bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20">
                      <Image
                        src="/img/IMG_0236.jpeg"
                        alt="Naval Science"
                        width={500}
                        height={300}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div
                key={index}
                className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gold-400 mb-4">
                  {subject.subject}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {subject.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
