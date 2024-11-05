import { VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import { buttonVariants } from "../button.config";

export interface ButtonWithLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}
