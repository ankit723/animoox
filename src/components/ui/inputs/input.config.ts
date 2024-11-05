import { cva } from "class-variance-authority";
import clsx from "clsx";

export const InputVariants = cva(
  clsx(
    "w-full px-4 py-3",
    "border-2 rounded-md",
    "placeholder-ternary-text",
    "focus:outline-brand"
  ),
  {
    variants: {
      variant: {
        default: "border-brand text-brand",
        error: "border-error text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
