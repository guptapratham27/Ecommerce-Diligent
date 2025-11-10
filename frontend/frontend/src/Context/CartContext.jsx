import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart_v1")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  const add = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p._id === product._id);
      if (found)
        return prev.map((p) =>
          p._id === product._id ? { ...p, qty: p.qty + qty } : p
        );
      return [...prev, { ...product, qty }];
    });
  };

  const remove = (id) => setCart((prev) => prev.filter((p) => p._id !== id));
  const updateQty = (id, qty) =>
    setCart((prev) => prev.map((p) => (p._id === id ? { ...p, qty } : p)));
  const clear = () => setCart([]);
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <CartContext.Provider value={{ cart, add, remove, updateQty, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}
