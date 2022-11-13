import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import Delete from 'rollup-plugin-delete'
import { createVuePlugin } from 'vite-plugin-vue2'
import autoprefixer from 'autoprefixer'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

const bundlingConf = {
  lib: {
    entry: resolve(_dirname, '/src/wave-ui/index.js'),
    name: 'WaveUI',
    formats: ['es', 'umd', 'cjs']
  },
  rollupOptions: {
    plugins: [
      // Rollup generates all the files, then remove what we don't want.
      // @todo: find a better way.
      Delete({ targets: ['dist/{images,.htaccess,ghspa.js}', 'dist/*.{ico,txt,html}'], hook: 'generateBundle' })
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

const build = process.env.BUNDLE ? bundlingConf : { outDir: 'docs' }

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
        additionalData: '@import "@/wave-ui/scss/variables";@import "@/documentation/scss/variables";'
      }
    },
    postcss: {
      plugins: [autoprefixer]
    }
  },
  resolve: {
    alias: {
      '@': resolve(_dirname, '/src')
    }
  },
  build
})
