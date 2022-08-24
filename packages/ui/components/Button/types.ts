import { Variant } from "./../../types";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
