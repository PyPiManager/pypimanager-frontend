//path引入
// const path = require('path')

// gzip压缩
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== 'test';

module.exports = {
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_API
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "PyPiManager"
      return args
    });
    // ============压缩图片 start============
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({ bypassOnDebug: true })
      .end();
    // ============压缩图片 end============
  },
  // 关闭productionSourceMap
  productionSourceMap: false,
  configureWebpack: (config) => {
    // 生产环境相关配置
    if (isProduction) {
      //gzip压缩
      const productionGzipExtensions = ["html", "js", "css", "svg"];
      config.plugins.push(
        new CompressionPlugin({
          filename: "[path][base].gz",
          algorithm: "gzip",
          // test: /\.js$|\.css$|\.html$/,
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          // 只有大小大于该值的资源会被处理 10240
          threshold: 10240,
          // 只有压缩率小于这个值的资源才会被处理
          minRatio: 0.8,
          // 删除原文件
          deleteOriginalAssets: false,
        })
      );
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ["console.log"],
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: "all",
              test: /node_modules/,
              name: "vendor",
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100,
            },
            common: {
              chunks: "all",
              test: /[\\/]src[\\/]js[\\/]/,
              name: "common",
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60,
            },
            styles: {
              name: "styles",
              test: /\.(sa|sc|c)ss$/,
              chunks: "all",
              enforce: true,
            },
            runtimeChunk: {
              name: "manifest",
            },
          },
        },
      };
    }
  },
};
