import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa' 

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      cleanupOutdatedCaches: true,
      registerType: 'autoUpdate',
      injectManifest: {
        maximumFileSizeToCacheInBytes: 50000000, // 6MB
        globPatterns: ['assets/**/*.{js,css,html,ico,png,svg,json}'],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ['assets/**/*.{js,css,html,ico,png,svg}']
      }
    }),
  ],
  build: {
    chunkSizeWarningLimit: 6000000, // 6MB
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})