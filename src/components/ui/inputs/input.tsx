import { forwardRef } from "react";
import type { InputProps } from "./input.types";
import { InputVariants } from "./input.config";
import { cn } from "@/lib/utils";
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, id, ...props }, ref): JSX.Element => {
    return (
      <input
        className={cn(InputVariants({ variant, className }))}
        id={id}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
