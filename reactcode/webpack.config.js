module.exports = {
  mode: "development",
  entry: "./src/scripts/sitemap.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      {
        use: ["style-loader"],
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      sitemap: false,
    },
  },
};
