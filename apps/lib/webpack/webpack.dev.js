const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/dev/index.tsx",
  mode: "development",
  devServer: {
    hot: "only",
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/dev/index.html",
    }),
  ],
}
