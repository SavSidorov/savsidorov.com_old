import styled from "styled-components";

const BlogStyle = styled.div`
	div {
		width: 100%;
	}

	h4 {
		margin-top: 30px;
	}

	.metadata {
		color: grey;
		font-size: 24px;
		margin-bottom: 50px;
	}

	.post {
		display: flex;
		flex-flow: column;
		align-items: center;	
	}

	.modules {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 165px));
		grid-gap: 3em;

		justify-content: center;
	}

	.tweets > div {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
	}

	p {
		font-size: 20px;
	}

	a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	.color-box {
		font-size: 20px;
		padding: 15px;
		margin-top: 30px;
		margin-bottom: 30px;
		outline: 2px solid var(--ss-primary);
	}

	.color-box > p > a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	.image {
		width: 100vw;
		max-width: 600px;
		height: auto;
		margin-bottom: 30px;
	}

	.image-large {
		width: 100vw;
		max-width: 800px;
		height: auto;
		margin-bottom: 30px;
	}

	.image-medium {
		width: 100vw;
		max-width: 300px;
		height: auto;
		margin-bottom: 30px;
	}

	.image-small {
		width: 100vw;
		max-width: 150px;
		height: auto;
		margin-bottom: 30px;
	}

	.quote {
		margin-left: 30px;
		font-style: italic;
	}
`;

export default BlogStyle;
