import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="pt-28 min-h-screen flex flex-col bg-gray-100">
        <div className="grow flex flex-col items-center justify-center text-center">

          <h1 className="text-6xl font-bold text-red-500 mb-3">404</h1>

          <h2 className="text-xl font-semibold mb-2">
            Page Not Found
          </h2>

          <p className="text-gray-500 mb-4">
            The page you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500"
          >
            Go to Home
          </button>

        </div>

        <Footer />
      </div>
    </>
  );
}