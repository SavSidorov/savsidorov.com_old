import React from "react";
import BlogStyle from "../../../components/BlogStyle";
import MetaTags from "react-meta-tags";
import metadata from "./metadata.json";
import robot from "./preview.png";
import workshop from "./workshop.jpg";

export default function Project2() {
	return (
		<BlogStyle>
			<MetaTags>
				<title>{metadata.title}</title>
				<meta property="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta property="og:image" content={robot} />
				<meta property="og:url" content={metadata.url} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content={robot} />
				<meta name="twitter:card" content="summary_large_image" />
			</MetaTags>
			<h2>{metadata.title}</h2>
			<h3 className="metadata">{metadata.date}</h3>
			<div className="post">
				<img src={robot} className="image" alt="robot" />
				<p>
					Just a fun summer project to keep occupied with. We’ve built a mini remote control tank – complete
					with a flamethrower mounted on top. The whole project was built from the ground up – designed,
					fabricated and assembled. The only major off the shelf component is the track assembly,{" "}
					<a href="https://www.andymark.com/products/rhino-track-drive-module">found on Andymark</a>. We’re
					controlling it with a{" "}
					<a href="https://www.amazon.ca/gp/product/B07115X6KL/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1">
						Flysky FS-i6X RC Transmitter and FS-iA10B Receiver
					</a>
					combination. Flamethrower runs on diesel and a standard electric fuel pump. Check out video{" "}
					<a href="https://www.instagram.com/p/BljsfvEhmIK/?taken-by=savsidorov">here</a>!
				</p>
				<img src={workshop} className="image" alt="workshop" />
			</div>
		</BlogStyle>
	);
}
