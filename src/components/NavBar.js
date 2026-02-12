import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import backImage from "./back.png"; // ✅ background image for navbar
import "./NavBar.css"; // ✅ make sure you keep responsive CSS here

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      className="custom-navbar"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "0", // ✅ fixed typo
      }}
    >
      <Container fluid className="align-items-center">
        {/* ✅ Logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <img
            src="/SSHexaLogo.png" // ✅ keep logo inside public/
            alt="SS Hexa Logo"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* ✅ Toggle for small screens */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-text">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-text">
              About
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/projects" className="nav-link-text">
              Projects
            </Nav.Link> */}
            <Nav.Link as={Link} to="/contactus" className="nav-link-text">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
