/* eslint no-useless-concat: 0 */
/* eslint global-require: 0 */

const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV !== 'production';
console.log('\n', DEV_MODE ? '== DEV_MODE ==' : '== PRODUCTION ==', '\n');

const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), // remove dublicated modules
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        __DEVMODE__: DEV_MODE
    })
];
if (!DEV_MODE) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

const postcss = () => [
    require('postcss-import')({
        path: path.join(__dirname, 'app', 'css')
    }),
    require('postcss-cssnext')({
        browsers: ['> 1%', 'last 2 versions']
    }),
    require('postcss-reporter')({
        clearMessages: true
    })
];

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        app: 'client',
        icons: 'icons.font'
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[id].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                /*
                 * TC39 categorises proposals for babel in 4 stages
                 * Read more http://babeljs.io/docs/usage/experimental/
                 */
                test: /\.js$|\.jsx$/,
                loader: 'babel',
                // Reason why we put this here instead of babelrc
                // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                include: path.join(__dirname, 'app'),
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&module&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
            },
            {
                test: /\/sprite\//,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: 'spr-[name]',
                    prefixize: true
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?prefix=img/&limit=30000&q=100&name=[name].[ext]'
            },
            {
                test: /\.svg$/,
                exclude: /(\.font\.|\/sprite\/)/,
                loader: 'url?limit=30000&mimetype=image/svg+xml&name=[name].[ext]'
            },
            {
                test: /\.woff$/,
                loader: 'url?prefix=font/&limit=30000&mimetype=application/font-woff&name=[name].[ext]'
            },
            {
                test: /\.woff2$/,
                loader: 'url?prefix=font/&limit=30000&mimetype=application/font-woff2&name=[name].[ext]'
            },
            {
                test: /\.eot$/,
                loader: 'url?prefix=font/&limit=30000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
            },
            {
                test: /\.(ttf|otf)$/,
                loader: 'url?prefix=font/&limit=30000&mimetype=application/octet-stream&name=[name].[ext]'
            },
            {
                test: /\.font\.(js|json)$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css-raw!postcss!fontgen')
            }
        ]
    },
    plugins,
    resolve: {
        root: [path.join(__dirname, 'app')],
        extensions: ['', '.js', '.jsx', '.css']
    },
    postcss
};
