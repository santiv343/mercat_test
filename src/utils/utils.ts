import { CartItemType } from "../redux/slices/cartSlice";
import { ProductType } from "./types";
import _prices from "../../prices.json";

const prices: { [productId: string]: { price: number } } = _prices;

export const generateRandomPrice = () => {
  return Math.floor(Math.random() * (1000 - 100) + 100) / 100;
};

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

export const withPrice = (products: ProductType[]) => {
  for (let i = 0; i < products?.length; i++) {
    const element = products[i];
    products[i] = {
      ...element,
      price:
        prices[getProductIdentifier(element)]?.price || generateRandomPrice(),
    };
  }

  return products;
};

export const generatePrices = (products: ProductType[]) => {
  const prices: { [id: string]: { price: number } } = {};

  for (let i = 0; i < products?.length; i++) {
    const element = products[i];
    prices[getProductIdentifier(element)] = {
      price: generateRandomPrice(),
    };
  }

  console.log(JSON.stringify(prices));
};
