const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//vue.config.js
module.exports = {
  css: {
      loaderOptions: {
          sass: {
              prependData: `@import "@/assets/scss/style.scss";`
          }
      }
  }
}
