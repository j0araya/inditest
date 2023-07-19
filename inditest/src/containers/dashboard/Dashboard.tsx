import { useLoaderData } from 'react-router-dom';
import { Entry, Feed } from '../../types/entry';
import Podcast from '../../components/podcast/Podcast';
import { Badge, EntriesContainer, InputContainer } from './Dashboard.styles';
import { useEffect, useState } from 'react';
import { filterPodcast } from '../../utils/utils';
import texts from './Dashboard.text';

const Dashboard = () => {
	const { feed } = useLoaderData() as { feed: Feed[] };
	const [entries, setEntries] = useState([]);
	const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		const filtered = feed.entry.filter(e => filterPodcast(value, e))
		setEntries(filtered);
	};

	useEffect(() => {
		if (!feed?.entry) return;
		setEntries(feed.entry);
	}, [feed]);

	return (
		<>
			<InputContainer>
				<Badge>100</Badge>
				<input type="text" onChange={onChange} placeholder={texts.inputPlaceholder}></input>
			</InputContainer>
			<EntriesContainer>
				{entries.map((e: Entry) => <Podcast key={e.id.label} entry={e} />)}
			</EntriesContainer>
		</>
	)
}

export default Dashboard;