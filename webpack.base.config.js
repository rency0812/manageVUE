/* eslint-disable indent,no-undef,no-unused-vars,quotes */
const os = require("os")
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/main.js'],
        vendors: './src/vendors'
        // 'vendors': libs
    },
    output: {
        path: path.join(__dirname, './assets')
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            cache: true,
            verbose: true
        })
    ],
    externals: {
        "vue": "Vue",
        "echarts": "echarts"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {

                    less: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                        fallback: 'vue-style-loader'
                    }),

                    css: ExtractTextPlugin.extract({
                        use: ['css-loader?minimize', 'autoprefixer-loader'],
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },
            {
                test: /iview\/.*?js$/,
                // loader: 'babel-loader'
                loader: 'happypack/loader?id=happybabel'
            },
            {
                test: /\.js$/,
                // loader: 'babel-loader',
                loader: 'happypack/loader?id=happybabel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: ['autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}