import { forwardRef } from "react";
import type { InputWithLabelProps } from "./input-with-label.types";
import { InputVariants } from "../input.config";
import { cn } from "@/lib/utils";
export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ className, variant, id, label, ...props }, ref): JSX.Element => {
    return (
      <div className="relative w-full">
        <label
          className="absolute -top-3 left-4 px-1 bg-white text-secondary-text text-sm"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={cn(InputVariants({ variant, className }))}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";
