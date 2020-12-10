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
						<h4>3. Verify — June 2020</h4>
					</Link>
				</div>
				<p>
					Early into developing this. The idea is to let users create lists of people they recommend or don’t recommend
					in a given field. We all hold in our heads people who we think are credible and have good track records and
					those that do not. This would be a way for people to recommend experts in a given domain.
				</p>				
			</div>
		</BlogStyle>
	);
}
