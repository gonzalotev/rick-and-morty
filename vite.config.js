import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gonzalotev.github.io/rick-and-morty.v1/",
  plugins: [react()],
})
