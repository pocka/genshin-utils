module.exports = {
  files: [
    "./*.svg",
    require.resolve("remixicon/icons/Device/phone-lock-line.svg"),
    require.resolve("remixicon/icons/Development/git-repository-line.svg"),
  ],
  fontName: "shellicons",
  classPrefix: "shellicons-",
  baseSelector: ".shellicons",
  types: ["woff", "woff2", "svg"],
  fileName: "[fontname].[hash].[ext]",
};
