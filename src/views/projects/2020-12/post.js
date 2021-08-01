import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";

export default function Project8() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<div>
				<p>I've had the opportunity to direct three music videos, thus far. One is a <i>Wallows</i> cover, 'Drunk on Halloween' with <a href="https://www.youtube.com/channel/UCHK83GbLYCwSCNjiIPEfL4Q">Dwaigne Quierra</a>. 'Here Comes Another Year' is an original song that <a href="https://www.youtube.com/channel/UCHK83GbLYCwSCNjiIPEfL4Q">Dwaigne</a> wrote. A third video is of my mom, dancing to <a href="https://www.youtube.com/channel/UCHK83GbLYCwSCNjiIPEfL4Q">Replay by WOODJU & MITYA</a>.</p>
				</div>
				<br/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/LRzBZ4yueIc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<br/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/da94JmrPtgk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>		
				<br/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/whxyTwNuaOk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>		
			</div>
		</BlogStyle>
	);
}
