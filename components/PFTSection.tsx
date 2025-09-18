import Image from 'next/image'

export default function PFTSection() {
  return (
    <section id="pft" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            PFT (Personal Fitness Test) Requirements
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20">
            <div className="relative mb-8">
              <Image
                src="/img/IMG_0713.jpeg"
                alt="PFT Requirements"
                width={1024}
                height={768}
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white/90 leading-relaxed text-center">
              Above are the standards for our PFT. We aim to build our cadets up to getting at least a “satisfactory” level score in all three categories. We take two PFT’s a month. These are the standard fitness requirements for all NJROTC units.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
