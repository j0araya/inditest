import { ReactNode } from "react";
import { Container, Content } from "./Card.styles";

type Props = {
	children: ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
	return (
		<Container>
			<Content>
				{children}
			</Content>
		</Container>
	)
};

export default Card;