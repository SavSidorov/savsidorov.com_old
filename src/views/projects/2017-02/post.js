import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import robot from "./preview.png";
import logo from "./APEXLogo.jpg";
import team from "./apex.png";
import infosheet from "./toggle_infosheet.pdf";

export default function Project1() {
	return (
		<BlogStyle>
			<MetaTags>
				<title>{metadata.title}</title>
				<meta property="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta property="og:image" content={robot} />
				<meta property="og:url" content={metadata.url} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={robot} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={robot} className="image" alt="robot" />
				<p>
					Built with Team 5897 – APEX Robotics for the 2017{" "}
					<a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a>. Executed
					pre-programed autonomous functions and could be human controlled. The bot was capable of carrying
					gears (plastic game pieces), collecting and shooting plastic balls, climbing up a velcro rope and
					moving seamlessly across the field. Toggle was built on a mecanum drive train, allowing it to move
					omnidirectionally. Each wheel had a separate gearbox and could move independently. The custom gear
					ratios allowed it to reach one of the highest top speeds on the field. Due to the omnidirectional
					movement, the ‘front’ of the robot could be toggled between two modes, changing the control scheme
					to make operation easier. All of this resulted in a versatile and fast robot that ranked 4th out of
					48 teams by OPR (offensive contribution to the team).
				</p>
				<div className="color-box">
					<p>
						• Check out videos of ‘Toggle’ in action{" "}
						<a href="https://www.youtube.com/watch?v=EHVaOwvWSi0">here</a> and{" "}
						<a href="https://www.youtube.com/watch?v=TElMWBIvvZM">here</a>!
					</p>
					<p>
						• Also, we gave a presentation explaining functionality, as well as the team in general.{" "}
						<a href="https://www.pscp.tv/w/1vOGwvVLoQDKB">Watch</a>.
					</p>
					<p>
						• <a href={infosheet}>Here’s a more detailed info document</a>.
					</p>
					<p>
						• Lastly, the <a href="https://www.facebook.com/apexrobotics/">APEX Robotics Facebook page</a>.
						APEX is currently inactive – it was a team we ran for two FRC seasons, 2016 and 2017.
					</p>
				</div>
				<img src={logo} className="image" alt="logo" />
				<img src={team} className="image" alt="team" />
			</div>
		</BlogStyle>
	);
}
