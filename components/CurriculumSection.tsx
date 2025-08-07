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
                <div className="flip-card-back bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20">
                  {subject.subject === 'Naval Science' ? (
                    <img
                      src="/img/IMG_0236.jpeg"
                      alt="Naval Science"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : subject.subject === 'Leadership and Management' ? (
                    <img
                      src="/img/IMG_0256.jpeg"
                      alt="Leadership and Management"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : subject.subject === 'Citizenship and Government' ? (
                    <img
                      src="/img/IMG_0252.jpeg"
                      alt="Citizenship and Government"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : subject.subject === 'Naval Operations' ? (
                    <img
                      src="/img/IMG_0262.jpeg"
                      alt="Naval Operations"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : subject.subject === 'Military Drill and Ceremonies' ? (
                    <img
                      src="/img/IMG_0260.jpeg"
                      alt="Military Drill and Ceremonies"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : subject.subject === 'Physical Fitness' ? (
                    <img
                      src="/img/IMG_0259.jpeg"
                      alt="Physical Fitness"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
