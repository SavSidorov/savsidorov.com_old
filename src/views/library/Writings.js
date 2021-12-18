import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"
import ACSModule from "../../components/ACSModule"

import finiteandinfinitegames from "./covers/finiteandinfinitegames.jpg"  
import geb from "./covers/geb.jpg" 
import machiavellians from "./covers/machiavellians.jpg" 
import procrustes from "./covers/procrustes.jpg" 
import timelessway from "./covers/timelessway.jpg"  
import zerotoone from "./covers/zerotoone.jpg" 

const Styles = styled.div`
p{
	font-size: 20px;
}

a{
	text-decoration: underline;
	color: var(--ss-primary);
	font-weight: 500;

	&:hover{
		text-decoration: none;
	}
}

h4 {
	margin-top: 40px;
}

.books {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 165px));
	grid-gap: 3em;

	margin-top: 30px;
	margin-bottom: 50px;

	justify-content: center;
}

.list > *{
	margin-left: 40px;
}
`;

export default function Writings() {
	return (
	<Styles>
      <Navigation/>
			<p>These are the books and shorter writings that have stuck with me and shaped my worldview. See more books on my <b><a href="https://www.goodreads.com/user/show/74501550-sav-sidorov">Goodreads</a></b>.</p>
		
			<h4>Books</h4>
			<div className="books">
					<ACSModule image={zerotoone} link="https://www.goodreads.com/book/show/18050143-zero-to-one" />
					<ACSModule image={machiavellians} link="https://www.goodreads.com/book/show/1270379.The_Machiavellians" />
					<ACSModule image={finiteandinfinitegames} link="https://www.goodreads.com/book/show/189989.Finite_and_Infinite_Games" />
					<ACSModule image={procrustes} link="https://savsidorov.substack.com/p/50-quotes-from-the-bed-of-procrustes" />
					<ACSModule image={geb} link="https://www.goodreads.com/book/show/24113.G_del_Escher_Bach" />
					<ACSModule image={timelessway} link="https://www.goodreads.com/book/show/106728.The_Timeless_Way_of_Building" />
			</div>
			
			<h4>Essays & Articles</h4>
			<div className="list">
				<p><b><a href="https://slatestarcodex.com/2018/01/24/conflict-vs-mistake/">
					Conflict vs Mistake</a></b> — Scott Alexander</p>
				<p><b><a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">
					Meditations on Moloch</a></b> — Scott Alexander</p>
				<p><b><a href="https://slatestarcodex.com/2018/10/30/sort-by-controversial/">
					Sort By Controversial</a></b> — Scott Alexander</p>
				<p><b><a href="https://emersoncentral.com/texts/representative-men/uses-of-great-men/">
					Uses of Great Men</a></b> — Ralph Waldo Emerson</p>

				<p><b><a href="http://www.paulgraham.com/love.html">
					How to Do What You Love</a></b> — Paul Graham</p>
				<p><b><a href="https://guzey.com/education/is-anything-inherently-difficult/">
					Is anything inherently difficult?</a></b> — Alexey Guzey</p>
				<p><b><a href="https://hac.bard.edu/amor-mundi/the-power-of-the-powerless-vaclav-havel-2011-12-23">
					The Power of the Powerless</a></b> — Vaclav Havel</p>
				<p><b><a href="http://worrydream.com/refs/Hofstadter%20-%20Analogy%20as%20the%20Core%20of%20Cognition.pdf">
					Analogy as the Core of Cognition</a></b> — Douglas Hofstadter</p>

				<p><b><a href="https://www.maa.org/external_archive/devlin/LockhartsLament.pdf">
					A Mathematician’s Lament</a></b> — Paul Lockhart</p>

				<p><b><a href="https://numinous.productions/ttft/">
					How can we develop transformative tools for thought?</a></b> — Andy Matuschak and Michael Nielsen</p>
				<p><b><a href="https://cognitivemedium.com/tat/index.html">
					Thought as a Technology</a></b> — Michael Nielsen</p>	

				<p><b><a href="https://www.ribbonfarm.com/2015/12/01/can-you-hear-me-now/">
					Can You Hear Me Now?</a></b> — Venkatesh Rao</p>
				<p><b><a href="https://www.piratewires.com/p/jump-23d06adb4cb7">
					JUMP</a></b> — Mike Solana</p>
				<p><b><a href="https://jsomers.net/i-should-have-loved-biology/">
					I should have loved biology</a></b> — James Somers</p>

				<p><b><a href="https://terrytao.wordpress.com/career-advice/theres-more-to-mathematics-than-rigour-and-proofs/">
					There’s more to mathematics than rigour and proofs</a></b> — Terry Tao</p>
				<p><b><a href="https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian">
					The Education of a Libertarian</a></b> — Peter Thiel</p>

				<p><b><a href="https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html">
					The Cook and the Chef</a></b> — Tim Urban</p>
				<p><b><a href="https://waitbutwhy.com/2019/08/story-of-us.html">
					The Story of Us</a></b> — Tim Urban</p>

				<p><b><a href="http://worrydream.com/ExplorableExplanations/">
					Explorable Explanations</a></b> — Bret Victor</p>	
				<p><b><a href="http://worrydream.com/KillMath/">
					Kill Math</a></b> — Bret Victor</p>	
				
				<p><b><a href="https://www.lorenzospaggiari.com/wp-content/uploads/2019/04/Watson-1993.pdf">
					Succeeding in Science: Some Rules of Thumb</a></b> —  James D. Watson</p>
				<p><b><a href="https://www.edge.org/response-detail/23879">
					Excellence</a></b> — Eric Weinstein</p>
				<p><b><a href="https://www.stephenwolfram.com/publications/mathematical-notation-past-future/">
					Mathematical Notation: Past and Future</a></b> — Stephen Wolfram</p>
				<p><b><a href="https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/">
					Finally We May Have a Path to the Fundamental Theory of Physics… and It’s Beautiful</a></b> — Stephen Wolfram</p>
							
				<p><b><a href="https://graymirror.substack.com/p/a-brief-explanation-of-the-cathedral">
					A brief explanation of the cathedral</a></b> — Curtis Yarvin</p>	
				<p><b><a href="https://urbit.org/blog/a-founders-farewell/">
					A Founder's Farewell</a></b> — Curtis Yarvin</p>	
				<p><b><a href="https://graymirror.substack.com/p/a-speech-code-for-dissidents">
					A speech code for dissidents</a></b> — Curtis Yarvin</p>

				<p><b><a href="https://urbit.org/blog/on-christopher-alexander">
					On Christopher Alexander</a></b> — ~tirwyd-sarmes</p>		
			</div>

			<h4>Interviews</h4>
			<div className="list">
				<p><b><a href="https://niccolo.substack.com/p/the-dubrovnik-interviews-marc-andreessen">
					The Dubrovnik Interviews: Marc Andreessen - Interviewed by a Retard</a></b></p>
				<p><b><a href="https://www.interferenza.net/bcs/interw/66-jan.htm">
					Playboy Interview: Bob Dylan</a></b></p>
				<p><b><a href="https://www.wmagazine.com/story/frank-ocean-cover-story-interview">
					Frank Ocean Makes Moves Like Nobody Else</a></b></p>
				<p><b><a href="https://medium.com/re-form/the-utopian-ui-architect-34dead42a28">
					The Utopian UI Architect</a></b></p>	
				<p><b><a href="https://im1776.com/2021/09/03/curtis-yarvin-interview/">
					Curtis Yarvin: An Interview</a></b></p>		
			</div>
			
			<h4>Short Stories</h4>
			<div className="list">
				<p><b><a href="https://www.ndsu.edu/pubweb/~cinichol/CreativeWriting/323/OBrienWarStory.pdf">
					How to Tell a True War Story</a></b> — Tim O'Brien</p>
				<p><b><a href="https://savsidorov.substack.com/p/the-youth-a-translation">
					Молодняк / The Youth</a></b> — Aleksandr Solzhenitsyn</p>		
				<p><b><a href="http://sdavidmiller.com/octo/files/no_google2/GoodOldNeon.pdf">
					Good Old Neon</a></b> — David Foster Wallace</p>
			</div>

			<h4>Poetry</h4>
			<div className="list">
				<p><b><a href="https://allpoetry.com/The-Genius-Of-The-Crowd?page=1">
					The Genius Of The Crowd</a></b> — Charles Bukowski</p>
				<p><b><a href="https://www.poeticous.com/charles-bukowski/style-is-the-answer-to-everything">
					Style</a></b> — Charles Bukowski</p>
				<p><b><a href="https://www.nickcave.com/lyric/bright-horses/">
					Bright Horses</a></b> — Nick Cave</p>
				<p><b><a href="https://www.nickcave.com/lyric/fireflies/">
					Fireflies</a></b> — Nick Cave</p>
				<p><b><a href="https://songsear.ch/song/Nick-Cave-The-Bad-Seeds/Steve-McQueen/3730998">
					Steve McQueen</a></b> — Nick Cave</p>
				<p><b><a href="https://songsear.ch/song/Nick-Cave-and-the-Bad-Seeds-Dirty-Three/The-snake-became-a-serpent/5212660">
					The snake became a serpent</a></b> — Nick Cave</p>

				<p><b><a href="https://www.poetryfoundation.org/poems/46565/ozymandias">
					Ozymandias</a></b> — Percy Shelley</p>
				<p><b><a href="https://graymirror.substack.com/p/projection">
					Projection</a></b> — Curtis Yarvin</p>

				<p><b><a href="https://simonov.co.uk/typomnish">
					Ты помнишь, Алеша, дороги Смоленщины</a></b> — Константин Симонов</p>
			</div>
		</Styles>
	);
}


