var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var DEV_MODE = process.env.NODE_ENV !== 'production';
console.log('\n', DEV_MODE ? '== DEV_MODE ==' : '== PRODUCTION ==', '\n');

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), //remove dublicated modules
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin()
];

if (!DEV_MODE) {
    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    // The configuration for the client
    name: 'browser',
    context: path.join(__dirname, 'app'),
    entry: {
      app: 'client',
      icons : 'icons.font',
      styles: 'less/common.less'
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        chunkFilename: "[name].[id].js",
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
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less?sourceMap&root=true')
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
            },
      ]
    },
    plugins: plugins,
    resolve: {
      root: [path.join(__dirname, 'app')],
      extensions: ['', '.js', '.jsx', '.css']
    },
    postcss: [autoprefixer({ browsers: ['last 3 version','ie >= 10'] })],
    lessLoader: {
        'lessPlugins': [
            require('less-plugin-glob')
        ]
    }
  };
