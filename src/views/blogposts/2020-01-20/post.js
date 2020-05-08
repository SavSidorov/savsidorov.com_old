import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import Share from "../../../components/Share";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import preview from "./preview.png";
import powerLawImg from "./powerlaw.png";
import paperImg from "./paper.png";
import watchmenImg from "./watchmen.png";

export default function Post6() {
	return (
		<div>
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
					<img src={preview} className="image" alt="jcurve" />
					<p>
						<i>
							Note: the purpose of this piece is to give a general overview of the problem and present a
							potential solution. I deliberately chose to not go too much into the weeds and kept it
							pretty high level. Please see the linked paper for more details.
						</i>
					</p>
					<p>...</p>
					<p>
						There’s a problem in online ratings systems. As you give a user more options (increase the
						resolution of the rating, if you will), you lower its accuracy — how closely the aggregate of
						ratings resembles the opinion of the crowd. A big contributor to this problem is something
						called the J-curve distribution.
					</p>
					<p>
						There was a paper published in 2007 titled{" "}
						<i>
							‘Why do Online Product Reviews have a J-shaped Distribution? Overcoming Biases in Online
							Word-of-Mouth Communication’
						</i>{" "}
						by Nan Hu, Paul A. Pavlou and Jennifer Zhang.{" "}
						<a href="https://www.researchgate.net/publication/228604596_Why_Do_Online_Product_Reviews_Have_a_J-Shaped_Distribution_Overcoming_Biases_in_Online_Word-of-Mouth_Communication">
							Linked here
						</a>
						. They looked at how the J-curve arises as a result of biases on the consumer/user end of
						things. But before we look into that… you might be wondering why we should care about rating
						systems at all?
					</p>
					<p>
						Rating systems play an important part in the online world. Anytime you want to gauge what the
						public thinks, ratings — like pollboxes — are useful. As mentioned before, there exists a
						tradeoff in rating systems between nuance and accuracy. The more rating options you give users,
						the more range in opinion you get. In other words, you increase the resolution of your ratings,
						and in theory, the nuance of the feedback you receive. However in real life, when it comes to
						accuracy of, say, a five-star rating system, things get a little whacky. This is in part because
						the ratings end up skewed towards the extremes in a bimodal J-curve distribution. On the other
						hand, something like a simple thumbs up / thumbs down system has relatively lower resolution,
						but more accurate opinions because the J-curve has less of an impact. So… what about this
						J-curve? That’s where this paper comes in.
					</p>
					<p>
						In a nutshell, Hu et al. looked at many different product reviews from Amazon.com — which has a
						5 star rating system — and came across the same distribution in nearly all cases: the ratings
						distribution looks like a capital J. In other words, there is a small spike in extremely
						negative reviews (★), almost nothing in the middle (★★, ★★★ and ★★★★) and a large spike in
						positive reviews (★★★★★). This is counter-intuitive, and not ideal — given the option of 5
						ratings, one would expect a range of opinions on a given item that don’t cluster to the extremes
						— something like a classic bell curve. I’m assuming that these systems are built with normal
						distributions in mind because otherwise, why not just have a yay-nay rating system? Don’t get me
						wrong, J-curves still give useful data, just not in the way they’re intended to. The ratings end
						up being skewed to the extremes, giving an inaccurate picture of what the “general audience”
						thinks of something.
					</p>
					<p>
						This is true for a range of other websites — it’s not something that’s exclusive to Amazon. For
						example, here’s the ratings distribution for season 1 of the new Watchmen show on IMDB, at the
						time of writing:
					</p>
					<img src={watchmenImg} className="image" alt="watchmen-jcurve" />
					<p>
						In the paper, the researchers went out to gather experimental results from a ‘fake’ Amazon-style
						website that they created themselves. The graph that the experimental data produced far more
						resembled the bell curve than the bimodal J distribution that arises from voluntary results on
						Amazon.com (figure from the paper):
					</p>
					<img src={paperImg} className="image" alt="paper-distribution" />
					<p>
						Hu et al. point to two possible causes for the appearance of the J-curve, and hypothesize that
						the results get skewed as a result. Quote (formatting is mine):
					</p>
					<p className="quote">
						“…since virtually all online product reviews have an asymmetric bimodal, positively-skewed
						(J-shaped) distribution due to two self-selection biases (<b>purchasing</b> and{" "}
						<b>under-reporting</b>), the mean of the online product reviews is shown to be a biased
						estimator of product quality. Under-reporting bias gives rise to a bimodal (U-shaped)
						distribution, and purchasing bias gives rise to an asymmetric, positively-skewed (J-shaped)
						distribution.”
					</p>
					<p>
						<b>Under-reporting bias</b> refers to the notion that individuals who feel strongly about a
						product or service are more likely to leave a review, whether positive or negative. Hence a
						U-shape.
					</p>
					<p>
						<b>Purchasing bias</b> refers to the notion that people who purchase the product are also more
						likely to leave reviews. And given that they’ve purchased the product, it’s likely that it’s
						something they already like, or that they end up experiencing some version of the sunk cost
						fallacy — “I’ve put money into this product / have frequently used this service, therefore it’s
						worth defending”. That’s why the positive reviews outweigh the negative ones. J-curve.
					</p>
					<div>
						<h4>A Solution?</h4>
					</div>
					<p>
						To the extent that the J-curved distribution of ratings is a biased representation of the
						opinion of the crowd, we have a problem. While there’s no way to completely get rid of
						under-reporting and purchasing biases (that I can see), I might have a solution to the bigger
						problem in play here. It’s a solution that aims to slightly modify the incentives for users to
						rate items.
					</p>
					<p>
						Of course, there’s no way to know how effective of a solution it is until tried in the wild.
						But, basically, it’s a modified thumbs-up system with four options:
					</p>
					<div className="color-box">
						<p>• Double thumbs up (↑↑)</p>
						<p>• Thumbs up (↑)</p>
						<p>• Thumbs down (↓)</p>
						<p>• Double thumbs down (↓↓)</p>
					</div>
					<p>
						It works just like a regular thumbs up/down rating system that you’re used to, say for example,
						on YouTube but allows for more nuance while (hopefully) avoiding J-curve results. The catch is
						that there’s a bias built into my system that favors the less extreme ratings — ↑ and ↓.
					</p>
					<p>
						If you’re rating a product, you’d be presented with only two buttons — ↑ and ↓. To get to the
						more extreme ratings — ↑↑ and ↓↓ — you have to click the respective buttons again. Say, for
						example, you have to click ↑ twice to get to ↑↑. The basic principle is: if you want a more
						extreme rating, you have to put in more work. The idea is to set up a filtering mechanism to
						separate someone who is simply impulsive from the “true believers”. The more work you have to
						do, the more you have to prove that you truly want to give an extreme rating. Now, you might say
						that asking a user to click a button twice is just barely more work than clicking it once. True.
						However, my hunch is, given a large population of users, a minor incentive like this will prompt{" "}
						<i>enough</i> users to refrain from the extreme options so as to straighten out the
						distribution. Of course, there’s always the question of “how much work is enough work?” that
						should be considered. For example, should the users also be required to write a justification
						for their chosen rating? How short/long should the word requirement be? Maybe there could be a
						timeout between button presses, that would encourage you to pause and consider before rating
						something ↑↑ or ↓↓. Of course, if you make the requirements for rating even a little more
						extreme, you will see severe user dropoff, according to the power law. So, it comes down to a
						careful balancing act.
					</p>
					<img src={powerLawImg} className="image" alt="power-law" />
					<p>
						Do you agree with my assessment? Please get in touch and let me know what you think! What am I
						missing here?
					</p>
					<p>...</p>
					<p>
						<b>Additional thought:</b> The solution I presented here deals only with people already rating a
						product or service. It does not directly account for the two biases — purchasing and
						under-reporting — but rather provides incentives for the subset of people rating to (hopefully)
						provide more thoughtful ratings. You could also tackle this problem from the other end — somehow
						get the silent majority to stop being silent. Just like there have been many ideas floated on
						how to increase voter turnout, you could apply the same techniques and incentives to increase
						“reviewer turnout” — things like special badges and other rewards, or have certain app features
						become available only after a user has submitted n number of reviews.
					</p>
				</div>
			</BlogStyle>
			<Share />
		</div>
	);
}
