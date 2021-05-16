import React from "react";
import styled from "styled-components";

const Styles = styled.div`
.InfoCard{
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 300px;
	box-shadow: 2px 2px 10px 4px #888888;
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
	font-size: 20px;
}

a {
	text-decoration: none;
	color: var(--ss-primary);
	font-weight: 500;
}

@media only screen and (max-width: 1000px) {
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
		max-height: 400px;
		max-width: 400px;
	}
}
`;

export default function BioCard({ image, title, p1, p2, p3, p4 }) {
	return (
		<Styles>
			<div className="InfoCard">
        <img className="sideImage" src={image} alt="bio-pic" />
        <div>
					<img className="topImage" src={image} alt="bio-pic" />
          <h4>{title}</h4>
          {p1}
					{p2}
					{p3}
        </div>
			</div>
		</Styles>
	);
}
