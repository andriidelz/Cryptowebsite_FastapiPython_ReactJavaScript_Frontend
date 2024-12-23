import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [react(), typescript()],
  esbuild: {
    loader: 
      'jsx',  
    },
});



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//       ]
//     }
//   },
// })


// export default defineConfig({
//   root: './',  // Make sure this is set correctly to your project root
//   build: {
//     outDir: 'dist',  // Where the build files will go
//     emptyOutDir: true,  // Ensure the dist folder is cleared before building
//   },
// });

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })






