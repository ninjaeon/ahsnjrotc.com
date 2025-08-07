interface CurriculumSubject {
  subject: string
  description: string
}

interface CurriculumSectionProps {
  title: string
  subjects: CurriculumSubject[]
}

const subjectImageMapping: { [key: string]: string } = {
  'Naval Science': '/img/IMG_0236.jpeg',
  'Leadership & Management': '/img/IMG_0256.jpeg',
  'Citizenship & Government': '/img/IMG_0252.jpeg',
  'Naval Operations': '/img/IMG_0262.jpeg',
  'Military Drill & Ceremonies': '/img/IMG_0260.jpeg',
  'Physical Fitness': '/img/IMG_0259.jpeg',
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
        
        <div className="grid md:grid-cols-2 gap-8 [perspective:1000px]">
          {subjects?.map((subject, index) => (
            <div key={index} className="flip-card h-64">
              <div className="flip-card-inner w-full h-full">
                <div className="flip-card-front bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20">
                  <h3 className="text-xl font-bold text-gold-400 mb-4">
                    {subject.subject}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {subject.description}
                  </p>
                </div>
                <div className="flip-card-back bg-primary-800/50 backdrop-blur-sm rounded-lg border border-gold-400/20">
                  {subjectImageMapping[subject.subject] && (
                    <img
                      src={subjectImageMapping[subject.subject]}
                      alt={subject.subject}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
