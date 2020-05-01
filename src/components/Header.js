import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import patreon from "../assets/patreon-black.svg";
import mail from "../assets/mail.svg";

const Styles = styled.div`
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 50px;
		margin-bottom: 10px;
	}

	.logo {
		height: 20vw;
		max-height: 150px;
		width: auto;
	}

	.smaller-logo {
		height: 5vw;
		max-height: 40px;
		width: auto;
	}

	.header > a {
		text-decoration: none;
		color: black;
		font-weight: 600;

		display: flex;
		flex-flow: column;

		&:hover {
			color: var(--ss-purple);
		}
	}
`;

export const Header = () => (
	<Styles>
		<div className="header">
			<a href="https://www.patreon.com/">
				<img src={patreon} className="smaller-logo" />
				Patreon
			</a>
			<a href="/">
				<img src={logo} className="logo"></img>
			</a>
			<a href="https://mail.google.com/mail/u/0/#inbox">
				<img src={mail} className="smaller-logo" />
				Subscribe
			</a>
		</div>
	</Styles>
);
