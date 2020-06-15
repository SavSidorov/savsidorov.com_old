import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import hackathon from "./hackathon.png";
import litehacks1 from "./AntiSpinUI_Source.png";
import litehacks2 from "./AntiSpinUI_Topic02.png";
import outline from "./OUTLINE OF PRODUCT - Aug 2019.pdf";
import topic from "./topic.png";
import source from "./source.png";
import sources from "./sources.png";
import formula from "./echo_formula.png";
import node from "./node.png";
import hoverNode from "./node_hover.png";

export default function Project4() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<p>
					<b>ByteCycler</b> is a crowdsourced sensemaking platform built by Johann Cooper and I. It started off as a
					hackathon project, and has since then turned into a functional prototype in the form of a website.
				</p>
				<div>
					<p>
						At the time of writing, the website is live at: <a href="https://www.bytecycler.com/">www.bytecycler.com</a>
						.
					</p>
				</div>
				<img src={hackathon} className="image" alt="hackathon" />
				<div>
					<p>Here are some early mockups we had for the platform:</p>
				</div>
				<img src={litehacks1} className="image" alt="litehacks1" />
				<img src={litehacks2} className="image" alt="litehacks2" />
				<p>
					The initial idea was to create a platform where people could upload news articles and create pages for topics
					and sources. They would then be able to add relevant highlights from said articles, and rate both articles and
					sources, a la IMDB or RottenTomatoes.
				</p>
				<p>
					The project evolved over time. Here’s an <a href={outline}>outline</a> from August 2019 describing our
					thoughts at the time — we talk about things like a browser extension with different color highlighting for
					facts, positive bias, negative bias, etc. Keep in mind, we have learned a lot about each aspect of the problem
					since we wrote that document, and have changed our opinions on the ideas expressed there.{" "}
				</p>
				<div>
					<p>
						Eventually we built a functional prototype after messing around with web frameworks and learning about
						fullstack development.
					</p>
				</div>
				<div>
					<p>
						At its core is the <b>Echo Score</b> and the <b>Topic Graph</b> (where each article is represented with a
						node).
					</p>
				</div>
				<img src={topic} className="image" alt="topic" />
				<div>
					<br />
					<p>
						<b>The Echo Score</b>
					</p>
				</div>
				<img src={formula} className="image-medium" alt="formula" />
				<p>
					The Echo Score of an article shows how much the snippets in an article are echoed by other articles. It's the
					percentage of supported snippets out of the article's total pool of supported and contradicted snippets. Nodes
					and connections are color coded from blue (highest score) to yellow (lowest score).
				</p>

				<div>
					<br />
					<p>
						<b>Nodes</b>
					</p>
				</div>
				<img src={node} className="image-small" alt="node" />
				<div>
					<p>
						Here for example, the maroon article has a lower echo score than the blue ones. Connected articles disagree
						with the maroon one more.
					</p>
				</div>
				<img src={hoverNode} className="image-small" alt="node_hover" />
				<p>
					If we hover over that node, we can see that most of that disagreement comes from the top node, since the echo
					score between those two nodes is yellow - almost 0.
				</p>

				<div>
					<br />
					<p>
						<b>Sources</b>
					</p>
				</div>
				<div>
					<p>
						We also had pages for every supported source / news outlet. Users could see all articles linked for that
						source, and rate that source’s credibility.
					</p>
				</div>
				<img src={sources} className="image" alt="sources" />
				<img src={source} className="image" alt="source" />
			</div>
		</BlogStyle>
	);
}
