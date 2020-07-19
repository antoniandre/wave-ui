module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wave-ui' : '',
  outputDir: 'docs',
  devServer: {
    overlay: {
      errors: true,
      warnings: false
    }
  },
  configureWebpack: {
    output: {
      library: 'WaveUI',
      libraryExport: 'default'
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })

    // Preserve white spaces for ssh-pre component.
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
    },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/wave-ui/scss/_variables.scss";@import "@/documentation/scss/_variables.scss";`
      }
    }
  }
}
