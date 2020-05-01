import React from "react";
import twitterSvg from "../assets/twitter.svg";
import styled from "styled-components";

const Styles = styled.div`
	.Footer {
		display: flex;
		align-items: center;
		background-color: black;
		height: 25px;
	}

	.Footer > * {
		margin: 0 20px;

		align-self: center;

		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		color: white;
	}

	.feedback {
		margin-right: auto;
	}

	.twitter {
		width: 20px;
		height: auto;
	}
`;

export const Footer = () => (
	<Styles>
		<div className="Footer">
			<p className="feedback">Copyright © 2020 Sav Sidorov</p>
			<a href="https://twitter.com/savsidorov" className="twitter">
				<img src={twitterSvg} alt="twitter" />
			</a>
		</div>
	</Styles>
);
