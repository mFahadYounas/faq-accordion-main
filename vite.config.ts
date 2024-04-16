// vite.config.ts

import { defineConfig } from "vite";
// import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },
  server: {
    open: true,
  },
});
