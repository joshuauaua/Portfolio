import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logoblack.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Joshua Ng" className="nav-logo" />

       
      </div>

      <ul className={`nav-links nav-right-links ${menuOpen ? "open" : ""}`}>
        <li><a href="/work">PROJECTS</a></li>
          <li><a href="/about">ABOUT ME</a></li>
          <li><a href="/contact">CONTACT</a></li>

      </ul>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}