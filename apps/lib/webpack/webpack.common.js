module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      assets: "/assets",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
}
