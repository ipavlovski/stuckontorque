import { defineConfig } from 'astro/config'
import icon from "astro-icon"
import expressiveCode from 'astro-expressive-code'
import { pluginColorChips } from 'expressive-code-color-chips'
import { pluginLanguageBadge } from 'expressive-code-language-badge'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
// import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  // integrations: [react()],
  integrations: [
    icon(),
    expressiveCode({
      plugins: [pluginLanguageBadge(), pluginColorChips(), pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false
      }
    }),
  ],
})