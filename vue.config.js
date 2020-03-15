module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/_variables.scss";'
      }
    }
  }
}
