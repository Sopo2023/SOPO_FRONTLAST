const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const DotEnv = require("dotenv-webpack");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
    entry: "./src/App.tsx",
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@src": path.resolve(__dirname, "./src"),
          },
          module:{
            rules: [
                {
                  test: /\.(png|jpg|gif|mp4|jpeg)$/,
                  type: "asset",
                },
                {
                    test: /\.(tsx|ts|js|jsx)$/,
                    loader: "esbuild-loader",
                    options: {
                      loader: "tsx",
                      target: "es2015",
                    },
                  },
                {
                  test: /\.svg/,
                  type: "asset",
                  generator: {
                    dataUrl: (content) => {
                      content = content.toString();
                      return svgToMiniDataURI(content);
                    },
                  },
                },
                {
                  test: /\.css$/,
                  use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader: "esbuild-loader",
                      options: {
                        loader: "css",
                        minify: true,
                      },
                    },
                  ],
                },
              ],
          },
          output: {
            path: path.resolve(__dirname, "build"),
            clean: true,
            publicPath: "/",
            filename: "[name].[chunkhash].js",
          },
          plugins: [
            new HtmlWebpackPlugin({
              template: path.resolve(__dirname, "public", "index.html"),
              hash: true,
            }),
            new webpack.ProvidePlugin({
              process: "process/browser",
            }),
            new DotEnv(),
          ],
    }

}