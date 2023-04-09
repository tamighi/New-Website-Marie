const path = require("path");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    library: {
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
};
