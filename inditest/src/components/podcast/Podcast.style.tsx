import styled from 'styled-components';

export const Container = styled.div`
	min-height: 200px;
	width: 22%;
	box-sizing: border-box;
	padding-top: 60px;
	:hover {
		cursor: pointer;
	}
`

export const Content = styled.div`
  border: solid 1px grey;
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 60px 0.6rem 0.6rem 0.6rem;
`

export const PodcastImg = styled.img<{ src: string }>`
	border-radius: 50%;
	height: 80px;
	width: 80px;
	position: absolute;
	top: -40px;
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