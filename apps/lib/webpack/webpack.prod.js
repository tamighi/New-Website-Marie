const path = require("path")

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  devtool: "source-map",
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
}
