import { CartIcon } from "@/assets/icons/cart-icon";
import { ButtonWithLink, type ButtonWithLinkProps } from "@/components/ui";

export const CartButton = (props: ButtonWithLinkProps): JSX.Element => {
  return (
    <ButtonWithLink className="!rounded-full !p-0 relative" {...props}>
      <CartIcon />
      <div className="absolute top-0 right-0 bg-white text-[12px] h-4 w-4 rounded-full text-center">
        2
      </div>
    </ButtonWithLink>
  );
};
