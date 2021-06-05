import { defineConfig } from 'vite'
import { resolve } from 'path'
import del from 'rollup-plugin-delete'
import { createVuePlugin } from 'vite-plugin-vue2'

const build = process.env.BUNDLE ? {
  lib: {
    entry: resolve(__dirname, '/src/wave-ui/index.js'),
    name: 'WaveUI'
  },
  rollupOptions: {
    plugins: [
      // Rollup generates all the files, then remove what we don't want.
      // @todo: find a better way.
      del({ targets: ['dist/{images,.htaccess,ghspa.js}', 'dist/*.{ico,txt,html}'], hook: 'generateBundle' })
    ],
    // Make sure to externalize deps that shouldn't be bundled into library.
    external: ['vue'],
    output: {
      // Provide global variables to use in the UMD build for externalized deps.
      globals: { vue: 'Vue' }
    }
  }
} : {
  outDir: 'docs'
}

export default defineConfig({
  define: {
    'process.env': {
      ...process.env,
      VITE_APP_VERSION: process.env.npm_package_version
    }
  },
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    })
  ], // https://vitejs.dev/config/
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/wave-ui/scss/variables";@import "@/documentation/scss/_variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  build
})
