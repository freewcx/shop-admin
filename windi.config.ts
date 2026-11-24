import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'index.html'],
    exclude: ['node_modules', '.git', 'dist'],
  },
  theme: {
    extend: {},
  },
})
