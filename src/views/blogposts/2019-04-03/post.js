import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import preview from "./preview.png";
import directions from "./directions.png";
import pseudocode from "./pseudocode.png";

export default function Post5() {
	return (
		<BlogStyle>
			<MetaTags>
				<title>{metadata.title}</title>
				<meta property="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta property="og:image" content={preview} />
				<meta property="og:url" content={metadata.url} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={preview} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">
				{metadata.date} • {metadata.readingtime}
			</h3>
			<div className="post">
				<p>
					<i>
						Some background — this is one of two essays I wrote for my philosophy course at the University
						of British Columbia (PHIL 101). This second one is about free will, the first deals with theism.
					</i>
				</p>
				<p>...</p>
				<img src={preview} className="image" alt="simogo" />
				<p>
					I don’t know about you, but free will seems like one of the most interesting — and at the same time
					one of the most frightening — topics in philosophy. In this piece I’m going to lay out my
					understanding of free will, why I feel that it’s important to tackle the issue head-on, as well as
					my personal take on it. I’m pulling from{" "}
					<a href="https://www.thisamericanlife.org/662/where-there-is-a-will/act-two-7">
						Life Is a Coin With One Side (This American Life podcast #662, Act 2)
					</a>{" "}
					as well as from common philosophical stances on the topic. I’ve noticed that for many, the concept
					itself is easy enough to grasp, but fully internalizing it with all of its implications can be a
					challenge. I hope that this piece can shed more light on the topic of free will and present it in an
					accessible way.
				</p>
				<p>
					Even the very definition of free will is a topic of much debate in philosophic circles. It basically
					boils down to two stances — <b>‘absolute’ free will</b> and <b>‘self-control’ free will</b>.
				</p>
				<p>
					The ‘absolute’ free will debate concerns the very foundations on which our universe was built.
					People who advocate for this kind of free will usually invoke some form of what they call{" "}
					<b>agent causation</b> — the notion that agents (i.e. living things) have special powers. In this
					view, agents can impact the universe irrespective of the cascade of causes and effects that make it
					up. There are, of course, many thinkers who counter this view. They state that invoking any
					explanation outside of our known universe goes against our scientific models as we know them today.
				</p>
				<p>
					Participants in the other major wing of this debate — the ‘self control’ wing— assert that it is
					much more interesting to shift the discussion towards mental self control. Patricia Churchland, for
					example:
				</p>
				<p className="quote">
					“I suggest that free will, as traditionally understood, needs modification… I suggest we first shift
					the debate way from the puzzling metaphysics of causal vacuums to the neurobiology of self control.”
				</p>
				<p>
					There is definitely a sharper focus on intent if the discussion is shifted. For example — did{" "}
					<a href="https://www.wikiwand.com/en/Charles_Whitman">
						Charles Whitman intend to shoot all those people at the University of Texas in 1966
					</a>
					, or was his tumor to blame? While it’s perhaps the more practical discussion to have — with
					potential impacts on the legal system and other societal organs — , I do find it less interesting
					than the “puzzling metaphysics” discussion. The grander discussion of free will and causality seems
					to get down at the bedrock nature of our universe, and prompts profound existential questions.
				</p>
				<p>
					Puzzling metaphysics is exactly what David Kestenbaum and Robert Sapolsky talk about on{" "}
					<i>This American Life</i>. They both take up the <b>pessimistic</b> view — I’m using this term
					technically — in that regardless of whether the world is <b>deterministic</b>* or random, our
					current understanding of physics leaves no room for free will. Sapolsky goes into this view deeper
					in his book <i>Behave: The Biology of Humans at Our Best and Worst</i>. He analyses all of the
					inputs that go into human choice-making, and explains that both our biological urges <i>and</i> our
					capacity for self-control are part of the same physical world. Quote (pg. 569):
				</p>
				<p className="quote">
					“Here are just a few of the things we’ve seen in this book that can influence [self control]: blood
					glucose levels; the socioeconomic status of your family of birth; a concussive head injury; sleep
					quality and quantity; prenatal environment; stress and glucocorticoid levels; whether you’re in
					pain; if you have Parkinson’s disease and which medication you’ve been prescribed; perinatal
					hypoxia; your dopamine D4 receptor gene variant; if you have had a stroke in your frontal cortex; if
					you suffered childhood abuse; how much of a cognitive load you’ve borne in the last few minutes;
					your MAO-A gene variant; if you’re infected with a particular parasite; if you have the gene for
					Huntington’s disease; lead levels in your tap water when you were a kid; if you live in an
					individualist or a collectivist culture; if you’re a heterosexual male and there’s an attractive
					woman around; if you’ve been smelling the sweat of someone who is frightened. On and on.”
				</p>
				<p>
					The sheer number of different inputs make all actions unique — but it doesn’t make them <i>free</i>.
					Sapolsky demonstrates that any thought or action is a byproduct of an intricate system of cause and
					effect. To suggest, as Churchland has, that the exercise of self control <i>is</i> free will is
					misguided in Sapolsky’s view (pg. 569):
				</p>
				<p className="quote">
					{" "}
					“Of all the stances of mitigated free will, the one that assigns aptitude to biology and effort to
					free will, or impulse to biology and resisting it to free will, is the most permeating and
					destructive. “You must have worked so hard” is as much a property of the physical universe and the
					biology that emerged from it as is “You must be so smart.””
				</p>
				<p>
					What Churchland defines as (‘self-control’) free will, Sapolsky would simply categorize as behaviour
					— an outcome that is a function of myriad inputs. In addition, as Sapolsky sees it, if there is a
					cause behind every effect, and the universe if governed by the laws of physics, and we, as humans
					are part of the universe, then there is no such thing as agent causation and therefore no ‘absolute’
					free will. Can’t win either way, hence the pessimist stance.
				</p>
				<p>
					Let’s go back and look at how life first formed on earth to get a better sense of what “no such
					thing as agent causation” means. At some point — exactly why remains unclear — atoms began forming
					into larger clusters called molecules, and later groupings of molecules. Later still, these clusters
					developed the ability to replicate. Complexity further increased, and the world witnessed life
					evolve from molecules to single-celled organisms, and later to the diversity of plants and animals
					we see today. During the early stages of life, the only organisms around had behaviors that were as
					simple as can get. Take an organism, for example, that propels itself forwards or backwards, towards
					greater nutrient concentration. That’s the only thing it does. If we could write out its behavior in
					pseudocode, it would look something like this:
				</p>
				<img src={pseudocode} className="image" alt="pseudocode" />
				<p>
					The organism, then, is making a basic choice — it takes in information from the environment,
					processes it, and produces an outcome. The organism can go forwards or backwards, and it “decides”
					which way based on the information presented to it. Also keep in mind that — regardless of whether
					the universe is deterministic* or not — this organism can only make one choice based on the
					variables it’s fed. It’s faced with other particles and organisms going on their own paths through
					the intricate web of causation. In a sense, it’s just reacting to the world around it.
				</p>
				<img src={directions} className="image" alt="directions" />
				<p>
					Now if we ramp up the complexity, we get to humans, with our countless cultures, practices, values,
					technologies and social institutions. From this perspective, there’s nothing special about us — at
					least not in the way that a pro-free will person would argue. We don’t have “agent causation”, as
					far as we can tell. We are not entities separate from and observing the universe. We are the
					universe observing itself. As such, we are subject to whatever laws set this elaborate Rube Goldberg
					machine in motion.
				</p>
				<p>
					Of course, my conscience wouldn’t be clean if I didn’t mention that it’s always best to be cautious
					of scientism creeping in — we should always question scientific conclusions. We don’t truly know the
					answer to the free will question, even if science points towards the notion that free is an
					illusion. Although unlikely, it’s nevertheless possible that our intuitions about free will are
					correct, and that contemporary science just does not have an adequate explanation for the
					phenomenon. Like visualizing 4D space, perhaps the true nature of free will is out of our reach.
					Since we are a firmly embedded part of our universe, it’s possible that we lack a certain
					‘bird’s-eye view’ perspective from outside our experienced reality. <i>Possibly</i>. To quote
					Kahneman: what you see is all there is.
				</p>
				<p>
					So while the jury’s still out, I’m of the opinion that it is best to act as though we have free
					will, even though it seems like we don’t. After all, we’re wired to think in free will terms
					anyways, and maybe we shouldn’t fight biology on this one. Assuming that we have free will raises
					the stakes on your life, and consequently leads to greater success. Therefore it’s possible that
					those who have the illusion of free will are selected for though natural selection. At the same
					time, it is somewhat relieving to realize that perhaps there is nothing special about us. We can
					develop an understanding of ourselves in a similar manner to all other objects in the universe since
					we too, like all other things, are combinations of atoms and the information encoded in them. As
					Sapolsky said (pg. 569): “To think otherwise is little more than folk psychology.”
				</p>
				<p>
					Now let’s put this free will subject in a box and never talk about it again, it kind of freaks me
					out.
				</p>
				<p>...</p>
				<p>
					<b>Works Cited</b>
				</p>
				<p>
					1. “Life Is a Coin With One Side.” This American Life, 17 Dec. 2018,
					www.thisamericanlife.org/662/where-there-is-a-will/act-two-7.
				</p>
				<p>2. Sapolsky, Robert M. Behave: the Biology of Humans at Our Best and Worst. Vintage, 2018.</p>
				<p>
					<b>Image Credits</b>
				</p>
				<p>
					The image on the cover is a ribozyme. Its discovery “demonstrated that RNA can be both genetic
					material (like DNA) and a biological catalyst (like protein enzymes), and contributed to the RNA
					world hypothesis, which suggests that RNA may have been important in the evolution of prebiotic
					self-replicating systems” (Wikipedia, 2019).
				</p>
				<p>1. “Ribozyme.” Wikipedia, Wikimedia Foundation, 23 Mar. 2019, en.wikipedia.org/wiki/Ribozyme.</p>
				<p>
					<b>*Determinism</b>
				</p>
				<p>
					A brief explanation of determinism that did not fit nicely into the main essay: In 1814, renowned
					scholar Pierre-Simon Laplace presented the world with a thought experiment. If you had a demon who
					knew the exact location and momentum of every particle in the universe, could he know the future?
					This is Laplacian determinism. Of course, the indeterminist answer to this question is a resounding{" "}
					<i>no</i> — the world is inherently probabilistic. Regardless, you can see how this has no bearing
					on our discussion. You can only make one choice based on the variables you’re faced with at any
					given moment. Indeterminism does not imply free will.
				</p>
			</div>
		</BlogStyle>
	);
}
