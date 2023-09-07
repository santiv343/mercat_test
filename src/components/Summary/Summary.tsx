import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProductIdentifier } from "../../utils/utils";
import CartItem from "../Cart/CartItem";
import { emptyCart } from "../../redux/slices/cartSlice";

function Summary() {
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems
    .reduce((prev, item) => prev + item.product.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-4 w-full md:h-3/4 justify-center">
      <div className="flex flex-col text-amber-50 bg-stone-800 rounded-lg h-full overflow-hidden p-4">
        <div className="flex w-full rounded-lg mb-4">
          <h2 className="text-4xl font-bold ">
            Items {`(${cartItems.length})`}
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(emptyCart())}
              className="w-fit ml-auto bg-red-500 p-4"
            >
              Empty cart
            </button>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-4 overflow-y-auto">
            {cartItems?.map((item) => (
              <CartItem
                key={getProductIdentifier(item.product)}
                quantity={item.quantity}
                product={item.product}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-3xl mb-4">Your cart is empty!</h2>
            <Link to="/">
              <h3 className="text-2xl underline">
                Click here to buy some products
              </h3>
            </Link>
          </div>
        )}
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
