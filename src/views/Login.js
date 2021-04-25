import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import styled from "styled-components";

const Styles = styled.div`
	.login {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}

	h3 {
		font-size: 25px;
  	color: gray;
		margin-bottom: 15px;
	}

	.form > * {
		margin: 10px;
	}

	.click {
		text-decoration: none;
		color: white;
		background-color: var(--ss-primary);
		border-color: var(--ss-primary);
		font-weight: 500;

		border-style: solid;
		border-radius: 10px;
		padding-left: 5px;
		padding-right: 5px;

		&:hover {
			color: var(--ss-primary);
			background-color: white;
		}
	}
`;

export default function Login() {
	const [input, setInput] = useState({})
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    console.log("Clicked submit!")
    console.log("Input is: " + input.input)

		if(input.input === 'localism'){ //Yeah, I know this is hacky as hell
			localStorage.setItem('password', input.input);
			setRedirect(true);
		}
  }

	if(input){
    console.log(input.input)
  }

	return redirect ? (
			<Redirect to={{ pathname: '/acs101' }} />
	) : (
			<Styles>
				<div className="login">
					<h3>This page is password protected.</h3>
					<form onSubmit={submit} className="form">
						<input  type="text" 
										name="input" 
										onChange={e => setInput({ ...input, input: e.target.value })} 
						/>
						<input type="submit" value="SUBMIT" className="click"/>
					</form>
				</div>
			</Styles>
	);
}
