import classnames from "classnames";

import { Variant } from "../../types";
import { ButtonProps } from "./types";

const BASE_STYLE = [
  "py-2",
  "px-3",
  "b-1",
  "b-transparent",
  "rounded",
  "cursor-pointer",
];

const styles: {
  [key in Variant]: string[];
} = {
  primary: ["c-white", "bg-blue-6", "hover:bg-blue-8"],
  success: ["c-white", "bg-green-6", "hover:bg-green-8"],
  danger: ["c-white", "bg-red-6", "hover:bg-red-8"],
  warning: ["c-white", "bg-yellow-6", "hover:bg-yellow-8"],
};

export const Button = ({
  type = "button",
  children,
  variant,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classnames(BASE_STYLE, variant && styles[variant])}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
