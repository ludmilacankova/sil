import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-header">
        <Link to="/" className="logo">
          <img src="/sil_logo.png" alt="logo" />
        </Link>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Přepnout menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              O nás
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/proposal" className="nav-link" onClick={closeMenu}>
              Služby
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reference" className="nav-link" onClick={closeMenu}>
              Reference
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/request" className="nav-link" onClick={closeMenu}>
              Poptávka
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>*/}
          <li className="nav-item">
            <NavLink to="/download" className="nav-link" onClick={closeMenu}>
              Ke stažení
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Kontakty
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
