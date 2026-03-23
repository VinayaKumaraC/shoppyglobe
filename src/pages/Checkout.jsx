// Checkout page
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { clearCart } from "../redux/cartSlice";

export default function Checkout() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const total = (items || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // VALID CHECK
  const isValid = (field) => {
    const nameRegex = /^[A-Za-z ]+$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (field === "name") return nameRegex.test(form.name);
    if (field === "city") return cityRegex.test(form.city);
    if (field === "phone") return phoneRegex.test(form.phone);
    if (field === "address") return form.address.length > 0;

    return false;
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    const nameRegex = /^[A-Za-z ]+$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name) {
      newErrors.name = "Full Name is required";
    } else if (!nameRegex.test(form.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!form.address) {
      newErrors.address = "Address is required";
    }

    if (!form.city) {
      newErrors.city = "City is required";
    } else if (!cityRegex.test(form.city)) {
      newErrors.city = "Only letters allowed";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // HANDLE ORDER
  const handleOrder = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      dispatch(clearCart());
      navigate("/success");
    }, 1500); 
  };

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT FORM */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-4 text-lg">Shipping Details</h2>

            <div className="space-y-4">
              {/* NAME */}
              <div className="relative">
                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full border p-3 rounded pr-10
                    ${errors.name ? "border-red-500" : ""}
                    ${!errors.name && isValid("name") ? "border-green-500" : ""}
                  `}
                />
                {!errors.name && isValid("name") && (
                  <span className="absolute right-3 top-3 text-green-500">
                    ✔
                  </span>
                )}
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* ADDRESS */}
              <div className="relative">
                <input
                  placeholder="Address"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className={`w-full border p-3 rounded pr-10
                    ${errors.address ? "border-red-500" : ""}
                    ${!errors.address && isValid("address") ? "border-green-500" : ""}
                  `}
                />
                {!errors.address && isValid("address") && (
                  <span className="absolute right-3 top-3 text-green-500">
                    ✔
                  </span>
                )}
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* CITY */}
              <div className="relative">
                <input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className={`w-full border p-3 rounded pr-10
                    ${errors.city ? "border-red-500" : ""}
                    ${!errors.city && isValid("city") ? "border-green-500" : ""}
                  `}
                />
                {!errors.city && isValid("city") && (
                  <span className="absolute right-3 top-3 text-green-500">
                    ✔
                  </span>
                )}
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="relative">
                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[0-9]{0,10}$/.test(value)) {
                      setForm({ ...form, phone: value });
                    }
                  }}
                  className={`w-full border p-3 rounded pr-10
                    ${errors.phone ? "border-red-500" : ""}
                    ${!errors.phone && isValid("phone") ? "border-green-500" : ""}
                  `}
                />
                {!errors.phone && isValid("phone") && (
                  <span className="absolute right-3 top-3 text-green-500">
                    ✔
                  </span>
                )}
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-white p-6 rounded shadow h-fit sticky top-32">
            <h2 className="font-semibold mb-4 text-lg">Order Summary</h2>

            {(items || []).map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span className="truncate w-40">{item.title}</span>
                <span>
                  ${item.price} × {item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* BUTTON WITH LOADER */}
            <button
              onClick={handleOrder}
              disabled={loading}
              className={`mt-5 w-full py-3 rounded font-semibold transition 
                ${loading ? "bg-gray-400" : "bg-yellow-400 hover:bg-yellow-500 active:scale-95"}
              `}
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing...
                </span>
              ) : (
                "Place your order"
              )}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
