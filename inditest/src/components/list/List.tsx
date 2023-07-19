import { ReactNode } from "react";
import { ContainerList, Header, HeaderContainer } from "./List.styles";
import texts from './List.text';

type Props = {
	children: ReactNode,
}

const List: React.FC<Props> = ({ children }) => {
	return (
		<ContainerList>
			<HeaderContainer>
				<Header flex={8}>{texts.title}</Header>
				<Header flex={2}>{texts.date}</Header>
				<Header flex={2}>{texts.duration}</Header>
			</HeaderContainer>
			{children}
		</ContainerList>
	);
}

export default List;