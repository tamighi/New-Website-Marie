module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  mode: "production",
  devtool: "source-map",
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
}
