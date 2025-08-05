import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'njrotcPage',
  title: 'NJROTC Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The main title for the NJROTC page',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Describe the hero image for accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'The main hero image displayed at the top of the page',
    }),
    defineField({
      name: 'goalsTitle',
      title: 'Goals Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Title for the program goals section',
    }),
    defineField({
      name: 'programGoals',
      title: 'Program Goals',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
      description: 'List of program goals and objectives',
    }),
    defineField({
      name: 'benefitsTitle',
      title: 'Benefits Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Title for the benefits section',
    }),
    defineField({
      name: 'benefitsContent',
      title: 'Benefits Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
      description: 'Rich text content describing the benefits of the NJROTC program',
    }),
    defineField({
      name: 'curriculumTitle',
      title: 'Curriculum Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Title for the curriculum section',
    }),
    defineField({
      name: 'curriculumSubjects',
      title: 'Curriculum Subjects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subject',
              title: 'Subject',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'List of curriculum subjects and their descriptions',
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{type: 'reference', to: {type: 'event'}}],
      description: 'References to events associated with the NJROTC program',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'schoolName',
          title: 'School Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'phone1',
          title: 'Primary Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'phone2',
          title: 'Secondary Phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'School contact information',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'instagramUrl',
          title: 'Instagram URL',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'schoolWebsiteUrl',
          title: 'School Website URL',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Social media and website links',
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare(selection) {
      return {
        title: selection.title || 'NJROTC Page',
      }
    },
  },
})
