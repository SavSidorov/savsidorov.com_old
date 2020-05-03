import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Styles = styled.div`
	.margins {
		margin-top: 50px;
		margin-bottom: 10px;
	}
`;

export const Layout = (props) => (
	<Styles>
		<Container className="margins">{props.children}</Container>
	</Styles>
);
