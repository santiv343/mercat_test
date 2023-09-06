import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    decreaseProductQty,
    increaseProductQty,
    removeFromCart
} from "../../redux/slices/cartSlice";
import { getProductIdentifier } from "../../utils/utils";

function CartDrawer({
  openCart,
  onClose,
}: {
  openCart: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  // Handle click outside div
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (openCart) {
          onClose();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, openCart, onClose]);

  return createPortal(
    <>
      {openCart && (
        <div className="absolute inset-0 w-screen h-screen bg-black/20 backdrop-blur-[1px] " />
      )}
      <div
        ref={ref}
        className={`flex flex-col shadow-2xl p-2 fixed right-0 top-0 h-screen bg-black transition-all ${
          openCart ? "w-28 visible" : "w-0 invisible"
        }`}
      >
        <div className="flex w-full justify-end">
          <button className="text-red-700" onClick={() => onClose()}>
            X
          </button>
        </div>
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
    </>,
    document.body
  );
}

export default CartDrawer;
