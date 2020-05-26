import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import Share from "../../../components/Share";
import metadata from "./metadata.json";
import maximum from "./preview.png";

export default function Post2() {
	return (
		<div>
			<BlogStyle>
				<h2>{metadata.title}</h2>
				<h3 className="metadata">
					{metadata.date} • {metadata.readingtime}
				</h3>
				<div className="post">
					<p>
						We’ve all faced this dichotomy before — relying on others to fix your problems vs fixing them yourself.
						Looking outward at the world’s problems vs looking inwards at your own. Victimhood vs self-sufficiency and
						synergy. As you may have guessed, I’m of the opinion that victimhood is not an optimal life strategy. I want
						to briefly explore this here, and hopefully provide some useful insights. I’ll let you to be the judge of
						that though, it’s not like I’m an expert!
					</p>
					<p>
						That being said, I have noticed that both some individuals in my personal life, and groups in the broader
						culture around me, tend to use victimhood behavior to get through life. By victimhood behavior, I mean that
						tendency to expect others to fix your problems without returning the favor, blaming the world around you
						instead of looking inward… that kind of thing. It seems to me that this phenomenon is more or less identical
						across the two different scales, just that personal justification for the behavior is traded for historical
						justification. Note that I’m not saying that if there truly are external problems that they shouldn’t be
						fixed, just that we ought to look to ourselves first before tackling the externals. Given this description
						of victimhood, it’s self-explanatory what I mean by it’s opposite: self-actualization. I would add, however,
						that there also needs to be synergy with the community around you in order for you to self-actualize —
						self-sufficiency is not enough on it’s own.
					</p>
					<p>
						So then why is victimhood an inferior, and ultimately counterproductive strategy? From what I can tell it
						comes down to two main factors. It’s both draining on the people around you (because they’re getting a “bad
						deal”, so to speak, by having to constantly help and get nothing in return), and it ultimately prevents you
						from reaching your full potential. It’s like being stuck at a <i>local maximum</i> — where you get benefits
						and have to give up those benefits in order to leave, whereas self-sufficiency is the global maximum that
						can be reached. The <i>global maximum</i> entails objectively greater benefits and allows you to genuinely
						self-actualize, but it’s a painful transition.
					</p>
					<img src={maximum} className="image" alt="local-global-maximum" />
					<p>
						A couple of things to note about this picture. You may not necessarily realize that a global maximum is out
						there. You might not be able to see it from where you are. You may not even be aware that you are behaving
						in an unsatisfactory way at all. Lastly, the work that has to be done to get out of your habit has to be
						done by yourself. While I believe that we have a duty to help others reach their full potential, this cannot
						be done without the person himself willing to take decisive steps in that direction. The decision has to
						come from within.
					</p>
					<p>
						Regardless, this victimhood / synergy duality is something I feel we should put more conscious thought
						towards, as it plays a significant role in our lives. We can’t reach our full potential and maximal synergy
						with those around us if we blame our problems on external factors and see it as others’ responsibility to
						fix them — however justified that blame may be. If you start with the assumption that you have to solve your
						own problems, you’re not leaving yourself dependent on factors outside of your control — like the help of
						others. You become much more robust when you minimize the role of chance in your success or failure (similar
						to a <a href="https://www.simbotics.org/resources/robot-design/strategic-design">chokehold strategy</a>
						). By putting in the work to self-actualize, you can make a more satisfying, productive and harmonious life
						a reality, benefiting not only yourself but also those around you. You have no idea what the limits on your
						success can be — most limits are self-imposed.
					</p>
					<p>
						Let me leave you with some words that nicely encapsulate what this is all about, from Nassim Taleb’s first
						volume of The Incerto —{" "}
						<a href="https://www.amazon.ca/Fooled-Randomness-Hidden-Chance-Markets/dp/1400067936/ref=sr_1_6?s=books&ie=UTF8&qid=1547763336&sr=1-6">
							Fooled By Randomness
						</a>
						:
					</p>
					<p className="quote">
						“The interesting thing about stoicism is that it plays on dignity and personal aesthetics, which are part of
						our genes. Start stressing personal elegance at your next misfortune. Exhibit sapere vivere (“know how to
						live”) in all circumstances. Dress at your best on your execution day (shave carefully); try to leave a good
						impression on the death squad by standing erect and proud. Try not to play victim when diagnosed with cancer
						(hide it from others and only share the information with the doctor — it will avert the platitudes and
						nobody will treat you like a victim worthy of their pity; in addition, the dignified attitude will make both
						defeat and victory feel equally heroic).”
					</p>
					<p>
						Not that emotions are inherently bad — just that perhaps it’s worth avoiding negativity that overburdens you
						and those around you. Don’t take life too seriously to the point of letting it get you down, don’t be afraid
						to experiment, don’t be afraid to stress personal aesthetics — all the world’s a stage, after all. Go out
						there and strive for excellence.
					</p>
					<p>...</p>
					<p>
						<b>Update:</b> Since the page about chokehold strategies is no longer available on the Simbotics website,
						I’ll repost it here. For context — in the{" "}
						<a href="https://www.firstinspires.org/robotics/frc">FIRST Robotics Competition</a>, teams of high school
						students design robots to compete with each other at national and international events. FIRST changes the
						game rules every year.
					</p>
					<p className="quote">
						“<b>The Chokehold Strategy:</b> A strategy which, when executed, guarantees victory, independent of any
						action by your opponents. FIRST tries to design games with no reasonable chokehold strategy. If one exists,
						it will be very difficult to perform. See{" "}
						<a href="https://www.youtube.com/watch?v=2eKvva_ZCHw">Team 71, Beatty & Hammond, 2002</a>.”
					</p>
				</div>
			</BlogStyle>
			<Share />
		</div>
	);
}
