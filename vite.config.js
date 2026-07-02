import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for the build output so it can be opened directly from the file system
  base: './',
  build: {
    outDir: 'dist',
  }
});
