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
} = require("@genshin-utils/module-federation/webpack");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (env, args) => {
  const presets = compose([css, typescript, javascript, licenseTxt]);

  return presets({
    devtool: args.mode === "development" ? "cheap-source-map" : false,
    devServer: {
      port: 8081,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: remotes.AppProfile,
        library: { type: "var", name: remotes.AppProfile },
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
