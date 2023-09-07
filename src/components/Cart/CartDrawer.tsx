import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../../icons/CloseIcon";
import { useAppSelector } from "../../redux/hooks";
import { getProductIdentifier } from "../../utils/utils";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartDrawer({
  openCart,
  onClose,
}: {
  openCart: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cartItems = useAppSelector((state) => state.cartReducer.cart);
  const totalPrice = cartItems
    .reduce((prev, item) => prev + item.product.price * item.quantity, 0)
    .toFixed(2);

  // Handle click outside div
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (openCart) {
          onClose();
        }
      }
    }
    if (openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, openCart, onClose]);

  return createPortal(
    <>
      {openCart && (
        <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-[1px] z-[1000]" />
      )}
      <div
        ref={ref}
        className={`flex flex-col shadow-2xl p-2 fixed right-0 top-0 h-screen bg-stone-800 text-amber-50 transition-all z-[1001]   ${
          openCart ? "w-80 visible" : "w-0 invisible"
        }`}
      >
        <div className="flex w-full justify-between items-center p-4">
          <h3 className="text-xl font-bold">Cart {`(${cartItems.length})`}</h3>
          <button onClick={() => onClose()}>
            <CloseIcon className="w-6 h-6 fill-red-500" />
          </button>
        </div>
        <div className="flex flex-col p-2 gap-4 overflow-y-auto mb-24">
          {cartItems?.map((item) => (
            <CartItem
              key={getProductIdentifier(item.product)}
              quantity={item.quantity}
              product={item.product}
            />
          ))}
        </div>
        <div className="absolute flex flex-col bottom-0 left-0 w-full h-24 bg-stone-900 justify-center items-center gap-2">
          <h6 className="text-xl">Total: $ {totalPrice}</h6>
          <Link to="/summary">
            <h6 onClick={onClose}>Continue to summary</h6>
          </Link>
        </div>
      </div>
    </>,
    document.body
  );
}

export default CartDrawer;
