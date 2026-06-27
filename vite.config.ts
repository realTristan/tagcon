import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function pagesBasePath() {
  if (process.env.GITHUB_PAGES !== 'true') return '/'

  const repoName = process.env.REPO_NAME ?? 'tagcon'
  // username.github.io repos are served from the domain root
  if (repoName.endsWith('.github.io')) return '/'

  return `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: pagesBasePath(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
