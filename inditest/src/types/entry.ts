export type Label = {
	label: string;
}

export type Entry = {
	'im:name': Label;
	'im:artist': Label;
	'im:image': Label[];
	id: Label;
}

export type Feed = {
	entry: Entry[]
}