import { Entry, Feed } from "../../types/entry";
import { AuthorText, Container, Content, PodcastImg, TitleText } from "./Podcast.styles";

interface Props {
	entry: Feed;
	key: string;
	onClick: () => void;
}

const Podcast: React.FC<Props> = ({ entry, onClick }) => {
	return (
		<Container data-testId={entry.id} onClick={onClick}>
			<Content>
				<PodcastImg src={entry.img} />
				<div>
					<TitleText>{entry.name}</TitleText>
					<AuthorText>{entry.artist} </AuthorText>
				</div>
			</Content>
		</Container>
	)
};

export default Podcast;