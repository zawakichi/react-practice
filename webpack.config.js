//babel8
const path = require("path");
const outputPath = path.resolve(__dirname, 'public');
console.log('outputPath: ' + outputPath);

module.exports = {
  mode: 'development',
  entry: {
    app:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 9000,
    publicPath: '/js/'
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      }, {
        test: /\.css$/,
        loader: ["style-loader","css-loader"]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};