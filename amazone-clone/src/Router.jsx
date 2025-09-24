// import { BrowserRoute as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Orders from "./Pages/Orders/Orders";
import  Payment  from "./Pages/Payment/Payment";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import { Result } from "./Pages/Result/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
<Route path="/catagory/:catagoryName"element={<Result/>}/>
<Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
