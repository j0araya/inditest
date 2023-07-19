import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPodcast } from "../../services/podcast.service";
import List from "../../components/list/List";
import ListItem from "../../components/list-item/ListItem";
import { Podcast } from "../../types/entry";
import { Header } from "./Podcast.styles";
import texts from './Podcast.text';

const PodcastView = () => {
	const [podcast, setPodcast] = useState({});
	const [chapter, setChapters] = useState({ results: [] });
	const { podcastId } = useParams();
	console.log('podcastId', podcastId);
	useEffect(() => {
		if (!podcastId) return
		getPodcast(podcastId).then((p: Podcast) => setChapters(p))
	}, [podcastId])
	return (
		<>
			<Header>{texts.episodes}{chapter.resultCount}</Header>
			<List>
				{chapter.results.map((c, i) => <ListItem key={c.trackId} background={i} chapter={c} />)}
			</List>
		</>
	)
};

export default PodcastView;