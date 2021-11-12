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

const names = [
	"Alan Kay",
	"Alan Turing",
	"Anderson .Paak",
	"Andy Matuschak",
	"Antoine de Saint-Exupéry",
	"Abraham H. Maslow",
	"Ayn Rand",
	"Alex Ross",
	"Alan Moore",
	"Alex Rodrigues",
	"Bob Dylan",
	"Buckminster Fuller",
	"Ben Horowitz",
	"Benoit Mandelbrot",
	"Bret Victor",
	"Boyan Slat",
	"Balaji S. Srinivasan",
	"Charles Manson",
	"Christopher Hitchens",
	"Christopher Alexander",
	"Christopher Nolan",
	"Curtis Yarvin",
	"Daft Punk",
	"D. A. Wallach",
	"Daniel Kahneman",
	"Doug Hofstadter",
	"Dr. Dre",
	"Dave Chappelle",
	"Elon Musk",
	"Frank Ocean",
	"Francois Chollet",
	"Fyodor Dostoevsky",
	"Gabe Newell",
	"Hideo Kojima",
	"James Carse",
	"Johnny Cash",
	"Joscha Bach",
	"TotalBiscuit",
	"Kanye West",
	"Kevin Spacey",
	"Ken Levine",
	"Karthik Kanagasabapathy",
	"Leonard Cohen",
	"Leonard Susskind",
	"Mike Solana",
	"Michael Nielsen",
	"Mark Twain",
	"Nassim Nicholas Taleb",
	"Nick Cave",
	"Peter Thiel",
	"Richard Feynman",
	"Roger Penrose",
	"W. Ross Ashby",
	"René Girard",
	"Steve Jobs",
	"Stephen Wolfram",
	"Scott Alexander",
	"Tristan Needham",
	"Tim Urban",
	"Vilfredo Pareto",
	"Zack Snyder",
	"Tim Soret",
	"Gordon Ramsay",
	"Paolo Sorrentino",
	"William Bolitho",
	"James Burnham", 
	"Ernst Jünger",
	"Walter Lippmann",
	"Grant Sanderson",
	"Ben Eater", 
	"Brian Douglas",
	"Drake Anthony",
	"Marques Brownlee",
	"Dieter Rams",
	"Maggie Appleton",
	"Matt Henderson"
]

export default function People() {
	const sortedNames = names.sort()
	const people = sortedNames.map(name => <p className="person">{name}</p>)
	return (
		<Styles>
			<Navigation />
			<p>A list of people who I find interesting — those who influenced my worldview in one way or another.</p>
			<br />
			<div className="people">
				{people}
			</div>
		</Styles>
	);
}
