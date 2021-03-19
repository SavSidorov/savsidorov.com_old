import React from "react";
import BlogStyle from "../components/BlogStyle";
import { Link } from "react-router-dom";
import resume from "../assets/ssidorov_cv.pdf";
import Sav from "../assets/sav.png";

export default function About() {
	return (
		<BlogStyle>
			<div className="post">
				<img src={Sav} alt="Me" className="image-medium" />
				<p>
					<b>Making tools to help people think and learn.</b> In high school, I was involved in
					the FIRST Robotics Competition – a competitive robotics event for students. As founder and team captain of{" "}
					<a href="https://www.thebluealliance.com/team/5897">Team 5897 – APEX Robotics</a>, I helped the team become
					one of the best performing teams in the Western Canada scene, attending the World Championship in its’ first
					year of existence. Currently, I am focusing on education while pursuing{" "}
					<Link to="/projects">personal projects on the side</Link>. Interested in physics, cognition and sensemaking.
				</p>
				<div>
					<p>
						<a href={resume}>My resume</a>.
					</p>
				</div>
			</div>
		</BlogStyle>
	);
}
