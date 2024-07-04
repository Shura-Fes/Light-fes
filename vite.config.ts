import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import VitePluginWebpAndPath from "vite-plugin-webp-and-path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginWebpAndPath({textExtensions:"ts,tsx,css,html"})],
})
