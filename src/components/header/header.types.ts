import type { ButtonWithLinkProps } from "@/components/ui";
import type { Dispatch, SetStateAction } from "react";

export type HeaderListsType = (
  setShowProductMenu: Dispatch<SetStateAction<boolean>>
) => {
  label: string;
  attributes: ButtonWithLinkProps;
}[];

export interface ProductsSubMenuType {
  cards: {
    title: string;
    details: string;
  }[];
  categories: string[];
}
