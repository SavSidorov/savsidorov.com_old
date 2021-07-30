import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import learning from "../assets/learning_in_public.png"
import podcast from "../assets/ss_pod_old3.png"
import bytecycler from "../assets/bytecycler.png"
import dwaigne from "../assets/dwaigne.JPG"
import flamebot from "../assets/flamebot.png"
import apex from "../assets/apex_colored.jpg";

const Styles = styled.div`
	.tiles{
		display: grid;
		grid-row-gap: 10px;
		grid-column-gap: 10px;

		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;

		
		justify-items: center;
	}

	.tiles > * {
		background-color: teal;
	}

	img {
		height: 250px;
		width: auto;
	}

	.learning {
		grid-column: 1 / 3;
	}

	.apex {
		grid-column: 1 / 4;
	}
`;

export default function Home() {
	return (
		<Styles>
			<div className="tiles">
				<a href="https://savsidorov.substack.com/" className="learning"><img src={learning} alt="learning"/></a>
				<a href="https://anchor.fm/sav-sidorov"><img src={podcast} alt="podcast"/></a>
				<Link to="projects/musicvideos"><img src={dwaigne} alt="dwaigne"/></Link>
				<Link to="projects/bytecycler"><img src={bytecycler} alt="bytecycler"/></Link>
				<Link to="projects/flamebot"><img src={flamebot} alt="flamebot"/></Link>
				<Link to="projects/toggle" className="apex"><img src={apex} alt="apex"/></Link>
			</div>
		</Styles>
	);
}

//TODO: figure out proper placement
//TODO: make images B&W