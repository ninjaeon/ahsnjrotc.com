import {defineField, defineType, defineArrayMember} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: CalendarIcon,
      default: true,
    },
    {
      name: 'media',
      title: 'Media',
      icon: CalendarIcon,
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: CalendarIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .max(100)
          .error('Event title must be between 3 and 100 characters'),
      description: 'The title of the event (e.g., "Annual Military Ball", "Community Service Day")',
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'content',
      validation: (Rule) => 
        Rule.required()
          .min(10)
          .max(500)
          .warning('Consider keeping descriptions between 50-300 characters for better readability')
          .error('Event description is required and must be between 10 and 500 characters'),
      description: 'A brief description of what the event is about',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'content',
      fieldset: 'eventDetails',
      validation: (Rule) => 
        Rule.required()
          .error('Event date is required for scheduling and organization'),
      description: 'When the event takes place or took place',
    }),
    defineField({
      name: 'location',
      type: 'string',
      group: 'content',
      fieldset: 'eventDetails',
      validation: (Rule) => 
        Rule.required()
          .min(3)
          .error('Location is required and must be at least 3 characters'),
      description: 'Where the event takes place (e.g., "School Gymnasium", "Community Center")',
    }),
    defineField({
      name: 'status',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (Rule) => 
        Rule.required()
          .error('Event status is required for proper categorization'),
      description: 'Current status of the event for categorization and display',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      group: 'media',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              validation: (Rule) => 
                Rule.required()
                  .error('Alt text is required for accessibility compliance'),
              description: 'Describe what is shown in the image for accessibility',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              description: 'Optional caption for the image',
            }),
          ],
        }),
      ],
      hidden: ({parent}) => parent?.status !== 'past',
      description: 'Upload photos from the event. Required for past events to showcase activities.',
      validation: (Rule) =>
        Rule.custom((gallery, context) => {
          const parent = context.parent as { status?: string }
          if (parent?.status === 'past' && (!gallery || gallery.length === 0)) {
            return 'A photo gallery is required for past events to showcase what happened.'
          }
          return true
        }),
    }),
  ],
  fieldsets: [
    {
      name: 'eventDetails',
      title: 'Event Details',
      options: {
        columns: 2,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      status: 'status',
      location: 'location',
      media: 'gallery.0',
    },
    prepare(selection) {
      const {title, date, status, location, media} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      const statusLabel = status === 'past' ? '(Past)' : status === 'cancelled' ? '(Cancelled)' : '(Upcoming)'
      
      return {
        title: title || 'Untitled Event',
        subtitle: `${formattedDate} • ${location || 'No location'} ${statusLabel}`,
        media: media,
      }
    },
  },
})
