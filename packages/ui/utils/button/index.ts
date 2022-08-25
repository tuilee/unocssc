export type Variant = "primary" | "success" | "danger" | "warning";
export type ButtonVariant = Record<Variant, string>;

export const variants: Variant[] = ["primary", "success", "danger", "warning"];

export const colors: ButtonVariant = {
  primary: "blue",
  success: "green",
  danger: "red",
  warning: "yellow",
};
