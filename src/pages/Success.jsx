// Success page
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Success() {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen flex flex-col bg-gray-100">

        <div className="grow p-6 max-w-4xl mx-auto">

          {/* ✅ SUCCESS BOX */}
          <div className="bg-white p-6 rounded shadow text-center mb-6">

            <div className="text-6xl mb-3">🎉</div>

            <h1 className="text-2xl font-bold mb-2 text-green-600">
              Order Placed Successfully!
            </h1>

            <p className="text-gray-600">
              Thank you for shopping with ShoppyGlobe
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Order ID: #{orderId}
            </p>

          </div>

          {/* 📦 ORDER SUMMARY */}
          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart was cleared after order.
              </p>
            ) : (
              cart.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between mb-2 text-sm"
                >
                  <span className="truncate w-[70%]">
                    {item.title}
                  </span>
                  <span>
                    ${item.price} × {item.quantity}
                  </span>
                </div>
              ))
            )}

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total Paid:</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          {/* 🎯 ACTION BUTTONS */}
          <div className="flex gap-4 mt-6 justify-center">

            <button
              onClick={() => navigate("/")}
              className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500"
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
            >
              View Cart
            </button>

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}