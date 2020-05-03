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
		max-height: 25px;
		width: auto;
	}

	.header > a {
		text-decoration: none;
		color: black;
		font-weight: 600;
		font-size: 14px;

		display: flex;
		flex-flow: column;

		&:hover {
			color: var(--ss-purple);
		}
	}
`;

//TODO: Set up patreon and mailing list, change URLs
//TODO: Pop-up for mailing list

export const Header = () => (
	<Styles>
		<div className="header">
			<a href="https://www.patreon.com/">
				<img src={patreon} className="smaller-logo" alt="patreon" />
				Patreon
			</a>
			<a href="/">
				<img src={logo} className="logo" alt="logo"></img>
			</a>
			<a href="https://mail.google.com/mail/u/0/#inbox">
				<img src={mail} className="smaller-logo" alt="mail" />
				Subscribe
			</a>
		</div>
	</Styles>
);
