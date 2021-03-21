import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart3 } from "react-bootstrap-icons";

import logo from "../../images/Logo.png";

const NavBar: React.FC = () => {
	return (
		<Navbar
			bg="light"
			variant="light"
			fixed="top"
			className="navbarWindow"
			expand="lg"
			collapseOnSelect
		>
			<Navbar.Brand href="/">
				<img
					src={logo}
					alt="Logo"
					height="50"
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/browse"><strong>Browse</strong></Nav.Link>
					<Nav.Link href="/about"><strong>About us</strong></Nav.Link>
					<Nav.Link href="/contactus"><strong>Contact us</strong></Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/basket">
						<Cart3 /> Basket
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
