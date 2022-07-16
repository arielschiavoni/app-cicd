import { defineConfig } from "vite";
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
    },
  },
  test: {
    globals: true,
    setupFiles: "./src/test/setup.ts",
    environment: "jsdom",
  },
});
