const { ESBuildMinifyPlugin } = require("esbuild-loader");
const LicenseCheckerPlugin = require("license-checker-webpack-plugin");

const DEFAULT_EXTENSIONS = [".js", ".jsx", ".mjs", ".json"];

/**
 * @typedef {import("webpack").Configuration} Config
 */

/**
 * @param {Config} config
 * @returns {Config}
 */
exports.typescript = function typescript(config) {
  return {
    ...config,
    module: {
      ...(config.module || {}),
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.tsx?$/,
          loader: require.resolve("esbuild-loader"),
          exclude: /node_modules/,
          options: {
            loader: "tsx",
            target: "es2018",
          },
        },
      ],
    },
    resolve: {
      ...(config.resolve || {}),
      extensions: [
        ".tsx",
        ".ts",
        ...(config.resolve?.extensions || DEFAULT_EXTENSIONS),
      ],
    },
  };
};

/**
 * @typedef {Object} JavascriptOptions
 * @property {boolean} minify Whether to use ESBuild as minifier.
 * Beaware the resulting filesize: its tree shaking is immature and does not work
 * for some libraries such as react-icons, which ends up >1MB chunk.
 */

/**
 * @param {Config} config
 * @param {JavascriptOptions} options
 * @returns {Config}
 */
exports.javascript = function javascript(config, { minify = false } = {}) {
  return {
    ...config,
    module: {
      ...(config.module || {}),
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve("esbuild-loader"),
          options: {
            loader: "jsx",
            target: "es2018",
          },
        },
      ],
    },
    optimization: minify
      ? {
          ...(config.optimization || {}),
          minimizer: [new ESBuildMinifyPlugin({ target: "es2018" })],
        }
      : config.optimization,
  };
};

/**
 * @param {Config} config
 * @returns {Config}
 */
exports.css = function css(config) {
  return {
    ...config,
    module: {
      ...(config.module || {}),
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /raw/,
              use: [require.resolve("postcss-loader")],
              type: "asset/source",
            },
            {
              resourceQuery: /module/,
              use: [
                require.resolve("style-loader"),
                {
                  loader: require.resolve("css-loader"),
                  options: {
                    modules: true,
                  },
                },
                require.resolve("postcss-loader"),
              ],
            },
            {
              use: [
                require.resolve("style-loader"),
                require.resolve("css-loader"),
                require.resolve("postcss-loader"),
              ],
            },
          ],
        },
      ],
    },
  };
};

/**
 * @param {Config} config
 * @returns {Config}
 */
exports.licenseTxt = function licenseTxt(config) {
  if (
    Array.isArray(config.plugins) &&
    config.plugins.some((p) => p instanceof LicenseCheckerPlugin)
  ) {
    return config;
  }

  return {
    ...config,
    // https://github.com/microsoft/license-checker-webpack-plugin/issues/25#issuecomment-725514289
    resolve: {
      ...(config.resolve ?? {}),
      symlinks: false,
    },
    plugins: [
      ...(config.plugins || []),
      new LicenseCheckerPlugin({
        ignore: ["@genshin-utils/*@*"],
      }),
    ],
  };
};

/**
 * @param {readonly ((config: Config) => Config)[]} presets
 * @returns {(config: Config) => Config}
 */
exports.compose = function compose(presets) {
  return (config) => presets.reduce((cfg, preset) => preset(cfg), config);
};
