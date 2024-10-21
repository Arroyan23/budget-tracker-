import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/style/nav.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="https://mdbootstrap.com/docs/standard/">
            <strong>MDB</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExample01" />
          <Navbar.Collapse id="navbarExample01">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
              >
                Learn Bootstrap 5
              </Nav.Link>
              <Nav.Link
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
              >
                Download MDB UI KIT
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/mdbootstrap"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/MDBootstrap" target="_blank">
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
