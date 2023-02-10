const webpack = require("webpack")

module.exports = {
  entry: {
    main: "./src/tests/index.tsx",
  },
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
}
