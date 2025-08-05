interface GoalsSectionProps {
  title: string
  goals: string[]
}

export default function GoalsSection({ title, goals }: GoalsSectionProps) {
  return (
    <section id="goals" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals?.map((goal, index) => (
            <div
              key={index}
              className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 border border-gold-400/20 hover:border-gold-400/40 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-primary-950 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/90 leading-relaxed">
                    {goal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
