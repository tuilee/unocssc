import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [react(), Unocss()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "index.tsx"),
      name: "@unocss/ui",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
