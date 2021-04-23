const {
  compose,
  javascript,
  typescript,
  css,
  licenseTxt,
} = require("@genshin-utils/webpack/presets");
const {
  remoteEnvPreset,
  remotes,
  sharedModules,
} = require("@genshin-utils/module-federation/webpack.cjs");
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
      port: remotes.appRandomEventCounter.port,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.appRandomEventCounter.name,
        library: { type: "var", name: remotes.appRandomEventCounter.name },
        filename: "mfre.js",
        exposes: {
          app: "./src/exports/app.tsx",
        },
        shared: sharedModules,
      }),
    ],
  });
};
