// 引入一个包
const path = require("path");
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');


//webpack所有的配置信息都写在module.exports
module.exports = {


  // 指定入口文件
  entry: './src/index.ts',

  output: {
    // 打包文件的目录
    path: path.resolve(__dirname, 'dist'),

    // 打包后文件名
    filename: 'bundle.js'
  },

  //  配置模式
  mode: 'development',

  //  指定webpack打包使用模块
  module: {
    //  指定加载为规则
    rules: [
      {
        // 指定生效的文件
        test: /\.ts$/,

        // 要使用的loader
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  //  配置html插件
  plugins: [
    new HTMLWebpackPlugin({
      // template设置你需要的html模板    template: "。/src/index.html"
      template: "./src/index.html",

    })
  ]


}