const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const WP_THEME = 'LS'

module.exports = (env) => {
    let result = {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            desktop_index: path.resolve(__dirname, 'src/templates/desktop', 'index.js'),
            mobile_index: path.resolve(__dirname, 'src/templates/mobile', 'index.js'),
            desktop_p404: path.resolve(__dirname, 'src/templates/desktop', 'p404.js'),
            mobile_p404: path.resolve(__dirname, 'src/templates/mobile', 'p404.js')
        },
        output: {
            filename: 'js/[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
            publicPath: '/'
        },
        devServer: {
            static: './build'
        },
        optimization: {
            moduleIds: 'deterministic',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new WebpackManifestPlugin({}),
            new HtmlWebpackPlugin({
                title: 'Desktop Home',
                filename: 'desktop_index.html',
                inject: 'head',
                minify: false,
                chunks: ['desktop_index'],
                template: path.resolve(__dirname, 'src/templates/desktop/index.pug')
            }),
            new HtmlWebpackPlugin({
                title: 'Desktop 404',
                filename: 'desktop_p404.html',
                inject: 'head',
                minify: false,
                chunks: ['desktop_p404'],
                template: path.resolve(__dirname, 'src/templates/desktop/p404.pug')
            }),
            new HtmlWebpackPlugin({
                title: 'Mobile Home',
                filename: 'mobile_index.html',
                inject: 'head',
                minify: false,
                chunks: ['mobile_index'],
                template: path.resolve(__dirname, 'src/templates/mobile/index.pug')
            }),
            new HtmlWebpackPlugin({
                title: 'Mobile 404',
                filename: 'mobile_p404.html',
                inject: 'head',
                minify: false,
                chunks: ['mobile_p404'],
                template: path.resolve(__dirname, 'src/templates/mobile/p404.pug')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { targets: 'defaults' }]],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },
                {
                    test: /\.pug$/,
                    use: ['pug-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[hash][ext][query]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[hash][ext][query]'
                    }
                }
            ]
        },
        resolve: {
            alias: {
                '@img': path.resolve(__dirname, './src/img/')
            }
        }
    }

    if (env?.production) {
        result.mode = 'production'
        result.devtool = false
        result.output.publicPath = `/wp-content/themes/${WP_THEME}/frontend/build/`
    }
    return result
}
