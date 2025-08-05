import {defineField, defineType, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const njrotcPageType = defineType({
  name: 'njrotcPage',
  title: 'NJROTC Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
      icon: DocumentIcon,
      default: true,
    },
    {
      name: 'content',
      title: 'Content Sections',
      icon: DocumentIcon,
    },
    {
      name: 'contact',
      title: 'Contact & Links',
      icon: DocumentIcon,
    },
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      type: 'string',
      group: 'hero',
      validation: (Rule) => 
        Rule.required()
          .min(5)
          .max(80)
          .warning('Consider keeping the page title between 20-60 characters for optimal display')
          .error('Page title is required and must be between 5 and 80 characters'),
      description: 'The main title for the NJROTC page displayed in the hero section',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .min(10)
              .max(150)
              .error('Alt text is required for accessibility and must be between 10-150 characters'),
          description: 'Describe the hero image for accessibility (what is shown in the image)',
        }),
      ],
      validation: (Rule) => 
        Rule.required()
          .error('Hero image is required as the main visual element of the page'),
      description: 'The main hero image displayed at the top of the page',
    }),
    defineField({
      name: 'goalsTitle',
      type: 'string',
      group: 'content',
      fieldset: 'goalsSection',
      validation: (Rule) => 
        Rule.required()
          .min(5)
          .max(50)
          .error('Goals section title is required and must be between 5-50 characters'),
      description: 'Title for the program goals section',
    }),
    defineField({
      name: 'programGoals',
      type: 'array',
      group: 'content',
      fieldset: 'goalsSection',
      of: [defineArrayMember({type: 'string'})],
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(8)
          .error('At least 3 program goals are required, maximum 8 for readability'),
      description: 'List of program goals and objectives (3-8 items recommended)',
    }),
    defineField({
      name: 'benefitsTitle',
      type: 'string',
      group: 'content',
      fieldset: 'benefitsSection',
      validation: (Rule) => 
        Rule.required()
          .min(5)
          .max(50)
          .error('Benefits section title is required and must be between 5-50 characters'),
      description: 'Title for the benefits section',
    }),
    defineField({
      name: 'benefitsContent',
      type: 'array',
      group: 'content',
      fieldset: 'benefitsSection',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => 
        Rule.required()
          .error('Benefits content is required to explain program advantages'),
      description: 'Rich text content describing the benefits of the NJROTC program',
    }),
    defineField({
      name: 'curriculumTitle',
      type: 'string',
      group: 'content',
      fieldset: 'curriculumSection',
      validation: (Rule) => 
        Rule.required()
          .min(5)
          .max(50)
          .error('Curriculum section title is required and must be between 5-50 characters'),
      description: 'Title for the curriculum section',
    }),
    defineField({
      name: 'curriculumSubjects',
      type: 'array',
      group: 'content',
      fieldset: 'curriculumSection',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'subject',
              type: 'string',
              validation: (Rule) => 
                Rule.required()
                  .min(3)
                  .max(50)
                  .error('Subject name is required and must be between 3-50 characters'),
            }),
            defineField({
              name: 'description',
              type: 'text',
              validation: (Rule) => 
                Rule.required()
                  .min(20)
                  .max(300)
                  .warning('Consider keeping descriptions between 50-200 characters')
                  .error('Subject description is required and must be between 20-300 characters'),
            }),
          ],
          preview: {
            select: {
              title: 'subject',
              subtitle: 'description',
            },
          },
        }),
      ],
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(10)
          .error('At least 3 curriculum subjects are required, maximum 10 for organization'),
      description: 'List of curriculum subjects and their descriptions (3-10 items recommended)',
    }),
    defineField({
      name: 'events',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'reference', to: {type: 'event'}})],
      description: 'References to events associated with the NJROTC program (automatically displays on homepage)',
    }),
    defineField({
      name: 'contactInfo',
      type: 'object',
      group: 'contact',
      fieldset: 'contactDetails',
      fields: [
        defineField({
          name: 'schoolName',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .min(5)
              .max(100)
              .error('School name is required and must be between 5-100 characters'),
        }),
        defineField({
          name: 'address',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .min(10)
              .max(200)
              .error('School address is required and must be between 10-200 characters'),
        }),
        defineField({
          name: 'phone1',
          type: 'string',
          validation: (Rule) => 
            Rule.required()
              .regex(/^[\d\s\-\(\)\+\.]+$/, 'Please enter a valid phone number')
              .error('Primary phone number is required and must be valid'),
        }),
        defineField({
          name: 'phone2',
          type: 'string',
          validation: (Rule) => 
            Rule.regex(/^[\d\s\-\(\)\+\.]*$/, 'Please enter a valid phone number or leave empty')
              .error('Secondary phone must be a valid phone number if provided'),
        }),
      ],
      validation: (Rule) => 
        Rule.required()
          .error('Contact information is required for visitors to reach the school'),
      description: 'School contact information displayed in footer',
    }),
    defineField({
      name: 'socialLinks',
      type: 'object',
      group: 'contact',
      fieldset: 'socialMedia',
      fields: [
        defineField({
          name: 'instagramUrl',
          type: 'url',
          validation: (Rule) => 
            Rule.uri({
              scheme: ['http', 'https'],
              allowRelative: false,
            })
            .error('Please enter a valid Instagram URL starting with http:// or https://'),
        }),
        defineField({
          name: 'schoolWebsiteUrl',
          type: 'url',
          validation: (Rule) => 
            Rule.uri({
              scheme: ['http', 'https'],
              allowRelative: false,
            })
            .error('Please enter a valid school website URL starting with http:// or https://'),
        }),
      ],
      description: 'Social media and website links (optional but recommended for engagement)',
    }),
  ],
  fieldsets: [
    {
      name: 'goalsSection',
      title: 'Goals Section',
      description: 'Configure the program goals section',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'benefitsSection',
      title: 'Benefits Section',
      description: 'Configure the program benefits section',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'curriculumSection',
      title: 'Curriculum Section',
      description: 'Configure the curriculum section',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'contactDetails',
      title: 'Contact Details',
      description: 'School contact information',
      options: {
        columns: 2,
      },
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      description: 'Social media and website links',
      options: {
        columns: 2,
      },
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      media: 'heroImage',
      goalsCount: 'programGoals',
      subjectsCount: 'curriculumSubjects',
    },
    prepare(selection) {
      const {title, media, goalsCount, subjectsCount} = selection
      const goals = Array.isArray(goalsCount) ? goalsCount.length : 0
      const subjects = Array.isArray(subjectsCount) ? subjectsCount.length : 0
      
      return {
        title: title || 'NJROTC Page',
        subtitle: `${goals} goals • ${subjects} curriculum subjects`,
        media: media,
      }
    },
  },
})
