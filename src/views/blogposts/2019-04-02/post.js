import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import Share from "../../../components/Share";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import simogo from "./preview.png";
import quad from "./quad.png";
import quadFilled from "./quad-filled.png";

export default function Post4() {
	return (
		<div>
			<BlogStyle>
				<MetaTags>
					<title>{metadata.title}</title>
					<meta property="og:title" content={metadata.title} />
					<meta name="og:description" content={metadata.description} />
					<meta property="og:image" content={simogo} />
					<meta property="og:url" content={metadata.url} />
					<meta name="twitter:title" content={metadata.title} />
					<meta name="twitter:description" content={metadata.description} />
					<meta name="twitter:image" content={simogo} />
					<meta name="twitter:card" content="summary_large_image" />
				</MetaTags>
				<h2>{metadata.title}</h2>
				<h3 className="metadata">
					{metadata.date} • {metadata.readingtime}
				</h3>
				<div className="post">
					<p>
						<i>
							Some background—this is one of two essays I wrote for my philosophy course at the University
							of British Columbia (PHIL 101). This first one deals with theism, the second with free will.
						</i>
					</p>
					<p>...</p>
					<img src={simogo} className="image" alt="simogo" />
					<p className="quote">
						“The year walk, or Årsgång is a pseudo pagan ritual undertaken by Swedish people from medieval
						times to the 19th century. On certain holidays, the “year walkers” would abstain from feasting
						by locking themselves in dark rooms. At midnight, they would emerge to walk through the woods to
						the village church. Within the forest lurked strange, harrowing creatures, embodying the
						provincial fears of wanton lust, death, infanticide, misfortune and sacrilege. The walkers could
						not predict which of these they might encounter, but in each and every combination of these
						fearful communions lay either a gruesome death, or a vision of their future in the coming year.”
						— ”Simogo and the Modern Myth”, Polygon
					</p>
					<p>...</p>
					<p>
						Contemporary philosopher Elizabeth Anderson wrote an essay titled{" "}
						<a href="https://www.skeptic.ca/Biblical_Ethics.htm">
							“If God Is Dead, Is Everything Permitted?”
						</a>
						, which takes on the debate surrounding the belief in God. She makes the case against theism in
						all its forms by turning the moralistic argument — arguing from morality — back on theistic
						beliefs. Anderson is right to claim that Scripture is morally contradictory. However, the
						conclusions that she draws from it — that one should reject religion and theism altogether — are
						rather short-sighted. The real value of theism comes from the degree to which these stories
						resonate with individuals. I would like to explore this here, and talk about how myths in
						general encourage risk-taking and adventure for the betterment of the community — like the
						Swedish year walkers.
					</p>
					<p>
						I am categorizing Scripture as myth, and not a source of empirical claims. Anderson, on the
						other hand, takes Scripture to contain empirical claims. She argues that as a result, one can
						use Scripture as evidence to prove or disprove theological claims. She also considers Scripture
						to be the primary source of evidence for religious claims, so by disproving it you can disprove
						theism. At its core, Anderson’s argument centers around the fact that the moral prescriptions
						found in Scripture are faulty and therefore unreliable. Furthermore, she states that “people
						figured out [moral] rules long before they were exposed to any of the major monotheistic
						religions” (p. 216) through negotiating with each other. Because the moral claims are
						unreliable, she argues that it is then reasonable to question all of the other content found in
						Scripture, including the existence of God. One should reject the gods of polytheistic religions
						as well. Quote: “Indeed, [evidence cited on behalf of Christianity, Judaism, and Islam] is on a
						par with the evidence for Zeus, Baal, Thor, and other long-abandoned gods, who are now
						considered ridiculous by nearly everyone” (p. 227). Why should everyone reject theism, in
						Anderson’s view? She reasons that not only is there no good evidence for religious claims, but
						also that religious and mystical thinking is part of a deeply ingrained cognitive bias that
						prevents individuals from taking rational actions that would be more beneficial to everyone
						involved. If Anderson considered religion harmless, it’s hard to imagine her writing her essay.
						She further writes (p. 225):
					</p>
					<p className="quote">
						“This mode of explanation is universally observed among people who lack scientific understanding
						of natural events. It appears to be a deeply rooted cognitive dissonance and bias of humans to
						reject the thought of meaningless suffering. If we are suffering, someone must be responsible
						for it!”
					</p>
					<p>
						This is Anderson’s claim with which I disagree: that religious thinking is a cognitive bias and
						is inferior to scientific thinking — a bug and not a feature, so to speak — and that evidence
						can be reasonably used to prove or disprove theological claims.
					</p>
					<p>
						I recently came across the work of history professor James P. Carse. It helped me hone my
						thinking on this subject of myth and religion, so I feel that it would be useful to introduce
						his perspective here. In his book <i>Finite and Infinite Games</i>, Carse describes myths,
						including religious myths, as essential tools that shape culture and encourage individuals to
						set out on adventures to bring useful knowledge back to society. He writes that “Explanations
						establish islands, even continents, of order and predictability. But these regions were first
						charted by adventurers whose lives are narratives of exploration and risk. They found them only
						by mythic journeys into the wayless open” (p. 139). Whatever this mythical, symbolic realm of
						reality is, it’s completely distinct from the empirical world described by scientists — and it
						seems to be as integral to the true nature of reality as empiricism. If empiricism deals with
						causality and the physical world, symbolism ascribes meaning to the physical world and lets our
						imaginations run wild. It is the realm of the creative, the mysterious, the meaningful.
					</p>
					<p>
						Carse also draws a distinction between what he calls resonance and amplification, and notes that
						a myth cannot and should not be fully resolved. A myth’s power comes from its mystery, and
						different parts of a myth resonate with and inspire individuals for different reasons. One must
						always contend with the narrative, treating it as a pool of wisdom from which he can continually
						draw. Honing in and amplifying one interpretation over others, on the other hand, defeats the
						purpose of the myth. Like in a dream, by holding onto one particular thought or image, you lose
						the essence of it. “A choir is the unified expression of voices resonating with each other; a
						loudspeaker is the amplification of a single voice, excluding all others. … Ideology is the
						amplification of myth. It is the assumption that since the beginning and end of history are
						known there is nothing more to say. History is therefore to be obediently lived out according to
						the ideology,” as Carse puts it (p. 145). This type of dogmatic amplification would in theory
						apply to both fundamentalists and atheists, because they both collapse myth into a single
						interpretation.
					</p>
					<p>
						What Carse lays out seems to me like the best way to conceptualize Scripture. Religion exists in
						the realm of story and symbolism, not empiricism. Anderson mentioned the idea of Scripture being
						like a Rorschach test — it does not exist independent of the reader, but has to be interpreted
						by the reader. This isn’t as bad as she makes it out to be because as we established before,
						that is what gives stories their power. When a work of fiction resonates with you, what happens
						is that your personality interfaces with the work, in a way. Connections are made in your mind
						that would not be otherwise, and your personality is honed by the text,{" "}
						<i>but only to the extent that the text resonates with you</i>. You go into the text with
						certain facts about your personality, biases and preferences, and they determine how the text
						resonates with you. It’s a feedback loop, in other words.
					</p>
					<p>
						The problem as I see it arises when people resort to dogma and breaking the law, and use stories
						as justification for it. However, this has more to do with actions than with the stories
						themselves, and is not connected to our discussion. It is illegal to break the law and, say,
						engage in violence. Of course, there is always this question: what if the way in which a story
						resonates prompts someone to commit acts of violence? I’ll admit, this is not something that I
						have fully resolved — perhaps it is the topic for another post entirely. For the purposes here,
						I’m assuming that it’s wrong to break the law, regardless of any personal convictions. But, like
						I said, there’s nuance there and it’s a topic for another discussion. In regard to dogma —
						dogmatic interpretations defeat the purpose of the text. Anderson seems to also be against dogma
						in all forms. On the other hand, if one remains open minded and approaches situations from first
						principles, then every new bit of information he encounters improves his model of how the world
						works. The empirical and symbolic realm play different uses in life — empiricism deals with what
						is, symbolism deals with stories, metaphors, purpose, curiosity, adventure (the tendency to
						explore new territory), and our system of ethics.
					</p>
					<p>
						In this context, I’m taking <i>dogmatism</i> to generally mean valuing conclusions over evidence
						and being resistant to having your mind changed in light of such evidence. On the other hand,{" "}
						<i>first principles thinking</i> generally involves looking at the root causes and reasoning up
						from there.
					</p>
					<p>I found it helpful to visualize the issue using this graph:</p>
					<img src={quad} className="image" alt="4-quadrants" />
					<p>
						I consider everything in this region to be okay — both empiricism and myth are valuable in their
						own ways:
					</p>
					<img src={quadFilled} className="image" alt="4-quadrants-filled" />
					<p>
						Now, Anderson makes the claim that one should reject all theistic belief — something that would,
						if stripped of dogma, fall into the first principles / symbolism quadrant. This is the central
						point here — contention about the first quadrant. It seems to me that theology can be salvaged
						despite Anderson’s criticisms — most of which I happen to agree with — and play a beneficial
						role in society, because of the fact that it deals with this risk-taking/adventure dimension.
					</p>
					<p>
						Another important note is that in order to venture out into the “wayless open” in the hopes of
						bringing back something useful,{" "}
						<i>you have to have faith in the notion that you will bring back something useful</i>. This is
						why it is imperative to salvage belief itself, not just the good practices from Scripture. You
						can believe without acting, but cannot act effectively without believing. By belief, I mean
						faith that something is correct on some deeper level, without necessarily having direct evidence
						for it. You can believe in people or ideas, and by the same token you can have theological
						beliefs. Those men and women who ventured out into the hostile Swedish forests had faith in the
						fact that what they were doing was of use, and as a result discovered profound things about
						themselves and the world around them. Belief, in this broader context, does not require
						evidentiary claims, but has much more to do with the concept of resonance. When a piece of text
						resonates with you, you accept it as true on a level deeper than empiricism. Of course, you
						should always keep updating your “what is true” pile, but that does not mean that everything in
						there can be viewed in evidentiary terms. For example, I cannot explain in evidentiary terms why
						green is my favorite color, or why I preferred Orwell’s <i>1984</i> to Huxley’s{" "}
						<i>Brave New World</i>, or why I like a particular Richard Feynman quote. I can, however,
						explain these things in terms of resonance and aesthetics — how moved I am my these things. The
						degree to which I am moved is the degree to which I incorporate these bits of information into
						my worldview.
					</p>
					<p>
						I am interested in honing in on what the true nature of reality is, and it seems that this
						mythical, symbolic component plays a significant role. Reality has a texture to it that’s not
						just numbers and pure empiricism, and some aspects of it — like myths and stories — cannot be
						looked at through an evidentiary lens. Because of this, it seems that Elizabeth Anderson is
						missing out on a bigger picture when she asserts that we, as a society, should dispense with
						theology and embrace the empirical world. We need myths to bring useful knowledge back from the
						unknown, and as a result move our culture forward. As Carse puts it (p. 140), “the very
						liveliness of a culture is determined not by how frequently these thinkers discover new
						continents of knowledge but how frequently they depart to seek them. A culture can be no
						stronger than its strongest myths.”
					</p>
					<p>...</p>
					<p>
						<b>Works Cited</b>
					</p>
					<p>
						1. Anderson, Elizabeth. “If God Is Dead, Is Everything Permitted?”, part of the compilation:
						Antony, Louise M. Philosophers without Gods: Meditations on Atheism and the Secular Life. Oxford
						University Press, 2007.
					</p>
					<p>2. Carse, James. Finite and Infinite Games. Free Press, 2013.</p>
					<p>
						3. Condra, Adam. “Simogo and the Modern Myth: The Story of Year Walk.” Polygon, Polygon, 1 Aug.
						2013, www.polygon.com/features/2013/8/1/4546026/simogo-year-walk.
					</p>
					<p>
						<b>Further Reading</b>
					</p>
					<p>
						I did not reference these works directly while writing, but my thinking on this issue has been
						shaped by them. There is probably some overlap of ideas.
					</p>
					<p>1. Taleb, Nassim Nicholas. Antifragile: Things That Gain from Disorder. Random House, 2012.</p>
					<p>
						2. Taleb, Nassim Nicholas. Skin in the Game: Hidden Asymmetries in Daily Life. Random House,
						2017.
					</p>
					<p>3. Saint-Exupéry Antoine de. The Little Prince. 1943.</p>
					<p>
						<b>Image Credits</b>
					</p>
					<p>
						1. Condra, Adam. “Simogo and the Modern Myth: The Story of Year Walk.” Polygon, Polygon, 1 Aug.
						2013, www.polygon.com/features/2013/8/1/4546026/simogo-year-walk.
					</p>
				</div>
			</BlogStyle>
			<Share />
		</div>
	);
}
