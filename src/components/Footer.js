import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

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

	.copyright {
		margin-right: auto;
	}

	.social {
		margin-left: 0px;

		&:hover {
			color: var(--ss-primary);
		}
	}
`;

export const Footer = () => (
	<Styles>
		<div className="Footer">
			<p className="copyright">Copyright © 2021 Sav Sidorov</p>
			<a href="https://twitter.com/savsidorov" className="social">
				<FontAwesomeIcon icon={["fab", "twitter"]} />
			</a>
			<a href="https://www.linkedin.com/in/savsidorov/" className="social">
				<FontAwesomeIcon icon={["fab", "linkedin"]} />
			</a>
			<a href="https://github.com/SavSidorov" className="social">
				<FontAwesomeIcon icon={["fab", "github"]} />
			</a>
			<a href="https://www.instagram.com/savsidorov/" className="social">
				<FontAwesomeIcon icon={["fab", "instagram"]} />
			</a>
		</div>
	</Styles>
);
