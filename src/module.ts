import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import type { Options } from 'unplugin-icons'
import icons from 'unplugin-icons'

import { name as moduleName, version } from '../package.json'

export type ModuleOptions = Options

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: moduleName,
    version,
    configKey: 'icons',
  },
  setup(options) {
    // Install vite plugin
    addVitePlugin(icons.vite(options))

    // Install webpack plugin
    addWebpackPlugin(icons.webpack(options))
  },
})
