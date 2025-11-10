require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./Models/Product");

const products = [
  {
    name: "Minimal Sneakers",
    description: "Lightweight casual shoes",
    price: 2999,
    image: "https://placehold.co/400x300",
    stock: 50,
    category: "Shoes",
  },
  {
    name: "Denim Jacket",
    description: "Comfortable denim jacket",
    price: 2599,
    image: "https://placehold.co/400x300",
    stock: 30,
    category: "Clothing",
  },
  {
    name: "Wireless Headphones",
    description: "Noise cancelling",
    price: 4999,
    image: "https://placehold.co/400x300",
    stock: 20,
    category: "Electronics",
  },
  {
    name: "Coffee Mug",
    description: "Ceramic mug 350ml",
    price: 399,
    image: "https://placehold.co/400x300",
    stock: 200,
    category: "Home",
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("✅ Sample products inserted!");
  } catch (err) {
    console.error("❌ Seed error:", err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
