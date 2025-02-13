import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media, mediaAssetSource} from 'sanity-plugin-media'

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
          S.documentTypeListItem("collection").title("Collections"),
          S.documentTypeListItem("collectionImage").title("Photos")

        ])
  }), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    }
  }
})
