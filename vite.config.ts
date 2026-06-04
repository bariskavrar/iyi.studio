import { defineConfig } from 'vite'

export default defineConfig({
  base: '/iyistudio-website/',
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  }
})
