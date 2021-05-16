import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

const Styles = styled.div`
p{
	font-size: 20px;
}

.person{
	width: auto;
	margin-right: 25px;
	color: gray;

	&:hover {
    color: black;
  } 
}

.people {
	display: flex;  
  flex-wrap: wrap;
}
`;

const names = ["Alexey Guzey", 
								"Alan Kay", 
								"Alan Turing",
								"Anderson .Paak", 
								"Andy Matuschak", 
								"Azlen Elza", 
								"Antoine de Saint-Exupéry", 
								"Abraham H. Maslow", 
								"Albert Einstein", 
								"Ayn Rand", 
								"Alexander Bogomolny", 
								"Alex Ross", 
								"Alan Moore", 
								"Alexander Pushkin", 
								"Aaron Schwartz", 
								"Amos Tversky", 
								"Alex Rodrigues",
								"Bob Dylan",
								"Buckminster Fuller",
								"Ben Horowitz",
								"Benoit Mandelbrot",
								"Bret Victor",
								"Bill Burr",
								"Boyan Slat",
								"Bret Easton Ellis",
								"Balaji S. Srinivasan",
								"Charles Manson",
								"Charles Darwin",
								"Christopher Hitchens",
								"Christopher Alexander",
								"Christopher Nolan",
								"Curtis Yarvin",
								"Conor White-Sullivan",
								"Carl Friedrich Gauss",
								"Carl Jung",
								"Daft Punk",
								"D. A. Wallach",
								"Daniel Kahneman",
								"Daniel Schmachtenberger",
								"David Bowie",
								"Douglas Adams",
								"Douglas Engelbart",
								"Doug Hofstadter",
								"Douglas Murray",
								"Donald Hoffman",
								"Dr. Dre",
								"David Lynch",
								"Dmitri Mendeleev",
								"David Foster Wallace",
								"Dave Chappelle",
								"Damon Albarn",
								"Dick Gregory",
								"Eric Weinstein",
								"Elon Musk",
								"Edward Witten",
								"Erwin Schrödinger",
								"Eliezer Yudkowsky",
								"Frank Ocean",
								"Francois Chollet",
								"Franklin D. Roosevelt",
								"Fyodor Dostoevsky",
								"Friedrich Nietzsche",
								"Frank Miller",
								"Frank Sinatra",
								"Garry Schyman",
								"Gary Oldman",
								"Gabe Newell",
								"George Orwell",
								"Hideo Kojima",
								"Hans Zimmer",
								"Howard Hughes",
								"Isaac Newton",
								"Isaac Asimov",
								"James Carse",
								"James D. Watson",
								"Jimmy Iovine",
								"Joe Norman",
								"Johnny Cash",
								"Joscha Bach",
								"TotalBiscuit",
								"Kanye West",
								"Kid Cudi",
								"Kendrick Lamar",
								"Kevin Spacey",
								"Ken Levine",
								"Karthik Kanagasabapathy",
								"Lewis Carroll",
								"Leonard Cohen",
								"Leonard Susskind",
								"Ludwig Wittgenstein",
								"Michael Solana",
								"Michael Jackson",
								"M. C. Escher",
								"Michael Giacchino",
								"Max Tegmark",
								"Michael Nielsen",
								"Mark Twain",
								"Matthew McConaughey",
								"Martin Gardner",
								"Marc Andreessen",
								"Marvin Minsky",
								"Nassim Nicholas Taleb",
								"Nick Cammarata",
								"Nick Cave",
								"Nikolai Lobachevsky",
								"Niccolò Machiavelli",
								"Neal Stephenson",
								"Oleg Cricket",
								"Paul Graham",
								"Paul Dini",
								"Peter Thiel",
								"Pusha T",
								"Paul Dirac",
								"Quentin Tarantino",
								"Quincy Jones",
								"Richard Feynman",
								"Roger Penrose",
								"W. Ross Ashby",
								"René Girard",
								"Ryan Karazija",
								"Ryan Beatty",
								"Robert Sapolsky",
								"Sam Altman",
								"Steve Jobs",
								"Stephen King",
								"Stephen Wolfram",
								"Shel Silverstein",
								"Sabine Hossenfelder",
								"Sam Lake",
								"Stephon Alexander",
								"Scott Alexander",
								"Slavoj Žižek",
								"Tristan Needham",
								"Ted Kaczynski",
								"Ted Nelson",
								"Tyler, the Creator",
								"The Weeknd",
								"Thomas Cole",
								"Tim Urban",
								"Tim O'Brien",
								"Timothée Chalamet",
								"Tom Waits",
								"Tom Wolfe",
								"Umberto Eco",
								"Visakan Veerasamy",
								"Venkatesh Rao",
								"Vince Gilligan",
								"Vilfredo Pareto",
								"Valentino Braitenberg",
								"Will.i.am",
								"William Shakespeare",
								"Werner Herzog",
								"Walt Disney",
								"Yuri Bezmenov",
								"Zack Snyder",
								"Zev Weinstein",
								"Tim Soret",
								"Phil Fish", 
								"Yelawolf", 
								"Killer Mike",
								"Tupac Shakur", 
								"Gordon Ramsay",
								"Aleksandr Solzhenitsyn"
							]

export default function People() {
	const sortedNames = names.sort()
	const people = sortedNames.map(name => <b><p className="person">{name}</p></b>)
	return (
		<Styles>
      <Navigation/>
			<p>A list of (public) individuals who interest me — those whom I've learned from and been inspired by.</p>
			<br/>
			<div className="people">
				{people}
			</div>
		</Styles>
	);
}
