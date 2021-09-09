import React from "react";
//import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return(
		<div>
        <Container>
          <Nav className="me-auto">
            <NavLink to ="/">Home</NavLink>
          </Nav>
          <Nav className="me-auto">
            <NavLink to ="/login">Login</NavLink>
          </Nav>
        </Container>
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