import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import girl from "./preview.png";

export default function Post3() {
	return (
		<BlogStyle>
			<MetaTags>
				<title>{metadata.title}</title>
				<meta property="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta property="og:image" content={girl} />
				<meta property="og:url" content={metadata.url} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={girl} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">
				{metadata.date} • {metadata.readingtime}
			</h3>
			<div className="post">
				<p>
					<i>
						Co-authored with <a href="https://www.ubyssey.ca/authors/johann-cooper/">Johann Cooper</a>,
						originally published in the 2019 Ubyssey Magazine. Artwork by The Ubyssey.
					</i>
				</p>
				<p>...</p>
				<img src={girl} className="image" alt="control-flow" />
				<p>
					The New Year has become symbolic of new beginnings and serves as an incentive for self-improvement.
				</p>
				<p>
					As the year progresses, however, motivation toward resolutions often begins to fade. That’s why it’s
					important that solid foundations are built early on for any progress to be made. How can this
					actually be done? Presence of mind — the notion of staying focussed on the present moment — is the
					crucial component. If properly understood, it can serve as an effective state to help you through
					life.
				</p>
				<p>
					Not only can it help you fulfill your resolutions but it can keep your mind from wandering, ward off
					procrastination and help you successfully execute plans. For this to be achieved, two tools need to
					be understood: control and flow.
				</p>
				<p>
					To begin, what does it mean to have presence of mind? It is not daydreaming nor procrastination.
					Presence promotes activity over passivity, and awareness over ignorance. It means focussing solely
					on the present moment and being hyper-aware of your environment. In honing the skill of presence,
					you develop harmony between yourself and the world around you. As a result, you gain more control
					over your environment. But how can control be cultivated?
				</p>
				<p>
					There has been extensive research showing that the brain contains two distinct parts: a rational and
					a primal part. Achieving presence is a balancing act. It requires you to understand how the needs of
					each part can be met without completely rejecting the needs of the other. A brain in conflict can
					often cause you to resort to instant gratification over productivity. However, focussing entirely on
					productivity can leave you void of motivation and happiness.
				</p>
				<p>
					To be most effective at understanding the world around you, begin by paying attention to your
					environment and the interactions between you and others. Through this understanding, you can start
					to parse through all the aspects of your life and identify those that are in your control and those
					that are not. By focussing solely on what is within your control, you can become maximally
					effective.
				</p>
				<p>
					What if what you can and cannot control is not clear? What if there are aspects of your situation
					that you have yet to discover?
				</p>
				<p>
					A good strategy is to overestimate your degree of situational control. In this state of confidence
					we often attempt things we previously disregarded. There are few downsides to overestimating — if
					you overreach and fail, you can adjust your model of understanding. If you overreach and win, all
					the better.
				</p>
				<p>
					Acknowledge that you know very little about the world and are open to adjusting your beliefs, and at
					the same time realize that others don’t know much, either. This allows you to be more ambitious and
					try things that go against conventional wisdom.
				</p>
				<p>
					As you start to fully internalize these two facets of control, your inner desires and the world
					around you, you begin to notice a deep interconnection. There is no clear boundary between your
					internal self and your external environment — everything is part of one universe. The relationship
					between your control over the universe and your desires is actually cyclical. It’s a feedback loop
					that perpetually optimizes itself. Once you achieve this kind of internal and external control, you
					can then enter a new, transcendent state: flow.
				</p>
				<p>
					Flow is a psychological term coined by psychologist Dr. Mihaly Csikszentmihalyi. Explained briefly,
					it is a euphoric state of intense, excited concentration. When people recall times when they were
					“in the zone,” they are referring to flow.
				</p>
				<p>
					Control is a prerequisite for flow. Once you maintain your environment with control, you can further
					advance and improve through flow. Flow, however, is a tool that should be used in the right
					circumstances and on the right problems.
				</p>
				<p>In his book on the subject, Csikszentmihalyi describes the characteristics of a flow state:</p>
				<div className="color-box">
					<p>• Your goals are clear, not confusing or contradictory. You understand the rules of the game.</p>
					<p>• You have a system of immediate feedback, providing insight into how well you are doing.</p>
					<p>
						• The challenges you face are exactly matched with your skills. You are on the edge of your own
						abilities and right on the border of chaos and order. You feel neither overwhelmed nor bored.
					</p>
					<p>• Your focus becomes singular, you’re only thinking about the task at hand.</p>
					<p>
						• You lose your sense of ego and self-consciousness. The activity becomes the singular focus,
						crowding out notions of self-image.
					</p>
					<p>
						• Your sense of time is transformed. Instead of the task adapting to however much time you have,
						time seems to adapt to the task.
					</p>
				</div>
				<p>
					It’s possible to misuse flow. When performing an unenjoyable task, working a boring job or fixing a
					bad relationship, flow can be used to “learn to love” the experience. To avoid this state, you must
					first fully internalize the notion of control. Flow is best used once you’ve charted a path and
					intend to pursue it. Here, flow makes the challenges ahead less daunting and more achievable.
				</p>
				<p>
					Everyone’s path to harmony and self actualization is different, but flow provides an incredibly
					effective tool that anyone can use to help them on their way.
				</p>
				<p>
					Honing presence of mind is, in a sense, a path to wisdom. If we define wisdom as how close your
					perceived knowledge is to your actual knowledge, then by achieving presence, what you’re really
					doing is cultivating wisdom. After all, isn’t a new year an opportunity to become a better, wiser
					version of yourself?
				</p>
				<p>
					<i>
						This piece was inspired by{" "}
						<a href="https://www.cgu.edu/people/mihaly-csikszentmihalyi/">Mihaly Csikszentmihalyi</a>,{" "}
						<a href="https://waitbutwhy.com/2013/11/how-to-beat-procrastination.html">Tim Urban</a> and{" "}
						<a href="https://futurethinkers.org/daniel-schmachtenberger/">Daniel Schmachtenberger</a>. For
						further insight into this topic, check out their work.
					</i>
				</p>
			</div>
		</BlogStyle>
	);
}
