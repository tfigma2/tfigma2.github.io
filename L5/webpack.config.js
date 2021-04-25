const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPugPlugin  = require('html-webpack-pug-plugin')
module.exports = {
    // entry: {
    //     main: path.resolve(__dirname, './src/index.js'),
    // },
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/news.pug',
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/photo.pug',
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/rozklad.pug',
            filename: 'rozklad.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
}
