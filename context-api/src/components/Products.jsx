import React from "react";
import { Link } from "react-router-dom";
import ProductsLayout from '../layouts/ProductsLayout';

const Products = () => {
  // Use dummy data or data from an API

  return (
    <ProductsLayout>
      <h2>Product List</h2>
      <ul>
        {/* Render product list */}
      </ul>
    </ProductsLayout>
  );
};

export default Products;
