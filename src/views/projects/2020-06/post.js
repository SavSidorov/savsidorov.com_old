import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import drawing from "./preview.png";

export default function Project6() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<div>
					<p>All I have for this one so far are some very rough concept drawings.</p>
				</div>
				<br />
				<div>
					<p>Key ideas:</p>
				</div>
				<div className="color-box">
					<p>
						• Users can create lists of people they recommend in a particular field — based on their own perceptions of
						the credibility and track record of said people.
					</p>
					<p>• They can also create lists of people they don't recommend in a given field.</p>
					<p>
						• A person can belong to multiple lists. For example, say you endorse someone for their work in biology, but
						don’t recommend his/her takes on religion.
					</p>
					<p>• The aggregate of all users’ list placements is shown on the page of the person in question.</p>
				</div>
				<img src={drawing} className="image" alt="drawing" />
			</div>
		</BlogStyle>
	);
}
