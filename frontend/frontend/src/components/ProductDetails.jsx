import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { useCart } from "../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { add } = useCart();

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product)
    return (
      <div className="text-center py-20 text-lg text-gray-600">Loading...</div>
    );

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 rounded-lg shadow-md"
      />
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600">
          ₹{product.price}
        </p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
        <button
          onClick={() => add(product, 1)}
          className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
