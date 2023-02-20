const path = require("path")

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  devServer: {
    hot: "only",
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
}
