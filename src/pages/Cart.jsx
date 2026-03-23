
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen flex flex-col bg-gray-100">
        {/* MAIN CONTENT */}
        <div className="grow p-6">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="text-6xl mb-4">🛒</div>

              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>

              <p className="text-gray-500 mb-4">Add items to get started</p>

              <button
                onClick={() => (window.location.href = "/")}
                className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* LEFT - ITEMS */}
              <div className="md:col-span-2">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* RIGHT - SUMMARY */}
              <div className="bg-white p-5 rounded shadow-sm h-fit sticky top-32">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="flex justify-between mb-2">
                  <span>Items:</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between mb-4 font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-yellow-400 w-full py-2 rounded hover:bg-yellow-500 active:scale-95 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
