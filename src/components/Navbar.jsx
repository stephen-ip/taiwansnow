import { useState } from "react";
import businessInfo from "../data/businessInfo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">Taiwan Shaved Snow</h1>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
