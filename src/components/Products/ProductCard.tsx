import AddToCartIcon from "../../icons/AddToCartIcon";
import RemoveFromCartIcon from "../../icons/RemoveFromCartIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { ProductType } from "../../utils/types";
import { getProductIdentifier } from "../../utils/utils";

function ProductCard({ product }: { product: ProductType }) {
  const { image, name, type, price } = product;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const isAlreadyInCart = !!cart.find(
    (cartItem) =>
      getProductIdentifier(cartItem.product) === getProductIdentifier(product)
  );

  return (
    <div className="flex flex-col w-full h-full justify-between p-4 rounded-lg border-2 bg-teal-300 relative">
      <div className="absolute right-2 top-2 w-fit h-fit p-2 bg-orange-500 rounded-lg">
        <p className="text-xs">{type}</p>
      </div>
      <div className="h-1/2">
        <img className="w-full h-full object-contain" src={image} alt={name} />
      </div>

      <h6>{name}</h6>

      <h6>$ {price}</h6>

      {isAlreadyInCart ? (
        <button
          className="flex justify-between items-center text-xs text-center border border-red-500 bg-red-500 text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          onClick={() =>
            dispatch(removeFromCart(getProductIdentifier(product)))
          }
        >
          <RemoveFromCartIcon className="w-8 h-8 stroke-black fill-none" />
          <p>Remove from cart</p>
        </button>
      ) : (
        <button
          className="flex justify-center items-center text-xs border border-teal-500 bg-teal-500 text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
        >
          <AddToCartIcon className="w-8 h-8 stroke-black fill-none" />
          <p>Add to cart</p>
        </button>
      )}
    </div>
  );
}

export default ProductCard;
