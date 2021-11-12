import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
	.BlogCard {
		width: 375px;
		height: 375px;
		font-size: 20px;
		box-shadow: 2px 2px 10px 3px #888888;

		&:hover {
			box-shadow: 1px 1px 10px 0px #888888;
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
		width: 375px;
		height: 270px;
	}

	.BlogCard > a > div {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
		margin-top: 20px;
	}
`;



export default function BlogCard({ image, title, path, date }) {
	return (
		<Styles>
			<div className="BlogCard">
				<Link to={path}>
					<img src={image} alt="blog-pic" />
					<div>
						<h4>{title}</h4>
						<p>
							{date} 
						</p>
					</div>
				</Link>
			</div>
		</Styles>
	);
}
