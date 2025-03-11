import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Delete from 'rollup-plugin-delete'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

const bundlingConf = {
  lib: {
    entry: resolve(__dirname, '/src/wave-ui/index.js'),
    name: 'WaveUI',
    formats: ['es', 'umd', 'cjs']
  },
  rollupOptions: {
    plugins: [
      // Rollup generates all the files, then remove what we don't want.
      // @todo: find a better way.
      Delete({
        targets: ['dist/{images,.htaccess,ghspa.js}', 'dist/*.{ico,txt,html}'],
        hook: 'generateBundle'
      })
    ],
    // Make sure to externalize deps that shouldn't be bundled into library.
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build for externalized deps.
      globals: { vue: 'Vue' },
      entryFileNames: 'wave-ui.[format].js',
      chunkFileNames: '[name].js'
    }
  }
}

export default defineConfig({
  define: {
    'process.env': {
      ...process.env,
      VITE_APP_VERSION: process.env.npm_package_version,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    }),
    svgLoader()
  ], // https://vitejs.dev/config/
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: '@use "@/wave-ui/scss/variables" as *;@use "@/documentation/scss/variables" as *;'
      }
    },
    postcss: {
      plugins: [autoprefixer]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build: process.env.BUNDLE ? bundlingConf : { outDir: 'docs' }
})
