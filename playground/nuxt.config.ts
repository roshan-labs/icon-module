import { defineNuxtConfig } from 'nuxt3'

import IconsModule from '..'

export default defineNuxtConfig({
  modules: [IconsModule],
  icons: {
    autoInstall: true,
  },
})
