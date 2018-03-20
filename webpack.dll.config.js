/* eslint-disable no-undef */
/**
 * @file 使用DllPlugin把常用依赖单独打包，提高webpack打包效率
 * @author Liu Junyang
 * 在应用到这些依赖包的后端套模板的html需要使用script标签引用output的filename的js文件
 */
let path = require('path')
const webpack = require('webpack')

const libs = [
  'vue',
  'vue-router',
  'vuex',
  'axios',
  'iview',
  'echarts'
]

module.exports = {
  output: {
    path: '/assets',
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    'vendors': libs
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
}