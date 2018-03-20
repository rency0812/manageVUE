/* eslint-disable no-undef,camelcase */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const fs = require('fs')


fs.open('./src/libs/env.js', 'w', function (err, fd) {
  const buf = 'export default "production";'
  fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
  })
})

module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: '/assets/',
    filename: 'scripts/[name].js',
    chunkFilename: 'chunk/[name].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'scripts/vendors.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false  // remove all comments
      },
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../index_prod.html',
      template: './src/template/index.ejs',
      inject: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
})