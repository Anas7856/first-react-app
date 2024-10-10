import React from "react";
import Navbar from "../components/Navbar";
import ProductsApi from "../components/productsApi/ProductsApi";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row g-3">
          <ProductsApi />
        </div>
      </div>
    </div>
  );
};

export default Products;
