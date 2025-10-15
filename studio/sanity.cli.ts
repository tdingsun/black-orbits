import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '29s7w4eg',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */

  studioHost: 'blackorbits',
  deployment: {
    autoUpdates: true,
    appId: 'mmwjqt4k8gzsuu93n6v94jm7',
  },

})
