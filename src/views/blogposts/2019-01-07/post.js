import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import Share from "../../../components/Share";
import metadata from "./metadata.json";
import freedomAttachmentGraph from "./preview.png";

export default function Post1() {
	return (
		<div>
			<BlogStyle>
				<h2>{metadata.title}</h2>
				<h3 className="metadata">
					{metadata.date} • {metadata.readingtime}
				</h3>
				<div className="post">
					<p>
						<i>
							A note — I was born in Russia and moved to Canada in 2005, and have many relatives in both places. When we
							moved, I remember it being a significant culture shock, and throughout the years I’ve been able to more
							accurately pinpoint exactly what the fundamental differences in culture are. The observations made here
							are from my own experience and conversations with people. Take everything I say with a grain of
							salt — some of these assertions might be a result of my personal biases. That being said, I hope that
							delving into this issue can be in some way insightful.
						</i>
					</p>
					<p>...</p>
					<p>
						How do we talk to one another? How much do we help out others in our community? How do we structure our
						social institutions? The culture underlying our communities plays an important role in all of these
						questions — and cultures differ significantly from one another. I would like to discuss differences that
						arise between Eastern European and western culture — Russia and Canada particularly, since those two are the
						countries that I’ve had most exposure to. Particularly, one of the fundamental differences I’ve noticed is
						in interpersonal attachment — this is the focus of this piece, and it’s something that deeply affects most
						of our social interactions.
					</p>
					<p>Here are some relative differences about the two cultures that I noticed throughout the years:</p>
					<div className="color-box">
						<p>
							<i>Generally stronger social bonds in RU than CA.</i>
						</p>
						<p>
							<i>Less formality, fewer ‘contractual’ relationships in RU than CA.</i>
						</p>
						<p>
							<i>Relative intolerance of other cultures and lifestyles in RU, compared to relative tolerance in CA.</i>
						</p>
						<p>
							<i>
								Tendency towards blunt yet honest statements in RU, more ‘politeness’ for the sake of maintaining
								relations in CA.
							</i>
						</p>
						<p>
							<i>
								RU prioritizes survival of the group — your family, friends, the larger community, the nation. Whereas
								in CA, the priority is placed on individual autonomy — with things like entrepreneurship, hard work for
								personal benefit, free speech, and challenging cultural norms held in high regard.
							</i>
						</p>
						<p>
							<i>More physical contact in RU — handshakes, pats, hugs. Greater emphasis on personal space in CA.</i>
						</p>
						<p>
							<i>
								In CA, there are attempts at sensitivity and openness to others, manifested through advancement of civil
								rights, various acceptance movements, political correctness, etc. I think there’s certainly a discussion
								to be had as to the effectiveness and motivation of these movements, but at least the sentiment is
								there. It is also interesting that derogatory insults aimed at race, sex and other parts of identity are
								heavily scrutinized whereas generic insults are seen as more culturally acceptable. RU has opposite
								sentiment — rights movements are seen as more annoying than helpful. Comparatively less compassion
								towards the individual. Interestingly, insults aimed at race, sex, etc are not seen as the ultimate harm
								one can do, and are treated more casually. On the other hand, generic insults carry a lot more weight
								and are generally perceived as more hostile.
							</i>
						</p>
					</div>
					<p>
						The difference in culture can be put another way — Russia is more of a “mob family” mentality, where each
						member of the group holds a tight knit allegiance to everyone else, while Canada is a culture where people
						are motivated by their own well being primarily. Almost as if some section of culture in Canada values the
						law more as a source of morality than judging every situation accordingly and valuing relationships over
						rules. The other extreme of this isn’t preferable either however, as it leads to corruption and also comes
						with another price — you are expected to behave as other members of the ingroup. Any deviation from this
						behavior is met with coercion back to the ingroup and/or hostility. I’m talking about something as small as
						minor social cues and “etiquette”, to large scale life decisions like career choice, dating preference and
						an individual’s ethics/guiding philosophy. That being said, a healthy dose of increased intimacy in
						relationships might be beneficial.
					</p>
					<p>
						Taking all of these differences into account, I wonder if it’s possible to take the best of both worlds and
						aim toward better social interactions that transcend both cultures. Can we take the deep interpersonal
						attachment of Russian culture and leave behind the xenophobia? Likewise, can we conserve the individual
						autonomy and freedom that is so prominent in Canada but leave out the shallowness? Is freedom and attachment
						necessarily correlated or are they two orthogonal issues? If they are orthogonal, then we should be striving
						to achieve both at the same time, as shown in the upper right quadrant of this graph:
					</p>
					<img src={freedomAttachmentGraph} className="image" alt="freedom-attachment" />
					<p>
						I came across this concept of ‘Eros’ recently, and it seems to be the perfect description for these
						first-quadrant social interactions where both freedom and social bonds are positive. Eros is a kind of
						intense attraction, lust or worship. It is exemplified, for example, as pursuing the highest standard,
						creating more beauty in the world for beauty’s sake. Reaching your full potential.* You do this by letting
						attraction be your guide — by going towards what attracts you instead of away from what repels you. “Figure
						out what you want to do by cancelling out everything that you don’t want to do” is such bad advice in light
						of this notion. Daniel Schmachtenberger completes the idea with this quote (Future Thinkers podcast, episode
						46):
					</p>
					<p className="quote">
						“The Eros model of love, erotic love, doesn’t just mean sex. Sex is one place that it expresses itself, but
						it is a passionate desire energy. It’s an attraction, so we can think of things being attracted together,
						right? People being attracted together to procreate, to make new life is a special case example of people
						being attracted together to create anything, or anything being attracted together to create anything, right?
						Subatomic particles being attracted together to have this relationship that is atoms. And so, we can think
						of the evolutionary impulse as kind of an Eros energy…
					</p>
					<p className="quote">
						…So when we think about participating the evolutionary impulse of the universe — consciously participating
						in it — then we think about supporting things coming together in right relationships that are synergistic,
						right? That’s what’s aiming at the, you know, there is no destination. It’s an eternal process of becoming
						and blossoming.”
					</p>
					<p>
						I am only beginning to learn about this topic, but I feel like the Eros model is a promising lead toward a
						better culture — taking the benefits of both the Russian and Canadian approach and leaving behind the BS.
						We’re in an excellent position in time right now, where we can take the best aspects of different cultures
						and integrate them into our model of how to live. If we get this compassion and closeness thing right, and
						not at the expense of personal autonomy, we can pave the path to a world where self-actualization is made
						even easier, though deeper understanding of others.
					</p>
				</div>
			</BlogStyle>
			<Share />
		</div>
	);
}
