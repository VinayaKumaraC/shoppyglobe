
import { useDispatch, useSelector } from "react-redux";
import {setCategory,setPriceRange,setRating,resetFilters,} from "../redux/productSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const { category, priceRange, rating } = useSelector(
    (state) => state.products,
  );

  const categories = ["beauty", "fragrances", "furniture", "groceries"];

  return (
    <div className="<div className=" bg-white p-4 rounded shadow w-64 h-full>
      <h2 className="font-bold text-lg mb-2">Filters</h2>

      {/* 🔁 RESET BUTTON */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="w-full bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded mb-4"
      >
        Reset Filters
      </button>

      {/* 📂 CATEGORY */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Category</h3>

        {categories.map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 text-sm mb-1 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={category === cat}
              onChange={() =>
                dispatch(setCategory(category === cat ? "all" : cat))
              }
            />
            <span className="capitalize">{cat}</span>
          </label>
        ))}
      </div>

      {/* 💰 PRICE */}
      <div className="mb-5">
        <h3 className="font-semibold mb-2">Max Price</h3>

        <input
          type="range"
          min="0"
          max="2000"
          value={priceRange} // ✅ controlled
          onChange={(e) => dispatch(setPriceRange(Number(e.target.value)))}
          className="w-full"
        />

        <p className="text-sm text-gray-500 mt-1">Up to ₹{priceRange}</p>
      </div>

      {/* ⭐ rating filter */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>

        {[4, 3, 2, 1].map((r) => (
          <p
            key={r}
            onClick={() => dispatch(setRating(r))}
            className={`cursor-pointer text-sm mb-1 ${
              rating === r
                ? "text-yellow-500 font-bold"
                : "hover:text-yellow-500"
            }`}
          >
            ⭐ {r}+ stars
          </p>
        ))}
      </div>
    </div>
  );
}
