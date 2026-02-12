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
      className="hr-custom-navbar"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "0",
      }}
    >
      <Container fluid className="align-items-center">
        <Navbar.Brand as={Link} to="/hexarobotics" className="hr-navbar-logo d-flex align-items-center">
          <img
            src="/logo1.png"
            alt="CryoEM Logo"
            height="70"
            className="d-inline-block align-top me-2"
          />
          <span className="hr-navbar-brand-text">Hexa Robotics</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto hr-nav-links">
            <Nav.Link as={Link} to="/hexarobotics" className="hr-nav-link-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/products" className="hr-nav-link-text">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/services" className="hr-nav-link-text">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/blog" className="hr-nav-link-text">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/casestudies" className="hr-nav-link-text">
              Case Studies
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/pricing" className="hr-nav-link-text">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/hexarobotics/contactus" className="hr-nav-link-text">
              Contact Us
            </Nav.Link>
          </Nav>
          <div className="hr-nav-buttons">
            <Button
              as={Link}
              to="/services"
              className="hr-back-sshexa-btn"
            >
              Back to SS Hexa
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
