// const webpack = require('webpack');
const path = require("path");
const browserifyConfig = require('./browserify.config.js');

module.exports = {
  mode: 'development',
  entry: {
    index: './Javascript/index.js',
    order: './Javascript/Order.js',
    configure: './Javascript/configure.js',
    login: './Javascript/Login.js',
    register: './Javascript/Register.js',
    admin: './Javascript/Admin.js',
    product: './Javascript/Product.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules'],
    // fallback: browserifyConfig.shims
    fallback: {
      fs: false, // or require.resolve('browserify-fs')
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
      async_hooks: require.resolve('async_hooks'),
      querystring: require.resolve('querystring-es3'), 
      net: false, // or require.resolve('net-browserify')
      dns: false, // or require.resolve('dns.js'),
      child_process: false, // or require.resolve('child_process_browserify')
      // fallback: browserifyConfig.shims

    },
  },

  watch: true
}

// const webpack = require('webpack');
// const path = require("path");

// module.exports = {
//   mode: 'production', // Switch to 'production' for production builds
//   entry: {
//     index: './Javascript/index.js',
//     order: './Javascript/Order.js',
//     configure: './Javascript/configure.js',
//     login: './Javascript/Login.js',
//     register: './Javascript/Register.js',
//     admin: './Javascript/Admin.js',
//     product: './Javascript/Product.js',
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   plugins: [
//     // Only include necessary Node.js globals
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//     }),
//   ],
//   resolve: {
//     extensions: ['.js'],
//     // Only include necessary fallbacks
//     fallback: {
//       http: require.resolve('stream-http'),
//       https: require.resolve('https-browserify'),
//       process: require.resolve('process/browser'),
//       querystring: require.resolve('querystring-es3'),
//     },
//   },
//   // Disable watch mode for production builds
//   watch: process.env.NODE_ENV === 'development',
// };
