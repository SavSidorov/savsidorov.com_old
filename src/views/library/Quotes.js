import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

const Styles = styled.div`
.quotes > p {
  text-align: right;
  margin-top: 15px;
  margin-bottom: 50px;
}

.quotes{
  font-size: 20px;
}

.quote {
  display: flex;
}

.quote > div {
  width: 4px;
  min-width: 4px;
  height: auto;
  background-color: var(--ss-primary);

  margin-right: 10px;
}
`;

export default function Quotes() {
	return (
		<Styles>
      <Navigation/>
			<div className="quotes">
        <div><p>A list of quotes that I've taken to heart.</p></div>
        <br/>
				<div className="quote">
          <div />
          <p>
            “For I have a single definition of success: you look in the mirror every evening, and wonder if you disappoint the person you were at 18, right before the age when people start getting corrupted by life. Let him or her be the only judge; not your reputation, not your wealth, not your standing in the community, not the decorations on your lapel. If you do not feel ashamed, you are successful. All other definitions of success are modern constructions; fragile modern constructions.”
				  </p>
        </div>
        <p>
          — Nassim Nicholas Taleb, <i>Commencement Address, American University in Beirut</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “Everyone is born a genius, but the process of living de-geniuses them.”
          </p>
        </div>
        <p>
          — R. Buckminster Fuller
        </p>

        <div className="quote">
          <div />
          <p>
            “To my writing classes I used later to open by saying that anybody who could talk could also write. Having cheered them up with this easy-to-grasp ladder, I then replaced it with a huge and loathsome snake: ‘How many people in this class, would you say, can talk? I mean really talk?’ That had its duly woeful effect. I told them to read every composition aloud, preferably to a trusted friend. The rules are much the same: Avoid stock expressions (like the plague, as William Safire used to say) and repetitions. Don’t say that as a boy your grandmother used to read to you, unless at that stage of her life she really was a boy, in which case you have probably thrown away a better intro. If something is worth hearing or listening to, it’s very probably worth reading. So, this above all: Find your own voice.” 
          </p>
        </div>
        <p>
          — Christopher Hitchens, <i>Mortality</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “Maybe there aren't any such things as good friends or bad friends — maybe there are just friends, people who stand by you when you're hurt and who help you feel not so lonely. Maybe they're always worth being scared for, and hoping for, and living for. Maybe worth dying for too, if that's what has to be. No good friends. No bad friends. Only people you want, need to be with; people who build their houses in your heart.”
          </p>
        </div>
        <p>
          — Stephen King, <i>IT</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That’s a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you’ll never be the same again.”
          </p>
        </div>
        <p>
          — Steve Jobs
        </p>

        <div className="quote">
          <div />
          <p>
            “Remembering that I’ll be dead soon is the most important tool I’ve ever encountered to help me make the big choices in life. Because almost everything — all external expectations, all pride, all fear of embarrassment or failure — these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.”
          </p>
        </div>
        <p>
          — Steve Jobs
        </p>

        <div className="quote">
          <div />
          <p>
            “Competition is for losers.”
          </p>
        </div>
        <p>
          — Peter Thiel
        </p>

        <div className="quote">
          <div />
          <p>
            “Any developer who bitches about, 'Oh, our publisher cut off our money,' or, 'The publisher made us ship the game early,' doesn't get it. That's the interesting problem you have to solve as a developer. If you don't, well, you'll be perpetually screwed.”
          </p>
        </div>
        <p>
          — Gabe Newell
        </p>

        <div className="quote">
          <div />
          <p>
            “He not busy being born is busy dying!”
          </p>
        </div>
        <p>
          — Bob Dylan
        </p>

        <div className="quote">
          <div />
          <p>
            “Limits, like fears, are often an illusion.”
          </p>
        </div>
        <p>
          — Michael Jordan
        </p>

        <div className="quote">
          <div />
          <p>
            “Gentlemen, we are going to relentlessly chase perfection, knowing full well we will not catch it, because nothing is perfect. But we are going to relentlessly chase it, because in the process we will catch excellence. I am not remotely interested in just being good.”
          </p>
        </div>
        <p>
          — Vince Lombardi
        </p>

        <div className="quote">
          <div />
          <p>
            “Enthusiasm is one of the most powerful engines of success. When you do a thing, do it with all your might. Put your whole soul into it. Stamp it with your own personality. Be active, be energetic, be enthusiastic and faithful and you will accomplish your object. Nothing great was ever achieved without enthusiasm.”
          </p>
        </div>
        <p>
          — R.W. Emerson
        </p>

        <div className="quote">
          <div />
          <p>
            “What lies before us and what lies behind us are small matters compared to what lies within us. And when we bring what is within out into the world, miracles happen.”
          </p>
        </div>
        <p>
          — R.W. Emerson
        </p>

        <div className="quote">
          <div />
          <p>
            “The interesting thing about stoicism is that it plays on dignity and personal aesthetics, which are part of our genes. Start stressing personal elegance at your next misfortune. Exhibit sapere vivere (“know how to live”) in all circumstances. Dress at your best on your execution day (shave carefully); try to leave a good impression on the death squad by standing erect and proud. Try not to play victim when diagnosed with cancer (hide it from others and only share the information with the doctor — it will avert the platitudes and nobody will treat you like a victim worthy of their pity; in addition, the dignified attitude will make both defeat and victory feel equally heroic).”
          </p>
        </div>
        <p>
          — Nassim Nicholas Taleb, <i>Fooled By Randomness</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “The best way to predict your future is to create it.”
          </p>
        </div>
        <p>
          — Abraham Lincoln
        </p>

        <div className="quote">
          <div />
          <p>
            "Live in the future, build what’s missing.”
          </p>
        </div>
        <p>
          — Paul Graham
        </p>

        <div className="quote">
          <div />
          <p>
            “Technology is at its best when it is invisible.”
          </p>
        </div>
        <p>
          — Nassim Nicholas Taleb, <i>The Bed of Procrustes</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “If you want to teach people a new way of thinking, don't bother trying to teach them. Instead, give them a tool, the use of which will lead to new ways of thinking.”
          </p>
        </div>
        <p>
          — R. Buckminster Fuller
        </p>

        <div className="quote">
          <div />
          <p>
            “When I am working on a problem, I never think about beauty... but when I have finished, if the solution is not beautiful, I know it is wrong.”
          </p>
        </div>
        <p>
          — R. Buckminster Fuller
        </p>

        <div className="quote">
          <div />
          <p>
            “Your twenties are always an apprenticeship, but you don't always know what for.”
          </p>
        </div>
        <p>
          — Jan Houtema
        </p>

        <div className="quote">
          <div />
          <p>
            “Reasonable people adapt themselves to the world. Unreasonable people attempt to adapt the world to themselves. All progress, therefore, depends on unreasonable people.”
          </p>
        </div>
        <p>
          — George Bernard Shaw
        </p>

        <div className="quote">
          <div />
          <p>
            “What you feel in the presence of a thing you admire is just one word—'Yes.' The affirmation, the acceptance, the sign of admittance. And that 'Yes' is more than an answer to one thing, it's a kind of 'Amen' to life, to the earth that holds this thing, to the thought that created it, to yourself for being able to see it. But the ability to say 'Yes' or 'No' is the essence of all ownership. It's your ownership of your own ego. Your soul, if you wish. Your soul has a single basic function—the act of valuing. 'Yes' or 'No,' 'I wish' or 'I do not wish.' You can't say 'Yes' without saying 'I.' There's no affirmation without the one who affirms. In this sense, everything to which you grant your love is yours.”
          </p>
        </div>
        <p>
          — Ayn Rand, <i>The Fountainhead</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “I don’t know how to hit a ball any different than I hit it. A director has one skill — your point of view. That’s all you have. If you’re trying to imitate another way of making a movie, then you’re on a slippery slope.”
          </p>
        </div>
        <p>
          — Zack Snyder
        </p>

        <div className="quote">
          <div />
          <p>
            “The Official Idealism of every age is usually the cover story of its thefts.”
          </p>
        </div>
        <p>
          — Eric Weinstein
        </p>

        <div className="quote">
          <div />
          <p>
            “The invisible world is first detected by the visible world’s failure to close.”
          </p>
        </div>
        <p>
          — Eric Weinstein
        </p>

        <div className="quote">
          <div />
          <p>
            “The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. He to whom the emotion is a stranger, who can no longer pause to wonder and stand wrapped in awe, is as good as dead —his eyes are closed. The insight into the mystery of life, coupled though it be with fear, has also given rise to religion. To know what is impenetrable to us really exists, manifesting itself as the highest wisdom and the most radiant beauty, which our dull faculties can comprehend only in their most primitive forms—this knowledge, this feeling is at the center of true religiousness.”
          </p>
        </div>
        <p>
          — Albert Einstein
        </p>

        <div className="quote">
          <div />
          <p>
            “Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties — all these chase away loneliness by making me forget my name's Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion — these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated.”
          </p>
        </div>
        <p>
          — David Foster Wallace
        </p>

        <div className="quote">
          <div />
          <p>
            “What I had to do was just do a lot of things. Make many things. Make many types of things. Study many things. Experience many things. And use all of these experiences as ways of analyzing myself. Taking all of these experiences and saying: "does this resonate with me?", "does this repel me?", "do I not care?" - Building up this corpus of experiences that I felt very strongly about - for some reason - and trying to figure out why. What is the secret ingredient in all of these experiences to which I'm reacting so strongly?”
          </p>
        </div>
        <p>
          — Bret Victor, <i>Inventing on Principle</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “There are many ways to live your life. That's maybe the most important thing that you can realize in your life - that every aspect of your life is a choice. But there are default choices. You can choose to sleepwalk through life and accept the path that's been laid out for you. You can choose to accept the world as it is. But you don't have to. If there's something in the world you feel is wrong, and you have a vision for what a better world could be, you can find your guiding principle, and fight for a cause.”
          </p>
        </div>
        <p>
          — Bret Victor, <i>Inventing on Principle</i>
        </p>

        <div className="quote">
          <div />
          <p>
            “Ulula cum lupis cum quibus esse cupis.”
          </p>
        </div>
        <p>
          — Proverb
        </p>

			</div>
		</Styles>
	);
}
