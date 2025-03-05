import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags'
import {DocumentIcon} from '@sanity/icons'


const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['colophon'])


export default defineConfig({
  name: 'default',
  title: 'black-orbits',

  projectId: '29s7w4eg',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S) =>
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Colophon')
            .id('colophon')
            .icon(DocumentIcon)
            .child(S.document().schemaType('colophon').documentId('colophon').title('Colophon')),
          S.documentTypeListItem("collection").title("Collections"),
          S.documentTypeListItem("collectionImage").title("Photos")

        ])
  }), visionTool(), media(), tags({})],

  schema: {
    types: schemaTypes,
    templates: (templates) => 
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },
  document: {
    actions: (input, context) => 
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input,
  },
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    }
  }
})
