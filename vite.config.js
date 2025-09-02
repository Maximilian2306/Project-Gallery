import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/Project-Gallery/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

