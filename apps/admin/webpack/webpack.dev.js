const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].bundle.js",
    publicPath: "/admin/",
  },
  devServer: {
    allowedHosts: "all",
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: "/admin/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
};
