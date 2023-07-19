import { Entry } from "../types/entry";

export const filterPodcast = (text: string, entry: Entry) => entry['im:artist'].label.toLowerCase().includes(text.toLowerCase()) || entry['im:name'].label.toLowerCase().includes(text.toLowerCase());

export const formatDate = (date: string) => {
    const [year, month, day] = date.split('T')[0].split('-');
    return `${+day}/${month}/${year}`;
}

export const formatDuration = (ms: number) => {
    const [hh, mm, ss] = new Date(ms).toISOString().slice(11, 19).split(':')
    return +hh ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`
}