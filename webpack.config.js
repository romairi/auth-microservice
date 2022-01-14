const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
  },
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
