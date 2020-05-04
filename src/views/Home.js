import React from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
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
			<MetaTags>
				<meta property="og:title" content="Sav Sidorov" />
				<meta name="og:description" content="Personal Website" />
				<meta property="og:image" content={triple} />
				<meta property="og:url" content="http://savsidorov.com/" />
				<meta name="twitter:title" content="Sav Sidorov" />
				<meta name="twitter:description" content="Personal Website" />
				<meta name="twitter:image" content={triple} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<div className="triple-container">
				<img src={triple} className="triple" alt="triple" />
			</div>
		</Styles>
	);
}
