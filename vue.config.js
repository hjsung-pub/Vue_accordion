const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//vue.config.js
module.exports = {
  css: {
      loaderOptions: {
          sass: {
              data: `
                  @import "@assets//scss/style.scss";
              `
          }
      }
  }
}