const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports =  merge(webpackCommon, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        hot: true,
        port: 3000,
    }
},

)