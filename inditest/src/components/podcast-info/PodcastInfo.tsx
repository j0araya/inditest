import { Separator } from "../../containers/podcast/Podcast.styles";
import { Feed } from "../../types/entry";
import Card from "../card/Card"
import { Content, ContentImg, PodcastImg } from "./PodcastInfo.styles"

const PodcastCard = ({ podcast }: { podcast: Feed }) => {
	return (
		<Card>
			<Content>
				<ContentImg>
					<PodcastImg src={podcast.img} />
				</ContentImg>
				<Separator />
				<div>
					<div style={{ fontWeight: 'bold' }}>{podcast.name}</div>
					<span style={{ fontSize: 14 }}>by {podcast.artist}</span>
				</div>
				<Separator />
				<div>
					Description:
				</div>
				<div style={{ fontSize: 14 }}>
					{podcast.description}
				</div>
			</Content>
		</Card>
	)
}

export default PodcastCard;