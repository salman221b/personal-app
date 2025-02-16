import React, { useState } from "react";
import Theme from "./Theme";
import logo from "../assets/S_logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
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
