const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // Точка входа приложения
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    // Точка выхода приложения (дириктория скомпилированых выебпаком файлов)
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    // Добавим свойство plugins, где определим плагин (название выходного файла и шаблон)
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,
                './src/pages/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,
                './src/pages/news.html'), // шаблон
            filename: 'news.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,
                './src/pages/photo.html'), // шаблон
            filename: 'photo.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,
                './src/pages/rozklad.html'), // шаблон
            filename: 'rozklad.html', // название выходного файла
        })

    ]
}
