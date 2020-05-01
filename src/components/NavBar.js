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
			color: var(--ss-purple);
		}
	}
`;

export const NavBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mlr-auto">
					<Nav.Item>
						<Nav.Link href="/blog">Blog</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/projects">Projects</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/favorites">Favorites</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/contact">About / Contact</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
