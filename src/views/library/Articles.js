import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

const Styles = styled.div`
p{
	font-size: 20px;
}

a{
	text-decoration: none;
	color: var(--ss-primary)
}
`;

export default function Articles() {
	return (
		<Styles>
      <Navigation/>
			<div className="articles">
				<p><b><a href="https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html">The Cook and the Chef</a></b> — Tim Urban</p>
				<p><b><a href="https://www.edge.org/response-detail/23879">Excellence</a></b> — Eric Weinstein</p>
				<p><b><a href="https://slatestarcodex.com/2018/01/24/conflict-vs-mistake/">Conflict vs Mistake</a></b> — Scott Alexander</p>
				<p><b><a href="https://slatestarcodex.com/2018/10/30/sort-by-controversial/">Sort By Controversial</a></b> — Scott Alexander</p>
				<p><b><a href="https://www.lorenzospaggiari.com/wp-content/uploads/2019/04/Watson-1993.pdf">Succeeding in Science: Some Rules of Thumb</a></b> —  James D. Watson</p>
				<p><b><a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">A Mathematician’s Lament</a></b> — Paul Lockhart</p>
				<p><b><a href="http://worrydream.com/refs/Hofstadter%20-%20Analogy%20as%20the%20Core%20of%20Cognition.pdf">Analogy as the Core of Cognition</a></b> — Douglas Hofstadter</p>
				<p><b><a href="https://numinous.productions/ttft/">How can we develop transformative tools for thought?</a></b> — Andy Matuschak and Michael Nielsen</p>
				<p><b><a href="http://www.paulgraham.com/conformism.html">The Four Quadrants of Conformism</a></b> — Paul Graham</p>
				<p><b><a href="https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian">The Education of a Libertarian</a></b> — Peter Thiel</p>
				<p><b><a href="https://graymirror.substack.com/p/2020-the-year-of-everything-fake ">2020, the year of everything fake</a></b> — Curtis Yarvin</p>				
			</div>
		</Styles>
	);
}
