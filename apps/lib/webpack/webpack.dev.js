const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/dev/index.tsx",
  mode: "development",
  devServer: {
    hot: "only",
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
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
                localIdentName: "[name]__[local]__[hash:base64:5]"
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/dev/index.html",
    }),
  ],
};
