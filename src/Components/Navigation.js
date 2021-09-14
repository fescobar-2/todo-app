import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
	return(
		<div>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>Shopping List</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
		</div>
		// <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
		// 	<Container>
		// 	<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
		// 	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		// 	<Navbar.Collapse id="responsive-navbar-nav">
		// 		<Nav className="me-auto">
		// 			<Nav.Link href={`${process.env.PUBLIC_URL}/`}>Shopping List</Nav.Link>
		// 			<Nav.Link href={`${process.env.PUBLIC_URL}/shopping`}>Todo List</Nav.Link>
		// 		</Nav>
		// 		<Nav className="me-auto">
		// 			<Nav.Link href={`${process.env.PUBLIC_URL}/login`}>Login</Nav.Link>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	)
}