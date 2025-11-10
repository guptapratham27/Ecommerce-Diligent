import React, { useEffect, useState } from "react";
import { api } from "../api";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-xl font-medium text-gray-600">
        Loading products...
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p._id} p={p} />
      ))}
    </div>
  );
}
