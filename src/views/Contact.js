import React from "react";
import styled from "styled-components";
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

	.chat {
		text-decoration: none;
		color: var(--ss-primary);
		margin: 20px;
		font-size: 20px;
		font-weight: 500;
	}
`;

export default function Contact() {
	return (
		<Styles>
			<div className="contact">
				<div className="icons">
					<a href="https://twitter.com/savsidorov">
						<FontAwesomeIcon icon={["fab", "twitter"]} size="4x" />
					</a>
					<a href="https://www.linkedin.com/in/savsidorov/">
						<FontAwesomeIcon icon={["fab", "linkedin"]} size="4x" />
					</a>
					<a href="https://github.com/SavSidorov">
						<FontAwesomeIcon icon={["fab", "github"]} size="4x" />
					</a>
					<a href="https://www.instagram.com/savsidorov/">
						<FontAwesomeIcon icon={["fab", "instagram"]} size="4x" />
					</a>
					<a href="https://www.youtube.com/channel/UCIDLl9D1pxV6GF33AJGocTQ">
						<FontAwesomeIcon icon={["fab", "youtube"]} size="4x" />
					</a>
					<a href="https://www.goodreads.com/user/show/74501550-sav-sidorov">
						<FontAwesomeIcon icon={["fab", "goodreads"]} size="4x" />
					</a>
					<a href="mailto:sav01027@gmail.com">
						<FontAwesomeIcon icon={["far", "envelope"]} size="4x" />
					</a>
				</div>
				<a className="chat" href="https://calendly.com/sav01027/15min">Schedule Quick Chat</a>
			</div>
		</Styles>
	);
}
