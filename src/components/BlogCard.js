import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
	.BlogCard {
		width: 375px;
		height: 375px;

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
		min-height: 50px
		height: 25vw;
		max-height: 250px;
		width: auto;
	}

	.BlogCard > a > div {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
		margin-top: 20px;
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
