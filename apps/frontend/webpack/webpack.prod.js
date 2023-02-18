module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
}
