import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import robot from "./preview.png";

export default function ATA() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={robot} className="image" alt="robot" />
				<p>
					Built with Team 4334 – ATA for the 2015{" "}
					<a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a>. Elevation is designed for
					bottom stacking and flipping totes.
				</p>
				<div className="color-box">
					<p>
						• Check out the video of ‘Elevation’ in action{" "}
						<a href="https://www.youtube.com/watch?v=vd-Vv28Scl8">here</a>!
					</p>
					<p>
						• Check out the{" "}
						<a href="https://www.sait.ca/about-sait/media-centre/news-and-events/news/2015-3-13-the-people-first-robotics">
							article
						</a>{" "}
						written about us!
					</p>
					<p>
						• See the <a href="http://www.4334.ca/team/robots/">Team 4334 website</a> for more info.
					</p>
				</div>
			</div>
		</BlogStyle>
	);
}
