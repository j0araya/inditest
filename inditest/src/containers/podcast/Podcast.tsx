import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPodcast } from "../../services/podcast.service";
import List from "../../components/list/List";
import ListItem from "../../components/list-item/ListItem";
import { Podcast, Feed } from "../../types/entry";
import { ContentCard, ContentList, Header, Layout } from "./Podcast.styles";
import texts from './Podcast.text';
import PodcastInfoComponent from "../../components/podcast-info/PodcastInfo";

type Props = {
	podcast: Feed;
}

const PodcastView: React.FC<Props> = ({ podcast }) => {
	const [chapter, setChapters] = useState({ results: [] });
	const { podcastId } = useParams();
	console.log('podcastId', podcastId);
	useEffect(() => {
		if (!podcastId) return
		getPodcast(podcastId).then((p: Podcast) => setChapters(p))
	}, [podcastId])
	console.log('podcast', podcast);
	return (
		<Layout>
			<ContentCard>
				<PodcastInfoComponent podcast={podcast} />
			</ContentCard>
			<div style={{ display: 'flex', flex: 1 }}></div>
			<ContentList>
				<Header>{texts.episodes}{chapter.resultCount}</Header>
				<List>
					{chapter.results.map((c, i) => <ListItem key={c.trackId} background={i} chapter={c} />)}
				</List>
			</ContentList>
		</Layout>
	)
};

export default PodcastView;