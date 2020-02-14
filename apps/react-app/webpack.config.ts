import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import PnpWebpackPlugin from "pnp-webpack-plugin";
import config from "@lecstor/config";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const { host, port } = config.reactApp.url;
const { host: internalHost } = config.reactApp.url.internal;
const { host: externalHost } = config.reactApp.url.external;

const gatewayUrl = config.gateway.url[config.reactApp.gateway];

const { scheme: gwScheme, host: gwHost, port: gwPort } = gatewayUrl;
const target = `${gwScheme}://${gwHost}:${gwPort}`;

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port,
    host,
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    allowedHosts: [internalHost, externalHost],
    proxy: {
      "/api": {
        target,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};

module.exports = (env): webpack.Configuration => {
  return {
    mode: "production",
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom"
      },
      extensions: ["*", ".mjs", ".ts", ".tsx", ".js"]
      // plugins: [PnpWebpackPlugin]
    },
    // resolveLoader: {
    //   plugins: [PnpWebpackPlugin.moduleLoader(module)]
    // },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "[name].bundle.js"
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.ejs"
      })
    ],
    ...(env && env.production ? {} : devConfig)
  };
};
