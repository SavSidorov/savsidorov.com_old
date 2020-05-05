import React from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import resume from "../assets/ssidorov_cv.pdf";

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
				<title>About / Contact</title>
			</MetaTags>
			<div className="contact">
				<p>
					I am a student at the University of British Columbia, studying engineering. In high school, I was
					involved in the FIRST Robotics Competition – a competitive robotics event for students. As founder
					and team captain of{" "}
					<a href="https://www.thebluealliance.com/team/5897">Team 5897 – APEX Robotics</a>, I helped the team
					become one of the best performing teams in the Western Canada scene, attending the World
					Championship in its’ first year of existence. Currently, I am focusing on education while pursuing{" "}
					<Link to="/projects">personal projects on the side</Link>. Interested in physics, cognition and
					sensemaking.
				</p>
				<p>
					<a href={resume}>My resume</a>.
				</p>
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
