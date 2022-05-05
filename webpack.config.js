/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-26 14:23:10
 * @LastEditTime: 2022-05-05 14:02:53
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, dir)
  
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.js'
  },
  
  output: {
    path: resolve('dist'),
    filename: "yeshen-tools.js",
    // 设置对外暴露对象的全局名称
    library: "yeshenTools",
    // // 打包生成通过esm、commonjs、requirejs的语法引入
    libraryTarget: "umd",
  },
  stats: 'errors-warnings',
  module: {
    rules: [
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

  ],
  devtool: isProd ? false : 'source-map',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8088,
    open: false
  },
}