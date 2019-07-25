
import webpack, { EnvironmentPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// const { EnvironmentPlugin } = require('webpack')

import paths from './paths';
import rules from './rules';

module.exports = {
    entry: {
        ...paths.entryPath,
        vendor: [
            'react', 'react-dom', 'react-router',
            'redux', 'react-redux', 'react-router-redux'
        ]
    },
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new EnvironmentPlugin({
            NODE_ENV: 'production'
        })
    ]
};