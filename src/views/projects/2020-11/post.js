import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import interhackt from "./interhackt.png";
import metadata from "./metadata.json";

export default function Project7() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<p><b>Interhackt</b> is a hackathon I helped organize and run, along with Azlen Elza, Matthew Siu, Jon Borichevskiy, Kristen Pavle and others. 
				The focus was on the future of interfaces, collaboration, online learing, interacting with software and similar ideas. Very much in 
					line with Andy Matuschak and Michael Nielsen's essay <a href="https://numinous.productions/ttft/">
						'How can we develop transformative tools for thought?'</a>.</p>
				<br/>
				<img className="image-large" src={interhackt} alt="Tnterhackt"></img>
				<br/>
				<div>
					<p>We had over 300 signups and many creative, forward-looking projects made. You can check them all out 
						on <a href="https://interhackt.space/">the Interhackt website</a>!
					</p>
					<p>In addition, we ran several events throughout the week, ranging from software tutorials, to the 
						history of technology and the process of building startups, to name a few. You can check out all of the 
						talks on <a href="https://www.youtube.com/channel/UCeBgTxzDP97tPzaCwViIqAA">the Interhackt YouTube channel</a>.
					</p>
					<p>The talk I gave at Interhackt is titled 'The Future of Learning'. Watch:</p>
					<br/>
				</div>
				<iframe 
					width="400" 
					height="315"
					title="The Future of Learning"
					src="https://www.youtube.com/embed/Gtvww68rEcQ" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen>
				</iframe>
			</div>
		</BlogStyle>
	);
}
