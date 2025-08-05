import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'AHS NJROTC',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('NJROTC Page')
              .id('njrotcPage')
              .child(
                S.document()
                  .schemaType('njrotcPage')
                  .documentId('njrotcPage')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['njrotcPage'].includes(listItem.getId()!)
            ),
          ])
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'https://ahs-njrotc-v2-web--ahs-njrotc-v2.us-central1.hosted.app',
        draftMode: {
          enable: '/api/draft?secret=draft-preview-secret-2024',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
