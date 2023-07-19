import { styled } from "styled-components";

export const Header = styled.h3`
  	display: flex;
	flex: 1;
	font-weight: bold;
	border: 1px solid grey;
	padding: 0.6rem;
`

export const Layout = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
  	width: 100%;
`

export const ContentList = styled.div`
	margin: 0 1.6rem;
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 5;
	max-height: 500px;
`;

export const ContentCard = styled.div`
	display: flex;
  	flex-direction: column;
  	flex-basis: 100%;
  	flex: 2;
`;

export const Separator =styled.span`
	height: 1px;
	background-color: grey;
	width: 100%;
	margin: 1.6rem 0;
`
