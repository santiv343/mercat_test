import { useState } from "react";
import { Outlet } from "react-router-dom";
import CartDrawer from "./Cart/CartDrawer";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <CartDrawer onClose={() => setOpenCart(false)} openCart={openCart} />

      <nav className="flex justify-between px-4 py-2">
        <h3>Ecommerce</h3>
        <button onClick={() => setOpenCart(!openCart)}>Cart</button>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
