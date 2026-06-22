import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
// })

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    proxy: {
      '/api/cleveland': {
        target: 'https://openaccess-api.clevelandart.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cleveland/, '')
      }
    }
  }
})