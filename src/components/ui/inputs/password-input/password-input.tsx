"use client";

import { forwardRef, useState } from "react";
import type { PasswordInputProps } from "./password-input.types";
import { InputVariants } from "../input.config";
import { cn } from "@/lib/utils";import { Button } from "../../buttons";
import { PasswordHideIcon } from "@/assets/icons";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { className, variant, id, label = "Password", ...props },
    ref
  ): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <div className="relative w-full">
        <label
          className="absolute -top-3 left-4 px-1 bg-white text-secondary-text text-sm z-10"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="flex items-center relative">
          <input
            className={cn(InputVariants({ variant, className }))}
            id={id}
            ref={ref}
            type={showPassword ? "text" : "password"}
            {...props}
          />
          <Button
            className="absolute right-4 !p-0"
            onClick={() => setShowPassword((pre) => !pre)}
            variant="ghost"
          >
            {showPassword ? "S" : <PasswordHideIcon />}
          </Button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
