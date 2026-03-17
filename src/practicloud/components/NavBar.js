import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import backImage from "./back.png";
import "./NavBar.css";

const navLinks = [
  { to: "/practicloud", label: "Home" },
  { to: "/practicloud/services", label: "Features" },
  { to: "/practicloud/pricing", label: "Pricing" },
  { to: "/practicloud/academia", label: "Academia" },
  { to: "/practicloud/faq", label: "FAQ" },
  { to: "/practicloud/contactus", label: "Contact Us" },
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
        <Link to="/practicloud" className="navbar-logo">
          <img src="/logo.png" alt="PractiCloud Logo" />
        </Link>

        {/* Desktop nav links + buttons */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link-text">
              {link.label}
            </Link>
          ))}
          <div className="nav-buttons">
            <Link to="/practicloud/login" className="btn login-btn">
              Login
            </Link>
            <Link to="/practicloud/login" className="btn signup-btn">
              Get Started Free
            </Link>
            <Link to="/" className="btn back-sshexa-btn">
              Back to SS Hexa
            </Link>
          </div>
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
          <Link to="/practicloud" className="sidebar-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="PractiCloud Logo" />
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
        <div className="sidebar-buttons">
          <Link to="/practicloud/login" className="btn login-btn" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/practicloud/login" className="btn signup-btn" onClick={() => setMenuOpen(false)}>
            Get Started Free
          </Link>
          <Link to="/" className="btn back-sshexa-btn" onClick={() => setMenuOpen(false)}>
            Back to SS Hexa
          </Link>
        </div>
      </div>
    </nav>
  );
};
