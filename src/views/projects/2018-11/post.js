import React from "react";
import { Link } from "react-router-dom";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";

export default function Project3() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<p>
					Since 2018, I’ve been working on ideas for how we can better make sense of the world — as individuals and as a
					collective. Some of these ideas got turned into early functional prototypes in the form of online platforms,
					with the help of my friend Johann Cooper. <b>Click on each to explore in more detail!</b>
				</p>

				<div>
					<Link to="/projects/bytecycler">
						<h4>1. ByteCycler — Dec 2018 - March 2020</h4>
					</Link>
				</div>
				<p>
					A platform where you can see if different news articles support or contradict each other. Like{" "}
					<a href="https://scite.ai/">scite.ai</a> but for journalism instead of academia, before we knew what{" "}
					<i>scite</i> was. A strong belief of ours was that we shouldn’t judge whether an article was factual or biased
					ourselves — our job was simply to point out contradictions in different narratives.
				</p>

				<div>
					<Link to="/projects/atomicevents">
						<h4>2. Atomic Events — May 2020</h4>
					</Link>
				</div>
				<p>
					This idea is to create a repository for primary and secondary source data formatted as small, atomic,
					easy-to-consume cards and have them shareable anywhere on the internet. Bigger than a tweet, way smaller than
					a Wikipedia article. Those cards would also serve as building blocks for a theory / narrative crafting system.
				</p>

				<div>
					<Link to="/projects/peoplelist">
						<h4>3. People List — June 2020</h4>
					</Link>
				</div>
				<p>
					Early into developing this. The idea is to let users create lists of people they recommend or don’t recommend
					in a given field. We all hold in our heads people who we think are credible and have good track records and
					those that do not. This would be a way for people to recommend experts in a given domain.
				</p>
				<br />
				<div>
					<p>In addition, I’ve been doing more informal research that might turn into future ideas:</p>
				</div>
				<div className="color-box">
					<p>
						• Getting as involved as I can in the Roam Research community — seems like it’s the epicenter for creative,
						new ways to present information and do research — to a) identify any areas where I can be useful and b) get
						better intuitions for conducting research by using the platform to make sense of current events.
					</p>
					<p>
						• Taking inspiration from Max Krieger’s <a href="http://a9.io/glue-comic/page-2">Glue Comic</a>, I’ve been
						experimenting with having conversations with friends in the format Max described — pushing and popping
						between topics rather than following a linear path. I’m curious if making it easy for people to visualize
						all the tangents in a convo would enable people to have more productive ones.
					</p>
				</div>

				<p>
					<b>It’s important to note:</b> The ByteCycler and Atomic Events prototypes were built on false assumptions of
					what users wanted out of a sensemaking platform, and — in the case of BC — without a clear audience in mind. I
					think that both ideas still show promise, perhaps they need some adjustment.
				</p>
			</div>
		</BlogStyle>
	);
}
