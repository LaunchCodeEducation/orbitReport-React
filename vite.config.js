import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    test: {
      include: ['**/*.test.jsx'],
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.js'
    },
    plugins: [react()],
  };
});