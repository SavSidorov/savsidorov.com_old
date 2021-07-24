import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.ACSCard {
		width: 165px;
		height: 250px;
		box-shadow: 2px 2px 10px 4px #888888;
		overflow: hidden;

		&:hover {
			box-shadow: 2px 2px 10px 2px #888888;
		}
	}

  .ACSCard > a > img{
    width: 165px;
		height: 250px;
  }

	}
`;

export default function ACSModule({ image, pdf }) {
	return (
		<Styles>
			<div className="ACSCard">
				<a href={pdf}>
					<img src={image} alt="module-pic" />
				</a>
			</div>
		</Styles>
	);
}
