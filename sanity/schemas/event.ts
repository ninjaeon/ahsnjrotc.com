import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
      description: 'The title of the event (e.g., "Annual Military Ball", "Community Service Day")',
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
      description: 'A brief description of what the event is about',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'When the event takes place or took place',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Where the event takes place (e.g., "School Gymnasium", "Community Center")',
    }),
    defineField({
      name: 'isPastEvent',
      title: 'Is Past Event',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as true if this event has already occurred',
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
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
              description: 'Describe what is shown in the image for accessibility',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
      hidden: ({parent}) => !parent?.isPastEvent,
      description: 'Upload photos from the event. This is required for past events.',
      validation: (Rule) =>
        Rule.custom((gallery, context) => {
          const parent = context.parent as { isPastEvent?: boolean }
          if (parent?.isPastEvent && (!gallery || gallery.length === 0)) {
            return 'A photo gallery is required for past events.'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      isPast: 'isPastEvent',
    },
    prepare(selection) {
      const {title, date, isPast} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${formattedDate} ${isPast ? '(Past)' : '(Upcoming)'}`,
      }
    },
  },
})
