import styled from "styled-components";

export const ItemContainer = styled.div`
	display: flex;
	flex: 1;
	:hover {
		cursor: pointer;
	}
`;

type ItemProps = {
	flex: number;
	justify: 'flex-end' | 'flex-start';
	needBackground: boolean;
}

export const Item = styled.div<ItemProps>`
	display: flex;
	flex: ${({ flex }) => flex};
	justify-content: ${({ justify }) => justify};
	padding: 0.6rem 0;
	background-color: ${({ needBackground }) => needBackground ? 'lightgrey' : 'transparent'};
`;