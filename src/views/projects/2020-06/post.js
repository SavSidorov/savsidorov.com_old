import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";
import userProfile from "./verify_user.png";
import pfProfile from "./verify_pf.png";
import fieldProfile from "./verify_field.png";

export default function Project6() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<div>
					<p>No demo available for this - just mockups and key ideas.</p>
				</div>

				<div>
					<h4>Use Case</h4>
					<p>
						When researching a certain subject, it's helpful to get a list of recommended content from people in your
						network. Asking each person is burdensome - they might give you an incomplete list of resources, or they're
						busy, or you don't know someone personally but trust their judgement, etc.
					</p>
					<p>With this system, they'd enter their recommendations once, and have them avaialble for everyone to see.</p>
				</div>

				<div>
					<h4>Principles</h4>
					<p>Centers around the idea of "verification" / "recommendation" of content.</p>
					<p>
						There's no such thing as global ratings - only the ratings of your network, thus creating a "chain of
						trust".
					</p>
				</div>

				<div>
					<h4>Three Types of Pages</h4>
				</div>
				<div>
					<p>
						<b>User Profiles</b>
					</p>
				</div>
				<img src={userProfile} className="image-large" alt="userProfile" />
				<div className="color-box">
					<p>
						• Users can <i>verify</i> (indicate + or -) individuals in different fields.
					</p>
					<p>• You must include an explanation for your rating.</p>
					<p>
						• You must include a specific academic discipline. Wikipedia has a{" "}
						<href src="https://www.wikiwand.com/en/Outline_of_academic_disciplines">nice list</href> of academic
						disciplines.
					</p>
					<p>• Users can update ratings whenever they want.</p>
					<br />
					<p>
						<b>Future features...</b>
					</p>
					<p>• Ability to verify papers, books, chapters, paragraphs, etc</p>
					<p>
						• Having verified content link to some external site - i.e. a Roam DB where the person has more
						justification for their verification.
					</p>
					<p>• Ability to filter which people you follow contribute to your aggregate ratings of a public figure. </p>
					<p>
						• Recommendation feature: "People who follow <i>x</i> also follow..."
					</p>
					<p>• Option of having profiles be private - people would have to request to follow you.</p>
				</div>
				<div>
					<p>
						<b>Public Figure Profiles</b>
					</p>
				</div>
				<img src={pfProfile} className="image-large" alt="johnDoe" />
				<div className="color-box">
					<p>
						• Shows aggregate ratings for this person from <i>your network</i>.
					</p>
					<p>
						• If a Public Figure page doesn't exist, it's automatically created then the first user submits a
						verification for this person.
					</p>
				</div>
				<div>
					<p>
						<b>Field Profiles</b>
					</p>
				</div>
				<img src={fieldProfile} className="image-large" alt="field" />
				<div className="color-box">
					<p>
						• Shows you verified content for that field. For the MVP, this would only be <b>Public Figures</b>.
					</p>
				</div>
			</div>
		</BlogStyle>
	);
}
