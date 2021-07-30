import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
.library-nav{
  display: flex;
  margin-bottom: 20px;
}

h3 > a {
  font-size: 25px;
  color: gray;
  text-decoration: none;

  &:hover {
    color: var(--ss-primary);
    text-decoration: none;
  }  
}

.selected {
	color: black;

  &:hover {
    color: black;
  }  
}



`;

export default function Navigation() {
	return (
		<Styles>
      <div className="library-nav">
        <h3><NavLink to="/library/quotes" activeClassName="selected" >Quotes</NavLink>/</h3>
        <h3><NavLink to="/library/writings" activeClassName="selected" >Writings</NavLink>/</h3>
        <h3><NavLink to="/library/speeches" activeClassName="selected">Speeches</NavLink>/</h3>
        <h3><NavLink to="/library/people" activeClassName="selected">People</NavLink></h3>
      </div>
		</Styles>
	);
}
