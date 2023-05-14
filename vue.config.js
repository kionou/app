// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" ,
     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
      proxy:'http://localhost:3000',
    //  proxy:'https://clever-crow-wear.cyclic.app',

     
  }
})