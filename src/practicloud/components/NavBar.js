import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import backImage from "./back.png";
import "./NavBar.css";

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
        marginBottom: "0",
      }}
    >
      <Container fluid className="align-items-center">
        <Navbar.Brand as={Link} to="/practicloud" className="navbar-logo">
          <img
            src="/logo.png"
            alt="PractiCloud Logo"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/practicloud" className="nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/practicloud/services" className="nav-link-text">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/practicloud/pricing" className="nav-link-text">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/practicloud/academia" className="nav-link-text">
              Academia
            </Nav.Link>
            <Nav.Link as={Link} to="/practicloud/faq" className="nav-link-text">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/practicloud/contactus" className="nav-link-text">
              Contact
            </Nav.Link>
          </Nav>
          <div className="nav-buttons">
            <Button
              as={Link}
              to="/services"
              className="back-sshexa-btn"
            >
              Back to SS Hexa
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
