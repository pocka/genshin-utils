const { licenseTxt } = require("@genshin-utils/webpack/presets");
const HtmlPlugin = require("html-webpack-plugin");
const {
  container: { ModuleFederationPlugin },
  EnvironmentPlugin,
} = require("webpack");

const { homepage } = require("./package.json");
const { repository } = require("../../package.json");

const MODULE_NAME = "shell";
const REMOTES = [
  {
    name: "app-profile",
    port: process.env.APP_PROFILE_PORT || 8081,
  },
  {
    name: "app-random-event-counter",
    port: process.env.APP_RANDOM_EVENT_COUNTER_PORT || 8082,
  },
];

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}

module.exports = (env, args) => {
  const isDev = args.mode === "development";

  const presets = [licenseTxt];
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
        REPOSITORY_URL: repository.url,
        ...Object.fromEntries(
          REMOTES.map(({ name, port }) => [
            `${kebabToSnake(name).toUpperCase()}_HOST`,
            isDev
              ? `//${args.host || "localhost"}:${port}`
              : `${homepage}${name}`,
          ])
        ),
      }),
      new ModuleFederationPlugin({
        name: MODULE_NAME,
        shared: ["uuid"],
      }),
      new HtmlPlugin({
        template: "./src/index.html",
      }),
    ],
  });
};
