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
    (cfg) => remoteEnvPreset(cfg, args.host),
  ]);

  return presets({
    devtool: args.mode === "development" ? "cheap-source-map" : false,
    devServer: {
      port: 8082,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.AppRandomEventCounter,
        library: { type: "var", name: remotes.AppRandomEventCounter },
        filename: "mfre.js",
        exposes: {
          app: "./src/exports/app.tsx",
        },
        shared: sharedModules,
      }),
    ],
  });
};
