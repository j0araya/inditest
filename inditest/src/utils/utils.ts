import { Entry } from "../types/entry";

export const filterPodcast = (text: string, entry: Entry) => entry['im:artist'].label.toLowerCase().includes(text.toLowerCase()) || entry['im:name'].label.toLowerCase().includes(text.toLowerCase())