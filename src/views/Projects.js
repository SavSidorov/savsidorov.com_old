import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";

const Styles = styled.div`
	.Projects > div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 375px));
		grid-gap: 3em;

		justify-content: center;
	}
`;

export default function Projects() {
	const posts = ["2021-03", "2020-11", "2018-11", "2018-07", "2017-02", "2016-02", "2015-02"];
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

	/* eslint-disable */
	useEffect(() => {
		fetchProjects();
	}, []);
	/* eslint-enable */

	return (
		<Styles>
			<div className="Projects">
				<title>Projects</title>
				{cards.length ? <div>{cards}</div> : <p>Loading...</p>}
			</div>
		</Styles>
	);
}
