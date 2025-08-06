import Image from 'next/image'

export default function InstructorSection() {
  return (
    <section id="instructor" className="py-20 px-4 bg-primary-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Naval Science Instructor
          </h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Robert Mcibbin</h3>
          <div className="mb-8">
            <Image
              src="/img/IMG_0240.jpeg"
              alt="Robert Mcibbin"
              width={200}
              height={200}
              className="rounded-full border-4 border-gold-400"
            />
          </div>
          <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
            Robert Mcibbin, also known as “TOP” throughout the unit, is our Naval Science Instructor and our mentor. TOP keeps everything in line and is our biggest motivator.
          </p>
        </div>
      </div>
    </section>
  )
}
