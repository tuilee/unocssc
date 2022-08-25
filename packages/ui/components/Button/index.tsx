import classnames from "classnames";

import { ButtonProps } from "./types";

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
      className={classnames('btn', variant && `btn-${variant}`)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
