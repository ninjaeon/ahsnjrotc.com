export const sampleNjrotcData = {
  pageTitle: "Arnold High School NJROTC",
  heroImage: null, // Will show placeholder
  goalsTitle: "What does the NJROTC program do?",
  programGoals: [
    "Develop informed and responsible citizens",
    "Promote leadership, citizenship, and service to the United States",
    "Develop self-discipline, teamwork, and leadership skills",
    "Promote an understanding of the basic elements and requirements for national security",
    "Develop respect for constituted authority",
    "Develop a high degree of personal honor, self-reliance, individual discipline, and leadership"
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
      title: "Annual Military Ball",
      description: "Formal dinner and dance celebrating military traditions and recognizing outstanding cadets.",
      date: "2025-03-15T19:00:00.000Z",
      location: "Arnold High School Gymnasium",
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
