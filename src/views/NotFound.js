import React from "react";
import MetaTags from "react-meta-tags";
import styled from "styled-components";

const Styles = styled.div`
	.notfound {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function Contact() {
	return (
		<Styles>
			<MetaTags>
				<title>Not Found</title>
			</MetaTags>
			<div className="notfound">
				<h2>Sorry, this page doesn't exist.</h2>
			</div>
		</Styles>
	);
}
