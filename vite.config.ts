import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [visualizer({ filename: "reports/bundle/index.html" })],
      output: { entryFileNames: "assets/index.js" },
    },
  },
  test: {
    globals: true,
    setupFiles: "./src/test/setup.ts",
    environment: "happy-dom",
    coverage: {
      reporter: "html",
      reportsDirectory: "reports/coverage",
    },
  },
});
