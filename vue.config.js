module.exports = {
  // publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/wave-ui/scss/_variables.scss";`
      }
    }
  }
}
