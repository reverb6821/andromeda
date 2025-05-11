/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'coverage/**',
        'src/components/ui/**',
        'src/vite-env.d.ts',
        'eslint.config.js',
        'vite.config.ts',
        'vitest.setup.ts',
      ]
    }
  },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
