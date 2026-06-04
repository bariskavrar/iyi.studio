import { defineConfig } from 'vite'

export default defineConfig({
  base: '/iyi.studio/',
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  }
})
