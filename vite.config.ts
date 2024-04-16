// vite.config.ts

import { defineConfig } from "vite";
// import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "./assets",
    sourcemap: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"], // Add .scss to the list of extensions
  },
  server: {
    open: true,
  },
});
