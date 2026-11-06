import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Solo en desarrollo: sirve public/<ruta>/index.html para URLs como /servicios/web-para-musicos/
// (Netlify ya lo hace en producción; Vite dev lo resolvía como la home).
function publicDirIndex() {
  return {
    name: 'public-dir-index',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = (req.url || '').split('?')[0]
        const m = path.match(/^\/(servicios|recursos)\/[^/.]+\/?$/)
        if (m && existsSync(resolve(__dirname, 'public', path.replace(/^\//, '').replace(/\/$/, ''), 'index.html'))) {
          req.url = path.replace(/\/?$/, '/index.html') + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '')
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    publicDirIndex(),
  ],
  build: {
    rollupOptions: {
      // Dos páginas, una por idioma: danisid.com/ (español) y danisid.com/en/ (inglés).
      // Cargan la misma app; el idioma sale de <html lang> (src/i18n/index.js).
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
})
