import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

const Styles = styled.div`
.Talks {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
	grid-gap: 3em;

	justify-content: center;	
}

p{
	font-size: 20px;
}
`;

export default function Talks() {
	return (
		<Styles>
      <Navigation/>
			<p>Talks & lectures that I frequently refer back to...</p>
			<br/>
			<div className="Talks">
				<iframe title="Bob Dylan Nobel Lecture" width="400" height="225" src="https://www.youtube.com/embed/6TlcPRlau2Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Nassim Taleb Commencement" width="400" height="225" src="https://www.youtube.com/embed/Fzmr3urk28I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Peter Thiel Commencement" width="400" height="225" src="https://www.youtube.com/embed/id4ywg5oemc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Steve Jobs Commencement" width="400" height="225" src="https://www.youtube.com/embed/UF8uR6Z6KLc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Karthik TED Talk" width="400" height="225" src="https://www.youtube.com/embed/MfC3JdkEVgQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Effective FIRST Strategies 2019, part 1" width="400" height="225" src="https://www.youtube.com/embed/5fifL47TvzE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="The Humane Representation of Thought" width="400" height="225" src="https://www.youtube.com/embed/agOdP2Bmieg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Media for Thinking the Unthinkable" width="400" height="225" src="https://www.youtube.com/embed/oUaOucZRlmE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Patterns in Architecture" width="400" height="225" src="https://www.youtube.com/embed/98LdFA-_zfA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Los Alamos From Below" width="400" height="225" src="https://www.youtube.com/embed/uY-u1qyRM5w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe title="Yuri Bezmenov Lecture on Subversion" width="400" height="225" src="https://www.youtube.com/embed/1FElIhOh_KI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</Styles>
	);
}
