import React from "react";
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
			<div className="notfound">
				<h2>Sorry, this page doesn't exist.</h2>
			</div>
		</Styles>
	);
}
