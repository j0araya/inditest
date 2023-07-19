import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	padding: 2px 0.6rem 0.6rem 0.6rem;
	flex-direction: column;
`
export const ContentImg = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const PodcastImg = styled.img<{ src: string }>`
	height: 80px;
	width: 80px;
	src: ${({ src }) => src};
`

export const TitleText = styled.div`
	font-weight: bold;
	text-align: center;
	flex: 1;
	text-transform: uppercase;
	font-size: 14px;
`

export const AuthorText = styled.div`
	color: grey;
	text-align: center;
	flex: 1;
	font-size: 14px;
	padding-top: 4px;
`