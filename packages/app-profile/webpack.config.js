const {
  compose,
  css,
  typescript,
  javascript,
  licenseTxt,
} = require("@genshin-utils/webpack/presets");
const {
  remoteEnvPreset,
  remotes,
  sharedModules,
} = require("@genshin-utils/module-federation/webpack.cjs");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, args) => {
  const presets = compose([css, typescript, javascript, licenseTxt]);

  return presets({
    devtool: args.mode === "development" ? "cheap-source-map" : false,
    devServer: {
      port: remotes.appProfile.port,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.appProfile.name,
        library: { type: "var", name: remotes.appProfile.name },
        filename: "mfre.js",
        exposes: {
          app: "./src/exports/app.tsx",
          observer: "./src/exports/observer.ts",
          store: "./src/exports/store.ts",
        },
        shared: sharedModules,
      }),
    ],
  });
};
