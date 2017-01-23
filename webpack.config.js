'use strict';

var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var cssmqpacker = require('css-mqpacker');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssMixins = require('postcss-mixins');
var postcssSimpleVars = require('postcss-simple-vars');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV;

module.exports = [{
  entry: {
    core: './app/js/core.js'
  },
  output: {
    path: __dirname + '/public/assets/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}, {
  entry: {
    'style': './app/scss/style.scss'
  },
  output: {
    path: __dirname + '/public/assets/css',
    filename: '[name].css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      }
    ]
  },
  postcss: [
    postcssImport({
      addDependencyTo: webpack
    }),
    postcssMixins,
    postcssSimpleVars,
    postcssNested,
    autoprefixer({browsers: ['last 2 versions']}),
    precss,
    cssmqpacker,
    cssnano
  ],
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}]
