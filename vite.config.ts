import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import analyzer from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [analyzer({ limit: 5 }), visualizer()],
      output: { entryFileNames: "assets/index.js" },
    },
  },
  test: {
    globals: true,
    setupFiles: "./src/test/setup.ts",
    environment: "happy-dom",
  },
});
