import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        <Routes>
          {/* 🏠 HOME */}
          <Route path="/" element={<Home />} />

          {/* 📦 PRODUCT DETAIL */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* 🛒 CART */}
          <Route path="/cart" element={<Cart />} />

          {/* 💳 CHECKOUT */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>
    </Router>
  );
}