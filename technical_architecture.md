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

