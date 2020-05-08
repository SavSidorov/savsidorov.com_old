import React from "react";
import styled from "styled-components";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
} from "react-share";

const Styles = styled.div`
	a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	p {
		width: 30%;
		font-size: 20px;
	}

	hr.solid {
		border-top: 5px solid var(--ss-primary);
	}

	.Share {
		width: 100%;
		margin-bottom: 50px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icons {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	.icons > div > * {
		margin: 5px;
	}
`;

export default function Share() {
	const url = window.location.href;

	return (
		<Styles>
			<hr className="solid"></hr>
			<div className="Share">
				<p>
					Like what you read? <a href="https://savsidorov.ck.page/1f6223496e">Subscribe</a> and{" "}
					<a href="https://www.patreon.com/savsidorov">support my work on Patreon</a>!
				</p>
				<div className="icons">
					<h4>Share:</h4>
					<div>
						<FacebookShareButton url={url}>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
						<LinkedinShareButton url={url}>
							<LinkedinIcon size={32} round />
						</LinkedinShareButton>
						<TwitterShareButton url={url}>
							<TwitterIcon size={32} round />
						</TwitterShareButton>
					</div>
				</div>
			</div>
		</Styles>
	);
}
