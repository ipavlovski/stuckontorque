import { defineConfig } from 'astro/config'
import icon from "astro-icon"
import expressiveCode from 'astro-expressive-code';
// import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  // integrations: [react()],
  integrations: [icon(), expressiveCode()],
})