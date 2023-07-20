import { styled } from "styled-components";

export const Layout = styled.section`
    display: flex;
    flex: 1;
`;

export const ContentInfo = styled.div`
	margin: 0 1.6rem;
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 5;
	max-height: 500px;
`;

export const ContentAuthor = styled.div`
	display: flex;
  	flex-direction: column;
  	flex-basis: 100%;
  	flex: 4;
`;

export const ContentDescription = styled.div`
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 14px;
    margin: 1.6rem 0;
`;