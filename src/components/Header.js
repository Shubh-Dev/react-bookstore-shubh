import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Header.scss';

const Header = () => (
  <div className="header-container">
    <h2 className="main-header">Bookstore CMS</h2>
    <nav className="nav-bar">
      <Link className="list-1" to="/">BOOKS </Link>
      <Link className="list-2" to="/Categories">CATEGORIES</Link>
    </nav>
  </div>
);

export default Header;
