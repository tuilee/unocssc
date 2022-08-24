import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [Unocss(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "@unocss/ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
