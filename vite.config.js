import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Sitemap({
      hostname: 'https://devtec.tech',
      // Additional sitemap options can be added here
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
    },
  },
  build: {
    minify: true,
    sourcemap: true,
    cssMinify: true,
  },
});
