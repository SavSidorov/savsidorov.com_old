import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PodCard from "../components/PodCard";

const Styles = styled.div`
	.Podcasts {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function Podcasts() {
	const posts = ["ss_pod", "s_sq_pod"];
	const [cards, setCards] = useState([]);

	async function fetchPodcasts() {
		const postInfo = [];

		for (let i = 0; i < posts.length; i++) {
			let image = await import(`./podcasts/${posts[i]}/preview.png`);
			let metadata = await import(`./podcasts/${posts[i]}/metadata.json`);

			postInfo.push({
				id: metadata.default.id,
				image: image.default,
				title: metadata.default.title,
				url: metadata.default.url,
			});
		}

		const cards = postInfo.map((card) => (
			<PodCard key={card.id} image={card.image} title={card.title} url={card.url} />
		));

		setCards(cards);
	}

	useEffect(() => {
		fetchPodcasts();
	}, []);

	return (
		<Styles>
			<div className="Podcasts">
				<title>Podcasts</title>

				{cards.length ? <div>{cards}</div> : <p>Loading...</p>}
			</div>
		</Styles>
	);
}
