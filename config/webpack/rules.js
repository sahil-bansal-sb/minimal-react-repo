
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const isProduction = process.env.NODE_ENV === 'production';

const path = require('path');

module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.(js|jsx)$/,
        include: /@elastic/,
        loader: 'babel-loader'
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url-loader?prefix=font/&limit=5000'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader']
    }
];