// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//             // detectTls: 'Gradinte.test', 
//         }),
//         react(),
//     ],
// });

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import path from 'path';


export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'resources/js/components'),
          '@assets': path.resolve(__dirname, 'resources/js/assets'),
          '@shared': path.resolve(__dirname, 'resources/js/shared'),
          '@styles': path.resolve(__dirname, 'resources/js/styles'),
        },
      },
    build: {
        minify: true,
        cssMinify: true,
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    server: {
        port: 3000,
      },
    plugins: [
        reactRefresh(),
        svgr(),
    ],
});
