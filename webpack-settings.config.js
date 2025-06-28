const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


const prod = process.argv.indexOf('-p') !== -1;

// PostCSS Config
const postCSSFileName = 'postcss.config.js';
let postCSSFilePath = path.resolve(__dirname, postCSSFileName);
if(fs.existsSync(path.resolve(postCSSFileName))) {
postCSSFilePath = path.resolve(postCSSFileName);
}

// Babel Config
const babelFileName = '.babelrc';
let babelFilePath = path.resolve(__dirname, babelFileName);
if(fs.existsSync(path.resolve(babelFileName))) {
babelFilePath = path.resolve(babelFileName);
}

const extractSass = new ExtractTextPlugin({
filename: '[name]',
allChunks: true
});

module.exports = {
entry: {
    'js/main.bundle.js': path.resolve('assets/_js/main.js'),
    'css/style.css': path.resolve('assets/_sass/main.scss')
},
watch: !prod,
plugins: [
    // Extract node_modules JS into vendor file
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/vendor.bundle.js',
        minChunks: function(module, count) {
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.resolve('node_modules')
                ) === 0
            )
        }
    }),
    // Extract SASS
    extractSass,
    // Clean up bundles
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BrowserSyncPlugin({
      server: { baseDir: ['_site'] }
    })
],
output: {
    // Output all files, relying on their names for folder structures
    path: path.resolve('assets'),
    filename: '[name]'
},
resolve: {
    extensions: ['.js', '.json'],
    alias: {
        '@': 'assets/js'
    }
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    extends: babelFilePath
                }
            }
        },
        {
            test: /\.(png|jp?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10,
                name: 'img/[name].[ext]'
            }
        },
        {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
            }
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                publicPath: '../', // fix relative directories for url() -- mostly for images
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: postCSSFilePath
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            outputStyle: "compact"
                        }
                    }
                ]
            })
        }
    ]
},
stats: {
    colors: true
},
devtool: 'source-map'
};

