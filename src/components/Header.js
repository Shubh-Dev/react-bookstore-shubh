import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header-container">
    <h2>Book Store</h2>
    <nav className="nav-bar">
      <Link className="list-1" to="/">BOOKS </Link>
      <Link to="/Categories">CATEGORIES</Link>
    </nav>
  </div>
);

export default Header;
