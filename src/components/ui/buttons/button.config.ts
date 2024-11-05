import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  clsx(
    "flex items-center justify-center rounded-md font-semibold border border-transparent",
  ),
  {
    variants: {
      variant: {
        default: "bg-brand text-white",
        ghost: "bg-white text-brand"
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)