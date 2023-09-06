import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeFromCart,
  decreaseProductQty,
  increaseProductQty,
} from "../../redux/slices/cartSlice";
import { getProductIdentifier } from "../../utils/utils";

function Summary() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  return (
    <div>
      <div className="flex flex-col p-2">
        {cartItems?.map((item) => (
          <div
            key={getProductIdentifier(item.product)}
            className="flex flex-col text-white bg-red-600 rounded-lg p-4"
          >
            <p
              onClick={() =>
                dispatch(removeFromCart(getProductIdentifier(item.product)))
              }
            >
              {item.product.character}
            </p>
            <div className="flex">
              <button
                onClick={() =>
                  dispatch(
                    decreaseProductQty(getProductIdentifier(item.product))
                  )
                }
                className="flex w-8 h-8 justify-center items-center p-1 border border-black"
              >
                -
              </button>
              <p className="flex justify-center items-center p-1 border border-black">
                {item.quantity}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    increaseProductQty(getProductIdentifier(item.product))
                  )
                }
                className="flex w-8 h-8 justify-center items-center p-1 border border-black"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
