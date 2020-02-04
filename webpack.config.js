const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        polyfill: 'babel-polyfill',
        app: './js/app.js'
    },
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                test: /\.js$/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
      ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        publicPath: '/',
        port: 9000,
        contentBase: path.join(process.cwd(), 'dist'),
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        hot: true,
      },
};