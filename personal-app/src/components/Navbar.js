import React, { useState } from "react";
import Theme from "./Theme";
import logo from "../assets/S_logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      {/* Logo */}
      <h1 className="logo">Salman</h1>

      {/* Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* Wrapper for Hamburger + Theme Toggle */}
      <div className="menu-icons">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Theme Toggle */}
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
