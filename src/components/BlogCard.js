import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
	.BlogCard {
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

		text-decoration: none;
		color: black;
	}

	.BlogCard > a > img {
		width: 40vw;
		max-width: 400px;
		height: auto;
		margin-bottom: 1.5vw;
	}

	.BlogCard > a > div {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
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
