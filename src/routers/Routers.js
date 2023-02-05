import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ProtectedRoute from "./ProtectedRoute";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />}></Route>
      <Route path="shop" element={<ShopPage />}></Route>
      <Route path="shop/:id" element={<ProductDetailPage />}></Route>
      <Route path="cart" element={<CartPage />}></Route>

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>

      {/* <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      ></Route> */}
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="signup" element={<SignupPage />}></Route>
    </Routes>
  );
};

export default Routers;
