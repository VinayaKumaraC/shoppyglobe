//  product card component"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError("Failed to load product"));
  }, [id]);

  if (error) {
    return (
      <div className="pt-28 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen flex flex-col bg-gray-100">

        <div className="grow p-6">

          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Products
          </button>

          <div className="bg-white p-6 rounded shadow grid md:grid-cols-2 gap-8">

            <div className="flex justify-center items-center border rounded p-4">
              <img
                src={product.thumbnail}
                className="h-80 object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-semibold">
                {product.title}
              </h1>

              <p className="text-gray-500 mt-1 capitalize">
                Category: {product.category}
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐ {product.rating}
              </p>

              <hr className="my-4" />

              <p className="text-3xl font-bold text-red-500">
                ${product.price}
              </p>

              <p className="mt-4 text-gray-600">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mt-5">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < qty; i++) {
                    dispatch(addToCart(product));
                  }
                }}
                className="bg-yellow-400 w-full mt-6 py-3 rounded hover:bg-yellow-500 active:scale-95 transition"
              >
                Add to Cart
              </button>

            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}