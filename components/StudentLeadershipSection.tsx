import Image from 'next/image'

const leadershipTeam = [
  {
    name: 'Maya Hamilton',
    image: '/img/IMG_2985.jpeg',
    position: 'center',
    description: `Cadet Commanding Officer Hamilton, Hamilton is the leader of Marlin Company and holds full responsibility for the unit’s performance, discipline, and overall success. C/CO Hamilton’s specific responsibilities include:

- establishing operating policies
- exercising command authority
- ensuring the unit is properly equipped and supported
- ensuring training readiness
- inspecting unit efficiency
- taking corrective actions`,
  },
  {
    name: 'Justyce Jones',
    image: '/img/IMG_2987.jpeg',
    description: `Cadet Lieutenant Commander Jones, Jones is the head of all the officer personnel of our unit, and ensures all plans are executed properly. C/LtCdr Jones’ specific responsibilities include:
- overlooking all of Marlin Company and it’s staff
- taking care of the units Supply room
- fitting and issuing uniform items
- planning the unit’s athletics `,
  },
  {
    name: 'Xander Powell',
    image: '/img/IMG_0282.jpeg',
    description: 'Xander Powell Master Chief Petty Officer overseeing everything, and helping out with anything.',
  },
  {
    name: 'Melissa Ayikoru (A.K)',
    image: '/img/IMG_0274.jpeg',
    description: 'Operations Officer, 0-3 Lieutenant, my job is to plan events, when, where, what, and how we will get there.',
  },
  {
    name: 'Zackarie Tucker',
    image: '/img/IMG_0278.jpeg',
    description: 'My name is Zackarie Tucker and I\'m a Lieutenant (O-3). I\'m the Training Officer and I help where needed.',
  },
  {
    name: 'Vincent Dunning',
    image: '/img/IMG_0275.jpeg',
    description: "I am the Admin Officer of Marlin Company's NJROTC unit. I put our cadets information onto an online website called CDMIS. I command everything with Admin and manage the Admin Team. ",
  },
  {
    name: 'Joseph Hood',
    image: '/img/IMG_0283.jpeg',
    description: 'Cadet Chief Petty Officer Joseph Hood currently serves as the Platoon Commander Training Lead for Marlin Company, where his primary duty is to oversee the development, preparation, and readiness of all platoon commanders within the unit. His job is to ensure that each commander not only understands their role but can perform it with confidence, precision, and leadership excellence. This role involves building custom training regimens, evaluating performance during drills and inspections, and providing constant mentorship to help commanders grow into effective and disciplined leaders.',
  },
  {
    name: 'Noah Greenberg',
    image: '/img/IMG_0749.jpeg',
    description: 'As the Administration Chief, Cadet Noah Greenberg ensures accurate record-keeping, cadet accountability, and smooth internal communication across the unit. His leadership supports efficient operations and helps the unit stay mission-ready. Noah is also committed to community service, playing an active role in organizing and logging volunteer efforts that reflect the unit’s core values.',
  },
  {
    name: 'Samuel Gerber',
    image: '/img/IMG_0690.jpeg',
    description: 'Hi, I\'m Sam. As the Supply Chief Petty Officer my job is to handle all of our units supplies. I make sure things are organized, kept clean, and also make sure our cadets are issued the right equipment within our unit.',
  },
  {
    name: 'Nikolas Mauceri',
    image: '/img/IMG_0279.jpeg',
    description: 'As the Athletics Chief for the 25-26 Marlin Company of close to 150 cadets, Chief Mauceri is responsible for organizing and leading physical training sessions, ensuring all cadets meet fitness standards and promotes overall unit readiness. He also coordinates fitness assessments, tracks performance data, and motivates cadets to improve their physical conditioning.',
  },
  {
    name: 'Raeley Summerlin',
    image: '/img/IMG_0716.jpeg',
    description: 'Heyy, I am our Public Affairs Chief. It is my job to keep this website updated, to create and send out our newsletter (The Company Chronicles), to create and manage all of our fundraisers, and to plan all of our trips/events.',
  },
  {
    name: 'Alana Bunnell',
    image: '/img/IMG_0730.jpeg',
    description: 'I’m an E-7 in our ROTC I’m the weapons chief, I fix rifles, clean supply, and help around ROTC in any way I can.',
  },
]

export default function StudentLeadershipSection() {
  return (
    <section id="student-leadership" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Student Leadership
          </h2>
        </div>

        <div className="flex overflow-x-auto space-x-8 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {leadershipTeam.map((leader, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 rounded-lg bg-primary-800/50 backdrop-blur-sm border border-gold-400/20 overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative w-full h-96">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={leader.position || "center 20%"}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gold-400 mb-2">{leader.name}</h3>
                <p className="text-white/90 text-sm whitespace-pre-line" style={{ minHeight: '100px' }}>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
