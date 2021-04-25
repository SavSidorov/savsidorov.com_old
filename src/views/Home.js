import React from "react";
import styled from "styled-components";
import triple from "../assets/triple.png";

const Styles = styled.div`
	.triple-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.triple {
		width: 75vw;
		height: auto;
	}
`;

export default function Home() {
	return (
		<Styles>
			<div className="triple-container">
				<img src={triple} className="triple" alt="triple" />
			</div>
		</Styles>
	);
}
