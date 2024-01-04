import React from 'react';
import { Link } from 'react-router-dom';

const HomeLayout = ({ children }) => (
  <div>
    <h1>Welcome to the Home Page!</h1>
    <nav>
      <Link to="/">Home</Link>{' '}
      <Link to="/products">Products</Link>
    </nav>
    {children}
  </div>
);

export default HomeLayout;
