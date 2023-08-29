import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@/assets/petra.png','@/assets/tobuylist.png','@/assets/troogle.png','@/assets/checklist.png' // Add other assets if needed
      ],
    },
  },
})
