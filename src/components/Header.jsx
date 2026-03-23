//header component
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory } from "../redux/productSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { search } = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  const categories = [
    "all",
    "beauty",
    "fragrances",
    "furniture",
    "groceries"
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* TOP NAV */}
      <div className="bg-[#131921] text-white flex items-center px-6 py-3 gap-4">

        <Link
          to="/"
          onClick={() => dispatch(setCategory("all"))}
          className="text-2xl font-bold text-yellow-400"
        >
          ShoppyGlobe
        </Link>

        {/* search functionality */}
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-md bg-white text-black border border-gray-300 outline-none"
        />

        <Link to="/cart" className="whitespace-nowrap">
          🛒 Cart ({cart.length})
        </Link>
      </div>

      {/* CATEGORY BAR */}
      <div className="bg-[#232f3e] text-white flex gap-6 px-6 py-2 text-sm overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className="capitalize hover:text-yellow-400 whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
}