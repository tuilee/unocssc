import { resolve } from "path";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

export default {
    plugins: [react(), Unocss()],
    build: {
        lib: {
            entry: resolve(__dirname, "uno.css.ts"),
            name: "style",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
        },
    }
}