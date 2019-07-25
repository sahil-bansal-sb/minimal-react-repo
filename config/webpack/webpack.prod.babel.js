
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import paths from './paths';
import rules from './rules';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|less)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]',
                        },
                    },{
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: false
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
    optimization: {
        minimizer: [
          new TerserPlugin({
            // Use multi-process parallel running to improve the build speed
            // Default number of concurrent runs: os.cpus().length - 1
            parallel: true,
            // Enable file caching
            cache: true,
            sourceMap: true,
          }),
          new OptimizeCSSAssetsPlugin(),
        ],
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'initial',
            },
            async: {
              test: /[\\/]node_modules[\\/]/,
              name: 'async',
              chunks: 'async',
              minChunks: 4,
            },
          },
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
      },
    plugins: [
        new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
            root: paths.root
        }),
        new MiniCssExtractPlugin({
            filename: `${paths.cssFolder}/[name].css`,
            chunkFilename: `${paths.cssFolder}/[name].css`,
        }),
    ],
    devtool: 'source-map'
};