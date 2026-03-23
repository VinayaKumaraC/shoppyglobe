//Product component
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-lg transition border flex flex-col h-full">

      {/* SALE BADGE */}
      {product.discountPercentage && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{Math.round(product.discountPercentage)}%
        </span>
      )}

      {/* IMAGE */}
      <div className="h-40 w-full flex items-center justify-center mb-2 overflow-hidden">
        <img
          src={product.thumbnail}
          className="h-full w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col grow">

        {/* TITLE */}
        <h2 className="text-sm font-medium line-clamp-2 h-10 overflow-hidden">
          {product.title}
        </h2>

        {/* RATING */}
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating}
        </p>

        {/* PRICE */}
        <p className="font-bold text-lg mt-1">
          ${product.price}
        </p>

        {/* BUTTONS (ALWAYS BOTTOM) */}
        <div className="mt-auto pt-3">

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-yellow-400 w-full py-2 rounded 
                       hover:bg-yellow-500 
                       active:scale-95 active:bg-yellow-600 
                       transition transform duration-100"
          >
            Add to Cart
          </button> 

          <Link
            to={`/product/${product.id}`}
            className="text-blue-500 text-xs block mt-2 hover:underline"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
}