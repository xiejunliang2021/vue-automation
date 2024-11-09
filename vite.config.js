import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import '@/assets/styles/variables.scss';`,
        additionalData: (content, loaderContext) => {
          const { resourcePath } = loaderContext;
          if (resourcePath.endsWith("global.scss")) return content;
          return `@import "@/assets/styles/global.scss"; 
          ${content}`;
        },
      },
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler" // or 'modern'
      }
    },
  },
});

