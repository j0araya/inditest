export type Label = {
	label: string;
}

type Attributes = {
	'im:id': string;
}

type Summary = {
	attributes: Attributes
}

export type Entry = {
	'im:name': Label;
	'im:artist': Label;
	'im:image': Label[];
	id: Summary;
	summary: Label;
}

export type FeedEntry = {
	entry: Entry[];
}

export type ResponseFeed = {
	feed: FeedEntry;
}

export type Chapter = {
	trackId: string;
	trackName: string;
	releaseDate: string;
	trackTimeMillis: number;
	episodeUrl: string;
	description: string;
}

export type Result = {
	chapters: Chapter[];
	artistName: string;
	collectionName: string;
	collectionViewUrl: string;
}

export type Podcast = {
	results: Result[];
	resultCount: number;
}

export type PodcastInfo = {
	img: string;
	title: string;
	author: string;
	description: string;
}

export type Feed = {
	img: string;
	name: string;
	artist: string;
	id: string;
	description: string;
}