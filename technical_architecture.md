# 🏗️ Technical Architecture Document
### Project: E-Commerce Website  
### Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS  

---

## 1. Overview
The E-Commerce Web Application is a **full-stack MERN** project that enables users to browse products, view product details, add/remove items from a cart, and simulate checkout.  
The system is built with a **RESTful backend API** (Node + Express) and a responsive **frontend UI** (React + Tailwind CSS).  
Data is persisted in **MongoDB Atlas**, which stores product information and user data.

---

## 2. System Architecture

### 🧱 High-Level Architecture
The application follows a **3-tier architecture**:

1. **Frontend (Client Layer)**  
   - Built using **React.js** and **React Router DOM** for SPA navigation.  
   - Handles product display, routing, cart management, and localStorage persistence.  
   - **Tailwind CSS** provides a clean, responsive UI.  

2. **Backend (Application Layer)**  
   - Built with **Node.js + Express.js**.  
   - Provides REST APIs (`/api/products`, `/api/cart`, `/api/users`) for frontend communication.  
   - Uses **Mongoose** for database queries and schema modeling.  
   - Supports **CORS** for frontend-backend communication.  

3. **Database (Data Layer)**  
   - Managed via **MongoDB Atlas (Cloud)**.  
   - Stores product catalog, user details, cart items, and future orders.  
   - Data accessed through Mongoose models with schema validation.

---

## 3. Architecture Diagram (Conceptual)

    ┌────────────────────────────┐
    │        Frontend (React)    │
    │  • React Router for pages  │
    │  • Tailwind UI Components  │
    │  • Axios API calls         │
    └──────────────┬─────────────┘
                   │ REST API Calls (HTTP)
                   ▼
    ┌────────────────────────────┐
    │     Backend (Express.js)   │
    │  • Routes: /api/products   │
    │  • Middleware: CORS, JSON  │
    │  • Controllers via Mongoose│
    └──────────────┬─────────────┘
                   │ Mongoose ORM
                   ▼
    ┌────────────────────────────┐
    │   Database (MongoDB Atlas) │
    │  • Collections: Products   │
    │  • Fields: name, price,... │
    │  • Auto schema validation  │
    └────────────────────────────┘

---

## 4. Component Breakdown

### 🔹 Frontend
| Component | Responsibility |
|------------|----------------|
| `Navbar.jsx` | Displays site navigation and cart count |
| `ProductList.jsx` | Fetches and renders all available products |
| `ProductCard.jsx` | Displays individual product details in grid layout |
| `ProductDetails.jsx` | Shows detailed info for a single product |
| `Cart.jsx` | Manages cart items and checkout simulation |
| `CartContext.jsx` | Provides global cart state (add/remove/update) |

### 🔹 Backend
| File | Responsibility |
|------|----------------|
| `server.js` | Main Express app configuration and DB connection |
| `routes/products.js` | Handles all `/api/products` requests |
| `models/Product.js` | Defines Product schema for MongoDB |
| `seed.js` | Populates MongoDB with sample product data |

---

## 5. Data Flow

1. **Frontend Request** → React app sends an Axios GET request to `/api/products`.  
2. **Backend Processing** → Express router invokes Mongoose `Product.find()` to fetch all data.  
3. **Database Query** → MongoDB returns product list.  
4. **Response** → Express sends JSON response back to frontend.  
5. **UI Render** → React maps data into Tailwind-styled components.  
6. **Cart Logic** → CartContext stores items in localStorage for persistence across reloads.

---

## 6. Technology Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| Frontend | React.js | UI framework |
| Styling | Tailwind CSS | Responsive modern styling |
| Routing | React Router | SPA navigation |
| State | React Context API | Cart state management |
| Backend | Node.js + Express.js | API server |
| Database | MongoDB Atlas | Cloud data storage |
| ORM | Mongoose | MongoDB schema modeling |
| API Calls | Axios | Client-server communication |
| Deployment | GitHub (Code) / Render (Server) | Code hosting & live API |
| Environment | dotenv | Config management (.env) |

---

## 7. Database Schema (Products)

**Collection:** `products`

| Field | Type | Description |
|--------|------|-------------|
| `_id` | ObjectId | Auto-generated unique ID |
| `name` | String | Product name |
| `description` | String | Product details |
| `price` | Number | Price of product |
| `image` | String | Image URL |
| `category` | String | Product category |
| `stock` | Number | Available stock |
| `createdAt` | Date | Auto timestamp |
| `updatedAt` | Date | Auto timestamp |

---

## 8. Security and Configuration
- Environment variables (`.env`) store sensitive data like `MONGO_URI` and `PORT`.  
- CORS enabled to prevent restricted cross-origin issues.  
- No credentials are hardcoded.  
- MongoDB Atlas uses IP whitelisting + authentication.

---

## 9. Future Enhancements
- 🔐 User Authentication with JWT  
- 💳 Payment Integration (Stripe/PayPal)  
- 📦 Order Management & History  
- 🧠 Admin Dashboard for product CRUD  
- 🚀 Deployment on Vercel (frontend) and Render (backend)  

---

## 10. Conclusion
This project follows a **scalable and modular MERN architecture**, ensuring clear separation of concerns between client, server, and database.  
With the use of React for interactivity, Express for API handling, and MongoDB Atlas for persistence, this system forms a robust base for a production-ready e-commerce platform.

---
