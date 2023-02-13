const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: "./src/dev/index.tsx",
  },
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/dev/index.html",
    }),
  ],
}
