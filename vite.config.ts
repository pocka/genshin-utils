import rollupLicensePlugin from "rollup-plugin-license";
import { defineConfig } from "vite";
import elmPlugin from "vite-plugin-elm";

import packageJson from "./package.json";

export default defineConfig({
  plugins: [elmPlugin()],
  build: {
    rollupOptions: {
      plugins: [
        rollupLicensePlugin({
          thirdParty: {
            output: new URL("./dist/ThirdPartyNotice.txt", import.meta.url)
              .pathname,
          },
        }),
      ],
    },
    // Workaround for a bug that Vite inlining imports with `?url` query, even without `?inline` query.
    assetsInlineLimit: 0,
  },
  define: {
    "import.meta.env.PACKAGE_INFO": JSON.stringify({
      version: packageJson.version,
      license: packageJson.license,
      homepage: packageJson.homepage,
      author: packageJson.author,
      contributors: packageJson.contributors,
      repository: packageJson.repository,
    }),
  },
});
