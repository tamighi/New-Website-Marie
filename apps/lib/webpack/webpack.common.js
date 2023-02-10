const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    alias: {
      "@components": path.resolve(__dirname, "..", "src/components"),
      "@contexts": path.resolve(__dirname, "..", "src/contexts"),
      "@providers": path.resolve(__dirname, "..", "src/providers"),
      "@hooks": path.resolve(__dirname, "..", "src/hooks"),
      "@types": path.resolve(__dirname, "..", "src/types"),
      "@constants": path.resolve(__dirname, "..", "src/constants"),
      "@tests": path.resolve(__dirname, "..", "src/tests"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "assets" }],
    }),
  ],
}
