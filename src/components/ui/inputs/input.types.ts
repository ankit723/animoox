import { InputVariants } from "./input.config";
import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}
