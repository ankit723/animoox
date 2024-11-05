import { buttonVariants } from "./button.config";
import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}