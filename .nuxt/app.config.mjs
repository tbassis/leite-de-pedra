
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "620916ed-267f-4000-912a-4eaf61506b06"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/tulioassis/Dev/frontend/leite-de-pedra/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
