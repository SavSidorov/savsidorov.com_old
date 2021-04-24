import React, { useState } from "react";
import styled from "styled-components";

const Styles = styled.div`
	.notfound {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default function Login() {
	const [input, setInput] = useState({})
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    console.log("Clicked submit!")
    console.log("Input is: " + input.input)
  }

	if(input){
    console.log(input.input)
  }

	return (
		<Styles>
			<div className="notfound">
			<form onSubmit={submit} className="form">
        <input   type="text" 
                    name="input" 
                    onChange={e => setInput({ ...input, input: e.target.value })} 
                    rows="4" cols="50"
        />
        <input type="submit" className="click"/>
      </form>
			</div>
		</Styles>
	);
}
