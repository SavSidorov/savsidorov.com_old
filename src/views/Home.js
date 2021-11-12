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
		margin-left: 175px;
		margin-right: 175px;
		display: grid;
		grid-row-gap: 10px;
		grid-column-gap: 10px;

		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 375fr 250fr 370fr;

		justify-items: center;
	}

	.learning {
		grid-column: 1 / 4;
	}

	.pod {
		grid-column: 4 / 7;
	}

	.flamebot{
		grid-column: 1 / 3;
	}

	.bytecycler{
		grid-column: 3 / 5;
	}

	.music{
		grid-column: 5 / 7;
	}

	.apex {
		grid-column: 1 / 7;
	}

	.subscribe{
		display:flex;
		justify-content: center;
		align-self: center;
		margin-top: 10px;
	}

	img {
		box-shadow: 1px 1px 10px 0px #888888;

		&:hover {
			box-shadow: 0px 0px 10px -3px #888888;
		}
	}

	.img1 {
		height: 375px;
		width: auto;
	}

	.img2 {
		height: 250px;
		width: auto;
	}

	.img3 {
		height: 370px;
		width: auto;
	}

	@media only screen and (max-width: 1200px) {
		.img1 {
			height: 281px;
			width: auto;
		}
	
		.img2 {
			height: 188px;
			width: auto;
		}
	
		.img3 {
			height: 278px;
			width: auto;
		}
	}

	@media only screen and (max-width: 995px) {
		.tiles{
			margin-left: 150px;
			margin-right: 150px;
		}

		.img1 {
			height: 188px;
			width: auto;
		}
	
		.img2 {
			height: 125px;
			width: auto;
		}
	
		.img3 {
			height: 185px;
			width: auto;
		}
	}

	@media only screen and (max-width: 768px) {
		.tiles{
			margin-left: 75px;
			margin-right: 75px;
		}
	}

	@media only screen and (max-width: 540px) {
		.tiles{
			margin-left: 60px;
			margin-right: 60px;
		}
	}

	@media only screen and (max-width: 500px) {
		.tiles{
			margin-left: 35px;
			margin-right: 35px;
		}
	}

	@media only screen and (max-width: 440px) {
		.tiles{
			margin-left: 10px;
			margin-right: 10px;
		}
	}

	@media only screen and (max-width: 420px) {
		.tiles{
			margin-left: 0px;
			margin-right: 0px;
		}
	}
`;

export default function Home() {
	//console.log("Window width: " + window.innerWidth + "px") //Useful for CSS @media

	return (
		<Styles>
			<div className="tiles">
				<a href="https://savsidorov.substack.com/" className="learning"><img src={learning} alt="learning" className="img1"/></a>
				<a href="https://anchor.fm/sav-sidorov" className="pod"><img src={podcast} alt="podcast" className="img1"/></a>
				<Link to="projects/flamebot" className="flamebot"><img src={flamebot} alt="flamebot" className="img2"/></Link>
				<Link to="projects/bytecycler" className="bytecycler"><img src={bytecycler} alt="bytecycler" className="img2"/></Link>
				
				<Link to="projects/musicvideos" className="music"><img src={dwaigne} alt="dwaigne" className="img2"/></Link>
				<Link to="projects/toggle" className="apex"><img src={apex} alt="apex" className="img3"/></Link>
			</div>
			<div className="subscribe">
				<iframe src="https://savsidorov.substack.com/embed" frameBorder="0" scrolling="no" title="subscribe"></iframe>
			</div> 	
		</Styles>
	);
}