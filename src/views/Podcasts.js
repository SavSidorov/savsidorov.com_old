import React from "react";
import styled from "styled-components";
import sqImage from "../assets/s_sq_pod.png"
import ssImage from "../assets/ss_pod.png"

const Styles = styled.div`
	.Podcasts > div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 375px));
		grid-gap: 3em;

		justify-content: center;
	}

	img {
		width: 375px;
		height: 375px;

		box-shadow: 2px 2px 10px 4px #888888;

		overflow: hidden;

		&:hover {
			box-shadow: 2px 2px 10px 2px #888888;
		}
	}
`;

export default function Podcasts() {
	return (
		<Styles>
			<div className="Podcasts">
				<title>Podcasts</title>
				<div>
					<a href="https://anchor.fm/sav-sidorov">
						<img src={ssImage} alt="ss-pic" />
					</a>
					<a href="https://anchor.fm/the-s-2-podcast">
						<img src={sqImage} alt="sq-pic" />
					</a>
				</div>
			</div>
		</Styles>
	);
}
