const path = require("path");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, "..", "src"), "node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    library: {
      type: "umd",
    },
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
