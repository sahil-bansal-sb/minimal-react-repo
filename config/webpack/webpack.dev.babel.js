import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';

import paths from './paths';
import rules from './rules';

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: paths.outputPath,
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|less)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(css)$/,
                include: /node_modules/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 450000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            );
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Jarvis({
            port: 1337
        })
    ]
};