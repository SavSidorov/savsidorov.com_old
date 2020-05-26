import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import bytecycler from "./preview.png";
import hackathon from "./hackathon.png";

export default function Project3() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={bytecycler} className="image" alt="logo" />
				<p>
					<a href="https://www.bytecycler.com/">
						<b>ByteCycler</b>
					</a>{" "}
					is a crowdsourced sensemaking platform built by Johann Cooper and Sav Sidorov. It started off as a hackathon
					project, and has since then turned into a full-fledged website. The intention is to address the challenges we
					face in making sense of the world, and to streamline the process of news consumption. Still an early work in
					progress.
				</p>
				<img src={hackathon} className="image" alt="hackathon" />
			</div>
		</BlogStyle>
	);
}
