import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const Styles = styled.div`
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 20px;
		margin-left: 50px;
		margin-right: 50px;
	}

	.logo {
		height: 20vw;
		max-height: 150px;
		width: auto;
	}

	.header > a {
		text-decoration: none;
		color: black;

		&:hover {
			color: var(--ss-purple);
		}
	}
`;

export const Header = () => (
	<Styles>
		<div className="header">
			<a href="https://www.patreon.com/">Support my work!</a>
			<a href="/">
				<img src={logo} className="logo"></img>
			</a>
			<a href="https://mail.google.com/mail/u/0/#inbox">Subscribe</a>
		</div>
	</Styles>
);
