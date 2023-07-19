import { Entry } from "../../types/entry";
import { AuthorText, Container, Content, PodcastImg, TitleText } from "./Podcast.style";

interface Props {
	entry: Entry;
	key: string;
}

const Podcast: React.FC<Props> = ({ entry }) => {
	return (
		<Container data-testId={entry.id.label}>
			<Content>
				<PodcastImg src={entry['im:image'][0].label} />
				<div>
					<TitleText>{entry['im:name'].label}</TitleText>
					<AuthorText>{entry['im:artist'].label} </AuthorText>
				</div>
			</Content>
		</Container>
	)
};

export default Podcast;