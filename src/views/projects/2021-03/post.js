import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import BlogStyle from "../../../components/BlogStyle";
import metadata from "./metadata.json";

export default function Project8() {
	return (
		<BlogStyle>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<p>This is a collection of smaller software projects I worked on and posted demos of on Twitter.</p>
				<br/>
				<div className="tweets">
					<TwitterTweetEmbed
						tweetId={'1369465212932415497'}
					/>
					<TwitterTweetEmbed
						tweetId={'1368668709259259904'}
					/>
					<TwitterTweetEmbed
						tweetId={'1335905031791341571'}
					/>
					<TwitterTweetEmbed
						tweetId={'1337176744952954880'}
					/>
				</div>
				
			</div>
		</BlogStyle>
	);
}
