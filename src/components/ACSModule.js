import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.ACSCard {
		width: 165px;
		height: 250px;
		overflow: hidden;
		box-shadow: 2px 2px 10px 3px #888888;

		&:hover {
			box-shadow: 1px 1px 10px 0px #888888;
		}
	}

  .ACSCard > a > img{
    width: 165px;
		height: 250px;
  }

	}
`;

export default function ACSModule({ image, link }) {
	return (
		<Styles>
			<div className="ACSCard">
				<a href={link}>
					<img src={image} alt="module-pic" />
				</a>
			</div>
		</Styles>
	);
}
