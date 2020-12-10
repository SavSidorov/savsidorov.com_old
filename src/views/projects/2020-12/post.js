import React from "react";
import { Link } from "react-router-dom";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";


export default function Project8() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<div><p><b>BookPair</b> is a matchmaking platform for reading books together. I made it over <Link to="/projects/interhackt">Interhackt</Link>, the hackathon I helped organize in December 2020.</p>
				<p>Access it at <a href="https://bookpair.space/">bookpair.space</a>!</p>
				<p>Here's a video explaining how it works:</p></div>
				<iframe 
						width="400" 
						height="315" 
						title="BookPair"
						src="https://www.youtube.com/embed/7Styu_-8ii4" 	
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
						allowfullscreen>
					</iframe>
			</div>
		</BlogStyle>
	);
}
