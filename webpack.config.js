const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const clientConfig = {
  // Tell webpack the root file of our
  // server application
  entry: "./src/client/index.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // resolve: {
  //     extensions: ["*", ".js", ".jsx"]
  // },
  mode: "development"
};

const serverConfig = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",

  // Tell webpack the root file of our
  // server application
  entry: "./src/server.js",

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // resolve: {
  //     extensions: ["*", ".js", ".jsx"]
  // },
  mode: "development",

  // Tell webpack not bundle any libraries into output bundle on the server.
  // If that library exists inside the node modules folder.
  externals: [webpackNodeExternals()]
};

module.exports = [clientConfig, serverConfig];
