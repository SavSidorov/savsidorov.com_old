import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const Styles = styled.div`
	.jumbo {
		background: url(${logo}) no-repeat fixed bottom;
		background-size: cover;
		height: 200px;
		position: relative;
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo"></Jumbo>
	</Styles>
);
