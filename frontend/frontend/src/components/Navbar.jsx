import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((s, p) => s + p.qty, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopLite
        </Link>
        <div className="flex gap-6 items-center text-lg">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition"
          >
            Cart <span className="bg-white text-blue-600 font-semibold px-2 rounded">{count}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
