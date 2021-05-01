const {
  compose,
  javascript,
  typescript,
  css,
  licenseTxt,
} = require("@genshin-utils/webpack/presets");
const {
  remotes,
  remoteEnvPreset,
  sharedModules,
} = require("@genshin-utils/module-federation/webpack");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, args) => {
  const presets = compose([
    javascript,
    typescript,
    css,
    licenseTxt,
    remoteEnvPreset,
  ]);

  return presets({
    module: {
      rules: [
        {
          test: /\.worker\.[jt]s$/,
          enforce: "post",
          use: [
            {
              loader: "worker-loader",
              options: {
                inline: "fallback",
              },
            },
          ],
        },
      ],
    },
    devtool: args.mode === "development" ? "cheap-source-map" : false,
    devServer: {
      port: 8083,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.AppTimer,
        library: { type: "var", name: remotes.AppTimer },
        filename: "mfre.js",
        exposes: {
          timer: "./src/exports/timer",
        },
        shared: sharedModules,
      }),
    ],
  });
};
