module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "./dist/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
