import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border: 1px solid grey;
	border-radius: 16px;
	padding: 0.6rem;
`

export const Content = styled.div`
	flex: 1;
	padding: 0 0.6rem;
`

export const CardImg = styled.img<{ src: string }>`
	height: auto;
	max-width: 100%;
	max-height: 80px;
	src: ${({ src }) => src};
`