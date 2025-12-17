import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        users: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
      transform: {
        css: {
          inject: true,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@assets": new URL("./src/assets", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@layout": new URL("./src/components/layout", import.meta.url).pathname,
      "@errors": new URL("./src/components/errors", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@microfrontends": new URL("./src/microfrontends", import.meta.url)
        .pathname,
    },
  },
});
