import React from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
	.contact {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.contact > p {
		font-size: 20px;
	}

	.contact > p > a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	.icons {
		width: 100%;
		display: flex;
		justify-content: space-around;

		margin-top: 50px;
		margin-bottom: 50px;
	}

	.icons > a {
		color: black;

		&:hover {
			color: var(--ss-primary);
		}
	}
`;

export default function Contact() {
	return (
		<Styles>
			<MetaTags>
				<title>Contact</title>
			</MetaTags>
			<div className="contact">
				<div className="icons">
					<a href="https://twitter.com/savsidorov">
						<FontAwesomeIcon icon={["fab", "twitter"]} size="6x" />
					</a>
					<a href="https://www.linkedin.com/in/savsidorov/">
						<FontAwesomeIcon icon={["fab", "linkedin"]} size="6x" />
					</a>
					<a href="https://github.com/SavSidorov">
						<FontAwesomeIcon icon={["fab", "github"]} size="6x" />
					</a>
					<a href="https://www.instagram.com/savsidorov/">
						<FontAwesomeIcon icon={["fab", "instagram"]} size="6x" />
					</a>
				</div>
				<h2>DMs Open!</h2>
			</div>
		</Styles>
	);
}
