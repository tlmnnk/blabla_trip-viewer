const path = require('path');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
        
                    options: {
                      importLoaders: 1,
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [precss, autoprefixer],
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: './style.css'}),
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