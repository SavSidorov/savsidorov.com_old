import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const Styles = styled.div`
	.header {
		display: flex;
		align-items: center;
		justify-content: center;

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
			color: var(--ss-primary);
		}
	}
`;

export const Header = () => (
	<Styles>
		<div className="header">
			<a href="/">
				<img src={logo} className="logo" alt="logo"></img>
			</a>
		</div>
	</Styles>
);

/* TODO: Set up subscription and monitization ON SITE
<a href="https://www.patreon.com/savsidorov">
				<FontAwesomeIcon icon={["fab", "patreon"]} size="3x" />
				Patreon
			</a>

<a href="https://savsidorov.ck.page/1f6223496e">
				<FontAwesomeIcon icon={["fas", "envelope"]} size="3x" />
				Subscribe
			</a>
*/
