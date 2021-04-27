const path = require("path");
const { EnvironmentPlugin } = require("webpack");

const pkg = require("../../package.json");

const { Remotes } = require("./remotes");

module.exports.remotes = Remotes;

module.exports.sharedModules = {
  uuid: {},
  react: { singleton: true },
  "react-dom": { singleton: true },
  "react-is": { singleton: true },
  "styled-components": {},
};

module.exports.remoteEnvPreset = function remoteEnvPreset(config) {
  return {
    ...config,
    plugins: [
      ...(config.plugins || []),
      new EnvironmentPlugin({
        REMOTE_ENTRIES: JSON.stringify(
          Object.fromEntries(
            Object.values(Remotes).map((name) => {
              const env = name.toUpperCase() + "_ENTRY";

              const url = new URL(pkg.homepage);
              url.pathname = path.resolve(
                url.pathname,
                name.toLowerCase().replace(/^app_/, "").replace(/_/g, "-"),
                "mfre.js"
              );

              return [name, process.env[env] || url.href];
            })
          )
        ),
      }),
    ],
  };
};
