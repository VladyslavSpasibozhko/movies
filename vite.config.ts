import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@router": path.resolve(__dirname, "./src/router"),
    },
  },
});
