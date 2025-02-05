import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  }
})
