export default function CadetResourcesSection() {
  return (
    <section id="cadet-resources" className="py-20 px-4 bg-primary-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6">
            Cadet Resources
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 border border-gold-400/20">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gold-300 mb-2">Cadet Field Manual</h3>
              <a href="https://www.netc.navy.mil/Portals/46/NSTC/NJROTC/docs/Manuals/CFM%2012th%20Edition%20Master%20Draft%20(0509-LP-002-6028)%2017%20APR%202024.pdf" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-gold-400 underline">
                View the Cadet Field Manual
              </a>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gold-300 mb-2">Cadet Drill Manual</h3>
              <a href="https://www.netc.navy.mil/Portals/46/NSTC/NJROTC/docs/Manuals/NJROTC%20Drill%20Manual%201st%20Edition-NSN%200509LP0029217-2024%20Electronic%20Version-Color.pdf" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-gold-400 underline">
                View the Cadet Drill Manual
              </a>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gold-300 mb-2">Cadet Reference Manual</h3>
              <a href="https://www.netc.navy.mil/Portals/46/NSTC/NJROTC/docs/Manuals/2024%20CRM%204th%20Edition%20(0509-LP-002-6029)%2018%20APR%202024.pdf" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-gold-400 underline">
                View the Cadet Reference Manual
              </a>
            </div>
            <p className="text-white/90 leading-relaxed text-center text-lg mt-12">
              Above are our main manuals explaining anything and everything we might go over in class. If cadets want to study for a promotional test, these manuals are where they will find the information they need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
