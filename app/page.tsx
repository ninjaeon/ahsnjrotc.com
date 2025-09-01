import { sampleNjrotcData } from '@/lib/sampleData'
import HeroSection from '@/components/HeroSection'
import GoalsSection from '@/components/GoalsSection'
import InstructorSection from '@/components/InstructorSection'
import StudentLeadershipSection from '@/components/StudentLeadershipSection'
import BenefitsSection from '@/components/BenefitsSection'
import CurriculumSection from '@/components/CurriculumSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  const data = sampleNjrotcData

  return (
    <main className="min-h-screen">
      <HeroSection 
        title={data.pageTitle}
        mainTitle="Forging Future Leaders"
        heroImage="/img/IMG_0236.jpeg"
      />
      
      <GoalsSection 
        title={data.goalsTitle}
        goals={data.programGoals}
      />
      
      <InstructorSection />
      
      <CurriculumSection 
        title={data.curriculumTitle}
        subjects={data.curriculumSubjects}
      />
      
      <StudentLeadershipSection />

      <BenefitsSection
        title={data.benefitsTitle}
        content={data.benefitsContent}
      />

      <EventsSection 
        events={data.events || []}
      />
      
      <Footer 
        contactInfo={data.contactInfo}
        socialLinks={data.socialLinks}
      />
    </main>
  )
}
