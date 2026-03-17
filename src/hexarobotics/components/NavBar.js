import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import backImage from "./back.png";
import "./NavBar.css";

const navLinks = [
  { to: "/hexarobotics", label: "Home" },
  { to: "/hexarobotics/products", label: "Products" },
  { to: "/hexarobotics/services", label: "Services" },
  { to: "/hexarobotics/blog", label: "Blog" },
  { to: "/hexarobotics/casestudies", label: "Case Studies" },
  { to: "/hexarobotics/pricing", label: "Pricing" },
  { to: "/hexarobotics/contactus", label: "Contact Us" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="hr-custom-navbar"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container fluid className="hr-navbar-inner">
        {/* Logo + brand text */}
        <Link to="/hexarobotics" className="hr-navbar-logo d-flex align-items-center">
          <img src="/logo1.png" alt="CryoEM Logo" className="me-2" />
          <span className="hr-navbar-brand-text">Hexa Robotics</span>
        </Link>

        {/* Desktop nav links + button */}
        <div className="hr-nav-links-desktop">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hr-nav-link-text">
              {link.label}
            </Link>
          ))}
          <div className="hr-nav-buttons">
            <Link to="/" className="btn hr-back-sshexa-btn">
              Back to SS Hexa
            </Link>
          </div>
        </div>

        {/* Hamburger button (mobile/tablet only) */}
        <button
          className="hr-sidebar-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </Container>

      {/* Sidebar overlay (mobile/tablet) */}
      <div
        className={`hr-sidebar-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`hr-sidebar-menu ${menuOpen ? "open" : ""}`}>
        <div className="hr-sidebar-header">
          <Link to="/hexarobotics" className="hr-sidebar-logo d-flex align-items-center" onClick={() => setMenuOpen(false)}>
            <img src="/logo1.png" alt="CryoEM Logo" className="me-2" />
            <span className="hr-navbar-brand-text">Hexa Robotics</span>
          </Link>
          <button
            className="hr-sidebar-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="hr-sidebar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hr-sidebar-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hr-sidebar-buttons">
          <Link to="/" className="btn hr-back-sshexa-btn" onClick={() => setMenuOpen(false)}>
            Back to SS Hexa
          </Link>
        </div>
      </div>
    </nav>
  );
};
