import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to={"home"}>Home</Link> <b />/
              <Link to={"book/list"}>Add listing</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default NavBar;
