//https://javascript.plainenglish.io/how-to-set-up-protected-routes-in-your-react-application-a3254deda380

import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.contact {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.contact > p {
		font-size: 20px;
	}

	.contact > p > a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	.icons {
		width: 100%;
		display: flex;
		justify-content: space-around;

		margin-top: 50px;
		margin-bottom: 50px;
	}

	.icons > a {
		color: black;

		&:hover {
			color: var(--ss-primary);
		}
	}
`;

export default function AppliedComplexity() {
	const submit = (e) => {
    e.preventDefault()
    console.log("Clicked submit!")
		localStorage.clear();
		}
  
	//TODO:
	return (
		<Styles>
			<div className="contact">
				Applied Complexity - coming soon
				<form onSubmit={submit} className="form">
					<input type="submit" className="click"/>
				</form>
			</div>
		</Styles>
	);
}
