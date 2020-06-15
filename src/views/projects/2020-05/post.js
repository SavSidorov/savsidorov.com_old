import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import atoms from "./preview.png";
import share from "./share.png";
import filter from "./filter.png";
import chains from "./chains.png";
import whitepaper from "./whitepaper.pdf";

export default function Project5() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<p>
					The goal is to create a repository for primary and secondary source data formatted as small, easy to consume
					cards and have them shareable anywhere on the internet. We’re calling them Atoms.
				</p>
				<div>
					<p>
						At the time of writing, the website is live at:{" "}
						<a href="https://bytecycler-bf936.web.app/">bytecycler-bf936.web.app</a>.
					</p>
				</div>
				<div>
					<p>Atoms can contain a short summary of an event, a trend, a claim, etc. They look like this:</p>
				</div>
				<img src={atoms} className="image" alt="atoms" />
				<div>
					<p>
						You’d be able to create your own Atoms and share them with the world — on note taking apps, personal blogs,
						etc:
					</p>
				</div>
				<img src={share} className="image" alt="share" />
				<div>
					<p>
						You’ll be able to filter the Atoms by tags, dates and most importantly, sources. This will make it easier to
						find precisely the info you’re looking for, from the sources you trust:
					</p>
				</div>
				<img src={filter} className="image" alt="filter" />
				<div>
					<p>
						In addition, you can create Chains. Chains are constructed by linking Atoms together, potentially revealing
						novel insights:
					</p>
				</div>
				<img src={chains} className="image" alt="chains" />
				<p>
					The most popular Atoms and Chains get upvoted and rise to the top of your feed — keeping in the spirit of
					crowdsourced sensemaking.{" "}
					<a href={whitepaper}>For more details read the most recent draft of our white paper.</a>
				</p>
			</div>
		</BlogStyle>
	);
}
