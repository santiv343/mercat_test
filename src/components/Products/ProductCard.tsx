import AddToCartIcon from "../../icons/AddToCartIcon";
import RemoveFromCartIcon from "../../icons/RemoveFromCartIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { ProductType } from "../../utils/types";
import { getProductIdentifier } from "../../utils/utils";

function ProductCard({ product }: { product: ProductType }) {
  const { image, name, type, price, gameSeries } = product;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const isAlreadyInCart = !!cart.find(
    (cartItem) =>
      getProductIdentifier(cartItem.product) === getProductIdentifier(product)
  );

  return (
    <div className="flex flex-col w-full h-[450px] pb-4 rounded-lg border-2 bg-neutral-600 relative group">
      <div className="absolute right-0 top-0 w-fit h-fit bg-orange-500 rounded-tr-lg p-2 z-10">
        <p className="text-sm font-medium cursor-default">{type}</p>
      </div>
      <div className="h-1/2 bg-stone-800 rounded-t-lg">
        <img
          className="w-full h-full scale-75 object-contain transition-transform group-hover:scale-90 group-hover:drop-shadow-2xl"
          src={image}
          alt={name}
        />
      </div>

      <h6 className="italic bg-teal-600 py-2 px-2 text-amber-50">
        {gameSeries}
      </h6>

      <h6 className="text-xl my-4 px-4 font-semibold text-left whitespace-nowrap text-ellipsis text-amber-50 overflow-hidden group-hover:whitespace-normal group-hover:overflow-visible h-10">
        {name}
      </h6>

      <div className="flex justify-between items-center mt-auto">
        <h6 className="flex text-2xl items-center justify-center font-bold whitespace-nowrap w-full h-full bg-lime-500 text-neutral-800">
          $ {price}
        </h6>
        {isAlreadyInCart ? (
          <button
            className="flex justify-evenly w-full items-center text-sm text-center border border-red-500 bg-red-500 text-neutral-800 px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            onClick={() =>
              dispatch(removeFromCart(getProductIdentifier(product)))
            }
          >
            <RemoveFromCartIcon className="w-8 h-8 stroke-neutral-800 fill-none" />
            <p>Remove from cart</p>
          </button>
        ) : (
          <button
            className="flex justify-evenly items-center w-full text-sm border border-teal-600 bg-teal-600
            text-amber-50 px-4 py-2 transition duration-500 ease select-none hover:bg-teal-500 focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
          >
            <AddToCartIcon className="w-8 h-8 stroke-amber-50 fill-none" />
            <p>Add to cart</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
