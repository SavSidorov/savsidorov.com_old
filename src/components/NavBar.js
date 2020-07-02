import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	.mlr-auto {
		margin-left: auto;
		margin-right: auto;
	}

	.navbar-brand,
	.navbar-nav .nav-link {
		color: black;
		font-size: 24px;
		font-weight: 500;

		&:hover {
			color: var(--ss-primary);
		}
	}

	.navbar-nav .nav-link.active {
		color: var(--ss-primary);
	}
`;

export const NavBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav activeKey={window.location.pathname} className="mlr-auto">
					<Nav.Link href="https://savsidorov.substack.com/">Blog</Nav.Link>
					<Nav.Link href="/projects">Projects</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
