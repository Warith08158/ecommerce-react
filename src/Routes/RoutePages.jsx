import React from "react";
import {
  CartPage,
  CheckOutPage,
  ForgetPasswordPage,
  HomePage,
  ProductPage,
  ShopPage,
  SignInPage,
  SignUpPage,
} from "../pages/pages";
import { Route, Routes } from "react-router-dom";
import { Auth, Shopping } from "../Layouts/layouts";

const RoutePages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shopping" element={<Shopping />}>
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
      <Route path="auth" element={<Auth />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
      </Route>
    </Routes>
  );
};

export default RoutePages;
