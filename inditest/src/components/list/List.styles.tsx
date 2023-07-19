import styled from "styled-components";

export const ContainerList = styled.div`
	width:  100%;
	min-height: 600px;
	overflow-y: scroll;
	border: 1px solid grey;
	padding: 1.2rem 0.6rem;
`;

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 1.2rem 0;
`;

export const Header = styled.div<{ flex: number }>`
  font-weight: bold;
	display: flex;
	flex: ${({ flex }) => flex};
`