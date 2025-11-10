import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, remove, updateQty, total, clear } = useCart();

  if (!cart.length)
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Shop Now
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 mb-2">₹{item.price}</p>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item._id, Math.max(1, parseInt(e.target.value)))
                  }
                  className="w-16 border rounded text-center"
                />
                <button
                  onClick={() => remove(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="font-semibold text-gray-800">
              ₹{item.qty * item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: ₹{total}</h3>
        <div className="flex gap-3">
          <button
            onClick={() => alert("Checkout feature coming soon!")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Checkout
          </button>
          <button
            onClick={clear}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
