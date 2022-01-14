const path = require("path");

module.exports = {
  target: "node",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
