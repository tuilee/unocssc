import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import transformerVariantGroup from "@unocss/transformer-variant-group";

import buttonSafelist from "./utils/button/safelist";
import buttonShortcuts from "./utils/button/shortcuts";

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      transformers: [transformerVariantGroup()],
      safelist: [...buttonSafelist],
      shortcuts: { ...buttonShortcuts },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "uno.css.ts"),
      name: "style",
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
