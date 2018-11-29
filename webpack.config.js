const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  externals: {
    react: "React",
    "react/addons": "React"
  },
  output: {
    libraryTarget: "var",
    library: "Winterfell",
    filename: "winterfell.min.js",
    path: __dirname + "/dist"
  }
};
