import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BioCard from "../components/BioCard"
import resume from "../assets/ssidorov_cv.pdf";
import Sav from "../assets/sav.png";

export default function About() {
	const name = "Sav Sidorov"
	const description = <p>
												<b>Making tools to help people think and learn.</b> In high school, I was involved in
												the FIRST Robotics Competition – a competitive robotics event for students. As founder and team captain of{" "}
												<a href="https://www.thebluealliance.com/team/5897">Team 5897 – APEX Robotics</a>, I helped the team become
												one of the best performing teams in the Western Canada scene, attending the World Championship in its’ first
												year of existence. Currently, I am focusing on education while pursuing{" "}
												<Link to="/projects">personal projects on the side</Link>. Interested in physics, cognition and sensemaking.
											</p>

	const socials = <p className="socials">
										<a href="https://twitter.com/savsidorov">
											<FontAwesomeIcon icon={["fab", "twitter"]} />
										</a>
										<a href="https://www.linkedin.com/in/savsidorov/">
											<FontAwesomeIcon icon={["fab", "linkedin"]} />
										</a>
										<a href="https://github.com/SavSidorov">
											<FontAwesomeIcon icon={["fab", "github"]} />
										</a>
										<a href="https://www.instagram.com/savsidorov/">
											<FontAwesomeIcon icon={["fab", "instagram"]} />
										</a>
										<a href="mailto:sav01027@gmail.com">
											<FontAwesomeIcon icon={["far", "envelope"]} />
										</a>
									</p>
	

	return(
		<BioCard image={Sav} title={name} p1={description} p2={<p className="info"><a href={resume}>My resume</a> <FontAwesomeIcon icon={["far", "file-pdf"]} />.</p>} p3={socials}/>
	)
}

