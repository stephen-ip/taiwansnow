import { useState } from "react";
import taiwanSnowLogo from "../assets/Taiwan_Snow_Logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="/" className="logo" aria-label="Taiwan Snow home">
          <img src={taiwanSnowLogo.src} alt="" />
          <span>Taiwan Snow</span>
        </a>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Offerings</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
