import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mjvlogistics-website/',
  plugins: [react()],
  publicDir: 'public',
});
