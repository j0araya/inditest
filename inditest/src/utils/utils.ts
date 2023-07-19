import { Entry, Feed, PodcastInfo } from "../types/entry";

export const filterPodcast = (text: string, entry: Feed): boolean => entry.artist.toLowerCase().includes(text.toLowerCase()) || entry.name.toLowerCase().includes(text.toLowerCase());

export const formatDate = (date: string) => {
    const [year, month, day] = date.split('T')[0].split('-');
    return `${+day}/${month}/${year}`;
}

export const formatDuration = (ms: number) => {
    const [hh, mm, ss] = new Date(ms).toISOString().slice(11, 19).split(':')
    return +hh ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`
}

export const podcastMapper = (data: Entry): PodcastInfo => {
    return ({
        img: data["im:image"][0].label,
        author: data["im:artist"].label,
        title: data["im:name"].label,
        description: data?.summary?.label || '',
    });
};

export const podcastsMapper = (data: Entry): Feed => {
    return ({
        img: data["im:image"][0].label,
        artist: data["im:artist"].label,
        name: data["im:name"].label,
        description: data?.summary?.label || '',
        id: data?.id?.attributes?.['im:id'] || '',
    });
};