// import omg from "@unocssc/runtine";
import { variants } from ".";
import type { Variant } from ".";

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
const safelist = [
  "btn",
  ...variants.map((variant) => `btn-${variant}`),
  ...variants.map((variant) => `btn-${variant}:disabled` as ButtonVariantState),
  ...variants.map((variant) => `btn-${variant}:hover` as ButtonVariantState),
];

export type ButtonVariantState = `btn-${Variant}:${"disabled" | "hover"}`;
export default safelist;
