module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      scss: {
        prependData: `
          @import "~@/assets/scss/_variables.scss";
          @import "~@/assets/scss/_reset.scss";
          @import "~@/assets/scss/_classes.scss";
        `
      }
    }
  }
}
