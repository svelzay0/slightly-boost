const path = require("path");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/slightly-boost/'
  : '/',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    },
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/styles/theme/")],
          indentedSyntax: false
        },
        additionalData: `@import "~@/styles/_variables.scss";`
      }
    }
  },
  devServer: process.env.NODE_ENV === "production" ? {
    host: 'slightlyboost.com'
    // port: 5000
  } : {
    host: 'slightlyboost.com'
  }
}