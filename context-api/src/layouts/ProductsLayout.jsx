import React from 'react';
import { Link } from 'react-router-dom';

const ProductsLayout = ({ children }) => (
  <div>
    <h1>Products</h1>
    <nav>
      <Link to="/">Home</Link>{' '}
      <Link to="/products">Products</Link>
    </nav>
    {children}
  </div>
);

export default ProductsLayout;
