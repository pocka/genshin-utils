const { licenseTxt } = require("@genshin-utils/webpack/presets");
const {
  remoteEnvPreset,
  sharedModules,
} = require("@genshin-utils/module-federation/webpack");
const HtmlPlugin = require("html-webpack-plugin");
const {
  container: { ModuleFederationPlugin },
  EnvironmentPlugin,
} = require("webpack");

const pkg = require("../../package.json");

const MODULE_NAME = "shell";

module.exports = (env, args) => {
  const isDev = args.mode === "development";

  const presets = [licenseTxt, remoteEnvPreset];
  const withPreset = (config) =>
    presets.reduce((cfg, preset) => preset(cfg), config);

  return withPreset({
    devtool: isDev ? "cheap-source-map" : false,
    devServer: {
      port: process.env.SHELL_PORT || 8080,
    },
    module: {
      rules: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: {
            loader: "elm-webpack-loader",
            options: {
              cwd: __dirname,
              debug: process.env.SHELL_DEBUG || false,
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(svg|eot|ttf|woff2?)$/,
          type: "asset",
        },
        {
          test: /\.font\.js$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            "webfonts-loader",
          ],
        },
      ],
    },
    plugins: [
      new EnvironmentPlugin({
        REPOSITORY_URL: pkg.repository.url,
      }),
      new ModuleFederationPlugin({
        name: MODULE_NAME,
        shared: sharedModules,
      }),
      new HtmlPlugin({
        template: "./src/index.html",
      }),
    ],
  });
};
