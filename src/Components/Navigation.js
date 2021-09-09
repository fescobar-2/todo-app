import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";

export default function Navigation() {
	return(
		<div>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
		</div>
		// <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
		// 	<Container>
		// 	<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
		// 	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		// 	<Navbar.Collapse id="responsive-navbar-nav">
		// 		<Nav className="me-auto">
		// 			<Nav.Link to="/">Shopping List</Nav.Link>
		// 			<Nav.Link to="/shopping">Todo List</Nav.Link>
		// 		</Nav>
		// 		<Nav className="me-auto">
		// 			<Nav.Link to="/login">Login</Nav.Link>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	)
}