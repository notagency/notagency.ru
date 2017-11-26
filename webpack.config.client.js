/* eslint-disable linebreak-style */
/* eslint no-useless-concat: 0 */
/* eslint global-require: 0 */
/* eslint object-shorthand: [2, "consistent"] */
/* eslint max-len: 0 */

const path = require('path');
const webpack = require('webpack');
// const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaderUtils = require('loader-utils');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const DEV_MODE = process.env.NODE_ENV !== 'production';

const dirs = {
    entry: path.join(__dirname, 'app'),                    // path to input dir
    assets: path.join(__dirname, 'assets'),                // path to output dir
    nodeModules: path.join(__dirname, 'node_modules'),     // path to node_modules dir
    sprites: path.join(__dirname, 'app/i/sprite')          // path to sprites dir
};

let sourceMaps;
let minimize;

if (DEV_MODE) {
    sourceMaps = true;
    minimize = false;
} else {
    sourceMaps = false;
    minimize = true;
}

console.info('\x1b[37m', '\x1b[40m');
console.info('\x1b[35m', '\x1b[40m', (DEV_MODE ? 'DEV' : 'PRODUCTION') + ' BUILD');
// console.info('\x1b[35m', '\x1b[40m', 'NODE_ENV ' + process.env.NODE_ENV);
console.info('\x1b[37m', '\x1b[40m');

const config = {
    context: dirs.entry,
    entry: {
        app: './index'
    },
    output: {
        path: dirs.assets,
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[id].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                /*
                 * TC39 categorises proposals for babel in 4 stages
                 * @see http://babeljs.io/docs/usage/experimental/
                 */
                test: /\.js$|\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        // Reason why we put this here instead of babelrc
                        // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
                        presets: ['env', 'react', 'stage-0']
                    }
                },
                include: dirs.entry,
                exclude: dirs.nodeModules
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                import: false,
                                url: false,
                                localIdentName: '[local]--[hash:base64:5]',
                                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                                    if (!options.context) {
                                        options.context = loaderContext.options && typeof loaderContext.options.context === 'string' ? loaderContext.options.context : loaderContext.context;
                                    }
                                    const request = loaderContext.resourcePath;
                                    options.content = options.hashPrefix + request + '+' + localName;
                                    localIdentName = localIdentName.replace(/\[local\]/gi, localName);
                                    const hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);
                                    return hash.replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-').replace(/^((-?[0-9])|--)/, '_$1');
                                },
                                sourceMap: sourceMaps
                                // minimize: minimize
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                package: 'defaults'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.svg$/,
                exclude: dirs.sprites,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            mimetype: 'image/svg+xml',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                include: dirs.sprites,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'spr-[name]'
                            // extract: true
                        }
                    },
                    'svgo-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'img',
                            limit: 3000,
                            q: 3000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'font',
                            mimetype: 'application/font-woff',
                            limit: 3000,
                            q: 3000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff2$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'font',
                            mimetype: 'application/font-woff2',
                            limit: 3000,
                            q: 3000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.eot$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'font',
                            mimetype: 'application/font-eot',
                            limit: 3000,
                            q: 3000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            prefix: 'font',
                            mimetype: 'application/octet-stream',
                            limit: 3000,
                            q: 3000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // new NpmInstallPlugin(),
        new webpack.DefinePlugin({
            __DEVMODE__: DEV_MODE // https://stackoverflow.com/a/30061249/2393499
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => ({
                    defaults: [
                        require('postcss-import'),
                        require('postcss-flexbugs-fixes'),
                        require('postcss-cssnext')({ browsers: ['last 3 version'] }) // already includes autoprefixer
                    ]
                })
            }
        }),
        new SpriteLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

if (DEV_MODE) {
    config.devtool = 'source-map';
} else {
    // uglifying enabled
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: false,
        sourceMap: false
    }));
    // minimization enabled
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: minimize }));
}

module.exports = config;
