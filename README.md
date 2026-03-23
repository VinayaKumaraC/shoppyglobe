# 🛒 ShoppyGlobe - E-Commerce App

## 📌 Overview
ShoppyGlobe is a fully functional e-commerce web application built using React, Redux Toolkit, and Tailwind CSS. It allows users to browse products, apply filters, manage cart items, and complete checkout with proper validation and user feedback.

## 🚀 Features

### 🏠 Home Page
- Product listing from API
- Search functionality
- Sidebar filters (category, price, rating)

### 📦 Product Details
- Detailed product view
- Add to cart with quantity selection

### 🛒 Cart
- Add / remove items
- Increase / decrease quantity
- Dynamic order summary

### 💳 Checkout
- Form validation with field-level errors
- Success tick indicators on valid inputs
- Loading spinner on order placement

### ✅ Order Success
- Order confirmation page
- Order summary display

### ❌ 404 Page
- Handles invalid routes gracefully

## 🧠 Technologies Used
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios

## ⚡ Performance Optimizations
- Lazy loading using `React.lazy`
- Suspense fallback loader
- Optimized component rendering

## 📦 GitHub Repository

👉 https://github.com/VinayaKumaraC/shoppyglobe.git

## 🛠 Installation
- git clone https://github.com/VinayaKumaraC/shoppyglobe.git
- cd shoppyglobe
- npm install
- npm run dev

## 🌐 API Used

👉 https://dummyjson.com/products


## 📂 Folder Structure

src/
│
├── components/
│   ├── Banner.jsx
│   ├── CartItem.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   ├── Sidebar.jsx
│
├── hooks/
│   ├── useFetchProducts.js
│
├── pages/
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── ProductDetail.jsx
│   ├── Success.jsx
│
├── redux/
│   ├── cartSlice.js
│   ├── productSlice.js
│   ├── store.js
│
├── routes/
│   ├── router.jsx
│
├── App.jsx
├── main.jsx

## 🎯 Key Highlights
- Amazon-style clean UI
- Fully responsive design
- Advanced form validation with UX feedback
- Real-world e-commerce flow implementation

## 👨‍💻 Author

Vinaya Kumara C

## 🌍 Live Demo

👉 https://shoppyglobe-seven.vercel.app/