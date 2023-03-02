import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to="/"> Trang chủ </Link>
      <Link to="/gioi-thieu"> Giới thiệu </Link>
      <Link to="/products"> Sản phẩm </Link>
      
    </div>
  );
};

export default Navbar;
