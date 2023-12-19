const path = require("path");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/slightlyboost/'
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
  } : {
    host: 'slightlyboost.com'
  }
}