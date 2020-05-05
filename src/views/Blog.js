import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
import BlogCard from "../components/BlogCard";
import triple from "../assets/triple.png";

//TODO: Add sharing feature

const Styles = styled.div`
	.Blog {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function Blog() {
	const posts = ["2019-01-17", "2019-01-07"];
	const [cards, setCards] = useState([]);

	async function fetchBlogs() {
		const postInfo = [];

		for (let i = 0; i < posts.length; i++) {
			let image = await import(`./blogposts/${posts[i]}/preview.png`);
			let metadata = await import(`./blogposts/${posts[i]}/metadata.json`);

			postInfo.push({
				id: metadata.default.id,
				image: image.default,
				title: metadata.default.title,
				description: metadata.default.description,
				path: metadata.default.path,
				date: metadata.default.date,
				readingtime: metadata.default.readingtime,
			});
		}
		console.log(postInfo);
		const cards = postInfo.map((card) => (
			<BlogCard
				key={card.id}
				image={card.image}
				title={card.title}
				description={card.description}
				path={card.path}
				date={card.date}
				readingtime={card.readingtime}
			/>
		));

		setCards(cards);
	}

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<Styles>
			<div className="Blog">
				<MetaTags>
					<title>Blog</title>
					<meta property="og:title" content="Sav Sidorov - Blog" />
					<meta name="og:description" content="Blog" />
					<meta property="og:image" content={triple} />
					<meta property="og:url" content="http://savsidorov.com/blog" />
					<meta name="twitter:title" content="Sav Sidorov - Blog" />
					<meta name="twitter:description" content="Blog" />
					<meta name="twitter:image" content={triple} />
					<meta name="twitter:card" content="summary_large_image" />
				</MetaTags>
				{cards.length ? <div>{cards}</div> : <p>Loading...</p>}
			</div>
		</Styles>
	);
}
