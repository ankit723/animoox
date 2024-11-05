import { forwardRef } from "react";
import { buttonVariants } from "./button.config";
import type { ButtonProps } from "./button.types";
import { cn } from "@/lib/utils";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, type = "button", variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
