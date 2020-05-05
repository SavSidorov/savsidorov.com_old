import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import bytecycler from "./preview.png";
import hackathon from "./hackathon.png";

export default function Project3() {
	return (
		<BlogStyle>
			<MetaTags>
				<title>{metadata.title}</title>
				<meta property="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta property="og:image" content={bytecycler} />
				<meta property="og:url" content={metadata.url} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={bytecycler} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={bytecycler} className="image" alt="logo" />
				<p>
					<a href="https://www.bytecycler.com/">
						<b>ByteCycler</b>
					</a>{" "}
					is a crowdsourced sensemaking platform built by Johann Cooper and Sav Sidorov. It started off as a
					hackathon project, and has since then turned into a full-fledged website. The intention is to
					address the challenges we face in making sense of the world, and to streamline the process of news
					consumption. Still an early work in progress.
				</p>
				<img src={hackathon} className="image" alt="hackathon" />
			</div>
		</BlogStyle>
	);
}
