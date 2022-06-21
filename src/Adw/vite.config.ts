import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "/@RadixIcons/": new URL("../RadixIcons", import.meta.url).pathname,
    },
  },
});
