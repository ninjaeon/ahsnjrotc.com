export const sampleNjrotcData = {
  pageTitle: "Arnold High School NJROTC",
  heroImage: null, // Will show placeholder
  goalsTitle: "About Marlin Company",
  programGoals: [
    "Welcome to the J.R. Arnold High School NJROTC, where we are dedicated to developing young men and women of character, integrity, and leadership. Our program instills a sense of discipline, responsibility, and patriotism while preparing cadets to become confident, capable citizens and future leaders. Through a combination of classroom instruction, physical training, community service, and leadership opportunities, cadets gain valuable life skills and a deeper understanding of teamwork, accountability, and respect. Whether participating in drill competitions, academic teams, or community outreach events, every cadet in our company is encouraged to strive for excellence and to represent our school and community with pride. At J.R. Arnold NJROTC, we don’t just build strong cadets — we build strong futures."
  ],
  benefitsTitle: "What are the benefits of NJROTC?",
  benefitsContent: [
    {
      "_type": "block",
      "children": [
        {
          "_type": "span",
          "text": "The NJROTC program offers numerous benefits to students, including leadership development, college scholarships, and career preparation."
        }
      ]
    },
    {
      "_type": "block", 
      "children": [
        {
          "_type": "span",
          "text": "Students develop "
        },
        {
          "_type": "span",
          "text": "critical thinking skills",
          "marks": ["strong"]
        },
        {
          "_type": "span",
          "text": " and learn the importance of teamwork, discipline, and service to community."
        }
      ]
    },
    {
      "_type": "block",
      "children": [
        {
          "_type": "span", 
          "text": "The program provides opportunities for advancement in rank, participation in drill teams, color guard, and various competitions."
        }
      ]
    },
    {
      "_type": "block",
      "children": [
        {
          "_type": "span",
          "text": "Graduates often receive preference for military academy appointments and ROTC scholarships in college."
        }
      ]
    },
    {
      "_type": "block",
      "children": [
        {
          "_type": "span",
          "text": "The program builds character, develops leadership potential, and prepares students for success in any career path they choose."
        }
      ]
    }
  ],
  curriculumTitle: "What subjects are included in the curriculum?",
  curriculumSubjects: [
    {
      subject: "Naval Science",
      description: "Study of naval history, customs, traditions, and the role of sea power in national defense."
    },
    {
      subject: "Leadership & Management",
      description: "Development of leadership skills, management principles, and effective communication techniques."
    },
    {
      subject: "Citizenship & Government",
      description: "Understanding of American government, civic responsibilities, and the Constitution."
    },
    {
      subject: "Naval Operations",
      description: "Basic seamanship, navigation principles, and understanding of naval operations and strategy."
    },
    {
      subject: "Military Drill & Ceremonies",
      description: "Precision drill movements, military bearing, and participation in formal ceremonies."
    },
    {
      subject: "Physical Fitness",
      description: "Physical conditioning, health education, and the importance of maintaining personal fitness."
    }
  ],
  events: [
    {
      _id: "upcoming-1",
      title: "Annual Navy Ball",
      description: "Formal dinner and dance celebrating military traditions and recognizing outstanding cadets.",
      location: "Edgewater Event Center",
      isPastEvent: false,
      gallery: []
    },
    {
      _id: "upcoming-2", 
      title: "Community Service Day",
      description: "Cadets volunteer at local community organizations to give back to the community.",
      date: "2025-02-20T09:00:00.000Z",
      location: "Various Community Locations",
      isPastEvent: false,
      gallery: []
    },
    {
      _id: "past-1",
      title: "Fall Drill Competition",
      description: "Annual drill team competition showcasing precision movements and military bearing.",
      date: "2024-11-10T10:00:00.000Z", 
      location: "Arnold High School",
      isPastEvent: true,
      gallery: [] // Would contain photos in real implementation
    },
    {
      _id: "past-2",
      title: "Annual Navy Ball",
      description: "Formal dinner and dance celebrating military traditions and recognizing outstanding cadets.",
      date: "2025-04-06T19:00:00.000Z",
      location: "Edgewater Event Center",
      isPastEvent: true,
      gallery: [
        "/img/IMG_0201.jpeg",
        "/img/IMG_0202.jpeg",
        "/img/IMG_0203.jpeg",
        "/img/IMG_0204.jpeg",
        "/img/IMG_0205.jpeg",
        "/img/IMG_0206.jpeg",
        "/img/IMG_0207.jpeg",
        "/img/IMG_0208.jpeg"
      ]
    },
    {
      _id: "past-3",
      title: "Annual Military Inspection 2025",
      description: "The Annual Military Inspection is a formal review of cadets’ appearance, drill, and unit performance by a Navy representative.",
      date: "2025-02-26T09:00:00.000Z",
      location: "Arnold High School",
      isPastEvent: true,
      gallery: [
        "/img/IMG_0212.jpeg",
        "/img/IMG_0213.jpeg",
        "/img/IMG_0214.jpeg",
        "/img/IMG_0215.jpeg",
        "/img/IMG_0216.jpeg"
      ]
    },
    {
      _id: "past-4",
      title: "Beach Clean Up",
      description: "This beach clean up was one of our many community service events.",
      date: "2025-04-12T09:00:00.000Z",
      location: "Community Beach",
      isPastEvent: true,
      gallery: [
        "/img/IMG_0209.jpeg"
      ]
    }
  ],
  contactInfo: {
    schoolName: "Arnold High School",
    address: "550 Alf Coleman Rd, Panama City Beach, FL 32407",
    phone1: "(850) 767-3700",
    phone2: "(850) 236-3068"
  },
  socialLinks: {
    instagramUrl: "https://www.instagram.com/ahs.njrotc_marlins/",
    schoolWebsiteUrl: "https://ahsmarlins.com/"
  }
}
