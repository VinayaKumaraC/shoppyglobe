import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-md shadow-sm flex items-center justify-between mb-4">

      {/* LEFT */}
      <div className="flex items-center gap-4 w-[60%]">
        <img
          src={item.thumbnail}
          className="w-20 h-20 object-contain"
        />

        <div>
          <h2 className="font-medium">{item.title}</h2>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
      </div>

      {/* CENTER (QTY) */}
      <div className="flex items-center gap-2 border rounded">

        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="px-3 py-1 hover:bg-gray-200"
        >
          -
        </button>

        <span className="px-4">{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="px-3 py-1 hover:bg-gray-200"
        >
          +
        </button>
      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 text-sm mt-1 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}