import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CartDrawer from "./Cart/CartDrawer";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const isSummary = useLocation().pathname.includes("summary");
  return (
    <>
      <CartDrawer onClose={() => setOpenCart(false)} openCart={openCart} />

      <nav className="flex justify-center items-center w-full bg-slate-600">
        <div className="flex w-full justify-between px-4 py-2 max-w-screen-xl">
          <h3>Ecommerce</h3>
          <div className="flex gap-2">
            {isSummary ? (
              <Link to="/products">
                <h3>Products</h3>
              </Link>
            ) : (
              <Link to="/summary">
                <h3>Summary</h3>
              </Link>
            )}
            <button onClick={() => setOpenCart(!openCart)}>Cart</button>
          </div>
        </div>
      </nav>

      <main className="flex w-full justify-between px-4 mt-2 max-w-screen-xl">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
