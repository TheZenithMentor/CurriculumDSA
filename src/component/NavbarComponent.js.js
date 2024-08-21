// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css'; // Import the custom CSS file for Navbar

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">DSA Learning Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={() => window.scrollTo(0, 0)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/beginner">Beginner</Nav.Link>
            <Nav.Link as={Link} to="/intermediate">Intermediate</Nav.Link>
            <Nav.Link as={Link} to="/advanced">Advanced</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
