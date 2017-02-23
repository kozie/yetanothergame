const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.png$/i,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash:6]',
                        publicPath: 'assets/',
                        outputPath: 'assets/'
                    }
                }
            },
            {
                test: /\.scss$/i,
                exclude: /(node_modules|bower_components)/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        extractSass
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true
    }
};
