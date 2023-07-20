import { Chapter, Feed } from "../../types/entry";
import PodcastCard from "../../components/podcast-info/PodcastInfo";
import { ContentAuthor, ContentDescription, ContentInfo, Layout } from "./Chapter.styles";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const proxy = 'https://api.allorigins.win/get?url=';

const defaultFeed = {
	img: '',
	name: '',
	artist: '',
	id: '',
	description: '',
}

const defaultChapter = {
	trackId: '',
	trackName: '',
	releaseDate: '',
	trackTimeMillis: 0,
	episodeUrl: '',
	description: '',
}

const ChapterComponent = ({ chapter, podcast }: { chapter: Chapter, podcast: Feed }) => {
	const { podcastId, episodeId } = useParams();
	const navigate = useNavigate();
	const [currentPodcast, setCurrentPodcast] = useState<Feed>(defaultFeed);
	const [currentChapter, setCurrentChapter] = useState<Chapter>(defaultChapter);

	useEffect(() => {
		if (podcast) setCurrentPodcast(podcast);
		const temp = JSON.parse(localStorage.getItem('podcast') || '');
		if (temp?.id === podcastId) setCurrentPodcast(temp);
		else navigate('/')
	}, [podcast]);

	useEffect(() => {
		if (chapter) setCurrentChapter(chapter);
		const temp = JSON.parse(localStorage.getItem('chapter') || '');
		if (`${temp?.trackId}` === `${episodeId}`) setCurrentChapter(temp);
		else navigate('/')
	}, [chapter]);

	return (
		<Layout>
			<ContentAuthor>
				<PodcastCard podcast={currentPodcast} />
			</ContentAuthor>
			<div style={{ flex: 1 }}></div>
			<ContentInfo>
				<Card>
					{currentChapter.trackName}
					<ContentDescription>
						{currentChapter.description}
					</ContentDescription>
					<audio autoPlay controls>
						<source src={`${proxy}${currentChapter.episodeUrl}`} type="audio/mpeg" />
						Your browser does not support the <code>audio</code> element.
					</audio>
				</Card>
			</ContentInfo>
		</Layout>
	)
}

export default ChapterComponent;