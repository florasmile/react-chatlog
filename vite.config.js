import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './react-chatlog/', // Use relative paths
  test: {
    // jest config here
    reporters: ['verbose'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
  },
})