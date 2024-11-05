import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLinkProps } from "./button-with-link.types";
import { buttonVariants } from "../button.config";

export const ButtonWithLink = forwardRef<
  HTMLAnchorElement,
  ButtonWithLinkProps
>(({ className, size, variant, ...props }, ref) => {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

ButtonWithLink.displayName = "ButtonWithLink";
