const path =require("path");

module.exports = {
  mode: 'development',
  entry: {
    index: './Javascript/index.js',
    order: './Javascript/Order.js',
    configure: './Javascript/configure.js',
    admin: './Javascript/Admin.js',
    product: './Javascript/Product.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  watch: true
}