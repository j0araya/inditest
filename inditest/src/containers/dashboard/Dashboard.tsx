import { useLoaderData, useNavigate } from 'react-router-dom';
import { Entry, Feed } from '../../types/entry';
import Podcast from '../../components/podcast/Podcast';
import { Badge, EntriesContainer, InputContainer } from './Dashboard.styles';
import React, { useEffect, useState } from 'react';
import { filterPodcast } from '../../utils/utils';
import texts from './Dashboard.text';

type Props = {
	onSelect: (data: Feed) => void;
}

const Dashboard: React.FC<Props> = ({ onSelect }) => {
	const { feed } = useLoaderData() as { feed: Feed[] };
	const navigate = useNavigate();
	const [entries, setEntries] = useState<Feed[]>([]);
	const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		const filtered = feed.filter(f => filterPodcast(value, f))
		setEntries(filtered);
	};

	useEffect(() => {
		if (!feed) return;
		setEntries(feed);
	}, [feed]);
	console.log("feed.entry[0].id.attributes['im:id']", feed[0].id)

	const onClick = (feed: Feed) => () => {
		onSelect(feed);
		navigate(`/podcast/${feed.id}`)
	}

	return (
		<>
			<InputContainer>
				<Badge>100</Badge>
				<input type="text" onChange={onChange} placeholder={texts.inputPlaceholder}></input>
			</InputContainer>
			<EntriesContainer>
				{entries.map((e) => <Podcast onClick={onClick(e)} key={e.id} entry={e} />)}
			</EntriesContainer>
		</>
	)
}

export default Dashboard;