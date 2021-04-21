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

export default function Writings() {
	return (
		<Styles>
      <Navigation/>
			<p>These are the books and shorter writings that I've found interesting and insightful — the ones that have stuck with me and shaped my worldview.</p>
			<br/>
			<h4>Books</h4>
			<div>
				<p><b><a href="https://www.goodreads.com/book/show/18050143-zero-to-one">Zero to One</a></b> — Peter Thiel</p>
				<p><b><a href="https://www.goodreads.com/book/show/189989.Finite_and_Infinite_Games">Finite and Infinite Games</a></b> — James Carse</p>
				<p><b><a href="https://www.goodreads.com/book/show/24213.Alice_s_Adventures_in_Wonderland_Through_the_Looking_Glass">Alice’s Adventures in Wonderland</a></b> — Lewis Carroll</p>
				<p><b><a href="https://www.goodreads.com/book/show/157993.The_Little_Prince">The Little Prince</a></b> — Antoine de Saint-Exupéry</p>
				<p><b><a href="https://www.goodreads.com/book/show/24113.G_del_Escher_Bach">Gödel, Escher, Bach</a></b> — Douglas Hofstadter</p>
				<p><b><a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow">Thinking, Fast and Slow</a></b> — Daniel Kahneman</p>
				<p><b><a href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</a></b> — James Clear</p>
				<p><b><a href="https://www.goodreads.com/book/show/503150.Letters_to_a_Young_Contrarian">Letters to a Young Contrarian</a></b> — Christopher Hitchens</p>
				<p><b><a href="https://www.goodreads.com/book/show/35167685-surely-you-re-joking-mr-feynman">Surely You’re Joking, Mr. Feynman!</a></b> — Richard P. Feynman</p>
				<p><b><a href="https://www.goodreads.com/series/164555-incerto">The Incerto</a></b> — Nassim Nicholas Taleb</p>
				<p><b><a href="https://www.goodreads.com/book/show/149800.Visual_Complex_Analysis">Visual Complex Analysis</a></b> — Tristan Needham</p>
				<p><b><a href="https://www.goodreads.com/book/show/79766.A_Pattern_Language">A Pattern Language</a></b> — Christopher Alexander</p>
				<p><b><a href="https://www.goodreads.com/book/show/10884.Einstein">Einstein: His Life and Universe</a></b> — Walter Isaacson</p>
				<p><b><a href="https://www.goodreads.com/book/show/2122.The_Fountainhead">The Fountainhead</a></b> — Ayn Rand</p>
				<p><b><a href="https://www.goodreads.com/book/show/472331.Watchmen">Watchmen</a></b> — Alan Moore & Dave Gibbons</p>
				<p><b><a href="https://www.goodreads.com/book/show/36336078-call-me-by-your-name">Call Me By Your Name</a></b> — André Aciman</p>
				<p><b><a href="https://www.ndsu.edu/pubweb/~cinichol/CreativeWriting/323/OBrienWarStory.pdf">How to Tell a True War Story</a></b> — Tim O’Brien</p>
				<p><b><a href="https://www.goodreads.com/book/show/25541028-elon-musk">Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</a></b> — Ashlee Vance</p>
				<p><b><a href="https://www.academia.edu/38433249/Principia_Politica">Principia Politica</a></b> — Nassim Nicholas Taleb</p>
				<p><b><a href="https://www.goodreads.com/book/show/31170723-behave">Behave</a></b> — Robert Sapolsky</p>
			</div>
			<br />
			<h4>Articles</h4>
			<div>
				<p><b><a href="https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html">The Cook and the Chef</a></b> — Tim Urban</p>
				<p><b><a href="https://waitbutwhy.com/2019/08/story-of-us.html">The Story of Us</a></b> — Tim Urban</p>
				<p><b><a href="https://www.edge.org/response-detail/23879">Excellence</a></b> — Eric Weinstein</p>
				<p><b><a href="https://slatestarcodex.com/2018/01/24/conflict-vs-mistake/">Conflict vs Mistake</a></b> — Scott Alexander</p>
				<p><b><a href="https://slatestarcodex.com/2018/10/30/sort-by-controversial/">Sort By Controversial</a></b> — Scott Alexander</p>
				<p><b><a href="https://slatestarcodex.com/2015/04/21/universal-love-said-the-cactus-person/">Universal Love, Said The Cactus Person</a></b> — Scott Alexander</p>
				<p><b><a href="https://www.lorenzospaggiari.com/wp-content/uploads/2019/04/Watson-1993.pdf">Succeeding in Science: Some Rules of Thumb</a></b> —  James D. Watson</p>
				<p><b><a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">A Mathematician’s Lament</a></b> — Paul Lockhart</p>
				<p><b><a href="http://worrydream.com/refs/Hofstadter%20-%20Analogy%20as%20the%20Core%20of%20Cognition.pdf">Analogy as the Core of Cognition</a></b> — Douglas Hofstadter</p>
				<p><b><a href="https://numinous.productions/ttft/">How can we develop transformative tools for thought?</a></b> — Andy Matuschak and Michael Nielsen</p>
				<p><b><a href="http://www.paulgraham.com/conformism.html">The Four Quadrants of Conformism</a></b> — Paul Graham</p>
				<p><b><a href="http://www.paulgraham.com/love.html">How to Do What You Love</a></b> — Paul Graham</p>
				<p><b><a href="https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian">The Education of a Libertarian</a></b> — Peter Thiel</p>
				<p><b><a href="https://graymirror.substack.com/p/2020-the-year-of-everything-fake ">2020, the year of everything fake</a></b> — Curtis Yarvin</p>
				<p><b>The Clear Pill: <a href="https://americanmind.org/salvo/the-clear-pill-part-1-of-5-the-four-stroke-regime/">Part I</a> & <a href="https://americanmind.org/salvo/the-clear-pill-part-2-of-5-a-theory-of-pervasive-error/">Part II</a></b> — Curtis Yarvin</p>						
			</div>
		</Styles>
	);
}
