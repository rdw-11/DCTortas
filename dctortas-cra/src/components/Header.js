import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navArray = ["Home", "Sign-up", "Log-in", "About Us", "Contact"];

function Header(props) {
  return (
    <Navbar className="pageHeader" expand="lg">
      <Container className="header-container">
        <Navbar.Brand id="navbar-text" href="#home">
          DC Tortas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {" "}
            {navArray.map((link) => {
              // if link is home then return link for home, if not return the link href//

              return (
                <Nav.Link href={link === "Home" ? "#home" : "#link"}>
                  {link}
                </Nav.Link>
              );
            })}
            <Nav.Link href="#link">Full Menu (pdf)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
