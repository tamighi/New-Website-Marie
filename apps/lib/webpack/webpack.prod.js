const path = require("path")

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    library: {
      type: "umd",
    },
  },
  mode: "production",
  devtool: "source-map",
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
}
