// browserify.config.js
module.exports = {
  shims: {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    os: require.resolve('os-browserify'),
    buffer: require.resolve('buffer'),
    assert: require.resolve('assert'),
    util: require.resolve('util'),
    path: require.resolve('path-browserify'),
  },
};
