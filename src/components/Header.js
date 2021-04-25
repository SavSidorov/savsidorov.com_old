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
