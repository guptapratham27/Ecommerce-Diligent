import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
        <p className="text-gray-600 mt-1 mb-2">₹{p.price}</p>
        <Link
          to={`/product/${p._id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
