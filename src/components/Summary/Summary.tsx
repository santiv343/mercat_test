import { useAppSelector } from "../../redux/hooks";
import { getProductIdentifier } from "../../utils/utils";
import CartItem from "../Cart/CartItem";

function Summary() {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const totalPrice = cartItems
    .reduce((prev, item) => prev + item.product.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 w-full h-3/4 justify-center">
      <div className="flex flex-col bg-stone-800 rounded-lg h-full overflow-hidden p-4">
        <div className="flex w-full text-amber-50 rounded-lg mb-4">
          <h2 className="text-4xl font-bold ">
            Items {`(${cartItems.length})`}
          </h2>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {cartItems?.map((item) => (
            <CartItem
              key={getProductIdentifier(item.product)}
              quantity={item.quantity}
              product={item.product}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-between bg-stone-800 text-amber-50 p-4 rounded-lg mb-4">
        <h2 className="text-4xl font-bold ">Summary</h2>
        <h6 className="text-3xl font-bold mt-auto mb-8">
          Total: $ {totalPrice}
        </h6>
        <button
          disabled={cartItems.length <= 0}
          className="text-3xl font-bold flex justify-evenly items-center w-full border border-teal-600 bg-teal-600
            text-amber-50 px-4 py-2 transition duration-500 ease select-none hover:bg-teal-500 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:border-none"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Summary;
