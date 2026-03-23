import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// lazy imports
const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Success = lazy(() => import("../pages/Success"));
const NotFound = lazy(() => import("../pages/NotFound"));

const withSuspense = (Component) => (
  <Suspense fallback={<p className="pt-28 text-center">Loading...</p>}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  { path: "/", element: withSuspense(Home) },
  { path: "/product/:id", element: withSuspense(ProductDetail) },
  { path: "/cart", element: withSuspense(Cart) },
  { path: "/checkout", element: withSuspense(Checkout) },
  { path: "/success", element: withSuspense(Success) },
  { path: "*", element: withSuspense(NotFound) }, // 404
]);
