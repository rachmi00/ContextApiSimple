import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsLayout from '../layouts/ProductsLayout';

const ProductDetails = () => {
  const { id } = useParams();
  
  // Use dummy data or data from an API based on the id

  return (
    <ProductsLayout>
      <h2>Product Details</h2>
      {/* Render product details */}
    </ProductsLayout>
  );
};

export default ProductDetails;
