const webpack = require("webpack");

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // devServer: {
  //   port: 5000,
  //   proxy: {
  //     '/': {
  //       target: 'http://10.1.14.67'
  //     }
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = "PyPiManager";
  //     return args;
  //   });
  // },
  configureWebpack: {
    plugins: [
      // 下面两项配置才是 compression-webpack-plugin 压缩配置
      // 压缩成 .gz 文件
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
    // 开启分离 js
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      },
    },
  },
};
