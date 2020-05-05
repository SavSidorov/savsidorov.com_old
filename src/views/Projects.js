import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
import BlogCard from "../components/BlogCard";
import triple from "../assets/triple.png";

//TODO: Add sharing feature

const Styles = styled.div`
	.Projects {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function Projects() {
	const posts = ["2018-07", "2017-02"];
	const [cards, setCards] = useState([]);

	async function fetchProjects() {
		const postInfo = [];

		for (let i = 0; i < posts.length; i++) {
			let image = await import(`./projects/${posts[i]}/preview.png`);
			let metadata = await import(`./projects/${posts[i]}/metadata.json`);

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
		fetchProjects();
	}, []);

	return (
		<Styles>
			<div className="Projects">
				<MetaTags>
					<title>Projects</title>
					<meta property="og:title" content="Sav Sidorov - Projects" />
					<meta name="og:description" content="Projects" />
					<meta property="og:image" content={triple} />
					<meta property="og:url" content="http://savsidorov.com/projects" />
					<meta name="twitter:title" content="Sav Sidorov - Projects" />
					<meta name="twitter:description" content="Projects" />
					<meta name="twitter:image" content={triple} />
					<meta name="twitter:card" content="summary_large_image" />
				</MetaTags>
				{cards.length ? <div>{cards}</div> : <p>Loading...</p>}
			</div>
		</Styles>
	);
}
