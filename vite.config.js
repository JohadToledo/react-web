import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '../../public/assets/petra.png','../../public/assets/tobuylist.png','../../public/assets/troogle.png','../../public/assets/checklist.png' 
      ],
    },
  },
})
