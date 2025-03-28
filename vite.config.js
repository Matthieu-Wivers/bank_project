import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Activer certaines optimisations pour réduire la taille du build en production
    minify: 'esbuild',
    target: 'esnext',
    // Autres optimisations
  }
})
