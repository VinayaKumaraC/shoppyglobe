import Header from "../components/Header";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";

export default function Home() {
  const { products, loading, error } = useFetchProducts();

  const { search, category, priceRange, rating } = useSelector(
    state => state.products
  );

  if (loading) {
    return <p className="pt-28 text-center">Loading...</p>;
  }

  if (error) {
    return (
      <div className="pt-28 text-center text-red-500">
        {error}
      </div>
    );
  }

  const filtered = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "all" ? true : p.category.includes(category)
    )
    .filter(p => p.price <= priceRange)
    .filter(p => p.rating >= rating);

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen flex flex-col bg-gray-100">

        <div className="grow">

          <Banner />

          <div className="px-6 py-6">
            <h2 className="text-xl font-bold mb-4">
              Our Products
            </h2>

            <div className="flex gap-6 min-h-[80vh]">

              <Sidebar />

              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch content-start">
                {filtered.map(p => (
                  <ProductItem key={p.id} product={p} />
                ))}
              </div>

            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}