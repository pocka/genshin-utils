const { EnvironmentPlugin } = require("webpack");

const remotes = (module.exports.remotes = {
  appProfile: {
    directory: "app-profile",
    name: "app_profile",
    port: Number(process.env.APP_PROFILE_PORT || 8081),
  },
  appRandomEventCounter: {
    directory: "app-random-event-counter",
    name: "app_random_event_counter",
    port: Number(process.env.APP_RANDOM_EVENT_COUNTER_PORT || 8082),
  },
});

module.exports.sharedModules = {
  uuid: {},
  react: { singleton: true },
  "react-dom": { singleton: true },
  "react-is": { singleton: true },
  "styled-components": {},
};

module.exports.remoteEnvPreset = function remoteEnvPreset(
  config,
  host = "localhost"
) {
  return {
    ...config,
    plugins: [
      ...(config.plugins || []),
      new EnvironmentPlugin(
        Object.fromEntries(
          Object.values(remotes).map(({ name, port }) => {
            const key = name.toUpperCase() + "_HOST";
            const value = `//${host}:${port}`;

            return [key, value];
          })
        )
      ),
    ],
  };
};
