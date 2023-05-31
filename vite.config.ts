import { defineConfig } from 'vite'
import { resolve } from 'path'

// paths
const rootPath = resolve(__dirname, 'src')
const publicPath = resolve(__dirname, 'public')
const outPath = resolve(__dirname, 'dist')

export default defineConfig({
  root: rootPath,
  publicDir: publicPath,
  build: {
    outDir: outPath,
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: resolve(rootPath, 'index.html'),
        about: resolve(rootPath, 'pages/about.html'),
        members: resolve(rootPath, 'pages/members.html'),
        projects: resolve(rootPath, 'pages/projects.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': rootPath,
      '@styles': resolve(rootPath, 'styles'),
    },
  },
})
