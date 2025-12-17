import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),

    federation({
      name: "users",
      filename: "remoteEntry.js",
      exposes: {
        "./UsersApp": "./src/bootstrap.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    cssCodeSplit: false,
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@hooks": new URL("./src/hooks", import.meta.url).pathname,
      "@services": new URL("./src/services", import.meta.url).pathname,
      "@store": new URL("./src/store", import.meta.url).pathname,
      "@validation": new URL("./src/validation", import.meta.url).pathname,
      "@assets": new URL("./src/assets", import.meta.url).pathname,
    },
  },
});
