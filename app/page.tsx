import { sanityFetch } from '@/lib/sanity.live'
import { sampleNjrotcData } from '@/lib/sampleData'
import HeroSection from '@/components/HeroSection'
import GoalsSection from '@/components/GoalsSection'
import InstructorSection from '@/components/InstructorSection'
import BenefitsSection from '@/components/BenefitsSection'
import CurriculumSection from '@/components/CurriculumSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'

const NJROTC_PAGE_QUERY = `*[_type == "njrotcPage"][0]{
  pageTitle,
  heroImage{
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    hotspot,
    crop,
    alt
  },
  goalsTitle,
  programGoals,
  benefitsTitle,
  benefitsContent,
  curriculumTitle,
  curriculumSubjects,
  events[]->{
    _id,
    title,
    description,
    date,
    location,
    isPastEvent,
    gallery[]{
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      },
      hotspot,
      crop,
      alt,
      caption
    }
  },
  contactInfo,
  socialLinks
}`

export default async function HomePage() {
  let data = null
  
  try {
    const result = await sanityFetch({
      query: NJROTC_PAGE_QUERY,
    })
    data = result?.data
  } catch (error) {
    console.log('Sanity fetch failed, using sample data:', error)
  }

  // Use sample data if Sanity data is not available (e.g., due to CORS issues)
  if (!data) {
    data = sampleNjrotcData
  }

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

      <BenefitsSection 
        title={data.benefitsTitle}
        content={data.benefitsContent}
      />
      
      <CurriculumSection 
        title={data.curriculumTitle}
        subjects={data.curriculumSubjects}
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
