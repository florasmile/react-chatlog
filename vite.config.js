import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic' // Add this line
  })],
  base: '/react-chatlog/',  // repo name (critical for GitHub Pages)
  test: {
    // jest config here
    reporters: ['verbose'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
  },
})