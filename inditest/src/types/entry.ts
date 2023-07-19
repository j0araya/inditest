export type Label = {
	label: string;
}

export type Attributes = {
	'im:id': string
}

export type Id = {
	attributes: Attributes
}

export type Entry = {
	'im:name': Label;
	'im:artist': Label;
	'im:image': Label[];
	id: Label;
}

export type Feed = {
	entry: Entry[];
}

export type Chapter = {
	trackId: string;
	trackName: string;
	releaseDate: string;
	trackTimeMillis: number;
}

export type Result = {
	chapters: Chapter[];
}

export type Podcast = {
	results: Result[];
	resultCount: number;
}