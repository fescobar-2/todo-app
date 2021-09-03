import React from "react";
import  Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

export default function Navigation() {
	return(
		<Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
			<Container>
			<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/">Shopping List</Nav.Link>
					<Nav.Link href="/shopping">Todo List</Nav.Link>
				</Nav>
				<Nav className="me-auto">
					<Nav.Link href="/login">Login</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}