const {
  compose,
  css,
  typescript,
  javascript,
  licenseTxt,
} = require("@genshin-utils/webpack/presets");
const {
  remotes,
  sharedModules,
  remoteEnvPreset,
} = require("@genshin-utils/module-federation/webpack");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, args) => {
  const isDev = args.mode === "development";

  const presets = compose([
    css,
    typescript,
    javascript,
    licenseTxt,
    remoteEnvPreset,
  ]);

  return presets({
    devtool: isDev ? "cheap-source-map" : false,
    devServer: {
      port: 8084,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.AppResinMeter,
        library: { type: "var", name: remotes.AppResinMeter },
        filename: "mfre.js",
        exposes: {
          app: "./src/exports/app.ts",
        },
        shared: sharedModules,
      }),
    ],
  });
};
