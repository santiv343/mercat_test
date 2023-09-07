import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CartDrawer from "./Cart/CartDrawer";
import AddToCartIcon from "../icons/AddToCartIcon";
import { useAppSelector } from "../redux/hooks";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const isSummary = useLocation().pathname.includes("summary");
  const cartItems = useAppSelector((state) => state.cartReducer.cart);

  return (
    <>
      <CartDrawer onClose={() => setOpenCart(false)} openCart={openCart} />

      <nav className="fixed inset-0 h-12 z-50 mb-4 flex justify-center items-center w-full bg-stone-800 text-amber-50">
        <div className="flex w-full items-center justify-between px-4 py-2 max-w-screen-xl">
          <Link
            to="/"
            className="flex hover:[text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] transition-transform hover:scale-110 gap-2 justify-center items-center"
          >
            <img height={30} width={30} src="/logo.png" alt="logo" />
            <h3 className="text-2xl font-bold text-amber-50 ">Amiibuy</h3>
          </Link>
          <div className="flex gap-8">
            {isSummary ? (
              <Link to="/">
                <h3 className="transition-transform hover:scale-110">
                  Products
                </h3>
              </Link>
            ) : (
              <Link to="/summary">
                <h3 className="transition-transform hover:scale-110">
                  Summary
                </h3>
              </Link>
            )}
            <button
              onClick={() => setOpenCart(!openCart)}
              className="group relative"
            >
              <AddToCartIcon className="w-6 h-6 fill-none stroke-amber-50 transition-transform group-hover:scale-110" />
              {cartItems.length > 0 && (
                <span className="flex absolute -top-2 -right-2 items-center justify-center text-xs rounded-full w-4 h-4 bg-red-500">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
