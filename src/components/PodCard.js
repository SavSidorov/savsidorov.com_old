import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.PodCard {
		width: 50vw;
		max-height: 500px;
		max-width: 500px;

		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
		text-decoration: none;
		color: black;

		font-size: 20px;
		padding: 15px;
		margin-top: 30px;
		margin-bottom: 50px;

		box-shadow: 2px 2px 10px 4px #888888;

		overflow: hidden;

		&:hover {
			box-shadow: 2px 2px 10px 2px #888888;
		}
	}

	.PodCard > img {
		width: 40vw;
		max-width: 400px;
		height: auto;
		margin-bottom: 1.5vw;
	}

	.PodCard > div {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
	}

	}
`;

export default function PodCard({ image, title, url }) {
	return (
		<Styles>
			<a href={url} className="PodCard">
				<img src={image} alt="blog-pic" />
				<div>
					<h4>{title}</h4>
				</div>
			</a>
		</Styles>
	);
}
