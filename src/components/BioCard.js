import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.InfoCard{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1000px;
	min-height: 300px;
	box-shadow: 1px 1px 10px 0px #888888;
	margin-bottom: 50px;
}

.InfoCard>div{
	margin-left: 25px;
	margin-right: 25px;
}

.sideImage{
	width: auto;
	height: auto;
	max-height: 400px;
	max-width: 550px;
}

.topImage{
	width: 0px;
	height: 0px;
}

.info{
	text-align: right;
	margin-right: 15px;
}

.socials{
	text-align: right;
	margin-right: 15px;
}

.socials > * {
	margin: 4px;
	color: black;

	&:hover {
		color: var(--ss-primary);
	}
}

h4{
	margin-bottom: 15px;
}

p {
	font-size: 17.25px;
}

a {
	text-decoration: underline;
	color: var(--ss-primary);
	font-weight: 500;

	&:hover{
		text-decoration: none;
	}
}

@media only screen and (max-width: 1000px) {
	.InfoCard {
		width: auto;
	}

	.InfoCard > div {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}

	.sideImage{
		width: 0px;
		height: 0px;
	}

	.topImage{
		width: auto;
		height: auto;
		margin-bottom: 15px;
		margin-top 25px;
		max-height: 300px;
		max-width: 300px;
	}

	p {
		width: 80%;
	}
}
`;

export default function BioCard({ image1, image2, title, p1, p2, p3 }) {
	return (
		<Styles>
			<div className="InfoCard">
				<img className="sideImage" src={image1} alt="bio-pic" />
				<div>
					<img className="topImage" src={image2} alt="bio-pic" />
					<h4>{title}</h4>
					{p1}
					{p2}
					{p3}
				</div>
			</div>
		</Styles>
	);
}
