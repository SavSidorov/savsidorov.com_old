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

	.post > p {
		font-size: 20px;
	}

	.post > p > a,
	.post > p > i > a {
		text-decoration: none;
		color: var(--ss-primary);
		font-weight: 500;
	}

	.color-box {
		font-size: 20px;
		padding: 15px;
		margin-top: 30px;
		margin-bottom: 30px;
		outline: 5px solid var(--ss-primary);
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

	.quote {
		margin-left: 30px;
		font-style: italic;
	}
`;

export default BlogStyle;
