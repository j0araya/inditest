import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPodcast } from "../../services/podcast.service";
import List from "../../components/list/List";
import ListItem from "../../components/list-item/ListItem";
import { Feed, Chapter } from "../../types/entry";
import { ContentCard, ContentList, Header, Layout } from "./Podcast.styles";
import texts from './Podcast.text';
import PodcastInfoComponent from "../../components/podcast-info/PodcastInfo";

type Props = {
	podcast: Feed;
	onSelect: (data: Chapter) => void;
	setIsLoading: (data: boolean) => void;
}

const defaultPodcast = { img: '', artist: '', description: '', name: '', id: '' }

const PodcastView: React.FC<Props> = ({ onSelect, podcast, setIsLoading }) => {
	const [chapter, setChapters] = useState<{ results: Chapter[], resultCount: number }>({ results: [], resultCount: 0 });
	const [currentPodcast, setCurrentPodcast] = useState<Feed>(defaultPodcast);
	const navigate = useNavigate();
	const { podcastId } = useParams();
	useEffect(() => {
		if (!podcastId) navigate('/');
		else getPodcast(podcastId).then((p: { results: Chapter[], resultCount: number }) => {
			setIsLoading(false);
			setChapters(p);
		})
	}, [podcastId])

	useEffect(() => {
		if (podcast) setCurrentPodcast(podcast);
		const temp = JSON.parse(localStorage.getItem('podcast') || "");
		if (temp.id === podcastId) setCurrentPodcast(temp);
		else navigate('/');
	}, [podcast]);

	const onClick = (data: Chapter) => {
		localStorage.setItem('chapter', JSON.stringify(data));
		onSelect(data);
		setIsLoading(true);
		navigate(`episode/${data.trackId}`)
	}
	return (
		<Layout>
			<ContentCard>
				<PodcastInfoComponent podcast={currentPodcast} />
			</ContentCard>
			<div style={{ display: 'flex', flex: 1 }}></div>
			<ContentList>
				<Header>{texts.episodes}{chapter.resultCount}</Header>
				<List>
					{chapter.results.map((c: Chapter, i) => <ListItem key={c.trackId} background={i} chapter={c} onClick={onClick} />)}
				</List>
			</ContentList>
		</Layout>
	)
};

export default PodcastView;