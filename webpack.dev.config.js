/* eslint-disable no-undef,no-unused-vars */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const fs = require('fs')

fs.open('./src/libs/env.js', 'w', function (err, fd) {
  const buf = 'export default "development";'
  fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
  })
})

module.exports = merge(webpackBaseConfig, {
  devtool: '#source-map',
  output: {
    publicPath: '/assets/',
    filename: 'scripts/[name].js',
    chunkFilename: 'chunk/[name].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {colors: true},
    //跨域代理，所以axios的baseurl不要使用带http的绝对路径，直接使用'/api/‘即可
    proxy: {
      '/api/*': {
        target: 'http://localhost:8182/',
        changeOrigin: true,
        // secure: false,
        pathRewrite: {'^/api': '/api'}
      },
      '/oajx/*':{
        target: 'http://signalr.bss.comlbs.com/',
        changeOrigin: false,
        pathRewrite: {'^/oajx': '/'}
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'scripts/vendors.js'
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/template/index.ejs',
      inject: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]

})