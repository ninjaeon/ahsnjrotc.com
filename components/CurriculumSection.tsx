interface CurriculumSubject {
  subject: string
  description: string
}

interface CurriculumSectionProps {
  title: string
  subjects: CurriculumSubject[]
}

export default function CurriculumSection({ title, subjects }: CurriculumSectionProps) {
  return (
    <section id="curriculum" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {subjects?.map((subject, index) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
