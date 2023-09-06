import { CartItemType } from "../redux/slices/cartSlice";
import { ProductType } from "./types";

export const getProductIdentifier = (product: ProductType) => {
  return product.head + product.tail;
};

export const checkItemAlreadyInCart = (
  cart: CartItemType[],
  productId: string
) => {
  return Boolean(
    cart.find((item) => getProductIdentifier(item.product) === productId)
  );
};
