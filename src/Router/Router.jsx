import ProductDetail from "../Components/ProductDetail";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductList from "../Components/ProductList";
import UserList from "../Components/UserList";
import CategoryList from "../Components/CategoryList";
import CategoryProducts from "../Components/CategoryProducts";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />{" "}
        <Route path="/userlist" element={<UserList />} />{" "}
        <Route path="/categories" element={<CategoryList />} />{" "}
        <Route
          path="/categories/:id/products"
          element={<CategoryProducts />}
        />{" "}
      </Routes>
    </div>
  );
}
