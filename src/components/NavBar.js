import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import backImage from "./back.png";
import "./NavBar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contactus", label: "Contact Us" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="custom-navbar"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container fluid className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/SSHexaLogo.png" alt="SS Hexa Logo" />
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link-text">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile/tablet only) */}
        <button
          className="sidebar-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </Container>

      {/* Sidebar overlay (mobile/tablet) */}
      <div
        className={`sidebar-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={() => setMenuOpen(false)}>
            <img src="/SSHexaLogo.png" alt="SS Hexa Logo" />
          </Link>
          <button
            className="sidebar-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="sidebar-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
