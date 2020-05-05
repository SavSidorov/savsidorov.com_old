import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
	.BlogCard {
		height: 50vw;
		width: 50vw;
		max-height: 500px;
		max-width: 500px;

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

	.BlogCard > a {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
		justify-content: space-evenly;

		text-decoration: none;
		color: black;
	}

	@media (min-width: 700px), (min-aspect-ratio: 1/1) {
		.BlogCard > a > img {
			width: 35vw;
			height: auto;
		}
	}

	@media (max-width: 700px), (max-aspect-ratio: 1/1) {
		.BlogCard > a > img {
			width: 350px;
			height: auto;
		}

		.BlogCard > a > div > h4 {
			font-size: 15px;
		}

		.BlogCard > a > div > p {
			font-size: 10px;
		}
	}
`;

export default function BlogCard({ image, title, description, path, date, readingtime }) {
	return (
		<Styles>
			<div className="BlogCard">
				<Link to={path}>
					<img src={image} alt="blog-pic" />
					<div>
						<h4>{title}</h4>
						<p>
							{date} {readingtime ? " • " + readingtime : null}
						</p>
					</div>
				</Link>
			</div>
		</Styles>
	);
}
