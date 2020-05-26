import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import robot from "./preview.png";
import logo from "./APEXLogo.jpg";
import team from "./team.jpg";

export default function Project0() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={robot} className="image" alt="robot" />
				<p>
					Built with Team 5897 – APEX Robotics for the 2016{" "}
					<a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a>. Executed pre-programed
					autonomous functions and could be human controlled. The bot was capable of catching and shooting foam balls,
					raising obstacles with the front arm and climbing up a bar with a telescoping mechanism.
				</p>
				<div className="color-box">
					<p>
						• Check out the video of ‘Impulse’ in action{" "}
						<a href="https://www.youtube.com/watch?v=iiEHdTanE8U&feature=youtu.be&fbclid=IwAR01OAvMmLenmd9ST36e3Cnm6O8bnQ76I7BOElJRahf5HpV_nlCthFtkINU">
							here
						</a>
						!
					</p>
					<p>
						• Check out the{" "}
						<a href="https://calgaryherald.com/news/local-news/wearable-technology-3d-printed-hands-and-soccer-playing-robots-discovered-at-calgarys-mini-maker-faire/?utm_source=dlvr.it&utm_medium=twitter&fbclid=IwAR0JcUbzlPjsK9JW0SL7eMciYQU2-vnwFAq99J54Y3eNGmYGsUqxnI0nguA">
							article
						</a>{" "}
						written about us!
					</p>
					<p>
						• Lastly, the <a href="https://www.facebook.com/apexrobotics/">APEX Robotics Facebook page</a>. APEX is
						currently inactive – it was a team we ran for two FRC seasons, 2016 and 2017.
					</p>
				</div>
				<img src={logo} className="image" alt="logo" />
				<img src={team} className="image" alt="team" />
			</div>
		</BlogStyle>
	);
}
