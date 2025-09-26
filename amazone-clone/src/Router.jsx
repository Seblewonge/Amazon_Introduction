// import { BrowserRoute as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import { Result } from "./Pages/Result/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51SB1JjHImEfMI6iF6N8mtq6OOcpIxT8CgOjM1nRkrfTWdQretLoiFk6jvGG74OYLcHcmWOIhBitNpg6bzwSz9GYp00yzQkcaF8"
);
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must login to acces your orders"}
              redirect={"/orders"}
            
              >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/catagory/:catagoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
