import React, { useState } from 'react';
import logo from '../images/image 17.svg';
import './Dashboard.css';

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="dashboard">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="left">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="center">
          <img src={logo} alt="logo" />
          <span className="trio">Trio</span>
        </div>

        <div className="right">
          <ul>
            <li>Search</li>
            <li>Account</li>
            <li>Cart</li>
            <li>Favorites</li>
          </ul>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        data-open={isMobileMenuOpen}
      >
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Collections</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>Search</li>
          <li>Account</li>
          <li>Cart</li>
          <li>Favorites</li>
        </ul>
      </nav>

      <hr />
    </div>
  );
}
