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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        type: "asset",
      },
    ],
  },
}
