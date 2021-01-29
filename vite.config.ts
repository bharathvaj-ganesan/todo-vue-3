import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      "name": "ToDo Tracker",
      "short_name": "ToDo",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "A dead simple todo tracker",
      "icons": [{
        "src": "assets/logo.png",
        "sizes": "192x192",
        "type": "image/png"
      }]
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  }
})
