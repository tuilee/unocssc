import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const variants = ["primary", "success", "danger", "warning"];
const colors = {
    primary: "blue",
    success: "green",
    danger: "red",
    warning: "yellow",
};

const getButtonStateStyle = (state, variant, number) => {
    let style = `${state}:bg-${colors[variant]}-${number}`;
    if (state === "disabled") {
        style += ` ${state}:hover:bg-${colors[variant]}-${number} ${state}:hover:cursor-not-allowed`;
    }
    return style;
};

const buttonStateStylesShortcuts = variants.reduce((p, variant) => {
    return {
        ...p,
        [`d:${variant}`]: getButtonStateStyle("disabled", variant, 3),
        [`h:${variant}`]: getButtonStateStyle("hover", variant, 8),
    };
}, {});

export default defineConfig({
    plugins: [
        react(),
        Unocss({
            transformers: [transformerVariantGroup()],
            safelist: [
                ...variants.map((variant) => `d:${variant}`),
                ...variants.map((variant) => `h:${variant}`),
            ],
            shortcuts: { ...buttonStateStylesShortcuts },
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
