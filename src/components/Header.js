import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.jpg";

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
		align-items: center;

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
				<FontAwesomeIcon icon={["fab", "patreon"]} size="3x" />
				Patreon
			</a>
			<a href="/">
				<img src={logo} className="logo" alt="logo"></img>
			</a>
			<a href="https://mail.google.com/mail/u/0/#inbox">
				<FontAwesomeIcon icon={["fas", "envelope"]} size="3x" />
				Subscribe
			</a>
		</div>
	</Styles>
);
