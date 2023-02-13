const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "assets" }],
    }),
  ],
}
